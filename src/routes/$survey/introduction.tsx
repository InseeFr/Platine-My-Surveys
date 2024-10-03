import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { Loading } from "components/surveyHomepage/Loading";
import { useTranslation } from "i18n";
import content from "resources/content.json";

export const Route = createFileRoute("/$survey/introduction")({
  component: Index,
});

function Index() {
  const { survey } = Route.useParams();
  const { t } = useTranslation("SurveyHomepage");

  const data = content.specifique.find(s => s.id === survey);

  if (!data) {
    return <Loading />;
  }

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-5")}>
      <h3>{`${t("survey introduction")} ${data.title}`}</h3>
      <p>{data.content.description.body}</p>
    </section>
  );
}
