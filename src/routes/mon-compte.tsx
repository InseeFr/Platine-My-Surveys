import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { MyAccount } from "components/myAccount/MyAccount";
import { useUser } from "hooks/useAuth";
import { useFetchQuery } from "hooks/useFetchQuery";
import { useTranslation } from "i18n";
import { tss } from "tss";

export const Route = createFileRoute("/mon-compte")({
  component: MyAccountIndex,
});

function MyAccountIndex() {
  const { t } = useTranslation("Header");
  const { classes } = useStyles();
  const user = useUser();

  const {
    data: contact,
    isLoading,
    refetch,
  } = useFetchQuery("/api/contacts/{id}", {
    urlParams: {
      id: user.preferred_username.toUpperCase(),
    },
  });

  if (!contact || isLoading) {
    return;
  }

  return (
    <div className={classes.root}>
      <title>{`${t("my account")} - ${t("service tagline")}`}</title>
      <MyAccount className={classes.myAccount} contact={contact} onSave={refetch} />
    </div>
  );
}

const useStyles = tss.withName({ MyAccountIndex }).create({
  root: {
    display: "flex",
    justifyContent: "center",
    [fr.breakpoints.down("sm")]: {
      margin: fr.spacing("2w"),
    },
  },
  myAccount: {
    width: `min(100%, ${fr.breakpoints.emValues.lg}em)`,
  },
});
