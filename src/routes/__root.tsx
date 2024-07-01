import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { QueryClient } from "@tanstack/react-query";
import { tss, GlobalStyles } from "tss";
import { AutoLogoutCountdown } from "components/AutoLogoutCountdown";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: () => <>The route is not defined</>,
});

function RootComponent() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
          },
          "*": {
            boxSizing: "border-box",
          },
        }}
      />
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <AutoLogoutCountdown />
      <Footer />
    </div>
  );
}

const useStyles = tss.withName({ RootComponent }).create(() => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    margin: "auto",
  },
}));
