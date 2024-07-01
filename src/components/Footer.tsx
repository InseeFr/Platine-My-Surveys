import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { Footer as DSFRFooter } from "@codegouvfr/react-dsfr/Footer";
import logoInsee from "assets/logo-insee.png";
import { declareComponentKeys, useTranslation } from "i18n";

export function Footer() {
  const { t } = useTranslation("Footer");

  return (
    <DSFRFooter
      accessibility="non compliant"
      operatorLogo={{
        alt: t("operator logo alt"),
        imgUrl: logoInsee,
        orientation: "vertical",
      }}
      termsLinkProps={{
        href: "#",
      }}
      domains={["insee.fr", "legifrance.gouv.fr", "service-public.fr", "cnil.fr"]}
      // TODO: change links
      bottomItems={[
        {
          text: t("personal data"),
          linkProps: {
            to: "/mon-compte",
          },
        },
        {
          text: t("cookies"),
          linkProps: {
            to: "/mon-compte",
          },
        },
        headerFooterDisplayItem,
      ]}
    />
  );
}

const { i18n } = declareComponentKeys<"operator logo alt" | "personal data" | "cookies">()("Footer");

export type I18n = typeof i18n;
