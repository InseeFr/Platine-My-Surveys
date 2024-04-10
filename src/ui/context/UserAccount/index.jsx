import { Typography } from "@mui/material";
import { AppContext } from "App";
import { ERROR_SEVERITY, SUCCESS_SEVERITY } from "core/constants";
import { useAPI, useConstCallback } from "core/hooks";
import { errorDictionary, notifDictionary } from "i18n";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/provider";

export const UserAccountContext = createContext();

export const UserAccountProvider = ({ children }) => {
  const { setLoading, openNotif } = useContext(AppContext);
  const oidcClient = useContext(AuthContext);
  const oidcUser = oidcClient?.oidcUser;
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState(null);

  const { getMySurveys, getContact, putAddress, putContact, postContactEvent } = useAPI();

  const loadUserData = useConstCallback(async id => {
    setLoading(true);
    const { data: account, error: accountError } = await getContact(id);
    const { data: mySurveys, error: mySurveysError } = await getMySurveys();
    setLoading(false);
    if (!accountError && !mySurveysError) setUser({ id, ...account, mySurveys });
    else {
      openNotif({
        severity: ERROR_SEVERITY,
        message: notifDictionary.contactsLoadingError(id),
      });
      setUserError({
        message: errorDictionary.errorUser(oidcUser?.id),
      });
    }
  });

  const updateAddress = async newAddress => {
    setLoading(true);
    const { error } = await putAddress(user.id, newAddress);
    if (!error) {
      openNotif({
        severity: SUCCESS_SEVERITY,
        message: notifDictionary.addressChangeConfirmation,
      });
      setUser({ ...user, address: newAddress });
    } else {
      openNotif({
        severity: ERROR_SEVERITY,
        message: notifDictionary.addressChangeError,
      });
    }
    setLoading(false);
  };

  const updateFirstConnect = async newContactEvent => {
    setLoading(true);
    const { error } = await postContactEvent(newContactEvent);
    if (!error) {
      setUser({ ...user, firstConnect: false });
    }
    setLoading(false);
  };

  const updateContact = async modifiedContact => {
    setLoading(true);
    const { error } = await putContact(user.id, modifiedContact);
    if (!error) {
      openNotif({
        severity: SUCCESS_SEVERITY,
        message: notifDictionary.personalDataChangeConfirmation,
      });
      setUser(modifiedContact);
    } else {
      openNotif({
        severity: ERROR_SEVERITY,
        message: notifDictionary.personalDataChangeError,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    /**
     * For Keyloack : check if the id is "id" or something like : "preferred_username"
     * If it's not "id" but "preferred_username", change "oidcUser?.id" to "oidcUser?.preferred_username"
     * Please change in ui/context/auth/provider/NoAuth.jsx, "oidcUser: { id: id }," to "`oidcUser: { preferred_username: id },"
     */

    if (oidcUser?.id) loadUserData(oidcUser?.id);
  }, [oidcUser?.id]);

  return (
    <UserAccountContext.Provider
      value={{
        user,
        setUser,
        updateAddress,
        updateContact,
        updateFirstConnect,
      }}
    >
      {user && children}
      {userError && <Typography>{userError.message}</Typography>}
    </UserAccountContext.Provider>
  );
};
