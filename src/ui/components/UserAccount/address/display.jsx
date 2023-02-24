import { TextField, Box } from "@mui/material";
import { formDictionary } from "i18n";

export const AddressDisplay = ({ address }) => {
  const {
    streetNumber,
    repetitionIndex,
    streetType,
    streetName,
    addressSupplement,
    zipCode,
    cedexCode,
    cedexName,
    specialDistribution,
    cityName,
    countryName,
    countryCode,
  } = address;

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
          value={`${streetNumber}` || ""}
          InputProps={{
            readOnly: true,
            sx: { width: "15ch" },
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressRepetitionIndex}
          value={`${repetitionIndex}` || ""}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressStreetType}
          value={`${streetType}` || ""}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressStreetName}
          value={`${streetName}` || ""}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressAddressSupplement}
          value={`${addressSupplement}` || ""}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressZipCode}
          value={`${zipCode}` || ""}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressCityName}
          value={`${cityName}` || ""}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressCedexCode}
          value={`${cedexCode}` || ""}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          inputProps={{ style: { textTransform: "uppercase" } }}
          id="outlined-read-only-input"
          label={formDictionary.addressCedexName}
          value={`${cedexName}` || ""}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          inputProps={{ style: { textTransform: "uppercase" } }}
          id="outlined-read-only-input"
          label={formDictionary.addressSpecialDistribution}
          value={`${specialDistribution}` || ""}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          inputProps={{ style: { textTransform: "uppercase" } }}
          id="outlined-read-only-input"
          label={formDictionary.addressCountryCode}
          value={`${countryCode}` || ""}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          inputProps={{ style: { textTransform: "uppercase" } }}
          id="outlined-read-only-input"
          label={formDictionary.addressCountryName}
          value={`${countryName}` || ""}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Box>
  );
};
