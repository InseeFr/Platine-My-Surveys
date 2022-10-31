import { ContentPasteGo } from "@mui/icons-material";
import { Chip, Grid, Grow, IconButton, Link, Paper, Typography, Tooltip } from "@mui/material";
import { isFuture, isPast } from "date-fns";
import { getSurveyStatus } from "../../../../core/functions";
import WarningIcon from "@mui/icons-material/Warning";
import CloseIcon from "@mui/icons-material/Close";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { surveyDictionary } from "i18n";

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
      case "PARTIELINT":
        message =
          isPast(new Date(openingDate)) && isFuture(new Date(returnDate))
            ? surveyDictionary.surveyMessagePartielIntOpen(returnDate)
            : surveyDictionary.surveyMessagePartielIntNotOpen;
        break;
      case "HC":
        message = surveyDictionary.surveyMessageHC;
        break;
      case "VALPAP":
        message = surveyDictionary.surveyMessageValPap(questioningDate);
        break;
      case "VALINT":
        message = surveyDictionary.surveyMessageValInt(questioningDate);
        break;
      case "REFUSAL":
        message = surveyDictionary.surveyMessageRefusal;
        break;
      default:
        if (isFuture(new Date(openingDate))) {
          message = surveyDictionary.surveyMessageIncoming(openingDate);
        }
        if (isPast(new Date(openingDate)) && isFuture(new Date(returnDate))) {
          message = surveyDictionary.surveyMessageOpen(returnDate);
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
      return <HourglassEmptyIcon color="primary" />;
    }
    if (questioningStatus === "VALINT" || questioningStatus === "VALPAP") {
      return <CheckCircleIcon color="success" />;
    }
    if (
      questioningStatus === "HC" ||
      questioningStatus === "REFUSAL" ||
      getSurveyStatus(openingDate, closingDate, returnDate).status === surveyDictionary.surveyClosed
    ) {
      return <CloseIcon color="error" />;
    }
    if (getSurveyStatus(openingDate, closingDate, returnDate).status === surveyDictionary.surveyOpen) {
      return (
        <Link
          href="https://stromae-v2.dev.insee.io/visualize?questionnaire=https%3A%2F%2Fpogues-back-office.dev.insee.io%2Fapi%2Fpersistence%2Fquestionnaire%2Fjson-lunatic%2Fkzqsw3qa-q-0-1647855585412"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton aria-label={surveyDictionary.accessSurvey}>
            <Typography>{surveyDictionary.accessSurvey}</Typography>
            <ContentPasteGo />
          </IconButton>
        </Link>
      );
    }
    if (
      getSurveyStatus(openingDate, closingDate, returnDate).status === surveyDictionary.surveyClosing
    ) {
      return <WarningIcon color="warning" />;
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
                title={`L'enquête ${surveyWording} ${
                  getSurveyStatus(openingDate, closingDate, returnDate).toolTip
                }`}
              >
                <Chip
                  aria-label={`L'enquête ${surveyWording} ${
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
