import { Navigate, createLazyFileRoute } from "@tanstack/react-router";

import { useIsAuthenticated } from "hooks/useAuth";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { isAuthenticated } = useIsAuthenticated();

  return !isAuthenticated ? <Navigate to="/mes-enquetes" /> : <Navigate to="/accueil" />;
}
