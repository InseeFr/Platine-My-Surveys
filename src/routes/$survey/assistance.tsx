import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute, useSearch } from "@tanstack/react-router";
import { AuthenticatedSupport } from "components/surveyHomepage/AuthenticatedSupport";
import { OfflineSupport } from "components/surveyHomepage/OfflineSupport";
import { useIsAuthenticated } from "hooks/useAuth";
import { useTranslation } from "i18n";

type SupportSearch = {
  questioningId?: string;
};

export const Route = createFileRoute("/$survey/assistance")({
  validateSearch: (search: Record<string, unknown>): SupportSearch => {
    return {
      questioningId: (search.questioningId as string) || undefined,
    };
  },
  component: SupportIndex,
});

function SupportIndex() {
  const { t } = useTranslation("Support");
  const search = useSearch({ from: "/$survey/assistance" });
  const { survey } = Route.useParams();
  const { isAuthenticated } = useIsAuthenticated();

  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-5")}>
      <h3>{t("contact support")}</h3>
      {isAuthenticated ? (
        <AuthenticatedSupport surveyId={survey} questioningId={search.questioningId} />
      ) : (
        <OfflineSupport surveyId={survey} />
      )}
    </section>
  );
}
