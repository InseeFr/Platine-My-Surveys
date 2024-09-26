import { useFetchQueryPortail } from "hooks/useFetchQuery";
import { useForm } from "hooks/useForm";
import { useState } from "react";
import { supportSchema } from "types/schemas";
import { Loading } from "./Loading";
import { SupportForm } from "./SupportForm";

export const AuthenticatedSupport = ({
  surveyId,
  questioningId,
}: {
  surveyId: string;
  questioningId?: string;
}) => {
  const { register, handleSubmit, errors } = useForm(supportSchema);

  const { data: questioningUrlData, isLoading } = useFetchQueryPortail("/questionnaires-url");

  const [isSuccess, setIsSuccess] = useState(false);

  if (!questioningUrlData || isLoading) {
    return <Loading />;
  }

  // TODO: call api
  const onSubmit = handleSubmit(async data => {
    const formattedData = {
      auth: true,
      idec: data.idec,
      idue: questioningUrlData[0].idUE,
      questioningId: questioningId,
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
      errors={errors}
      register={register}
      onSubmit={onSubmit}
      isSuccess={isSuccess}
    />
  );
};
