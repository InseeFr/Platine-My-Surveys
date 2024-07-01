import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/connexion")({
  component: () => <div>page de connexion</div>,
});
