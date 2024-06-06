import { tss } from "tss";
import { fr } from "@codegouvfr/react-dsfr";
import Typography from "@mui/material/Typography";

type Props = {
  className?: string;
};

export function Home(props: Props) {
  const { className } = props;

  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <Typography sx={{ my: 3 }} variant="h1">
        Bienvenue
      </Typography>
    </div>
  );
}

const useStyles = tss.withName({ Home }).create({
  root: {
    padding: fr.spacing("2w"),
  },
});
