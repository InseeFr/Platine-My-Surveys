import { ContentPasteGo, ListAlt } from "@mui/icons-material";
import { Chip, Grid, Grow, IconButton, Link, Paper, Typography } from "@mui/material";
import { format, isFuture, isPast, differenceInDays } from "date-fns";
import { getSurveyStatus } from "../../../../core/functions";

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

  const surveyOpen = isPast(new Date(openingDate)) && isFuture(new Date(returnDate));

  const getMessageDisplay = () => {
    var message;
    switch (questioningStatus) {
      case "PARTIELINT":
        message =
          isPast(new Date(openingDate)) && isFuture(new Date(returnDate))
            ? `Compléter vos réponses avant le ${format(new Date(returnDate), "dd/MM/yyyy")}`
            : "vous n avez pas finalisé vos réponses";
        break;
      case "HC":
        message = "Vous êtes finalement hors champ de l’étude de l’enquête.";
        break;
      case "VALPAP":
        message = `Vous avez répondu au format papier, votre réponse a été prise en compte le ${questioningDate}`;
        break;
      case "VALINT":
        message = `Vous avez répondu le ${format(new Date(questioningDate), "dd/MM/yyyy")}`;
        break;
      case "REFUSAL":
        message = "Vous avez refusé de répondre à l’enquête.";
        break;
      default:
        if (isFuture(new Date(openingDate))) {
          message = `Répondre à partir du ${format(new Date(openingDate), "dd/MM/yyyy")}`;
        }
        if (isPast(new Date(openingDate)) && isFuture(new Date(returnDate))) {
          message = `Il vous reste ${differenceInDays(
            new Date(returnDate),
            new Date(),
          )} jours pour répondre à l’enquête.`;
        }

        if (isPast(new Date(closingDate))) {
          message = `Votre réponse était attendue pour le ${format(
            new Date(returnDate),
            "dd/MM/yyyy",
          )}.`;
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
          <Grid item>
            <IconButton aria-label="Accéder au questionnaire">
              <ListAlt />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs={7} container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {surveyWording}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <b>{"Identifiant : "}</b>
                  {identificationCode}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {getMessageDisplay()}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={5} container direction="column" sx={{ textAlign: "right" }}>
              <Grid item>
                {surveyOpen && (
                  <Link
                    href="https://stromae-v2.dev.insee.io/visualize?questionnaire=https%3A%2F%2Fpogues-back-office.dev.insee.io%2Fapi%2Fpersistence%2Fquestionnaire%2Fjson-lunatic%2Fkzqsw3qa-q-0-1647855585412"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconButton aria-label="Accéder au questionnaire">
                      <ContentPasteGo />
                    </IconButton>
                  </Link>
                )}
                {!surveyOpen && (
                  <IconButton aria-label="Accéder au questionnaire" disabled>
                    <ContentPasteGo />
                  </IconButton>
                )}

                <Grid item>
                  <Chip
                    label={getSurveyStatus(openingDate, closingDate, returnDate).status}
                    color={getSurveyStatus(openingDate, closingDate, returnDate).colorChip}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grow>
  );
};
