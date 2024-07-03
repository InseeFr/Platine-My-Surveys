import { createFileRoute } from "@tanstack/react-router";

import { Logout } from "components/Logout";

export const Route = createFileRoute("/deconnexion")({
  component: LogoutIndex,
});

function LogoutIndex() {
  return <Logout />;
}
