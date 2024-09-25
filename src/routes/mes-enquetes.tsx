import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { MySurveys } from "components/mySurveys/MySurveys";
import { protectedLoader } from "hooks/useAuth";
import { useTranslation } from "i18n";

export const Route = createFileRoute("/mes-enquetes")({
  component: HomepageIndex,
  beforeLoad: protectedLoader,
});

function HomepageIndex() {
  const { t: headerTranslation } = useTranslation("Header");

  return (
    <div>
      <title>{`${headerTranslation("my surveys")} - ${headerTranslation("service tagline")}`}</title>
      <MySurveys className={fr.cx("fr-container", "fr-pt-md-5v")} />
    </div>
  );
}
