import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { ComponentKey } from "i18n/types";
import { TranslationFunction } from "i18nifty/typeUtils/TranslationFunction";
import { Status } from "./SurveysDatagrid";

type SurveyStatusProps = {
  openingDate?: string;
  closingDate?: string;
  questioningStatus?: string;
};

export const getSurveysStatus = ({
  openingDate,
  closingDate,
  questioningStatus,
}: SurveyStatusProps): Status | undefined => {
  const currentDate = new Date(Date.now());

  if (!openingDate || !closingDate) {
    return;
  }

  const formatedOpeningDate = new Date(openingDate);
  const formatedClosingDate = new Date(closingDate);

  if (questioningStatus === "VALINT" || currentDate > formatedClosingDate) {
    return "closed";
  }

  if (questioningStatus !== "PARTIELINT" && currentDate < formatedClosingDate) {
    return "unstarted";
  }

  if (
    questioningStatus === "PARTIELINT" &&
    currentDate < formatedClosingDate &&
    currentDate > formatedOpeningDate
  ) {
    return "opened";
  }
};

export const SurveysStatus = ({
  status,
  t,
}: {
  status?: Status;
  t: TranslationFunction<"MySurveys", ComponentKey>;
}) => {
  switch (status) {
    case "unstarted":
      return <Badge severity="new">{t(status)}</Badge>;
    case "closed":
      return <Badge severity="success">{t(status)}</Badge>;
    case "opened":
      return <Badge severity="info">{t(status)}</Badge>;
    default:
      return;
  }
};
