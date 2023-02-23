import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  DialogContentText,
} from "@mui/material";
import { useContext, useState } from "react";
import { UserAccountContext } from "../../context/UserAccount";
import { buttonDictionary } from "i18n";

export const FirstConnectForm = ({ open, close, user }) => {
  const { updateContact } = useContext(UserAccountContext);
  const [formValues, setFormValues] = useState({ ...user });

  const handleClose = () => {
    setFormValues({ ...formValues, firstConnect: false });
    const modifiedContact = { ...formValues };
    //PUT User with first connect false ou POST contact event
    //updateContact(modifiedContact);
    close();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="xl" fullWidth>
        <DialogTitle>
          {"Vérifier vos informations de contact"}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {user.mySurveys.length > 0
              ? "Veuillez vérifier et mettre à jour si nécessaire vos informations de contacts. Vous pourrez ensuite répondre aux enquêtes via l’onglet “Mes Enquêtes”"
              : "Veuillez vérifier et mettre à jour si nécessaire vos informations de contacts. Vous pourrez ensuite répondre à l’ enquête via l’onglet “Mes Enquêtes”"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            {buttonDictionary.save}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
