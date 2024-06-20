import { fr } from "@codegouvfr/react-dsfr";
import { ComponentKey } from "i18n/types";
import { TranslationFunction } from "i18nifty/typeUtils/TranslationFunction";
import { tss } from "tss-react/dsfr";
import { APISchemas } from "types/api";
import { SurveysStatus, getSurveysStatus } from "./SurveyStatus";
import { Button } from "@codegouvfr/react-dsfr/Button";

type Props = {
  survey: APISchemas["MyQuestioningDto"];
  t: TranslationFunction<"MySurveys", ComponentKey>;
};

export const SurveyCard = ({ survey, t }: Props) => {
  const { classes, cx } = useStyles();

  const status = getSurveysStatus({
    openingDate: survey.openingDate,
    closingDate: survey.closingDate,
  });

  const formattedClosingDate = survey.closingDate
    ? new Date(survey.closingDate).toLocaleDateString()
    : undefined;

  return (
    <div className={classes.card}>
      <div className={classes.body}>
        <div className={classes.cardSection}>
          {SurveysStatus({ status: status, t })}
          <div className={classes.information}>
            <i className={cx("fr-icon-arrow-right-line", classes.arrowIcon)} />
            <p className={cx(fr.cx("fr-mb-0"), fr.cx("fr-text--xs"))}>
              {t("respond before")} {formattedClosingDate ?? "-"}
            </p>
          </div>
        </div>
        <div className={classes.cardSection}>
          <h5 className={fr.cx("fr-mb-0")}>{survey.surveyWording}</h5>
          <p>
            {t("identifier label")} {survey.identificationCode}
          </p>
        </div>
      </div>
      {survey.accessUrl && (
        <Button
          size="small"
          linkProps={{
            to: survey.accessUrl as any,
          }}
        >
          {t("goToSurvey")}
        </Button>
      )}
    </div>
  );
};

const useStyles = tss.withName({ SurveyCard }).create({
  card: {
    display: "flex",
    flexDirection: "column",
    gap: fr.spacing("2v"),
    border: "1px solid",
    borderColor: fr.colors.decisions.border.default.grey.default,
    padding: fr.spacing("3w"),
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: fr.spacing("2w"),
  },
  arrowIcon: {
    width: "fit-content",
    height: "fit-content",
    display: "flex",
    alignSelf: "center",
    "::before": {
      width: "16px",
      height: "16px",
    },
  },
  cardSection: {
    display: "flex",
    flexDirection: "column",
    gap: fr.spacing("3v"),
  },
  information: {
    display: "flex",
    gap: fr.spacing("1w"),
    color: fr.colors.decisions.text.mention.grey.default,
  },
});
