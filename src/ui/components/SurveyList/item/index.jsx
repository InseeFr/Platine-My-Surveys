import { Chip, Grid, Grow, Paper, Tooltip, Typography } from "@mui/material";
import {
  HC_QUESTIONING,
  PARTIELINT_QUESTIONING,
  REFUSAL_QUESTIONING,
  VALINT_QUESTIONING,
  VALPAP_QUESTIONING,
} from "core/constants";
import { isFuture, isPast } from "date-fns";
import { surveyDictionary } from "i18n";
import { getSurveyStatus } from "../../../../core/functions";
import { ItemIcon } from "./itemIcon";

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
              xs={12}
              sm={2}
              md={2}
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
            <Grid item xs={12} sm={5} container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {surveyWording}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <b>{surveyDictionary.suIdentifier}</b>
                  {identificationCode}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              spacing={1}
              container
              direction="column"
              sx={{ textAlign: "right" }}
              justifyContent="center"
            >
              <Grid item>
                <ItemIcon
                  status={getSurveyStatus(openingDate, closingDate, returnDate).status}
                  questioningStatus={questioningStatus}
                  surveyWording={surveyWording}
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  {getMessageDisplay()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grow>
  );
};
