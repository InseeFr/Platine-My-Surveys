import { createReactOidc } from "oidc-spa/react";
import { createMockReactOidc } from "oidc-spa/mock/react";

type TokenInfo = {
  inseegroupedefaut: string[];
  preferred_username: string;
};

const guestUser: TokenInfo = {
  inseegroupedefaut: [],
  preferred_username: "guest",
};

const isOidc = import.meta.env.VITE_AUTH_TYPE === "oidc";

export const createAppOidc = () => {
  if (isOidc) {
    return createReactOidc<TokenInfo>({
      issuerUri: import.meta.env.VITE_OIDC_ISSUER,
      clientId: import.meta.env.VITE_OIDC_CLIENT_ID,
      publicUrl: "/",
      autoLogoutParams: { redirectTo: "specific url", url: import.meta.env.VITE_PORTAIL_URL },
     });
  }

  return createMockReactOidc<TokenInfo>({
    isUserInitiallyLoggedIn: true,
    mockedTokens: {
      decodedIdToken: guestUser,
      accessToken: "accessToken",
    },
  });
};
