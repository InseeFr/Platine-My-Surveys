import { createFileRoute } from "@tanstack/react-router";
import { Loading } from "components/surveyHomepage/Loading";
import { SurveyHomepage } from "components/surveyHomepage/SurveyHomepage";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";
import content from "resources/content.json";

export const Route = createFileRoute("/$survey")({
  component: Index,
});

function Index() {
  const { t: headerTranslation } = useTranslation("Header");

  const { survey } = Route.useParams();
  const surveyData = content.specifique.find(s => s.id === survey);

  if (!surveyData) {
    return <Loading />;
  }

  return (
    <div>
      <Helmet>
        <title>{`${surveyData?.titleShort} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <SurveyHomepage survey={surveyData} />
    </div>
  );
}
