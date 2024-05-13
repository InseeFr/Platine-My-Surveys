import { createMockReactOidc } from "oidc-spa/mock/react";
import { createReactOidc } from "oidc-spa/react";

const guestUser = {
  inseegroupedefaut: ["utilisateur_Platine"],
  preferred_username: "PLATINE",
};

const isOidc = import.meta.env.VITE_AUTH_TYPE === "OIDC";

export const createAppOidc = () => {
  if (isOidc) {
    return createReactOidc({
      issuerUri: import.meta.env.VITE_OIDC_ISSUER,
      clientId: import.meta.env.VITE_OIDC_CLIENT_ID,
      publicUrl: "/",
      autoLogoutParams: { redirectTo: "specific url", url: `${import.meta.env.VITE_APP_URL}/logout` },
      extraQueryParams: { kc_idp_hint: import.meta.env.VITE_IDENTITY_PROVIDER },
    });
  }

  return createMockReactOidc({
    isUserInitiallyLoggedIn: true,
    mockedTokens: guestUser,
    accessToken: "accessToken",
  });
};
