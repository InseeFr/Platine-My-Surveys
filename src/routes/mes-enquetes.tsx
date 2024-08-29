import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { MySurveys } from "components/mySurveys/MySurveys";
import { protectedLoader } from "hooks/useAuth";
import { useFetchQuery } from "hooks/useFetchQuery";
import { useTranslation } from "i18n/i18n";

export const Route = createFileRoute("/mes-enquetes")({
  component: MySurveysIndex,
  beforeLoad: protectedLoader,
});

function MySurveysIndex() {
  const { t } = useTranslation("MySurveys");
  const { t: headerTranslation } = useTranslation("Header");

  const { data: surveys, isLoading } = useFetchQuery("/api/contacts/questionings");

  return (
    <div>
      <title>{`${t("surveys table title")} - ${headerTranslation("service tagline")}`}</title>
      <MySurveys className={fr.cx("fr-container")} surveys={surveys ?? []} isLoading={isLoading} />
    </div>
  );
}
