import { TextField } from "@mui/material";

export const PersonalDataDisplay = ({ user }) => {
  const { lastName, firstName, phone } = user;
  const fonction= user.function;

  return (
    <div className="personal-data-display">
               <TextField id="outlined-name" label="Nom" disabled value={`${lastName}`} />
                  <TextField id="outlined-name" label="Prénom" disabled value={`${firstName}`} />
                  <TextField id="outlined-name" label="Fonction" disabled value={`${fonction}`} />
                  <TextField id="outlined-name" label="Téléphone" disabled value={`${phone}`} />
    </div>
  );
};
