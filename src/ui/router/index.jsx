import { Box } from "@mui/material";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { SurveyList } from "ui/components/SurveyList";
import { UserAccount } from "ui/components/UserAccount";
import { ProtectedRoute } from "ui/context/auth";
import { UserAccountProvider } from "ui/context/UserAccount";
import { Footer } from "ui/shared/Footer";
import { Header } from "ui/shared/Header";
import { Menu } from "ui/shared/Menu";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <UserAccountProvider>
          <Route path="/" element={<Navigate to="/portail/mes-enquetes" />} />
        </UserAccountProvider>
        <Route
          path="/portail"
          element={
            <ProtectedRoute>
              <UserAccountProvider>
                <div className="main-content">
                  <Header />
                  <Menu />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <div className="main-body">
                      <Outlet />
                    </div>
                    <Footer />
                  </Box>
                </div>
              </UserAccountProvider>
            </ProtectedRoute>
          }
        >
          <Route path="mes-enquetes" element={<SurveyList />} />
          <Route path="mon-compte" element={<UserAccount />} />
          <Route path="*" element={<Navigate to="/portail/mes-enquetes" />} />
        </Route>
        <Route path="*" element={<Navigate to="/portail/mes-enquetes" />} />
      </Routes>
    </BrowserRouter>
  );
};
