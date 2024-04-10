import { Button, Card } from "@mui/material";
import { useContext, useState } from "react";
import { UserAccountContext } from "../../../context/UserAccount";
import { PersonalDataDisplay } from "./display";
import { PersonalDataForm } from "./form";
import { buttonDictionary } from "i18n";

export const PersonalDataBlock = () => {
  const { user } = useContext(UserAccountContext);

  const [personalDataEdit, setPersonalDataEdit] = useState(false);

  const closePersonalDataEdit = () => {
    setPersonalDataEdit(false);
  };

  return (
    <Card
      sx={{
        p: 2,
      }}
    >
      <PersonalDataDisplay user={user} />
      <Button onClick={() => setPersonalDataEdit(true)} variant="contained">
        {buttonDictionary.edit}
      </Button>
      <PersonalDataForm open={personalDataEdit} close={closePersonalDataEdit} user={user} />
    </Card>
  );
};
