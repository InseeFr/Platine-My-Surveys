import { useContext } from "react";
import { AuthContext } from "ui/context/auth/provider";
import { API } from "core/api";
import { useConstCallback } from "./useConstCallback";
import { environment } from "utils/read-env-vars";

export const useAPI = () => {
  const oidcClient = useContext(AuthContext);
  const { API_URL: apiUrl } = environment;

  const getFirstContacts = useConstCallback(() => API.getContacts(apiUrl)(oidcClient?.accessToken));

  const getContact = useConstCallback(id => API.getContact(apiUrl)(id)(oidcClient?.accessToken));

  const getMySurveys = useConstCallback(() => API.getMySurveys(apiUrl)(oidcClient?.accessToken));

  const getContactAddress = useConstCallback(id =>
    API.getContactAddress(apiUrl)(id)(oidcClient?.accessToken),
  );

  const putContact = useConstCallback((id, newContact) =>
    API.putContact(apiUrl)(id)(newContact)(oidcClient?.accessToken),
  );

  const postContactEvent = useConstCallback(newContactEvent =>
    API.postContactEvent(apiUrl)(newContactEvent)(oidcClient?.accessToken),
  );

  const putAddress = useConstCallback((id, newAddress) =>
    API.putAddress(apiUrl)(id)(newAddress)(oidcClient?.accessToken),
  );

  return {
    getFirstContacts,
    getMySurveys,
    getContact,
    putContact,
    getContactAddress,
    putAddress,
    postContactEvent,
  };
};
