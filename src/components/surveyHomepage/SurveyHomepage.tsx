import { declareComponentKeys, useTranslation } from "i18n";
import Banner from "../../assets/banner.svg";
import { SideMenu } from "@codegouvfr/react-dsfr/SideMenu";
import { Outlet } from "@tanstack/react-router";
import { tss } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";
import Divider from "@mui/material/Divider";
import Button from "@codegouvfr/react-dsfr/Button";

type Props = {
  surveyId: string;
};

export const SurveyHomepage = ({ surveyId }: Props) => {
  const { t } = useTranslation("SurveyHomepage");
  const { classes, cx } = useStyles();

  return (
    <div>
      <img src={Banner} alt="" role="presentation" width={"100%"} />
      <div
        id="content"
        className={fr.cx(
          "fr-grid-row",
          "fr-grid-row--center",
          "fr-py-md-7w",
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
            fullHeight={true}
            items={[
              {
                linkProps: {
                  to: "/$survey/introduction",
                  params: { survey: surveyId },
                },
                text: t("survey introduction"),
              },
              {
                linkProps: {
                  to: "/$survey/cadre-juridique",
                  params: {
                    survey: surveyId,
                  },
                },
                text: t("legal framework"),
              },
              {
                linkProps: {
                  to: "/$survey/utilisation-reponse",
                  params: {
                    survey: surveyId,
                  },
                },
                text: t("what are your answers for?"),
              },
              {
                linkProps: {
                  to: "/$survey/utilisation-reponse",
                  params: {
                    survey: surveyId,
                  },
                },
                text: t("documents to the surveyed"),
              },
              {
                linkProps: {
                  to: "/$survey/utilisation-reponse",
                  params: {
                    survey: surveyId,
                  },
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
});

const { i18n } = declareComponentKeys<
  | "survey introduction"
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
