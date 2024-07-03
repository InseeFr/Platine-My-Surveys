import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/accueil/cadre-juridique")({
  component: LegalFrameworkIndex,
});

function LegalFrameworkIndex() {
  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-4")}>
      <h3>Page cadre juridique</h3>
    </section>
  );
}
