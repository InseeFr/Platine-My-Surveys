import { declareComponentKeys, useTranslation } from "i18n";
import Banner from "../../assets/banner.svg";
import { SideMenu } from "@codegouvfr/react-dsfr/SideMenu";
import { Outlet } from "@tanstack/react-router";
import { tss } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";
import Divider from "@mui/material/Divider";
import Button from "@codegouvfr/react-dsfr/Button";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { ContentSurvey } from "types/ContentSurvey";

type Props = {
  survey: ContentSurvey;
};

export const SurveyHomepage = ({ survey }: Props) => {
  const { t } = useTranslation("SurveyHomepage");
  const { t: supportTranslation } = useTranslation("Support");
  const { classes, cx } = useStyles();

  return (
    <div>
      <Breadcrumb
        currentPageLabel={survey?.titleShort}
        homeLinkProps={{
          to: "/",
        }}
        className="fr-mb-1w"
        segments={[]}
      />
      <h2 className="fr-mb-2w">{survey?.title}</h2>
      <a
        className="fr-link"
        title={`${t("surveyLink")} - ${t("openNewWindow")}`}
        href={survey.content["enquete-en-detail"]["menu-link"]}
        target="_blank"
      >
        {t("surveyLink")}
      </a>
      <img
        src={Banner}
        alt=""
        role="presentation"
        width={"100%"}
        className={cx("fr-unhidden-md", "fr-hidden")}
      />

      <img
        src={Banner}
        alt=""
        role="presentation"
        style={{ width: "100vw", transform: "translateX(-3.5%)" }}
        className={cx("fr-hidden-md")}
      />

      <div
        id="content"
        className={fr.cx(
          "fr-grid-row",
          "fr-grid-row--center",
          "fr-pt-md-7w",
          "fr-p-2w",
          "fr-p-md-0",
          "fr-col-12",
        )}
      >
        <LoginSection className={cx("fr-hidden-md")} />
        <div className={fr.cx("fr-col-12", "fr-col-md-3", "fr-p-2w", "fr-p-md-0")}>
          <SideMenu
            align="left"
            burgerMenuButtonText={t("in this section")}
            fullHeight
            className={classes.menu}
            items={[
              {
                linkProps: {
                  to: "/$survey/introduction",
                  params: { survey: survey.id },
                },
                text: t("survey introduction"),
              },
              {
                linkProps: {
                  to: "/$survey/cadre-juridique",
                  params: {
                    survey: survey.id,
                  },
                },
                text: t("legal framework"),
              },
              {
                linkProps: {
                  to: "/$survey/utilisation-reponse",
                  params: {
                    survey: survey.id,
                  },
                },
                text: t("what are your answers for?"),
              },
              {
                linkProps: {
                  to: "/$survey/documents",
                  params: {
                    survey: survey.id,
                  },
                },
                text: t("documents to the surveyed"),
              },
              {
                linkProps: {
                  to: "/$survey/resultats",
                  params: {
                    survey: survey.id,
                  },
                },
                text: t("some results"),
              },
              {
                linkProps: {
                  to: "/$survey/faq",
                  params: {
                    survey: survey.id,
                  },
                },
                text: supportTranslation("FAQ"),
              },
              {
                linkProps: {
                  to: "/$survey/assistance",
                  params: {
                    survey: survey.id,
                  },
                },
                text: supportTranslation("contact support"),
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
  const { t } = useTranslation("SurveyHomepage");
  const { t: headerTranslation } = useTranslation("Header");
  const { classes, cx } = useStyles();

  return (
    <div className={cx(className, "fr-col-12", "fr-col-md-3")}>
      <h4>{t("respond to survey")}</h4>
      <p className={cx("fr-hidden", "fr-unhidden-md")}>{t("respond to survey detail")}</p>
      <p className={cx("fr-hidden-md", "fr-text--sm")}>{t("respond to survey detail")}</p>

      <div className={fr.cx("fr-grid-row")} style={{ "flexWrap": "nowrap" }}>
        <span className="fr-icon-time-fill fr-icon--sm fr-pr-1w" aria-hidden="true" />
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
    </div>
  );
};

const useStyles = tss.withName({ SurveyHomepage }).create({
  divider: {
    height: "auto",
    margin: `0 ${fr.spacing("3w")}`,
  },
  loginButton: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  menu: {
    height: "100%",
    ".fr-sidemenu__inner": {
      height: "100%",
    },
  },
});

const { i18n } = declareComponentKeys<
  | "survey introduction"
  | "surveyLink"
  | "openNewWindow"
  | "homepage"
  | "in this section"
  | "legal framework"
  | "what are your answers for?"
  | "documents to the surveyed"
  | "some results"
  | "respond to survey"
  | "respond to survey detail"
  | "title"
  | {
      K: "estimatedResponseTime";
      P: {
        time: number | undefined;
      };
      R: JSX.Element;
    }
>()("SurveyHomepage");

export type I18n = typeof i18n;
