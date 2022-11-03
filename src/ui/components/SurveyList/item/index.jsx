import { ContentPasteGo } from "@mui/icons-material";
import { Chip, Grid, Grow, Button, Link, Paper, Typography, Tooltip } from "@mui/material";
import { isFuture, isPast } from "date-fns";
import { getSurveyStatus } from "../../../../core/functions";
import CloseIcon from "@mui/icons-material/Close";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { surveyDictionary } from "i18n";
import {
  VALINT_QUESTIONING,
  VALPAP_QUESTIONING,
  PARTIELINT_QUESTIONING,
  HC_QUESTIONING,
  REFUSAL_QUESTIONING,
} from "core/constants";

export const SurveyItem = ({ survey, index }) => {
  const {
    identificationCode,
    surveyWording,
    openingDate,
    closingDate,
    returnDate,
    questioningStatus,
    questioningDate /*, accessUrl*/,
  } = survey;

  const getMessageDisplay = () => {
    var message;
    switch (questioningStatus) {
      case PARTIELINT_QUESTIONING:
        message =
          isPast(new Date(openingDate)) && isFuture(new Date(returnDate))
            ? surveyDictionary.surveyMessagePartielIntOpen(returnDate)
            : surveyDictionary.surveyMessagePartielIntNotOpen;
        break;
      case HC_QUESTIONING:
        message = surveyDictionary.surveyMessageHC;
        break;
      case VALPAP_QUESTIONING:
        message = surveyDictionary.surveyMessageValPap(questioningDate);
        break;
      case VALINT_QUESTIONING:
        message = surveyDictionary.surveyMessageValInt(questioningDate);
        break;
      case REFUSAL_QUESTIONING:
        message = surveyDictionary.surveyMessageRefusal;
        break;
      default:
        if (isFuture(new Date(openingDate))) {
          message = surveyDictionary.surveyMessageIncoming(openingDate);
        }
        if (isPast(new Date(openingDate)) && isFuture(new Date(returnDate))) {
          message = surveyDictionary.surveyMessageOpen(returnDate);
        }
        if (isPast(new Date(returnDate)) && isFuture(new Date(closingDate))) {
          message = surveyDictionary.surveyMessageClosing(closingDate);
        }

        if (isPast(new Date(closingDate))) {
          message = surveyDictionary.surveyMessageClosed(returnDate);
        }
        break;
    }
    return message;
  };

  const getLogoType = () => {
    if (
      getSurveyStatus(openingDate, closingDate, returnDate).status === surveyDictionary.surveyIncoming
    ) {
      return <HourglassEmptyIcon />;
    }
    if (questioningStatus === VALINT_QUESTIONING || questioningStatus === VALPAP_QUESTIONING) {
      return <CheckCircleIcon />;
    }
    if (
      questioningStatus === HC_QUESTIONING ||
      questioningStatus === REFUSAL_QUESTIONING ||
      getSurveyStatus(openingDate, closingDate, returnDate).status === surveyDictionary.surveyClosed
    ) {
      return <CloseIcon />;
    }
    if (
      getSurveyStatus((openingDate, closingDate, returnDate).status === surveyDictionary.surveyOpen) ||
      getSurveyStatus((openingDate, closingDate, returnDate).status === surveyDictionary.surveyClosing)
    ) {
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

    return "nothing";
  };

  return (
    <Grow
      in
      style={{ transformOrigin: "0 0 0" }}
      timeout={(1 + index) * 400 < 2000 ? (1 + index) * 400 : 2000}
    >
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: "100%",
          marginBottom: "15px",
          flexGrow: 1,
          backgroundColor: theme => (theme.palette.mode === "dark" ? "#1A2027" : "#fff"),
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid
              item
              xs={3}
              md={2}
              sm={2}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Tooltip
                title={`${surveyWording} ${
                  getSurveyStatus(openingDate, closingDate, returnDate).toolTip
                }`}
              >
                <Chip
                  aria-label={`${surveyWording} ${
                    getSurveyStatus(openingDate, closingDate, returnDate).toolTip
                  }`}
                  label={getSurveyStatus(openingDate, closingDate, returnDate).status}
                  color={getSurveyStatus(openingDate, closingDate, returnDate).colorChip}
                />
              </Tooltip>
            </Grid>
            <Grid item xs={5} container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {surveyWording}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <b>{surveyDictionary.suIdentifier}</b>
                  {identificationCode}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {getMessageDisplay()}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              container
              direction="column"
              sx={{ textAlign: "right" }}
              justifyContent="center"
            >
              <Grid item>{getLogoType()}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grow>
  );
};
