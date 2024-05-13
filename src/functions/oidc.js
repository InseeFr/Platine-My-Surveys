import { createMockReactOidc } from "oidc-spa/mock/react";
import { createReactOidc } from "oidc-spa/react";
import { environment, oidcConf } from "utils/read-env-vars";

const guestUser = {
  inseegroupedefaut: ["utilisateur_Platine"],
  preferred_username: "PLATINE",
};

const { AUTH_TYPE: authType, PORTAIL_URL } = environment;
const { client_id, issuer } = oidcConf;

const isOidc = authType === "OIDC";

export const createAppOidc = () => {
  if (isOidc) {
    return createReactOidc({
      issuerUri: issuer,
      clientId: client_id,
      publicUrl: "/",
      autoLogoutParams: { redirectTo: "specific url", url: PORTAIL_URL },
    });
  }

  return createMockReactOidc({
    isUserInitiallyLoggedIn: true,
    mockedTokens: guestUser,
    accessToken: "accessToken",
  });
};
