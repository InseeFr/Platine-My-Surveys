import { createFileRoute } from "@tanstack/react-router";
import { SurveysList } from "components/SurveyList/SurveyList";
import { useTranslation } from "i18n";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useTranslation("SurveyHomepage");
  const { t: headerTranslation } = useTranslation("Header");

  return (
    <div>
      <title>{`${t("homepage")} - ${headerTranslation("service tagline")}`}</title>
      <SurveysList />
    </div>
  );
}
