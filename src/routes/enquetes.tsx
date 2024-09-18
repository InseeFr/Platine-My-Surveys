import { createFileRoute } from "@tanstack/react-router";
import { SurveysList } from "components/SurveyList/SurveyList";

export const Route = createFileRoute("/enquetes")({
  component: () => <SurveysList />,
});
