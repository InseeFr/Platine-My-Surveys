import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { UserAccountContext } from "../../../context/UserAccount";
import { MailDisplay } from "./display";
import { buttonDictionary } from "i18n";

export const MailForm = ({ open, close, user }) => {
  const { updateContact } = useContext(UserAccountContext);
  const [confirmation, setConfirmation] = useState(false);

  const [formValues, setFormValues] = useState({ ...user });

  const onChange = name => e => {
    setFormValues({ ...formValues, [name]: e.target.value });
  };

  const validateForm = () => {
    setConfirmation(true);
  };

  const confirm = () => {
    setConfirmation(false);
    close();
    const modifiedContact = { ...formValues };
    updateContact(modifiedContact);
  };

  return (
    <>
      {!confirmation && (
        <Dialog open={open} onClose={close} maxWidth="xl" fullWidth>
          <DialogTitle>
            {`Modification de l'adresse de messagerie`}
            <IconButton
              aria-label="close"
              onClick={close}
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
            <TextField
              className="name-form"
              margin="dense"
              label={"Adresse de messagerie"}
              fullWidth
              variant="standard"
              value={formValues.email}
              onChange={onChange("email")}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={close}>
              {buttonDictionary.cancel}
            </Button>
            <Button variant="contained" onClick={validateForm}>
              {buttonDictionary.save}
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Dialog open={confirmation} onClose={() => setConfirmation(false)} maxWidth="md" fullWidth>
        <DialogTitle>{`Confirmation de l'adresse de messagerie`}</DialogTitle>
        <DialogContent>
          {`Confirmez-vous l'adresse de messagerie suivante ?`}
          <br />
          <br />
          <MailDisplay user={formValues} title={false} />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setConfirmation(false)}>
            {buttonDictionary.no}
          </Button>
          <Button variant="contained" onClick={confirm}>
            {buttonDictionary.yes}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
