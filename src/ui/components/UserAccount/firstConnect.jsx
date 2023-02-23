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
import { useContext } from "react";
import { UserAccountContext } from "../../context/UserAccount";
import { buttonDictionary } from "i18n";

export const FirstConnectForm = ({ open, close }) => {
  const { mySurveys } = useContext(UserAccountContext);

  const handleClose = () => {
    //PUT User with first connect false ou POST contact event
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
            {mySurveys.length
              ? "Veuillez vérifier et mettre à jour si nécessaire vos informations de contacts. Vous pourrez ensuite répondre à (l’/aux) enquête(s) via l’onglet “Mes Enquêtes”"
              : "Veuillez vérifier et mettre à jour si nécessaire vos informations de contacts. Vous pourrez ensuite répondre à (l’/aux) enquête(s) via l’onglet “Mes Enquêtes”"}
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