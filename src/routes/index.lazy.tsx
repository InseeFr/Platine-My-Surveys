import { createLazyFileRoute } from "@tanstack/react-router";
import { tss } from "tss";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <h3>Bienvenue</h3>
      </div>
    </div>
  );
}

const useStyles = tss.withName({ Index }).create({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  content: {
    textAlign: "center",
  },
});
