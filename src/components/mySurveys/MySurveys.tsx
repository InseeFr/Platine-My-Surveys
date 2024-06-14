import { tss } from "tss";
import { fr } from "@codegouvfr/react-dsfr";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";
import { APISchemas } from "types/api";
import Search from "../../assets/search.svg";
import { SurveysDatagrid, getColumns } from "./SurveysDatagrid";
import CircularProgress from "@mui/material/CircularProgress";

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
    <section className={cx(className)}>
      <div className={classes.titleContainer}>
        <img src={Search} alt="" role="presentation" className={classes.search} />
        <h1>{t("title my surveys")}</h1>
      </div>
      {isLoading ? (
        <div>
          <h6 id="tableTitle">{t("surveys table title")}</h6>
          <div style={{ display: "flex", justifyContent: "center" }} aria-label={t("loading surveys")}>
            <CircularProgress />
          </div>
        </div>
      ) : (
        <div>
          <h6 id="tableTitle">{t("surveys table title")}</h6>

          <SurveysDatagrid
            className={` ${classes.datagrid}`}
            surveys={surveys}
            t={t}
            columns={columns}
          />
        </div>
      )}
    </section>
  );
}

const useStyles = tss.withName({ MySurveys }).create({
  titleContainer: {
    display: "flex",
    alignItems: "center",
    gap: fr.spacing("4w"),
  },
  search: {
    paddingBottom: fr.spacing("3w"),
  },
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
  | "future"
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
>()("MySurveys");

export type I18n = typeof i18n;
