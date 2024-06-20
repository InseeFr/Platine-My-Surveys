import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { fr } from "@codegouvfr/react-dsfr";
import { QueryClient } from "@tanstack/react-query";
import { AutoLogoutCountdown } from "components/AutoLogoutCountdown";
import { tss, GlobalStyles } from "tss";
import { useIsAuthenticated } from "hooks/useAuth";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: () => <>The route is not defined</>,
});

function RootComponent() {
  const { classes } = useStyles();
  const { isAuthenticated } = useIsAuthenticated();

  if (!isAuthenticated) {
    return;
  }

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

const useStyles = tss.withName({ RootComponent }).create(({ breakpointsValues, windowInnerWidth }) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    margin: "auto",
    [fr.breakpoints.up("sm")]: {
      ...fr.spacing("padding", { topBottom: "10v" }),
    },
    width: (() => {
      if (windowInnerWidth < breakpointsValues.sm) {
        return `calc(100vw - ${fr.spacing("3v")})`;
      }

      if (windowInnerWidth < breakpointsValues.md) {
        return `calc(100vw - ${fr.spacing("10v")})`;
      }

      if (windowInnerWidth < breakpointsValues.xl) {
        return "80vw";
      }

      return "80vw";
    })(),
  },
}));
