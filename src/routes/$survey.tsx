import { createFileRoute } from "@tanstack/react-router";
import { SurveyHomepage } from "components/surveyHomepage/SurveyHomepage";

export const Route = createFileRoute("/$survey")({
  component: Index,
});

function Index() {
  const { survey } = Route.useParams();
  return <SurveyHomepage surveyId={survey} />;
}
