import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { tss } from "tss-react";

export const Route = createFileRoute("/accueil/utilisation-reponse")({
  component: AnswersUtilizationIndex,
});

function AnswersUtilizationIndex() {
  const { classes } = useStyles();

  return (
    <section className={classes.container}>
      <h3>Page à quoi servent vos réponses ?</h3>
    </section>
  );
}

const useStyles = tss.withName({ AnswersUtilizationIndex }).create({
  container: {
    [fr.breakpoints.up("md")]: {
      width: "calc(80vw - 650px)",
    },
  },
});
