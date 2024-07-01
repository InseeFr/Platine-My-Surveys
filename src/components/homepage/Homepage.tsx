import { declareComponentKeys, useTranslation } from "i18n";
import Banner from "../../assets/banner.svg";
import { SideMenu } from "@codegouvfr/react-dsfr/SideMenu";
import { Outlet } from "@tanstack/react-router";
import { tss } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";
import Divider from "@mui/material/Divider";
import Button from "@codegouvfr/react-dsfr/Button";

export const Homepage = () => {
  const { t } = useTranslation("Homepage");
  const { classes, cx } = useStyles();

  return (
    <div className={classes.pageContainer}>
      <img src={Banner} alt="" role="presentation" width={"100%"} />
      <div className={classes.container}>
        <LoginSection className={cx("fr-hidden-md")} />
        <div className={classes.sideMenu}>
          <SideMenu
            align="left"
            burgerMenuButtonText={t("in this section")}
            fullHeight={true}
            items={[
              {
                linkProps: {
                  to: "/accueil/introduction",
                },
                text: t("survey introduction"),
              },
              {
                linkProps: {
                  to: "/accueil/cadre-juridique",
                },
                text: t("legal framework"),
              },
              {
                linkProps: {
                  to: "/accueil/utilisation-reponse",
                },
                text: t("what are your answers for?"),
              },
              {
                linkProps: {
                  href: "#",
                },
                text: t("documents to the surveyed"),
              },
              {
                linkProps: {
                  href: "#",
                },
                text: t("some results"),
              },
            ]}
          />
        </div>
        <Outlet />
        <Divider
          orientation="vertical"
          variant="fullWidth"
          className={cx("fr-hidden", "fr-unhidden-md", classes.divider)}
        />
        <LoginSection />
      </div>
    </div>
  );
};

const LoginSection = ({ className }: { className?: string }) => {
  const { t } = useTranslation("Homepage");
  const { t: headerTranslation } = useTranslation("Header");
  const { classes, cx } = useStyles();

  return (
    <div className={className}>
      <section className={cx(classes.loginSection)}>
        <h4>{t("respond to survey")}</h4>
        <p className={cx("fr-hidden", "fr-unhidden-md")}>{t("respond to survey detail")}</p>
        <p className={cx("fr-hidden-md", "fr-text--sm")}>{t("respond to survey detail")}</p>

        <div className={classes.estimatedResponseTime}>
          <span className="fr-icon-time-fill fr-icon--sm" aria-hidden="true" />
          {/* TODO: add time when get data */}
          <p className={cx("fr-hidden", "fr-unhidden-md")}>
            {t("estimatedResponseTime", { time: undefined })}
          </p>
          <p className={cx("fr-hidden-md", "fr-text--sm")}>
            {t("estimatedResponseTime", { time: undefined })}
          </p>
        </div>
        <Button
          linkProps={{
            to: "/connexion",
          }}
          className={classes.loginButton}
        >
          {headerTranslation("login")}
        </Button>
      </section>
    </div>
  );
};

const useStyles = tss.withName({ Homepage }).create({
  pageContainer: {
    width: "100vw",
  },
  loginSection: {
    [fr.breakpoints.up("md")]: {
      width: "300px",
    },
  },
  sideMenu: {
    [fr.breakpoints.up("md")]: {
      width: "300px",
    },
    [fr.breakpoints.down("md")]: {
      padding: fr.spacing("2w"),
    },
  },
  container: {
    display: "flex",
    [fr.breakpoints.up("md")]: {
      flex: 1,
      margin: "auto",
      flexDirection: "row",
      paddingTop: fr.spacing("7w"),
      paddingBottom: fr.spacing("7w"),
      width: "80vw",
    },
    [fr.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: fr.spacing("2w"),
    },
  },
  divider: {
    height: "auto",
    margin: `0 ${fr.spacing("3w")}`,
  },
  estimatedResponseTime: {
    display: "flex",
    gap: fr.spacing("1w"),
  },
  loginButton: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

const { i18n } = declareComponentKeys<
  | "survey introduction"
  | "in this section"
  | "legal framework"
  | "what are your answers for?"
  | "documents to the surveyed"
  | "some results"
  | "respond to survey"
  | "respond to survey detail"
  | {
      K: "estimatedResponseTime";
      P: {
        time: number | undefined;
      };
      R: JSX.Element;
    }
>()("Homepage");

export type I18n = typeof i18n;
