import { fr } from "@codegouvfr/react-dsfr";
import { ComponentKey } from "i18n/types";
import { TranslationFunction } from "i18nifty/typeUtils/TranslationFunction";
import { tss } from "tss-react/dsfr";
import { APISchemas } from "types/api";
import { SurveysStatus, getSurveysStatus } from "./SurveyStatus";
import { ActionButton } from "./ActionButton";

type Props = {
  survey: APISchemas["MyQuestioningDto"];
  t: TranslationFunction<"MySurveys", ComponentKey>;
};

export const SurveyCard = ({ survey, t }: Props) => {
  const { classes, cx } = useStyles();

  const status = getSurveysStatus({
    openingDate: survey.openingDate,
    closingDate: survey.closingDate,
    questioningStatus: survey.questioningStatus,
  });

  const formattedClosingDate = survey.closingDate
    ? new Date(survey.closingDate).toLocaleDateString()
    : undefined;

  return (
    <div className={cx(classes.card, "fr-my-2w")}>
      <div className={cx("fr-px-3w", "fr-pt-3w", "fr-pb-0")}>
        <div className={cx("fr-pb-2w")}>
          {SurveysStatus({ status: status, t })}
          <div className={cx(classes.information, "fr-pt-3v", "fr-pt-1w")}>
            <i className={cx("fr-icon-arrow-right-line", classes.arrowIcon)} />
            <p className={cx("fr-mb-0", "fr-text--xs")}>
              {t("respond before")} {formattedClosingDate ?? "-"}
            </p>
          </div>
        </div>
        <div>
          <h5 className={cx("fr-mb-0", "fr-pb-3v")}>{survey.surveyWording}</h5>
          <p>
            {t("identifier label")} {survey.identificationCode}
          </p>
        </div>
      </div>
      <ActionButton
        openingDate={survey.openingDate}
        closingDate={survey.closingDate}
        questioningStatus={survey.questioningStatus}
        accessUrl={survey.accessUrl}
        t={t}
      />
    </div>
  );
};

const useStyles = tss.withName({ SurveyCard }).create({
  card: {
    border: "1px solid",
    borderColor: fr.colors.decisions.border.default.grey.default,
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
  information: {
    display: "flex",
    color: fr.colors.decisions.text.mention.grey.default,
  },
});
