import { useContext, useEffect } from "react";
import { Welcome } from "../Welcome";
import { Typography } from "@mui/material";
import { useAPI } from "../../../core/hooks";
import { SmartList } from "./smartList";
import { UserAccountContext } from "ui/context/UserAccount";
import { menuDictionary, surveyDictionary } from "../../../i18n";
import "./surveyList.css";

export const SurveyList = () => {
  const { user, setUser } = useContext(UserAccountContext);
  const { getMySurveys } = useAPI();

  useEffect(() => {
    const load = async () => {
      const { data, error } = await getMySurveys();
      if (!error) {
        setUser({ ...user, mySurveys: data });
      }
    };
    if (!user.mySurveys) load();
  }, [getMySurveys, setUser, user, user.mySurveys]);
  return (
    <>
      <Welcome />
      <Typography variant="h4">{menuDictionary.mySurveys}</Typography>
      <div style={{ width: "90%", margin: "auto" }}>
        {user.mySurveys && user.mySurveys.length > 0 && <SmartList mySurveys={user.mySurveys} />}

        {user.mySurveys && user.mySurveys.length === 0 && (
          <Typography>{surveyDictionary.noSurveys}</Typography>
        )}
        {!user.mySurveys && <Typography>Chargement en cours ...</Typography>}
      </div>
    </>
  );
};
