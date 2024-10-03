import ArtWorkBackground from "@codegouvfr/react-dsfr/dsfr/artwork/background/ovoid.svg";
import ArtWork from "@codegouvfr/react-dsfr/dsfr/artwork/system.svg";
import Avatar from "@codegouvfr/react-dsfr/dsfr/artwork/pictograms/digital/avatar.svg";
import { fr } from "@codegouvfr/react-dsfr";

export const AvatarIcon = () => {
  return (
    <svg
      className={fr.cx("fr-artwork", "fr-responsive-img", "fr-hidden", "fr-unhidden-lg", "fr-mr-3w")}
      aria-hidden="true"
      style={{ width: "120px", height: "160px" }}
      viewBox="0 0 160 200"
    >
      <use className={fr.cx("fr-artwork-motif")} href={`${ArtWorkBackground}#artwork-motif`}></use>
      <use href={`${ArtWork}#artwork-motif`}></use>

      <use
        className={fr.cx("fr-artwork-background")}
        href={`${ArtWorkBackground}#artwork-background`}
      ></use>
      <g transform="translate(10, 20) scale(1.8)">
        <use className={fr.cx("fr-artwork-decorative")} xlinkHref={`${Avatar}#artwork-decorative`}></use>
        <use className={fr.cx("fr-artwork-minor")} xlinkHref={`${Avatar}#artwork-minor`}></use>
        <use className={fr.cx("fr-artwork-major")} xlinkHref={`${Avatar}#artwork-major`}></use>
      </g>
    </svg>
  );
};
