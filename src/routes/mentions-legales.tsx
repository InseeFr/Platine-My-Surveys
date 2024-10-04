import { createFileRoute } from "@tanstack/react-router";
import { LegalInformation } from "components/LegalInformation";
import { useTranslation } from "i18n";
import { Helmet } from "react-helmet-async";

export const Route = createFileRoute("/mentions-legales")({
  component: Index,
});

function Index() {
  const { t: headerTranslation } = useTranslation("Header");
  const { t } = useTranslation("LegalInformation");

  return (
    <div>
      <Helmet>
        <title>{`${t("pageTitle")} - ${headerTranslation("service tagline")}`} </title>
      </Helmet>
      <LegalInformation />
    </div>
  );
}
