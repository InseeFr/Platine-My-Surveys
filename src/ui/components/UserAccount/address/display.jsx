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
          value={streetNumber === null ? "" : streetNumber}
          InputProps={{
            readOnly: true,
            sx: { width: "15ch" },
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressRepetitionIndex}
          value={repetitionIndex === null ? "" : repetitionIndex}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressStreetType}
          value={streetType === null ? "" : streetType}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressStreetName}
          value={streetName === null ? "" : streetName}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressAddressSupplement}
          value={addressSupplement === null ? "" : addressSupplement}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressZipCode}
          value={zipCode === null ? "" : zipCode}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressCityName}
          value={cityName === null ? "" : cityName}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="outlined-read-only-input"
          label={formDictionary.addressCedexCode}
          value={cedexCode === null ? "" : cedexCode}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          inputProps={{ style: { textTransform: "uppercase" } }}
          id="outlined-read-only-input"
          label={formDictionary.addressCedexName}
          value={cedexName === null ? "" : cedexName}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          inputProps={{ style: { textTransform: "uppercase" } }}
          id="outlined-read-only-input"
          label={formDictionary.addressSpecialDistribution}
          value={specialDistribution === null ? "" : specialDistribution}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          inputProps={{ style: { textTransform: "uppercase" } }}
          id="outlined-read-only-input"
          label={formDictionary.addressCountryCode}
          value={countryCode === null ? "" : countryCode}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          inputProps={{ style: { textTransform: "uppercase" } }}
          id="outlined-read-only-input"
          label={formDictionary.addressCountryName}
          value={countryName === null ? "" : countryName}
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Box>
  );
};
