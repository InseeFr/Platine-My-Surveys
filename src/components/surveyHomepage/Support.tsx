import { useForm } from "hooks/useForm";
import { declareComponentKeys, useTranslation } from "i18n";
import { supportSchema } from "types/schemas";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { tss } from "tss-react/dsfr";
import Button from "@codegouvfr/react-dsfr/Button";
import { useState } from "react";
import { Select } from "@codegouvfr/react-dsfr/SelectNext";

export const Support = ({ surveyId }: { surveyId: string }) => {
  const { t } = useTranslation("SupportForm");
  const { classes, cx } = useStyles();
  const { register, handleSubmit, errors } = useForm(supportSchema);

  //   TODO: use mutation isSucess instead
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = handleSubmit(async data => {
    // TODO: call api
    setIsSuccess(true);
    console.log(data);
  });

  if (isSuccess) {
    return (
      <div className="fr-alert fr-alert--success fr-mb-5w fr-mb-md-0">
        <p>{t("successAlert")}</p>
      </div>
    );
  }
  return (
    <div className="fr-mb-5w fr-mb-md-0">
      {t("FaqSupport", { surveyId })}
      <p className="fr-text--sm">{t("address usage")}</p>
      <p className="fr-text--sm">{t("mandatory fields")}</p>
      <form action="#" onSubmit={onSubmit}>
        <Select
          label={t("object")}
          nativeSelectProps={{
            ...register("mailObjet"),
            id: "object",
            ...(errors.phonenumber ? { "aria-invalid": true, "aria-errormessage": `object-desc` } : {}),
          }}
          options={[
            {
              value: "1",
              label: "Option 1",
            },
            {
              value: "2",
              label: "Option 2",
            },
            {
              value: "3",
              label: "Option 3",
            },
          ]}
          placeholder={t("objectPlaceholder")}
        />
        {!errors.mailObjet && <p className="fr-hidden" id={"object-desc"} />}
        <Input
          label={t("lastName")}
          nativeInputProps={{
            autoComplete: "family-name",
            spellCheck: "false",
            ...register("lastName"),
            id: "lastName",
            ...(errors.lastName
              ? { "aria-invalid": true, "aria-errormessage": `lastName-desc-error` }
              : {}),
          }}
        />
        {!errors.lastName && <p className="fr-hidden" id={"lastName-desc-error"} />}
        <Input
          label={t("firstName")}
          nativeInputProps={{
            autoComplete: "given-name",
            spellCheck: "false",
            ...register("firstName"),
            id: "firstName",
            ...(errors.firstName
              ? { "aria-invalid": true, "aria-errormessage": `firstName-desc-error` }
              : {}),
          }}
        />
        {!errors.firstName && <p className="fr-hidden" id={"firstName-desc-error"} />}
        <Input
          label={t("phone")}
          nativeInputProps={{
            autoComplete: "tel",
            type: "tel",
            ...register("phonenumber"),
            id: "phone",
            ...(errors.phonenumber
              ? { "aria-invalid": true, "aria-errormessage": `phone-desc-error` }
              : {}),
          }}
        />
        {!errors.phonenumber && <p className="fr-hidden" id={"phone-desc-error"} />}
        <Input
          label={t("email")}
          nativeInputProps={{
            autoComplete: "email",
            type: "email",
            ...register("mailaddress"),
            id: "email",
            ...(errors.mailaddress && { "aria-invalid": true, "aria-errormessage": "email-desc-error" }),
          }}
          state={errors.mailaddress ? "error" : "default"}
          stateRelatedMessage={
            errors.mailaddress?.message && t(errors.mailaddress?.message as keyof typeof t)
          }
        />
        {!errors.mailaddress && <p className="fr-hidden" id={"email-desc-error"} />}
        <Input
          label={t("confirmEmail")}
          nativeInputProps={{
            autoComplete: "email",
            type: "email",
            ...register("mailaddressConfirmation"),
            id: "confirmEmail",
            ...(errors.mailaddressConfirmation && {
              "aria-invalid": true,
              "aria-errormessage": "confirmEmail-desc-error",
            }),
          }}
          state={errors.mailaddressConfirmation ? "error" : "default"}
          stateRelatedMessage={
            errors.mailaddressConfirmation?.message &&
            t(errors.mailaddressConfirmation?.message as keyof typeof t)
          }
        />
        {!errors.mailaddressConfirmation && <p className="fr-hidden" id={"confirmEmail-desc-error"} />}
        <Input
          label={t("idec")}
          hintText={t("idecHintText")}
          nativeInputProps={{
            ...register("idec"),
            id: "idec",
            ...(errors.idec && { "aria-invalid": true, "aria-errormessage": "idec-desc-error" }),
          }}
        />
        {!errors.idec && <p className="fr-hidden" id={"idec-desc-error"} />}
        <Input
          label={t("message")}
          textArea
          className={classes.inputTextArea}
          state={errors.message ? "error" : "info"}
          stateRelatedMessage={
            errors.message?.message ? t(errors.message?.message as keyof typeof t) : t("messageInfo")
          }
          nativeTextAreaProps={register("message")}
        />

        <Button className={cx("fr-hidden", "fr-unhidden-md")} type="submit">
          {t("submit")}
        </Button>
        <Button className={cx("fr-hidden-md", "fr-unhidden")} style={{ width: "100%" }} type="submit">
          {t("submit")}
        </Button>
      </form>
    </div>
  );
};

const useStyles = tss.withName({ Support }).create({
  inputTextArea: {
    textArea: {
      height: "200px",
    },
  },
});

const { i18n } = declareComponentKeys<
  | "address usage"
  | "mandatory fields"
  | "phone"
  | "idec"
  | "idecHintText"
  | "lastName"
  | "firstName"
  | "object"
  | "objectPlaceholder"
  | "email"
  | "confirmEmail"
  | "message"
  | "messageRequired"
  | "messageInfo"
  | "emailRequired"
  | "emailConfirmationFailed"
  | "invalidEmail"
  | "submit"
  | "successAlert"
  | { K: "FaqSupport"; P: { surveyId: string }; R: JSX.Element }
>()("SupportForm");

export type I18n = typeof i18n;
