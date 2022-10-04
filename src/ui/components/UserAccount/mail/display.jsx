import { TextField } from "@mui/material";

export const MailDisplay = ({ user }) => {
  const { email } = user;

  return (
    <div className="mail-display">
    <TextField
                    disabled
                    id="outlined-name"
                    label="Adresse de messagerie"
                    fullWidth
                    value={`${email}`}
                  />
    </div>
  );
};
