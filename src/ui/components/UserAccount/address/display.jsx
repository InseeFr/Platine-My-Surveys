import { TextField, Box } from "@mui/material";
import { formDictionary } from "i18n";

export const AddressDisplay = ({ address }) => {
  const { streetNumber, streetName, zipCode, cityName, countryName } = address;

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <div className="address-display">
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressStreetNumber}
          value={`${streetNumber}`}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressStreetName}
          value={`${streetName}`}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressZipCode}
          value={`${zipCode}`}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressCity}
          value={`${cityName}`}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          inputProps={{ style: { textTransform: "uppercase" } }}
          id="outlined-read-only-input"
          label={formDictionary.addressCountry}
          value={`${countryName}`}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Box>
  );
};
