import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { MySurveys } from "components/mySurveys/MySurveys";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>{`${headerTranslation("my surveys")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <MySurveys className={fr.cx("fr-container", "fr-pt-md-5v")} />
    </div>
  );
}
