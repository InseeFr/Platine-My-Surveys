import { createFileRoute } from "@tanstack/react-router";
import { SurveysList } from "components/SurveyList/SurveyList";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useTranslation("SurveyHomepage");
  const { t: headerTranslation } = useTranslation("Header");

  return (
    <div>
      <Helmet>
        <title>{`${t("homepage")} - ${headerTranslation("service tagline")}`}</title>
      </Helmet>
      <SurveysList />
    </div>
  );
}
