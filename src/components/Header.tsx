import { useOidc } from "oidc";
import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import logoInsee from "assets/logo-insee.png";
import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { declareComponentKeys, useTranslation, useLang } from "i18n";
import { LanguageSelector } from "components/LanguageSelector";
import { fr } from "@codegouvfr/react-dsfr";

export function Header() {
  const { isUserLoggedIn, logout, login } = useOidc();

  const { t } = useTranslation("Header");

  const { lang, setLang } = useLang();

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
      quickAccessItems={[
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
        ...(!isUserLoggedIn
          ? [
              {
                iconId: "fr-icon-lock-line",
                buttonProps: {
                  onClick: () => login({ doesCurrentHrefRequiresAuth: false }),
                },
                text: t("login"),
              } as const,
            ]
          : [
              {
                iconId: "ri-account-box-line",
                buttonProps: {
                  onClick: () =>
                    logout({
                      redirectTo: "home",
                    }),
                },
                text: t("logout"),
              } as const,
              {
                iconId: "fr-icon-account-fill",
                linkProps: {
                  to: "/account",
                },
                text: t("my account"),
              } as const,
            ]),
      ]}
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
