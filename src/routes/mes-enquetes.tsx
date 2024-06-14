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
  },
  mySurveys: {
    width: `min(100%, ${fr.breakpoints.emValues.lg}em)`,
  },
});
