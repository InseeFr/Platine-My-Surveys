import { createFileRoute } from "@tanstack/react-router";
import { Loading } from "components/surveyHomepage/Loading";
import { Faq } from "components/surveyHomepage/Faq";
import content from "resources/content.json";

export const Route = createFileRoute("/$survey/faq")({
  component: Index,
});

function Index() {
  const { survey } = Route.useParams();

  const faqData = content.specifique.find(s => s.id === survey)?.content["faq-data"];

  const generalFaqData = content.generique.content["faq-data"];
  if (!faqData) {
    return <Loading />;
  }

  return <Faq faqData={faqData} generalFaqData={generalFaqData} />;
}
