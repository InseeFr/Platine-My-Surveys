import { Button, Card } from "@mui/material";
import { useContext, useState } from "react";
import { UserAccountContext } from "../../../context/UserAccount";
import { MailDisplay } from "./display";
import { MailForm } from "./form";
import { buttonDictionary } from "i18n";

export const MailBlock = () => {
  const {
    user,
  } = useContext(UserAccountContext);

  const [MailEdit, setMailEdit] = useState(false);

  const closeMailEdit = () => {
    setMailEdit(false);
  };

  return (
    <Card
      sx={{
        p: 2,
      }}
    >
      <MailDisplay user={user} />
      <Button onClick={() => setMailEdit(true)} variant="contained">
        {buttonDictionary.edit}
      </Button>
      <MailForm open={MailEdit} close={closeMailEdit} user={user} />
    </Card>
  );
};
