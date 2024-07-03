import { tss } from "tss";
import { APISchemas } from "types/api";
import { InformationWithLabel } from "./PersonalInformations";
import { declareComponentKeys, useTranslation } from "i18n";

type Props = {
  contact: APISchemas["ContactFirstLoginDto"];
};

export const PostalAddressInformations = ({ contact }: Props) => {
  const { classes } = useStyles();
  const { t } = useTranslation("PostalAddressInformations");

  return (
    <div className={classes.container}>
      <InformationWithLabel label={t("country name")} information={contact.address?.countryName} />
      <InformationWithLabel label={t("street number")} information={contact.address?.streetNumber} />
      <InformationWithLabel
        label={t("repetition index")}
        information={contact.address?.repetitionIndex}
      />
      <InformationWithLabel label={t("street type")} information={contact.address?.streetType} />
      <InformationWithLabel label={t("street name")} information={contact.address?.streetName} />
      <InformationWithLabel
        label={t("address supplement")}
        information={contact.address?.addressSupplement}
      />
      <InformationWithLabel
        label={t("special distribution")}
        information={contact.address?.specialDistribution}
      />

      <InformationWithLabel label={t("zip code")} information={contact.address?.zipCode} />
      <InformationWithLabel label={t("city name")} information={contact.address?.cityName} />

      <InformationWithLabel label={t("cedex code")} information={contact.address?.cedexCode} />
      <InformationWithLabel label={t("cedex name")} information={contact.address?.cedexName} />
    </div>
  );
};

const useStyles = tss.withName({ PostalAddressInformations }).create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});

const { i18n } = declareComponentKeys<
  | "country name"
  | "street number"
  | "repetition index"
  | "street type"
  | "street name"
  | "address supplement"
  | "special distribution"
  | "zip code"
  | "city name"
  | "cedex code"
  | "cedex name"
>()("PostalAddressInformations");

export type I18n = typeof i18n;
