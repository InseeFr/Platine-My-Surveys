import { tss } from "tss";
import { fr } from "@codegouvfr/react-dsfr";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";
import { APISchemas } from "types/api";
import Avatar from "../../assets/avatar.svg";
import { PersonalInformations } from "./PersonalInformations";
import Button from "@codegouvfr/react-dsfr/Button";
import { PostalAddressInformations } from "./PostalAddressInformations";
import { useToggle } from "react-use";
import { PersonalInformationsForm } from "./PersonalInformationsForm";
import { PostalAddressInformationsForm } from "./PostalAddressInformationsForm";

type Props = {
  className?: string;
  contact: APISchemas["ContactFirstLoginDto"];
};

export function MyAccount({ className, contact }: Props) {
  const { classes, cx } = useStyles();
  const { t } = useTranslation("MyAccount");

  const [editPersonnalInfos, toggleEditPersonnalInfos] = useToggle(false);
  const [editPostalAddressInfos, toggleEditPostalAddressInfos] = useToggle(false);

  const onToggleEditPersonnalInfos = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    toggleEditPersonnalInfos();
  };

  const onToggleEditPostalAddressInfos = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    toggleEditPostalAddressInfos();
  };

  return (
    <section className={cx(className)}>
      <div className={classes.titleContainer}>
        <img
          src={Avatar}
          alt=""
          role="presentation"
          width={"100px"}
          className={cx("fr-hidden", "fr-unhidden-sm", classes.avatar)}
        />
        <h1>{`${t("title my account")} ${contact.identifier}`}</h1>
      </div>
      <section className={cx(fr.cx("fr-mb-10v"), classes.informationsCard)}>
        <h6 className={classes.cardTitle}>{t("my personal information")}</h6>
        {editPersonnalInfos ? (
          <PersonalInformationsForm contact={contact} onClose={toggleEditPersonnalInfos} />
        ) : (
          <div className={classes.informationsContainer}>
            <PersonalInformations contact={contact} t={t} />
            <Button type="button" style={{ alignSelf: "end" }} onClick={onToggleEditPersonnalInfos}>
              {t("edit")}
            </Button>
          </div>
        )}
      </section>
      <section className={classes.informationsCard}>
        <h6 className={classes.cardTitle}>{t("postal address")}</h6>
        {editPostalAddressInfos ? (
          <PostalAddressInformationsForm />
        ) : (
          <div className={classes.informationsContainer}>
            <PostalAddressInformations contact={contact} t={t} />
            <Button type="button" style={{ alignSelf: "end" }} onClick={onToggleEditPostalAddressInfos}>
              {t("edit")}
            </Button>
          </div>
        )}
      </section>
    </section>
  );
}

const useStyles = tss.withName({ MyAccount }).create({
  titleContainer: {
    display: "flex",
    alignItems: "center",
    gap: fr.spacing("4w"),
  },
  avatar: {
    paddingBottom: fr.spacing("3w"),
  },
  informationsCard: {
    border: "1px solid",
    borderColor: fr.colors.decisions.border.default.grey.default,
    padding: fr.spacing("3w"),
  },
  informationsContainer: {
    display: "flex",
    flexDirection: "column",
  },
  cardTitle: {
    color: fr.colors.decisions.text.title.blueFrance.default,
  },
});

const { i18n } = declareComponentKeys<
  | "title my account"
  | "my personal information"
  | "civility"
  | "Female"
  | "Male"
  | "lastName"
  | "firstName"
  | "email"
  | "function"
  | "usual company name"
  | "phone"
  | "edit"
  | "postal address"
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
>()("MyAccount");

export type I18n = typeof i18n;
