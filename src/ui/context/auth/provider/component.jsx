import { NONE, OIDC } from "core/constants";
import { listenActivity } from "core/events";
import { createOidcClient } from "core/keycloak";
import React, { useEffect, useMemo, useState } from "react";
import { LoaderSimple } from "ui/shared/loader";
import { NoAuthLogin } from "./noAuth";
import { environment, oidcConf } from "utils/read-env-vars";

export const AuthContext = React.createContext();

const { AUTH_TYPE } = environment;

const dummyOidcClient = {
  isUserLoggedIn: true,
  accessToken: null,
  oidcUser: null,
  logout: () => (window.location.href = "/"),
  renewToken: () => {},
};

const AuthProvider = ({ children }) => {
  const [oidcClient, setOidcClient] = useState(() => {
    switch (AUTH_TYPE) {
      case OIDC:
        return null;
      case NONE:
        return dummyOidcClient;
      default:
        throw new Error("wrong auth Type");
    }
  });

  useEffect(() => {
    if (AUTH_TYPE !== OIDC) {
      return;
    }

    (async () => {
      const oidcClient = await createOidcClient({
        url: oidcConf.authUrl,
        realm: oidcConf.realm,
        clientId: oidcConf.client_id,
        evtUserActivity: listenActivity,
      });

      setOidcClient(oidcClient);
    })();
  }, []);

  const contextOidc = useMemo(() => oidcClient, [oidcClient]);

  if (oidcClient === null) return <LoaderSimple />;
  if (AUTH_TYPE === NONE && !oidcClient?.isUserLoggedIn)
    return <NoAuthLogin setOidcClient={setOidcClient} />;
  return <AuthContext.Provider value={contextOidc}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
