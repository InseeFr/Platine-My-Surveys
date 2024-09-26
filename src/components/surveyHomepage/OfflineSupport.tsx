import { useForm } from "hooks/useForm";
import { useState } from "react";
import { supportSchema } from "types/schemas";
import { SupportForm } from "./SupportForm";

export const OfflineSupport = ({ surveyId }: { surveyId: string }) => {
  const { register, handleSubmit, errors } = useForm(supportSchema);

  const [isSuccess, setIsSuccess] = useState(false);

  // TODO: call api
  const onSubmit = handleSubmit(async data => {
    const formattedData = {
      auth: false,
      idec: data.idec,
      idue: undefined,
      questioningId: undefined,
      mailaddress: data.mailaddress,
      message: data.message,
      name: `${data.firstName} ${data.lastName}`,
      phonenumber: data.phonenumber,
      survey: surveyId,
      mailobjet: data.mailObjet,
    };
    console.log("formattedData", formattedData);

    //   TODO: use mutation isSucess instead
    setIsSuccess(true);
  });

  return (
    <SupportForm
      surveyId={surveyId}
      isSuccess={isSuccess}
      errors={errors}
      register={register}
      onSubmit={onSubmit}
    />
  );
};
