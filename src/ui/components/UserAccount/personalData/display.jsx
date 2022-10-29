import { TextField, Box } from "@mui/material";
import { formDictionary } from "i18n";

export const PersonalDataDisplay = ({ user }) => {
  const { lastName, firstName, phone } = user;
  const fonction = user.function;

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <div className="personal-data-display">
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.personalDataLastname}
          value={`${lastName}`}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.personalDataFirstname}
          value={`${firstName}`}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.personalDataFunction}
          value={`${fonction}`}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.personalDataPhone}
          value={`${phone}`}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Box>
  );
};
