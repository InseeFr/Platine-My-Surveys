import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$survey/assistance")({
  component: Support,
});

function Support() {
  return <></>;
}
