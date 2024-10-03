import { useTranslation } from "i18n";
import Banner from "../../assets/banner.svg";
import { tss } from "tss-react/dsfr";
import { fr } from "@codegouvfr/react-dsfr";
import content from "resources/content.json";
import { Card } from "@codegouvfr/react-dsfr/Card";
import Grid from "@mui/material/Grid";

export const SurveysList = () => {
  const { t } = useTranslation("SurveyHomepage");
  const { classes, cx } = useStyles();

  const surveys = content.specifique.map(survey => {
    return { titleShort: survey.titleShort, id: survey.id };
  });

  return (
    <div className={classes.pageContainer}>
      <img
        src={Banner}
        alt=""
        role="presentation"
        width={"100%"}
        className={cx("fr-unhidden-md", "fr-hidden")}
      />
      <div className={fr.cx("fr-container", "fr-py-5w")}>
        <h2>{t("title")}</h2>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            paddingBottom: 2,
            minHeight: 0,
            overflow: "auto",
            width: "calc(100% + .5rem)",
            paddingRight: ".5rem",
          }}
          gap={2}
        >
          {surveys.map(survey => (
            <Card
              key={survey.id}
              background
              border
              enlargeLink
              horizontal
              linkProps={{
                to: "/$survey",
                params: {
                  survey: survey.id,
                },
              }}
              endDetail={`${import.meta.env.VITE_PORTAIL_URL}/${survey.id}`}
              title={survey.titleShort}
              titleAs="h5"
            />
          ))}
        </Grid>
      </div>
    </div>
  );
};

const useStyles = tss.withName({ SurveysList }).create({
  pageContainer: {
    width: "100vw",
  },
});
