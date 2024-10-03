import { createAppOidc } from "../functions/oidc.ts";

export const { OidcProvider, prOidc, useOidc } = createAppOidc();

export const useHasRole = (role: string): boolean => {
  const { oidcTokens } = useOidc({ assertUserLoggedIn: true });
  return oidcTokens.decodedIdToken.inseegroupedefaut.includes(role);
};

export const useAccessToken = (): string | null => {
  return useOidc({ assertUserLoggedIn: false }).oidcTokens?.accessToken ?? null;
};

export const useUser = () => {
  return useOidc({ assertUserLoggedIn: true }).oidcTokens.decodedIdToken;
};

export const useLogout = () => {
  return useOidc({ assertUserLoggedIn: false }).logout;
};

export function useIsAuthenticated() {
  const { isUserLoggedIn, oidcTokens } = useOidc({ assertUserLoggedIn: false });

  return { isAuthenticated: isUserLoggedIn, tokens: oidcTokens };
}

export const AuthProvider = OidcProvider;

export const protectedLoader = async () => {
  const oidc = await prOidc;

  if (oidc.isUserLoggedIn) {
    return null;
  }

  await oidc.login({
    doesCurrentHrefRequiresAuth: true,
  });
};
