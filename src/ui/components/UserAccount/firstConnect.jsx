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
import { buttonDictionary } from "i18n";
import { useContext } from "react";
import { UserAccountContext } from "ui/context/UserAccount";

export const FirstConnectForm = ({ open, close, user }) => {
  const { updateFirstConnect } = useContext(UserAccountContext);

  const onClose = () => {
    const newContactEvent = {
      identifier: user.id,
      type: "firstConnect",
      eventDate: new Date().toISOString(),
      payload: { "source": "MySurveys IHM" },
    };
    updateFirstConnect(newContactEvent);
    close();
    close;
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm">
        <DialogTitle>
          {"Vérifier vos informations de contact"}
          <IconButton
            aria-label="close"
            onClick={onClose}
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
          <Button variant="contained" onClick={onClose}>
            {buttonDictionary.save}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
