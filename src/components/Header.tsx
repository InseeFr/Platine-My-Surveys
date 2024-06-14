import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import logoInsee from "assets/logo-insee.png";
import { declareComponentKeys, useTranslation, useLang } from "i18n";
import { LanguageSelector } from "components/LanguageSelector";
import { fr } from "@codegouvfr/react-dsfr";
import { useLogout } from "hooks/useAuth";

export function Header() {
  const { t } = useTranslation("Header");
  // const { lang, setLang } = useLang();
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
          // {
          //   buttonProps: {
          //     "aria-controls": "translate-select",
          //     "aria-expanded": false,
          //     title: t("select language"),
          //     className: fr.cx("fr-btn--tertiary", "fr-translate", "fr-nav"),
          //   },
          //   iconId: "fr-icon-translate-2",
          //   text: <LanguageSelector lang={lang} setLang={setLang} />,
          // },

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
