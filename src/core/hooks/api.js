import { API } from "core/api";
import { useConstCallback } from "./useConstCallback";
import { environment } from "utils/read-env-vars";
import { useAccessToken } from "hooks/useAuth";

export const useAPI = () => {
  const token = useAccessToken();
  const { API_URL: apiUrl } = environment;

  const getFirstContacts = useConstCallback(() => API.getContacts(apiUrl)(token));

  const getContact = useConstCallback(id => API.getContact(apiUrl)(id)(token));

  const getMySurveys = useConstCallback(() => API.getMySurveys(apiUrl)(token));

  const getContactAddress = useConstCallback(id => API.getContactAddress(apiUrl)(id)(token));

  const putContact = useConstCallback((id, newContact) => API.putContact(apiUrl)(id)(newContact)(token));

  const postContactEvent = useConstCallback(newContactEvent =>
    API.postContactEvent(apiUrl)(newContactEvent)(token),
  );

  const putAddress = useConstCallback((id, newAddress) => API.putAddress(apiUrl)(id)(newAddress)(token));

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
