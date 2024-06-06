import { tss } from "tss";
import { fr } from "@codegouvfr/react-dsfr";
import Typography from "@mui/material/Typography";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";

type Props = {
  className?: string;
};

export function MySurveys(props: Props) {
  const { className } = props;

  const { classes, cx } = useStyles();

  const { t } = useTranslation("MySurveys");

  return (
    <div className={cx(classes.root, className)}>
      <Typography variant="h1">{t("title my surveys")}</Typography>
    </div>
  );
}

const useStyles = tss.withName({ MySurveys }).create({
  root: {
    padding: fr.spacing("2w"),
  },
});

const { i18n } = declareComponentKeys<"title my surveys">()("MySurveys");

export type I18n = typeof i18n;
