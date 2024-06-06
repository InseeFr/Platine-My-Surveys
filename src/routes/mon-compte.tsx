import { fr } from "@codegouvfr/react-dsfr";
import { createFileRoute } from "@tanstack/react-router";
import { MyAccount } from "components/myAccount/MyAccount";
import { tss } from "tss";

export const Route = createFileRoute("/mon-compte")({
  component: MyAccountIndex,
});

function MyAccountIndex() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <MyAccount className={classes.cardsApp} />
    </div>
  );
}

const useStyles = tss.withName({ MyAccountIndex }).create({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  cardsApp: {
    width: `min(100%, ${fr.breakpoints.emValues.lg}em)`,
  },
});
