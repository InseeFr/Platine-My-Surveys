import { createFileRoute } from "@tanstack/react-router";
import { Loading } from "components/surveyHomepage/Loading";
import { Faq } from "components/surveyHomepage/Faq";
import content from "resources/content.json";

export const Route = createFileRoute("/$survey/faq")({
  component: Index,
});

function Index() {
  const { survey } = Route.useParams();

  const specificContent = content.specifique.find(s => s.id === survey);

  const faqData = specificContent?.content["faq-data"];

  const generalFaqDataForCompany = specificContent?.content["faq-data-general"];
  const generalFaqData = content.generique.content["faq-data"];
  if (!faqData) {
    return <Loading />;
  }

  return (
    <Faq
      faqData={faqData}
      generalFaqData={
        generalFaqDataForCompany && isNotEmptyObjectArray(generalFaqDataForCompany)
          ? generalFaqDataForCompany
          : generalFaqData
      }
    />
  );
}

function isNotEmptyObjectArray(data: any[]): data is { title: string; body: string }[] {
  return (
    Array.isArray(data) &&
    data.every(
      item =>
        typeof item === "object" &&
        item !== null &&
        "title" in item &&
        typeof item.title === "string" &&
        "body" in item &&
        typeof item.body === "string",
    )
  );
}
