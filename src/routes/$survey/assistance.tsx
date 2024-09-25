import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { Support } from "components/surveyHomepage/Support";
import { useTranslation } from "i18n";

export const Route = createFileRoute("/$survey/assistance")({
  component: SupportIndex,
});

function SupportIndex() {
  const { t } = useTranslation("Support");
  const { survey } = Route.useParams();

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-5")}>
      <h3>{t("contact support")}</h3>
      <Support surveyId={survey} />
    </section>
  );
}
