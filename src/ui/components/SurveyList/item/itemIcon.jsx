import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import CloseIcon from "@mui/icons-material/Close";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ContentPasteGo } from "@mui/icons-material";
import {
  VALINT_QUESTIONING,
  VALPAP_QUESTIONING,
  HC_QUESTIONING,
  REFUSAL_QUESTIONING,
} from "core/constants";
import { surveyDictionary } from "i18n";
import { Link, Button, Typography } from "@mui/material";

export const ItemIcon = ({ status, questioningStatus }) => {
  const getLogoType = () => {
    if (status === surveyDictionary.surveyIncoming) {
      return <HourglassEmptyIcon />;
    }
    if (questioningStatus === VALINT_QUESTIONING || questioningStatus === VALPAP_QUESTIONING) {
      return <CheckCircleIcon />;
    }
    if (
      questioningStatus === HC_QUESTIONING ||
      questioningStatus === REFUSAL_QUESTIONING ||
      status === surveyDictionary.surveyClosed
    ) {
      return <CloseIcon />;
    }
    if (status === surveyDictionary.surveyOpen || status === surveyDictionary.surveyClosing) {
      return (
        <Link
          href="https://stromae-v2.dev.insee.io/visualize?questionnaire=https%3A%2F%2Fpogues-back-office.dev.insee.io%2Fapi%2Fpersistence%2Fquestionnaire%2Fjson-lunatic%2Fkzqsw3qa-q-0-1647855585412"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            aria-label={surveyDictionary.accessSurvey}
            sx={{ textTransform: "none" }}
            variant="contained"
            endIcon={<ContentPasteGo />}
          >
            <Typography>{surveyDictionary.accessSurvey}</Typography>
          </Button>
        </Link>
      );
    }

    return null;
  };
  return getLogoType();
};
