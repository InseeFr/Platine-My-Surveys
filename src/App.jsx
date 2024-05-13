import { Alert, Snackbar } from "@mui/material";
import React, { createContext, useMemo, useState } from "react";
import "./App.css";
import AuthProvider from "./ui/context/auth/provider/component";
import { Router } from "./ui/router";
import { LoaderSimple } from "./ui/shared/loader";
import { AutoLogoutCountdown } from "functions/autoLogoutCountdown";

export const AppContext = createContext();

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [notif, setNotif] = useState({ open: false, severity: "info", message: "" });
  const packageInfo = require("../package.json");
  const appVersion = packageInfo?.version;

  const openNotif = ({ message, severity }) => {
    setNotif({ open: true, message, severity });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNotif(oldNotif => ({ ...oldNotif, open: false }));
  };

  const context = useMemo(() => ({ appVersion, setLoading, openNotif }), []);

  return (
    <>
      <AppContext.Provider value={context}>
        <AuthProvider>
          <AutoLogoutCountdown />
          <React.StrictMode>
            <Router />
          </React.StrictMode>
        </AuthProvider>
      </AppContext.Provider>

      {isLoading && <LoaderSimple />}
      <Snackbar open={notif.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={notif.severity} sx={{ width: "100%" }}>
          {notif.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default App;
