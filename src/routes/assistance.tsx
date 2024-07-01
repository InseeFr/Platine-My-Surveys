import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/assistance")({
  component: () => <div>page assistance!</div>,
});
