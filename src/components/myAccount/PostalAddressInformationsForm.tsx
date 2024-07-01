import { APISchemas } from "types/api";
import { FormButtons, useStylesContactInformationsForm } from "./PersonalInformationsForm";
import { declareComponentKeys, useTranslation } from "i18n";
import { useForm } from "hooks/useForm";
import { addressSchema } from "types/schemas";
import { Input } from "@codegouvfr/react-dsfr/Input";
import { useFetchMutation } from "hooks/useFetchQuery";

type Props = {
  contact: APISchemas["ContactFirstLoginDto"];
  onClose: () => void;
  onSave: () => void;
};

export const PostalAddressInformationsForm = ({ contact, onClose, onSave }: Props) => {
  const { classes } = useStylesContactInformationsForm();
  const { t } = useTranslation("PostalAddressInformationsForm");

  const { register, handleSubmit, reset, watch } = useForm(addressSchema, {
    defaultValues: contact.address,
  });

  const { mutateAsync, isPending } = useFetchMutation("/api/contacts/{id}", "put");

  const onSubmit = handleSubmit(async data => {
    await mutateAsync({
      body: { ...contact, address: { ...data } },
      urlParams: { id: contact.identifier },
    });
    onSave();
  });

  const handleClose = () => {
    reset(contact.address);
    onClose();
  };

  const isNotSubmittable = isPending || JSON.stringify(contact.address) === JSON.stringify(watch());

  return (
    <form action="#" onSubmit={onSubmit}>
      <div className={classes.container}>
        <Input
          label={t("country name")}
          nativeInputProps={{
            ...register("countryName"),
          }}
        />
        <Input
          label={t("street number")}
          nativeInputProps={{
            ...register("streetNumber"),
          }}
        />
        <Input
          label={t("repetition index")}
          nativeInputProps={{ autoComplete: "", ...register("repetitionIndex") }}
        />
      </div>
      <div className={classes.container}>
        <Input label={t("street type")} nativeInputProps={{ ...register("streetType") }} />
        <Input label={t("street name")} nativeInputProps={{ ...register("streetName") }} />
        <Input label={t("address supplement")} nativeInputProps={{ ...register("addressSupplement") }} />
      </div>
      <div className={classes.container}>
        <Input
          label={t("special distribution")}
          nativeInputProps={{ ...register("specialDistribution") }}
        />
        <Input
          label={t("zip code")}
          nativeInputProps={{ autoComplete: "postal-code", ...register("zipCode") }}
        />
        <Input label={t("city name")} nativeInputProps={{ ...register("cityName") }} />
      </div>
      <div className={classes.container}>
        <Input
          label={t("cedex code")}
          hintText={t("cedex code hint text")}
          nativeInputProps={{ autoComplete: "postal-code", ...register("cedexCode") }}
        />
        <Input
          label={t("cedex name")}
          hintText={t("cedex name hint text")}
          nativeInputProps={{ ...register("cedexName") }}
        />
      </div>
      <FormButtons
        classes={classes}
        onClose={handleClose}
        isPending={isPending}
        isNotSubmittable={isNotSubmittable}
      />
    </form>
  );
};

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
  | "cedex name hint text"
  | "cedex code hint text"
  | "cancel"
  | "register"
>()("PostalAddressInformationsForm");

export type I18n = typeof i18n;
