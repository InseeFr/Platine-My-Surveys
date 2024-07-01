import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import logoInsee from "assets/logo-insee.png";
import { declareComponentKeys, useTranslation, useLang } from "i18n";
import { LanguageSelector } from "components/LanguageSelector";
import { fr } from "@codegouvfr/react-dsfr";
import { useIsAuthenticated } from "hooks/useAuth";

export function Header() {
  const { t } = useTranslation("Header");
  const { lang, setLang } = useLang();

  const { isAuthenticated } = useIsAuthenticated();

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
        isAuthenticated
          ? [
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

              {
                iconId: "fr-icon-todo-fill",
                linkProps: {
                  to: "/mes-enquetes",
                },
                text: t("page title surveys"),
              },
              {
                iconId: "fr-icon-user-fill",
                linkProps: {
                  to: "/mon-compte",
                },
                text: t("my account"),
              },
            ]
          : [
              {
                iconId: "fr-icon-customer-service-fill",
                linkProps: {
                  to: "/assistance",
                },
                text: t("contact support"),
              },
              {
                iconId: "fr-icon-user-fill",
                linkProps: {
                  to: "/connexion",
                },
                text: t("login"),
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
  | "contact support"
>()("Header");

export type I18n = typeof i18n;
