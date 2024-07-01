import { createFileRoute } from "@tanstack/react-router";
import { Homepage } from "components/homepage/Homepage";

export const Route = createFileRoute("/accueil")({
  component: HomepageIndex,
});

function HomepageIndex() {
  return <Homepage />;
}
