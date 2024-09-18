import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$survey/cadre-juridique")({
  component: LegalFrameworkIndex,
});

function LegalFrameworkIndex() {
  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-5")}>
      <h3>Page cadre juridique test</h3>
    </section>
  );
}
