import React, { useEffect, useState } from "react";
import { OIDC, NONE } from "core/constants";
import { getOidc } from "core/configuration";
import { createKeycloakOidcClient } from "core/keycloak";
import { listenActivity } from "core/events";
import { NoAuthLogin } from "./noAuth";
import { LoaderSimple } from "ui/shared/loader";

export const AuthContext = React.createContext();

const dummyOidcClient = {
  isUserLoggedIn: false,
};

const AuthProvider = ({ authType, children }) => {
  const [oidcClient, setOidcClient] = useState(() => {
    switch (authType) {
      case OIDC:
        return null;
      case NONE:
        return dummyOidcClient;
      default:
        throw new Error("NoAuthFile");
    }
  });

  useEffect(() => {
    if (authType !== OIDC) {
      return;
    }

    (async () => {
      const oidcConf = await getOidc();

      const oidcClient = await createKeycloakOidcClient({
        url: oidcConf["auth-server-url"],
        realm: oidcConf["realm"],
        clientId: oidcConf["resource"],
        evtUserActivity: listenActivity,
      });

      setOidcClient(oidcClient);
    })();
  }, [authType]);

  if (oidcClient === null) return <LoaderSimple />;
  if (authType === NONE && !oidcClient?.isUserLoggedIn)
    return <NoAuthLogin setOidcClient={setOidcClient} />;
  return <AuthContext.Provider value={oidcClient}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
