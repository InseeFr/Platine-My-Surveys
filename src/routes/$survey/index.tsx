import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$survey/")({
  component: Index,
});

function Index() {
  const { survey } = Route.useParams();
  return <Navigate to={"/$survey/introduction"} params={{ survey: survey }} />;
}
