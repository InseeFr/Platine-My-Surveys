import { tss } from "tss";
import { fr } from "@codegouvfr/react-dsfr";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";
import { APISchemas } from "types/api";
import Avatar from "../../assets/avatar.svg";

type Props = {
  className?: string;
  contact: APISchemas["ContactFirstLoginDto"];
};

export function MyAccount({ className, contact }: Props) {
  const { classes, cx } = useStyles();

  const { t } = useTranslation("MyAccount");

  return (
    <section className={cx(className)}>
      <div className={classes.titleContainer}>
        <img src={Avatar} alt="" width={"100px"} className={classes.avatar} />
        <h1>{t("title my account")}</h1>
      </div>
    </section>
  );
}

const useStyles = tss.withName({ MyAccount }).create({
  titleContainer: {
    display: "flex",
    alignItems: "center",
    gap: fr.spacing("8v"),
  },
  avatar: {
    paddingBottom: fr.spacing("6v"),
  },
});

const { i18n } = declareComponentKeys<"title my account">()("MyAccount");

export type I18n = typeof i18n;
