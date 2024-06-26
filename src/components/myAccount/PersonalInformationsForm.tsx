import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { useTranslation } from "i18n/i18n";
import { declareComponentKeys } from "i18nifty/declareComponentKeys";
import { tss } from "tss-react/dsfr";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";

export const PersonalInformationsForm = () => {
  const { classes } = useStyles();
  const { t: translationMyAccount } = useTranslation("MyAccount");
  const { t } = useTranslation("PersonalInformationsForm");

  return (
    <div>
      <RadioButtons
        legend={t("civility")}
        name="radio"
        small
        options={[
          {
            label: translationMyAccount("Female"),
            nativeInputProps: {
              value: "Female",
            },
          },
          {
            label: translationMyAccount("Male"),
            nativeInputProps: {
              value: "Male",
            },
          },
        ]}
        orientation="horizontal"
      />
      <div className={classes.container}>
        <Input
          label={t("lastName")}
          nativeInputProps={{ autoComplete: "family-name", spellCheck: "false" }}
        />
        <Input
          label={t("firstName")}
          nativeInputProps={{ autoComplete: "given-name", spellCheck: "false" }}
        />
        <Input label={t("email")} nativeInputProps={{ autoComplete: "email", type: "email" }} />
      </div>
      <div className={classes.container}>
        <Input label={t("function")} />
        <Input label={t("usual company name")} />
      </div>
      <Input
        label={t("phone")}
        hintText={
          <div className={classes.hintText}>
            <span>{t("phone hint text")}</span>
            <span>{t("phone example")}</span>
          </div>
        }
        nativeInputProps={{ autoComplete: "tel", type: "tel" }}
      />
      <div className={classes.buttons}>
        <Button priority="secondary">{t("cancel")}</Button>
        <Button>{t("register")}</Button>
      </div>
    </div>
  );
};

const { i18n } = declareComponentKeys<
  | "civility"
  | "lastName"
  | "firstName"
  | "email"
  | "function"
  | "usual company name"
  | "phone"
  | "phone hint text"
  | "phone example"
  | "cancel"
  | "register"
>()("PersonalInformationsForm");

export type I18n = typeof i18n;

const useStyles = tss.withName({ PersonalInformationsForm }).create({
  container: {
    display: "flex",

    ".fr-input-group": {
      flexGrow: 1,
    },
    [fr.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingBottom: fr.spacing("3w"),
    },
    [fr.breakpoints.up("sm")]: {
      gap: fr.spacing("3w"),
    },
  },
  hintText: {
    display: "flex",
    flexDirection: "column",
  },
  buttons: {
    display: "flex",
    justifyContent: "end",
    gap: fr.spacing("2w"),
  },
});
