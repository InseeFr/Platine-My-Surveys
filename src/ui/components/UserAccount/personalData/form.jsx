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
import { PersonalDataDisplay } from "./display";
import { buttonDictionary, formDictionary } from "i18n";

export const PersonalDataForm = ({ open, close, user }) => {
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
  const onClose = () => {
    setFormValues(user);
    close();
  }

  return (
    <>
      {!confirmation && (
        <Dialog open={open} onClose={close} maxWidth="xl" fullWidth>
          <DialogTitle>
            {formDictionary.updatePersonalData}
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
              label={formDictionary.personalDataLastname}
              fullWidth
              variant="standard"
              value={formValues.lastName}
              onChange={onChange("lastName")}
            />
            <TextField
              className="name-form"
              margin="dense"
              label={formDictionary.personalDataFirstname}
              fullWidth
              variant="standard"
              value={formValues.firstName}
              onChange={onChange("firstName")}
            />
            <TextField
              className="name-form"
              margin="dense"
              label={formDictionary.personalDataFunction}
              fullWidth
              variant="standard"
              value={formValues.function}
              onChange={onChange("function")}
            />
            <TextField
              className="name-form"
              margin="dense"
              label={formDictionary.personalDataPhone}
              fullWidth
              variant="standard"
              value={formValues.phone}
              onChange={onChange("phone")}
            />

          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={onClose}>
              {buttonDictionary.cancel}
            </Button>
            <Button variant="contained" onClick={validateForm}>
              {buttonDictionary.save}
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Dialog open={confirmation} onClose={() => setConfirmation(false)} maxWidth="md" fullWidth>
        <DialogTitle>{`Confirmation des nouvelles informations`}</DialogTitle>
        <DialogContent>
          {`Confirmez-vous vos nouvelles informations ?`}
          <br />
          <br />
          <PersonalDataDisplay user={formValues} title={false} />
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
