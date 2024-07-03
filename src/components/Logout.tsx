import ArtWorkBackground from "@codegouvfr/react-dsfr/dsfr/artwork/background/ovoid.svg";
import { fr } from "@codegouvfr/react-dsfr";
import ArtWork from "@codegouvfr/react-dsfr/dsfr/artwork/system.svg";

import Padlock from "@codegouvfr/react-dsfr/dsfr/artwork/pictograms/system/padlock.svg";
import { declareComponentKeys, useTranslation } from "i18n/i18n";
import Button from "@codegouvfr/react-dsfr/Button";

export const Logout = () => {
  const { t } = useTranslation("Logout");

  return (
    <section>
      <div
        className={fr.cx(
          "fr-grid-row",
          "fr-grid-row--center",
          "fr-grid-row--middle",
          "fr-col-12",
          "fr-px-2w",
          "fr-py-6w",
        )}
      >
        <div className={fr.cx("fr-col-md-8")}>
          <h1>{t("title")}</h1>

          <p className={fr.cx("fr-text--lead")}>{t("answer saved")}</p>
          <p className={fr.cx("fr-text--lead", "fr-text--bold")}>{t("send message warning")}</p>
          <Button
            linkProps={{
              to: "/connexion",
            }}
          >
            {t("reconnect")}
          </Button>
        </div>
        <div className={fr.cx("fr-col-3", "fr-hidden", "fr-unhidden-lg", "fr-col-offset-1")}>
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
        </div>
      </div>
    </section>
  );
};

const { i18n } = declareComponentKeys<"title" | "answer saved" | "send message warning" | "reconnect">()(
  "Logout",
);

export type I18n = typeof i18n;
