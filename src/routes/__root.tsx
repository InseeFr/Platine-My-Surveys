import { createRootRouteWithContext, Outlet, useRouter } from "@tanstack/react-router";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { QueryClient } from "@tanstack/react-query";
import { tss, GlobalStyles } from "tss";
import { AutoLogoutCountdown } from "components/AutoLogoutCountdown";
import { fr } from "@codegouvfr/react-dsfr";
import { SkipLinks } from "@codegouvfr/react-dsfr/SkipLinks";
import { useTranslation } from "i18n";
import { useIsAuthenticated } from "hooks/useAuth";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: () => <>The route is not defined</>,
});

function RootComponent() {
  const { classes } = useStyles();
  const { t } = useTranslation("Header");
  const router = useRouter();
  const currentPath = router.state.location.pathname;
  const isOnHomepage = currentPath.includes("/accueil");
  const isAuthenticated = useIsAuthenticated();

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
      <SkipLinks
        className="fr-container"
        links={[
          {
            anchor: "#contenu",
            label: t("content"),
          },
          {
            anchor: "#header",
            label: t("header"),
          },
          {
            anchor: "#footer",
            label: t("footer"),
          },
        ]}
      />
      <Header />
      <main className={isOnHomepage && !isAuthenticated ? classes.homepage : classes.main}>
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
    ...fr.spacing("padding", { top: "5v", bottom: "10v" }),
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
  homepage: {
    flex: 1,
    margin: "auto",
  },
}));
