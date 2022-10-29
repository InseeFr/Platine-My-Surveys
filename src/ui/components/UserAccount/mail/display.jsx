import { TextField } from "@mui/material";
import { formDictionary } from "i18n";

export const MailDisplay = ({ user }) => {
  const { email } = user;

  return (
    <div className="mail-display">
      <TextField
        id="outlined-read-only-input"
        label={formDictionary.email}
        fullWidth
        value={`${email}`}
        InputProps={{
          readOnly: true,
        }}
      />
    </div>
  );
};
