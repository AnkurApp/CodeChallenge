import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    margin: "0 auto",
    position: "relative",
  },

  textContainer: {
    width: "100%",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default function LandingPage() {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.textContainer}>
        <Typography variant="h4">
          {"Welcome to Rental Management System"}
        </Typography>

        <Typography variant="h6">{"Please select Location"}</Typography>
      </Box>
    </Box>
  );
}
