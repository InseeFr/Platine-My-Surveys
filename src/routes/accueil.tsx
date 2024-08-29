import { Navigate, createFileRoute } from "@tanstack/react-router";
import { Homepage } from "components/homepage/Homepage";
import { useIsAuthenticated } from "hooks/useAuth";
import { useTranslation } from "i18n";

export const Route = createFileRoute("/accueil")({
  component: HomepageIndex,
});

function HomepageIndex() {
  const { isAuthenticated } = useIsAuthenticated();
  const { t } = useTranslation("Homepage");
  const { t: headerTranslation } = useTranslation("Header");

  return !isAuthenticated ? (
    <div>
      <title>{`${t("homepage")} - ${headerTranslation("service tagline")}`}</title>
      <Homepage />
    </div>
  ) : (
    <Navigate to="/mes-enquetes" />
  );
}
