import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { Footer as DSFRFooter } from "@codegouvfr/react-dsfr/Footer";
import logoInsee from "assets/logo-insee.png";
import sspLogo from "assets/logo-ssp.jpg";
import { declareComponentKeys, useTranslation } from "i18n";
import { Follow } from "@codegouvfr/react-dsfr/Follow";

export function Footer({ className }: { className?: string }) {
  const { t } = useTranslation("Footer");

  return (
    <>
      <Follow
        className={className}
        social={{
          buttons: [
            {
              linkProps: {
                href: "https://x.com/inseefr",
              },
              type: "twitter-x",
            },
          ],
        }}
      />
      <DSFRFooter
        className={className}
        accessibility="non compliant"
        id="footer"
        operatorLogo={{
          alt: t("operator logo alt"),
          imgUrl: logoInsee,
          orientation: "vertical",
        }}
        termsLinkProps={{
          to: "/mentions-legales",
        }}
        domains={["insee.fr", "legifrance.gouv.fr", "service-public.fr", "cnil.fr"]}
        // TODO: change links
        bottomItems={[
          {
            text: t("personal data"),
            linkProps: {
              to: "/",
            },
          },
          {
            text: t("cookies"),
            linkProps: {
              to: "/",
            },
          },
          headerFooterDisplayItem,
        ]}
        partnersLogos={{
          main: {
            alt: t("ssp logo alt"),
            imgUrl: sspLogo,
          },
        }}
      />
    </>
  );
}

const { i18n } = declareComponentKeys<
  "operator logo alt" | "ssp logo alt" | "personal data" | "cookies"
>()("Footer");

export type I18n = typeof i18n;
