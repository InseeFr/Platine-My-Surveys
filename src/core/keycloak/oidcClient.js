import jwt_decode from "jwt-decode";
import { UserManager } from "oidc-client-ts";
import { addParamToUrl, retrieveParamFromUrl } from "powerhooks/tools/urlSearchParams";
import { Deferred } from "utils/tools/Deferred";
import { fnv1aHashToHex } from "utils/tools/fnv1aHashToHex";

export const createOidcClient = async ({ url, realm, clientId, evtUserActivity, urlPortail }) => {
  const configHash = fnv1aHashToHex(`${url} ${realm} ${clientId}`);
  const configHashKey = "configHash";

  const userManager = new UserManager({
    authority: `${url}/realms/${realm}`,
    client_id: clientId,
    redirect_uri: "" /* provided when calling login */,
    response_type: "code",
    scope: "openid profile",
    automaticSilentRenew: false,
    silent_redirect_uri: `${window.location.origin}/silent-sso.html?${configHashKey}=${configHash}`,
  });

  const login = async () => {
    const { newUrl: redirect_uri } = addParamToUrl({
      url: window.location.href,
      name: configHashKey,
      value: configHash,
    });
    await userManager.signinRedirect({
      redirect_uri,
      redirectMethod: "replace",
    });
    return new Promise(() => {});
  };

  /*   const loadUserInfo = async () => {
    const userInfo = await keycloakInstance.loadUserInfo();
    return { ...userInfo, id: userInfo?.preferred_username?.toUpperCase() };
  }; */

  read_successful_login_query_params: {
    let url = window.location.href;
    {
      const result = retrieveParamFromUrl({ name: configHashKey, url });

      if (!result.wasPresent || result.value !== configHash) {
        break read_successful_login_query_params;
      }

      url = result.newUrl;
    }

    {
      const result = retrieveParamFromUrl({ name: "error", url });

      if (result.wasPresent) {
        throw new Error(`OIDC error: ${result.value}`);
      }
    }

    // signinRedirectCallback required url in params
    let loginSuccessUrl = "https://dummy.com";

    for (const name of ["code", "state", "session_state"]) {
      const result = retrieveParamFromUrl({ name, url });

      loginSuccessUrl = addParamToUrl({
        url: loginSuccessUrl,
        name: name,
        value: result.value,
      }).newUrl;
      url = result.newUrl;
    }

    try {
      await userManager.signinRedirectCallback(loginSuccessUrl);
    } catch {
      //NOTE: The user has likely pressed the back button just after logging in.
    }

    window.history.pushState(null, "", url);
  }

  async function silentSignInGetAccessToken() {
    const dLoginSuccessUrl = new Deferred();

    const timeout = setTimeout(
      () => dLoginSuccessUrl.reject(new Error(`SSO silent login timeout with clientId: ${clientId}`)),
      5000,
    );

    const listener = event => {
      if (event.origin !== window.location.origin || typeof event.data !== "string") {
        return;
      }

      const url = event.data;

      {
        let result;

        try {
          result = retrieveParamFromUrl({ name: configHashKey, url });
        } catch {
          // This could possibly happen if url is not a valid url.
          return;
        }

        if (!result.wasPresent || result.value !== configHash) {
          return;
        }
      }

      clearTimeout(timeout);

      window.removeEventListener("message", listener);

      {
        const result = retrieveParamFromUrl({ name: "error", url });

        if (result.wasPresent) {
          dLoginSuccessUrl.resolve(undefined);
          return;
        }
      }

      let loginSuccessUrl = "https://dummy.com";

      for (const name of ["code", "state", "session_state"]) {
        const result = retrieveParamFromUrl({ name, url });

        loginSuccessUrl = addParamToUrl({
          url: loginSuccessUrl,
          name: name,
          value: result.value,
        }).newUrl;
      }

      dLoginSuccessUrl.resolve(loginSuccessUrl);
    };

    window.addEventListener("message", listener, false);

    userManager.signinSilent({ silentRequestTimeoutInSeconds: 1 }).catch(() => {
      /* error expected */
    });

    const loginSuccessUrl = await dLoginSuccessUrl.pr;

    if (loginSuccessUrl === undefined) {
      return undefined;
    }

    const user = await userManager.signinRedirectCallback(loginSuccessUrl);

    return user;
  }

  let currentUser = await userManager.getUser();

  const loadUserInfo = async () => {
    const userInfo = (await userManager.getUser()).profile;
    return { ...userInfo, id: userInfo?.preferred_username?.toUpperCase() };
  };

  let currentAccessToken = currentUser?.access_token ?? "";

  if (currentUser === null) {
    const user = await silentSignInGetAccessToken();

    if (user) {
      currentUser = user;
    }
  }

  if (currentUser === null) {
    return {
      isUserLoggedIn: false,
      login,
    };
  }

  const oidcClient = {
    isUserLoggedIn: true,
    accessToken: currentUser.access_token,
    oidcUser: await loadUserInfo(),
    logout: async ({ redirectTo }) => {
      await userManager.signoutRedirect({
        post_logout_redirect_uri: (() => {
          return redirectTo || window.location.origin;
        })(),
      });

      return new Promise(() => {});
    },
    renewToken: async () => {
      const user = await userManager.signinSilent();
      currentUser = user;
      currentAccessToken = user.access_token;
    },
  };

  (function callee() {
    const msBeforeExpiration = getAccessTokenExpirationTime(currentAccessToken) - Date.now();

    setTimeout(async () => {
      console.log(
        `OIDC access token will expire in ${minValiditySecond} seconds, waiting for user activity before renewing`,
      );

      await evtUserActivity();

      console.log("User activity detected. Refreshing access token now");

      try {
        await oidcClient.renewToken();
      } catch {
        console.log("Can't refresh OIDC access token, getting a new one");
        //NOTE: Never resolves
        await login();
      }

      callee();
    }, msBeforeExpiration - minValiditySecond * 1000);
  })();

  return oidcClient;
};

const minValiditySecond = 25;

function getAccessTokenExpirationTime(accessToken) {
  return jwt_decode(accessToken).exp * 1000;
}