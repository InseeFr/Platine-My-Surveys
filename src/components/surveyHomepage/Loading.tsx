import { fr } from "@codegouvfr/react-dsfr";
import CircularProgress from "@mui/material/CircularProgress";

export const Loading = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      className={fr.cx("fr-col-12", "fr-col-md-5")}
    >
      <CircularProgress />
    </div>
  );
};
