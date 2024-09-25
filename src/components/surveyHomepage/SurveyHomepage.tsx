import { declareComponentKeys, useTranslation } from "i18n";
import Banner from "../../assets/banner.svg";
import { SideMenu, SideMenuProps } from "@codegouvfr/react-dsfr/SideMenu";
import { Outlet } from "@tanstack/react-router";
import { tss } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";
import Divider from "@mui/material/Divider";
import Button from "@codegouvfr/react-dsfr/Button";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { ContentSurvey } from "types/ContentSurvey";
import { useFetchQueryPortail } from "hooks/useFetchQuery";
import { Loading } from "./Loading";
import { APISchemas } from "types/apiPortail";

type Props = {
  survey: ContentSurvey;
};

export const SurveyHomepage = ({ survey }: Props) => {
  const { t } = useTranslation("SurveyHomepage");
  const { t: supportTranslation } = useTranslation("Support");
  const { classes, cx } = useStyles();

  const { data, isLoading } = useFetchQueryPortail("/is-survey-online/{id}", {
    urlParams: {
      id: survey.id,
    },
  });

  if (!data || isLoading) {
    return <Loading />;
  }

  const sideMenuItems: SideMenuProps.Item[] = [
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
  ];

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
        <LoginSection className={cx("fr-hidden-md")} data={data} />
        <div className={fr.cx("fr-col-12", "fr-col-md-3", "fr-p-2w", "fr-p-md-0")}>
          <label className="fr-sr-only" id={"sideMenu-title"}>
            {" "}
            {t("sideMenuTitle")}
          </label>
          <SideMenu
            align="left"
            id="sideMenu"
            burgerMenuButtonText={t("in this section")}
            fullHeight
            className={classes.menu}
            items={
              data.opened
                ? [
                    ...sideMenuItems,
                    {
                      linkProps: {
                        to: "/$survey/assistance",
                        params: {
                          survey: survey.id,
                        },
                      },
                      text: supportTranslation("contact support"),
                    },
                  ]
                : sideMenuItems
            }
          />
        </div>
        <Outlet />
        <Divider
          orientation="vertical"
          variant="fullWidth"
          className={cx("fr-hidden", "fr-unhidden-md", classes.divider)}
        />
        <LoginSection data={data} />
      </div>
    </div>
  );
};

const LoginSection = ({ className, data }: { className?: string; data: APISchemas["SurveyStatus"] }) => {
  const { t } = useTranslation("SurveyHomepage");
  const { t: headerTranslation } = useTranslation("Header");
  const { classes, cx } = useStyles();

  return (
    <div className={cx(className, "fr-col-12", "fr-col-md-3")}>
      <h4>{t("respond to survey")}</h4>
      {data.opened ? (
        <>
          (<p className={cx("fr-hidden", "fr-unhidden-md")}>{t("respond to survey detail")}</p>
          <p className={cx("fr-hidden-md", "fr-text--sm")}>{t("respond to survey detail")}</p>
          <Button
            linkProps={{
              to: "/connexion",
            }}
            className={classes.loginButton}
          >
            {headerTranslation("login")}
          </Button>
          )
        </>
      ) : (
        <>
          <p className={cx("fr-hidden", "fr-unhidden-md")}>
            {data.messageSurveyOffline} <br /> {data.messageInfoSurveyOffline}
          </p>
          <p className={cx("fr-hidden-md", "fr-text--sm")}>
            {data.messageSurveyOffline} <br /> {data.messageInfoSurveyOffline}
          </p>
        </>
      )}
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
  | "sideMenuTitle"
  | "in this section"
  | "legal framework"
  | "what are your answers for?"
  | "documents to the surveyed"
  | "some results"
  | "respond to survey"
  | "respond to survey detail"
  | "title"
>()("SurveyHomepage");

export type I18n = typeof i18n;
