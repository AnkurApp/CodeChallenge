import { BottomNavigation, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    width: "100%",
    backgroundColor: "black",
    position: "absolute",
    bottom: "0",
  },
});

export default function Footer() {
  const classes = useStyles();
  return <BottomNavigation className={classes.footer} />;
}
