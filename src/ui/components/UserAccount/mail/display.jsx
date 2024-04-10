import { TextField, Box } from "@mui/material";
import { formDictionary } from "i18n";

export const MailDisplay = ({ user }) => {
  const { email } = user;

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
    >
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
    </Box>
  );
};
