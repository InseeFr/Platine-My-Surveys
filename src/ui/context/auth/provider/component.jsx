import { NONE, OIDC } from "core/constants";
import { listenActivity } from "core/events";
import { createKeycloakOidcClient } from "core/keycloak";
import React, { useEffect, useMemo, useState } from "react";
import { LoaderSimple } from "ui/shared/loader";
import { NoAuthLogin } from "./noAuth";
import { environment, oidcConf } from "utils/read-env-vars";

export const AuthContext = React.createContext();

const { AUTH_TYPE: authType } = environment;
const { authority, realm, client_id } = oidcConf;

const dummyOidcClient = {
  isUserLoggedIn: false,
};

const AuthProvider = ({ children }) => {
  const [oidcClient, setOidcClient] = useState(null);

  useEffect(() => {
    const loadOidcConf = async () => {
      const oidcClientKC = await createKeycloakOidcClient({
        url: authority,
        realm: realm,
        clientId: client_id,
        evtUserActivity: listenActivity,
      });
      return oidcClientKC;
    };

    const loadConf = async () => {
      if (authType === OIDC) {
        const conf = await loadOidcConf();
        setOidcClient(conf);
      } else setOidcClient(dummyOidcClient);
    };

    if (authType && oidcClient === null) loadConf();
  }, [authType]);

  const contextOidc = useMemo(() => oidcClient, [oidcClient]);

  if (oidcClient === null) return <LoaderSimple />;
  if (authType === NONE && !oidcClient?.isUserLoggedIn)
    return <NoAuthLogin setOidcClient={setOidcClient} />;
  return <AuthContext.Provider value={contextOidc}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
