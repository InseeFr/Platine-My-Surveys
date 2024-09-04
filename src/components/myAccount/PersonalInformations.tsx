import { tss } from "tss";
import { APISchemas } from "types/api";
import { fr } from "@codegouvfr/react-dsfr";
import { declareComponentKeys, useTranslation } from "i18n";

type Props = {
  contact: APISchemas["ContactDetailsDto"];
};

export const PersonalInformations = ({ contact }: Props) => {
  const { t } = useTranslation("PersonalInformations");
  const { t: myAccountTranslation } = useTranslation("MyAccount");

  const civility =
    contact.civility && contact.civility !== "Undefined" ? myAccountTranslation(contact.civility) : "";
  return (
    <div>
      <InformationWithLabel label={t("civility")} information={civility} />
      <InformationWithLabel label={t("lastName")} information={contact.lastName} />
      <InformationWithLabel label={t("firstName")} information={contact.firstName} />
      <InformationWithLabel label={t("email")} information={contact.email} />
      <InformationWithLabel label={t("function")} information={contact.function} />
      <InformationWithLabel label={t("usual company name")} information={contact.usualCompanyName} />
      <InformationWithLabel label={t("phone")} information={contact.otherPhone} />
      <InformationWithLabel label={t("mobile phone")} information={contact.phone} />
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
    <p className={cx("fr-mb-1w", classes.informationWithLabel)}>
      {label} <strong>{information && information !== "" ? information : "-"}</strong>
    </p>
  );
};

const useStyles = tss.withName({ PersonalInformations }).create({
  informationWithLabel: {
    [fr.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
    color: fr.colors.decisions.text.active.grey.default,
  },
});

const { i18n } = declareComponentKeys<
  | "civility"
  | "lastName"
  | "firstName"
  | "email"
  | "function"
  | "usual company name"
  | "phone"
  | "mobile phone"
>()("PersonalInformations");

export type I18n = typeof i18n;
