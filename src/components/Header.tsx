import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import logoInsee from "assets/logo-insee.png";
import { declareComponentKeys, useTranslation } from "i18n";
import { fr } from "@codegouvfr/react-dsfr";
import { useIsAuthenticated, useLogout } from "hooks/useAuth";

export function Header({ className }: { className?: string }) {
  const { t } = useTranslation("Header");

  const { isAuthenticated } = useIsAuthenticated();
  const logout = useLogout();

  return (
    <DsfrHeader
      className={className}
      brandTop={
        <>
          République
          <br />
          Française
        </>
      }
      id="header"
      homeLinkProps={{
        to: "/",
        title: t("home link title"),
      }}
      quickAccessItems={
        !isAuthenticated
          ? [
              {
                iconId: "fr-icon-customer-service-fill",
                linkProps: {
                  to: "/assistance",
                },
                text: t("contact support"),
              },
              {
                iconId: "fr-icon-account-circle-fill",
                linkProps: {
                  to: "/mon-compte",
                },
                text: t("my account"),
              },
              {
                iconId: "fr-icon-logout-box-r-line",

                buttonProps: {
                  className: fr.cx("fr-btn--tertiary", "fr-nav"),
                  onClick: () =>
                    logout &&
                    logout({ redirectTo: "specific url", url: `${import.meta.env.VITE_PORTAIL_URL}/` }),
                },
                text: t("logout"),
              },
            ]
          : []
      }
      serviceTitle={t("service tagline")}
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
  | "service tagline"
  | "operator logo alt"
  | "page title surveys"
  | "contact support"
  | "header"
  | "content"
  | "footer"
  | "my surveys"
>()("Header");

export type I18n = typeof i18n;
