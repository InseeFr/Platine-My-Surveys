import { TextField, Box } from "@mui/material";
import { formDictionary } from "i18n";

export const PersonalDataDisplay = ({ user }) => {
  const { lastName, firstName, phone, function: userFunction } = user;

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
          value={`${userFunction}`}
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
