import { Navigate, createFileRoute } from "@tanstack/react-router";

import { Logout } from "components/Logout";
import { useIsAuthenticated } from "hooks/useAuth";
import { useTranslation } from "i18n";

export const Route = createFileRoute("/deconnexion")({
  component: LogoutIndex,
});

function LogoutIndex() {
  const { isAuthenticated } = useIsAuthenticated();
  const { t } = useTranslation("Logout");
  const { t: headerTranslation } = useTranslation("Header");

  return !isAuthenticated ? (
    <div>
      <title>{`${t("disconnected")} - ${headerTranslation("service tagline")}`}</title>
      <Logout />
    </div>
  ) : (
    <Navigate to="/" />
  );
}
