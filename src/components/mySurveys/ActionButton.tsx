import { TranslationFunction } from "i18nifty/typeUtils/TranslationFunction";
import { ComponentKey } from "i18n/types";
import { Download } from "@codegouvfr/react-dsfr/Download";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { tss } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";

type Props = {
  openingDate?: string;
  closingDate?: string;
  questioningStatus?: string;
  accessUrl?: string;
  t: TranslationFunction<"MySurveys", ComponentKey>;
};

export const ActionButton = ({ openingDate, closingDate, questioningStatus, accessUrl, t }: Props) => {
  const { classes, cx } = useStyles();

  if (questioningStatus === "VALINT") {
    return (
      <div>
        {/*  TODO change details and href with data */}
        <Download
          className={cx("fr-hidden fr-unhidden-sm", classes.downloadButton)}
          details="Non disponible "
          label={t("download deposit proof")}
          linkProps={{
            href: "#",
          }}
        />
        <div className={cx("fr-hidden-sm", "fr-tile fr-tile--download fr-enlarge-link")}>
          <div className="fr-tile__body">
            <div className="fr-tile__content">
              <h6 className="fr-tile__title">
                <a href="#" download>
                  {t("download deposit proof")}
                </a>
              </h6>
              <p className="fr-tile__detail">Détail </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!openingDate || !closingDate || !accessUrl) {
    return (
      <Button size="small" disabled={true} className={classes.respondButton}>
        {t("goToSurvey")}
      </Button>
    );
  }

  const currentDate = new Date(Date.now());
  const formatedOpeningDate = new Date(openingDate);
  const formatedClosingDate = new Date(closingDate);

  if (currentDate < formatedClosingDate && currentDate > formatedOpeningDate) {
    return questioningStatus === "PARTIELINT" ? (
      <Button
        className={classes.respondButton}
        size="small"
        linkProps={{
          to: accessUrl as any,
        }}
      >
        {t("continue")}
      </Button>
    ) : (
      <Button
        className={classes.respondButton}
        size="small"
        linkProps={{
          to: accessUrl as any,
        }}
      >
        {t("goToSurvey")}
      </Button>
    );
  }

  if (currentDate > formatedClosingDate) {
    return (
      <Button className={classes.respondButton} size="small" disabled={true}>
        {t("goToSurvey")}
      </Button>
    );
  }

  if (currentDate < formatedOpeningDate) {
    return (
      <div className={classes.respondButton}>
        <p
          className={cx(fr.cx("fr-mb-0"), classes.openingDate)}
        >{`${t("from")} ${formatedOpeningDate.toLocaleDateString()}`}</p>
        <Button size="small" disabled={true}>
          {t("goToSurvey")}
        </Button>
      </div>
    );
  }
};

const useStyles = tss.withName({ ActionButton }).create({
  downloadButton: {
    ".fr-download__link": {
      fontSize: "12px",
    },
  },
  openingDate: {
    fontSize: "12px",
  },
  respondButton: {
    [fr.breakpoints.down("sm")]: {
      margin: fr.spacing("3w"),
      marginTop: 0,
    },
  },
});
