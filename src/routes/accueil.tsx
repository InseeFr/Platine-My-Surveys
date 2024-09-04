import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { Homepage } from "components/homepage/Homepage";
import { MySurveys } from "components/mySurveys/MySurveys";
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
    <div>
      <title>{`${headerTranslation("my surveys")} - ${headerTranslation("service tagline")}`}</title>
      <MySurveys className={fr.cx("fr-container", "fr-pt-md-5v")} />
    </div>
  );
}
