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

export const ItemIcon = ({ status, questioningStatus, accessUrl }) => {
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
          aria-label={surveyDictionary.accessSurvey}
          sx={{ textTransform: "none" }}
          variant="contained"
          href={accessUrl}
          target="_blank"
          endIcon={<ContentPasteGo />}
          rel="noreferrer"
        >
          <Typography>{surveyDictionary.accessSurvey}</Typography>
        </Button>
      );
    }

    return null;
  };
  return getLogoType();
};
