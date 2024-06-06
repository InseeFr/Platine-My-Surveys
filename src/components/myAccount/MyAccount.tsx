import { tss } from "tss";
import { fr } from "@codegouvfr/react-dsfr";
import Typography from "@mui/material/Typography";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";

type Props = {
  className?: string;
};

export function MyAccount(props: Props) {
  const { className } = props;

  const { classes, cx } = useStyles();

  const { t } = useTranslation("MyAccount");

  return (
    <div className={cx(classes.root, className)}>
      <Typography variant="h1">{t("title my account")}</Typography>
    </div>
  );
}

const useStyles = tss.withName({ MyAccount }).create({
  root: {
    padding: fr.spacing("2w"),
  },
});

const { i18n } = declareComponentKeys<"title my account">()("MyAccount");

export type I18n = typeof i18n;
