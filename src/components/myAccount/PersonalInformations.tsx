import { ComponentKey } from "i18n/types";
import { TranslationFunction } from "i18nifty/typeUtils/TranslationFunction";
import { tss } from "tss";
import { APISchemas } from "types/api";
import { fr } from "@codegouvfr/react-dsfr";

type Props = {
  contact: APISchemas["ContactFirstLoginDto"];
  t: TranslationFunction<"MyAccount", ComponentKey>;
};

export const PersonalInformations = ({ contact, t }: Props) => {
  const { classes } = useStyles();
  const civility = contact.civility && contact.civility !== "Undefined" ? t(contact.civility) : "";
  return (
    <div className={classes.container}>
      <InformationWithLabel label={t("civility")} information={civility} />
      <InformationWithLabel label={t("lastName")} information={contact.lastName} />
      <InformationWithLabel label={t("firstName")} information={contact.firstName} />
      <InformationWithLabel label={t("email")} information={contact.email} />
      <InformationWithLabel label={t("function")} information={contact.function} />
      <InformationWithLabel label={t("usual company name")} information={contact.usualCompanyName} />
      <InformationWithLabel label={t("phone")} information={contact.phone} />
    </div>
  );
};

export const InformationWithLabel = ({
  label,
  information,
}: {
  label: string;
  information?: string;
}) => {
  const { classes, cx } = useStyles();
  return (
    <span className={cx(fr.cx("fr-mb-0"), classes.informationWithLabel)}>
      {label} <strong>{information && information !== "" ? information : "-"}</strong>
    </span>
  );
};

const useStyles = tss.withName({ PersonalInformations }).create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  informationWithLabel: {
    paddingBottom: fr.spacing("1w"),
    color: fr.colors.decisions.text.active.grey.default,
  },
});
