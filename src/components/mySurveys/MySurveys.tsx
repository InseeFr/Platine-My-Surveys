import { tss } from "tss";
import { fr } from "@codegouvfr/react-dsfr";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";
import { APISchemas } from "types/api";
import { SurveysDatagrid, getColumns } from "./SurveysDatagrid";
import CircularProgress from "@mui/material/CircularProgress";
import { SurveyCard } from "./SurveyCard";
import { SearchIcon } from "assets/Search";

type Props = {
  className?: string;
  surveys: APISchemas["MyQuestioningDto"][];
  isLoading: boolean;
};

export function MySurveys({ className, surveys, isLoading }: Props) {
  const { classes, cx } = useStyles();

  const { t } = useTranslation("MySurveys");

  const columns = getColumns(t);
  return (
    <section className={cx(className)} id="content">
      <div className={fr.cx("fr-grid-row", "fr-grid-row--middle")} style={{ "flexWrap": "nowrap" }}>
        <SearchIcon />
        <h1>{t("title my surveys")}</h1>
      </div>
      {isLoading ? (
        <div>
          <h6 className={cx("fr-hidden", "fr-unhidden-sm")} id="tableTitle">
            {t("surveys table title")}
          </h6>
          <div style={{ display: "flex", justifyContent: "center" }} aria-label={t("loading surveys")}>
            <CircularProgress />
          </div>
        </div>
      ) : (
        <div>
          <h6 id="tableTitle" className={cx("fr-hidden fr-unhidden-sm")}>
            {t("surveys table title")}
          </h6>

          <SurveysDatagrid
            className={cx("fr-hidden fr-unhidden-sm", classes.datagrid)}
            surveys={surveys}
            t={t}
            columns={columns}
          />
          <div className={cx("fr-hidden-sm")}>
            {surveys.map(survey => (
              <SurveyCard
                survey={survey}
                t={t}
                key={`${survey.identificationCode}-${survey.surveyWording}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

const useStyles = tss.withName({ MySurveys }).create({
  datagrid: {
    ".MuiDataGrid-columnHeader": {
      backgroundColor: fr.colors.decisions.background.contrast.grey.default,
    },
    ".MuiDataGrid-columnHeaders": {
      borderBottom: `solid 3px ${fr.colors.decisions.border.actionHigh.grey.default}`,
    },
    ".MuiDataGrid-cell": {
      paddingTop: fr.spacing("2v"),
      paddingBottom: fr.spacing("2v"),
    },
    ".MuiDataGrid-iconButtonContainer": {
      visibility: "visible",
    },
    ".MuiDataGrid-sortIcon": {
      opacity: "inherit !important",
    },
    ".MuiDataGrid-columnHeaderTitleContainer": {
      overflow: "visible",
      whiteSpace: "normal",
      textAlign: "left",
    },
  },
});

const { i18n } = declareComponentKeys<
  | "title my surveys"
  | "closed"
  | "opened"
  | "unstarted"
  | "search"
  | "surveys"
  | "surveys table title"
  | "goToSurvey"
  | "status"
  | "survey name"
  | "identifier"
  | "actions"
  | "respond before"
  | "on"
  | "entities displayed"
  | "loading surveys"
  | "identificationCode column"
  | "survey name column"
  | "status column"
  | "respond before column"
  | "actions column"
  | "sortable column"
  | "identifier label"
  | "download deposit proof"
  | "continue"
  | "from"
>()("MySurveys");

export type I18n = typeof i18n;
