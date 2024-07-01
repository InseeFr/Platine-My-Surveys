import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/accueil/")({
  component: () => <Navigate to="/accueil/introduction" />,
});
