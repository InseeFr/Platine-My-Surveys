import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { MySurveys } from "components/mySurveys/MySurveys";
import { useTranslation } from "i18n";

export const Route = createFileRoute("/mes-enquetes")({
  component: HomepageIndex,
  // TODO: use protectedLoader later
  beforeLoad: async () => {
    throw redirect({ to: "/" });
  },
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
