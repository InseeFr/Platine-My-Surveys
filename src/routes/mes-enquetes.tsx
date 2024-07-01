import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { MySurveys } from "components/mySurveys/MySurveys";
import { useFetchQuery } from "hooks/useFetchQuery";
import { useTranslation } from "i18n/i18n";
import { tss } from "tss";

export const Route = createFileRoute("/mes-enquetes")({
  component: MySurveysIndex,
});

function MySurveysIndex() {
  const { classes } = useStyles();
  const { t } = useTranslation("MySurveys");
  const { t: headerTranslation } = useTranslation("Header");

  const { data: surveys, isLoading } = useFetchQuery("/api/contacts/questionings");

  return (
    <div className={classes.root}>
      <title>{`${t("surveys table title")} - ${headerTranslation("service tagline")}`}</title>
      <MySurveys className={classes.mySurveys} surveys={surveys ?? []} isLoading={isLoading} />
    </div>
  );
}

const useStyles = tss.withName({ MySurveysIndex }).create({
  root: {
    display: "flex",
    justifyContent: "center",
    [fr.breakpoints.down("sm")]: {
      margin: fr.spacing("2w"),
      width: `calc(100vw - ${fr.spacing("3v")})`,
    },
    [fr.breakpoints.up("sm")]: {
      ...fr.spacing("padding", { topBottom: "10v" }),
    },
    [fr.breakpoints.down("md")]: {
      width: `calc(100vw - ${fr.spacing("10v")})`,
    },
    [fr.breakpoints.down("xl")]: {
      width: "80vw",
    },
  },
  mySurveys: {
    width: `min(100%, ${fr.breakpoints.emValues.lg}em)`,
  },
});
