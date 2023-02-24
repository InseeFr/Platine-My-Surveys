import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Alert,
} from "@mui/material";
import { useContext, useState } from "react";
import { UserAccountContext } from "../../../context/UserAccount";
import { MailDisplay } from "./display";
import { buttonDictionary } from "i18n";
import { formDictionary } from "i18n";

export const MailForm = ({ open, close, user }) => {
  const { updateContact } = useContext(UserAccountContext);
  const [confirmation, setConfirmation] = useState(false);
  const [formValues, setFormValues] = useState({ ...user });

  const mailValidation = email => {
    return email.trim().length === 0 || /\S+@\S+\.\S+/.test(email);
  };

  const [isValid, setIsValid] = useState(mailValidation(user.email));

  const onChange = name => e => {
    setFormValues({ ...formValues, [name]: e.target.value });
    setIsValid(mailValidation(e.target.value));
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
  const onClose = () => {
    setFormValues(user);
    setIsValid(mailValidation(user.email));
    close();
  };

  return (
    <>
      {!confirmation && (
        <Dialog open={open} onClose={close} maxWidth="xl" fullWidth>
          <DialogTitle>
            {formDictionary.updateEmail}
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
              label={formDictionary.email}
              fullWidth
              variant="standard"
              value={formValues.email}
              onChange={onChange("email")}
            />
          </DialogContent>
          {isValid && <Alert severity="success">{formDictionary.emailValid}</Alert>}
          {!isValid && <Alert severity="error">{formDictionary.emailInvalid}</Alert>}
          <DialogActions>
            <Button variant="contained" onClick={onClose}>
              {buttonDictionary.cancel}
            </Button>
            <Button variant="contained" onClick={validateForm} disabled={!isValid}>
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
