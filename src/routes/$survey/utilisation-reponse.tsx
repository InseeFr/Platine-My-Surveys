import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "i18n";
import content from "resources/content.json";

export const Route = createFileRoute("/$survey/utilisation-reponse")({
  component: AnswersUtilizationIndex,
});

function AnswersUtilizationIndex() {
  const { survey } = Route.useParams();
  const { t } = useTranslation("SurveyHomepage");

  const responses = content.specifique.find(s => s.id === survey)?.content[
    "a-quoi-servent-vos-reponses"
  ];

  if (!responses) {
    return <></>;
  }

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-5")}>
      <h3>{t("what are your answers for?")}</h3>
      <p>{responses.body}</p>
    </section>
  );
}
