import ArtWorkBackground from "@codegouvfr/react-dsfr/dsfr/artwork/background/ovoid.svg";
import { fr } from "@codegouvfr/react-dsfr";
import ArtWork from "@codegouvfr/react-dsfr/dsfr/artwork/system.svg";
import Padlock from "@codegouvfr/react-dsfr/dsfr/artwork/pictograms/system/padlock.svg";

export const PadlockIcon = () => {
  return (
    <svg
      className={fr.cx("fr-artwork", "fr-responsive-img")}
      aria-hidden="true"
      width="160"
      height="200"
      viewBox="0 0 160 200"
    >
      <use className={fr.cx("fr-artwork-motif")} href={`${ArtWorkBackground}#artwork-motif`}></use>
      <use href={`${ArtWork}#artwork-motif`}></use>

      <use
        className={fr.cx("fr-artwork-background")}
        href={`${ArtWorkBackground}#artwork-background`}
      ></use>
      <g transform="translate(40, 60)">
        <use
          className={fr.cx("fr-artwork-decorative")}
          xlinkHref={`${Padlock}#artwork-decorative`}
        ></use>
        <use className={fr.cx("fr-artwork-minor")} xlinkHref={`${Padlock}#artwork-minor`}></use>
        <use className={fr.cx("fr-artwork-major")} xlinkHref={`${Padlock}#artwork-major`}></use>
      </g>
    </svg>
  );
};
