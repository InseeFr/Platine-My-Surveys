import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/accueil/introduction")({
  component: IntroductionIndex,
});

function IntroductionIndex() {
  return (
    <section className={fr.cx("fr-col-12", "fr-col-md-4")}>
      <h3>Introduction à l’enquête MOCK</h3>
      <div>
        <p>
          En 2024, l’Insee associe au recensement de la population une enquête sur le thème des familles.
          Cette enquête complète le recensement et permet d’étudier les modes de vie des familles au fil
          des générations.
        </p>
        <p>
          Vous avez répondu récemment au recensement sur le site www.le-recensement-et-moi.fr . Votre
          logement a été aléatoirement tiré pour participer à l’enquête Familles 2024. Chaque femme/homme
          de votre logement âgé(e) de 18 ans ou plus est invité(e) à répondre à l’enquête Familles.
          Répondre à l’enquête est simple, sécurisé et rapide.
        </p>
        <p> La participation de tous est essentielle pour disposer de résultats de qualité.</p>
        <p> La réponse à l’enquête est obligatoire.</p>
        <p>
          Cette enquête est mise en œuvre conformément au règlement général sur la protection des
          données, à la loi informatique et libertés et à la loi du 7 juin 1951 sur le secret
          statistique. Voir la rubrique Données personnelles.
        </p>
      </div>
    </section>
  );
}
