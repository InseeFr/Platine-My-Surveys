import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { MySurveys } from "components/mySurveys/MySurveys";
import { tss } from "tss";

export const Route = createFileRoute("/mes-enquetes")({
  component: MySurveysIndex,
});

function MySurveysIndex() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <MySurveys className={classes.cardsApp} />
    </div>
  );
}

const useStyles = tss.withName({ MySurveysIndex }).create({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  cardsApp: {
    width: `min(100%, ${fr.breakpoints.emValues.lg}em)`,
  },
});
