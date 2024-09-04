import { tss } from "tss";
import { fr } from "@codegouvfr/react-dsfr";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { useTranslation } from "i18n";
import { APISchemas } from "types/api";
import { PersonalInformations } from "./PersonalInformations";
import Button from "@codegouvfr/react-dsfr/Button";
import { PostalAddressInformations } from "./PostalAddressInformations";
import { useToggle } from "react-use";
import { PersonalInformationsForm } from "./PersonalInformationsForm";
import { PostalAddressInformationsForm } from "./PostalAddressInformationsForm";
import { AvatarIcon } from "assets/Avatar";
import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";

type Props = {
  contact: APISchemas["ContactDetailsDto"];
  onSave: () => void;
};

export function MyAccount({ contact, onSave }: Props) {
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

  const handleSave = () => {
    editPersonnalInfos ? toggleEditPersonnalInfos() : toggleEditPostalAddressInfos();
    onSave();
  };

  return (
    <section id="content">
      <Breadcrumb
        className="fr-mb-0"
        currentPageLabel={t("title my account")}
        homeLinkProps={{
          to: "/",
        }}
        segments={[]}
      />

      <div className={fr.cx("fr-grid-row", "fr-grid-row--middle")} style={{ "flexWrap": "nowrap" }}>
        <AvatarIcon />
        <h1>{t("title my account")}</h1>
      </div>
      <section className={cx("fr-mb-10v", "fr-p-3w", classes.informationsCard)}>
        <h6 className={classes.cardTitle}>{t("my personal information")}</h6>
        {editPersonnalInfos ? (
          <PersonalInformationsForm
            contact={contact}
            onClose={toggleEditPersonnalInfos}
            onSave={handleSave}
          />
        ) : (
          <div className={classes.informationsContainer}>
            <PersonalInformations contact={contact} />
            <Button type="button" style={{ alignSelf: "end" }} onClick={onToggleEditPersonnalInfos}>
              {t("edit")}
            </Button>
          </div>
        )}
      </section>
      <section className={cx("fr-p-3w", classes.informationsCard)}>
        <h6 className={classes.cardTitle}>{t("postal address")}</h6>
        {editPostalAddressInfos ? (
          <PostalAddressInformationsForm
            contact={contact}
            onClose={toggleEditPostalAddressInfos}
            onSave={handleSave}
          />
        ) : (
          <div className={classes.informationsContainer}>
            <PostalAddressInformations contact={contact} />
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
  informationsCard: {
    border: "1px solid",
    borderColor: fr.colors.decisions.border.default.grey.default,
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
  "title my account" | "my personal information" | "Female" | "Male" | "edit" | "postal address"
>()("MyAccount");

export type I18n = typeof i18n;
