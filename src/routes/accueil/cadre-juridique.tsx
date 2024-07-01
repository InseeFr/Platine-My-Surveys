import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { tss } from "tss-react";

export const Route = createFileRoute("/accueil/cadre-juridique")({
  component: LegalFrameworkIndex,
});

function LegalFrameworkIndex() {
  const { classes } = useStyles();

  return (
    <section className={classes.container}>
      <h3>Page cadre juridique</h3>
    </section>
  );
}

const useStyles = tss.withName({ LegalFrameworkIndex }).create({
  container: {
    [fr.breakpoints.up("md")]: {
      width: "calc(80vw - 650px)",
    },
  },
});
