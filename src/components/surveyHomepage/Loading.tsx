import CircularProgress from "@mui/material/CircularProgress";

export const Loading = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress />
    </div>
  );
};
