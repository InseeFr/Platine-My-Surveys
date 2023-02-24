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
import { AddressDisplay } from "./display";
import { buttonDictionary, formDictionary } from "i18n";

export const AddressForm = ({ open, close, address }) => {
  const { updateAddress } = useContext(UserAccountContext);
  const [confirmation, setConfirmation] = useState(false);

  const [formValues, setFormValues] = useState({ ...address });

  const onChange = name => e => {
    setFormValues({ ...formValues, [name]: e.target.value });
  };

  const validateForm = () => {
    setConfirmation(true);
  };

  const confirm = () => {
    setConfirmation(false);
    close();
    const newAdress = { ...formValues };
    updateAddress(newAdress);
  };
  const onClose = () => {
    setFormValues(address);
    close();
  };

  return (
    <>
      {!confirmation && (
        <Dialog open={open} onClose={close} maxWidth="xl" fullWidth>
          <DialogTitle>
            {formDictionary.updateAddress}
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
              label={formDictionary.addressStreetNumber}
              fullWidth
              variant="standard"
              value={formValues.streetNumber}
              onChange={onChange("streetNumber")}
            />
            <TextField
              className="name-form"
              margin="dense"
              label={formDictionary.addressStreetName}
              fullWidth
              variant="standard"
              value={formValues.streetName}
              onChange={onChange("streetName")}
            />
            <TextField
              className="name-form"
              margin="dense"
              label={formDictionary.addressZipCode}
              fullWidth
              variant="standard"
              value={formValues.zipCode}
              onChange={onChange("zipCode")}
            />
            <TextField
              className="name-form"
              margin="dense"
              label={formDictionary.addressCity}
              fullWidth
              variant="standard"
              value={formValues.cityName}
              onChange={onChange("cityName")}
            />
            <TextField
              className="name-form"
              margin="dense"
              label={formDictionary.addressCountry}
              fullWidth
              variant="standard"
              value={formValues.countryName}
              onChange={onChange("countryName")}
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
        <DialogTitle>{`Confirmation de l'adresse`}</DialogTitle>
        <DialogContent>
          {`Confirmez-vous l'adresse suivante ?`}
          <br />
          <br />
          <AddressDisplay address={formValues} title={false} />
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
