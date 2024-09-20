import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { Loading } from "components/surveyHomepage/Loading";
import { useTranslation } from "i18n/i18n";
import content from "resources/content.json";

export const Route = createFileRoute("/$survey/documents")({
  component: Documents,
});

function Documents() {
  const { survey } = Route.useParams();
  const { t } = useTranslation("SurveyHomepage");

  const responses = content.specifique.find(s => s.id === survey)?.content[
    "a-quoi-servent-vos-reponses"
  ];

  if (!responses) {
    return <Loading />;
  }

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-5")}>
      <h3>{t("documents to the surveyed")}</h3>
    </section>
  );
}
