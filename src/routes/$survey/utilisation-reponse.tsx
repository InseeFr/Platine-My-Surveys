import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$survey/utilisation-reponse")({
  component: AnswersUtilizationIndex,
});

function AnswersUtilizationIndex() {
  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-5")}>
      <h3>Page à quoi servent vos réponses ?</h3>
    </section>
  );
}
