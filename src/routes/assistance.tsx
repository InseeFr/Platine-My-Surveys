import { fr } from "@codegouvfr/react-dsfr";
import CircularProgress from "@mui/material/CircularProgress";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { OfflineSupport } from "components/support/OfflineSupport";
import { fetchContent } from "functions/fetchContent";
import { useIsAuthenticated } from "hooks/useAuth";
import { useTranslation } from "i18n";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/assistance")({
  component: SupportIndex,
});

function SupportIndex() {
  const { isAuthenticated } = useIsAuthenticated();
  const { t } = useTranslation("Header");

  const [data, setData] = useState<Record<string, any> | null>(null);

  if (data) {
    console.log("page assistance", data);
  }
  const router = useRouter();
  const currentPath = router.state.location.pathname.split("/")[1];

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchContent(currentPath);
        setData(result);
      } catch (err) {
        console.error(err);
      }
    };

    loadData();
  }, []);

  if (!data) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", height: "50vh", alignItems: "center" }}
        aria-label={"loading..."}
      >
        <CircularProgress />
      </div>
    );
  }
  const faqData = data.generique.content["faq-data"];

  return (
    <div>
      <title>{`${t("contact support")} - ${t("service tagline")}`}</title>
      <div className={fr.cx("fr-container")}>
        {!isAuthenticated ? (
          <div>page d'assistance lorsque l'utilisateur est connecté</div>
        ) : (
          <OfflineSupport faqData={faqData} />
        )}
      </div>
    </div>
  );
}
