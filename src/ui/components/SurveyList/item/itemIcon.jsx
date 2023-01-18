import { ContentPasteGo } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { Button, Typography } from "@mui/material";
import {
  HC_QUESTIONING,
  REFUSAL_QUESTIONING,
  VALINT_QUESTIONING,
  VALPAP_QUESTIONING,
} from "core/constants";
import { surveyDictionary } from "i18n";
import "./itemIcon.css";

export const ItemIcon = ({ surveyWording, status, questioningStatus }) => {
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
        <Button
          aria-label={`${surveyDictionary.accessSurvey} ${surveyWording}`}
          sx={{ textTransform: "none" }}
          className="go-to-questionnaire"
          variant="contained"
          href="https://stromae-v2.demo.insee.io/visualize?questionnaire=https%3A%2F%2Fpogues-back-office.dev.insee.io%2Fapi%2Fpersistence%2Fquestionnaire%2Fjson-lunatic%2Fkzqsw3qa-q-0-1647855585412"
          target="_blank"
          rel="noreferrer"
          endIcon={<ContentPasteGo />}
        >
          <Typography>{surveyDictionary.accessSurvey}</Typography>
        </Button>
      );
    }

    return null;
  };
  return getLogoType();
};
