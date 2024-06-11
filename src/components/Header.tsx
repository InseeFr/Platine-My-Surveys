import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import logoInsee from "assets/logo-insee.png";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { declareComponentKeys, useTranslation, useLang } from "i18n";
import { LanguageSelector } from "components/LanguageSelector";
import { fr } from "@codegouvfr/react-dsfr";
import { useLogout } from "hooks/useAuth";

export function Header() {
  const { t } = useTranslation("Header");
  const { lang, setLang } = useLang();
  const logout = useLogout();

  return (
    <DsfrHeader
      brandTop={
        <>
          République
          <br />
          Française
        </>
      }
      homeLinkProps={{
        to: "/",
        title: t("home link title"),
      }}
      quickAccessItems={
        logout && [
          {
            buttonProps: {
              "aria-controls": "translate-select",
              "aria-expanded": false,
              title: t("select language"),
              className: fr.cx("fr-btn--tertiary", "fr-translate", "fr-nav"),
            },
            iconId: "fr-icon-translate-2",
            text: <LanguageSelector lang={lang} setLang={setLang} />,
          },
          headerFooterDisplayItem,
          {
            iconId: "ri-account-box-line",
            buttonProps: {
              onClick: () =>
                logout({
                  redirectTo: "specific url",
                  url: `${import.meta.env.VITE_PORTAIL_URL}`,
                }),
            },
            text: t("logout"),
          },
        ]
      }
      serviceTagline={t("service tagline")}
      serviceTitle={t("service title")}
      operatorLogo={{
        alt: t("operator logo alt"),
        imgUrl: logoInsee,
        orientation: "vertical",
      }}
      navigation={(() =>
        (
          [
            ["/mes-enquetes", t("page title surveys")],
            ["/mon-compte", t("my account")],
          ] as const
        ).map(([to, label]) => ({
          text: label,
          linkProps: {
            to,
          },
        })))()}
    />
  );
}

const { i18n } = declareComponentKeys<
  | "select language"
  | "home link title"
  | "login"
  | "logout"
  | "my account"
  | "service title"
  | "service tagline"
  | "operator logo alt"
  | "page title surveys"
>()("Header");

export type I18n = typeof i18n;
