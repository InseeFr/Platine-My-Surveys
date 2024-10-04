import { Navigate, createFileRoute } from "@tanstack/react-router";

import { Logout } from "components/Logout";
import { useIsAuthenticated } from "hooks/useAuth";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/deconnexion")({
  component: LogoutIndex,
});

function LogoutIndex() {
  const { isAuthenticated } = useIsAuthenticated();
  const { t } = useTranslation("Logout");
  const { t: headerTranslation } = useTranslation("Header");

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Helmet>
        <title>{`${t("disconnected")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <Logout />
    </div>
  );
}
