import { createFileRoute } from "@tanstack/react-router";
import { useIsAuthenticated } from "hooks/useAuth";
import { useTranslation } from "i18n";

export const Route = createFileRoute("/assistance")({
  component: SupportIndex,
});

function SupportIndex() {
  const { isAuthenticated } = useIsAuthenticated();
  const { t } = useTranslation("Header");

  return (
    <div>
      <title>{`${t("contact support")} - ${t("service tagline")}`}</title>
      {isAuthenticated ? (
        <div>page d'assistance lorsque l'utilisateur est connecté</div>
      ) : (
        <div>page d'assistance lorsque l'utilisateur n'est pas connecté</div>
      )}
    </div>
  );
}
