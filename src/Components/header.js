import React from "react";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

import data from "./data.json";
import CustomSelect from "./customSelect";

const useStyles = makeStyles({
  appBar: {
    width: "100%",
    height: "70px",
    margin: "0 auto",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "space-around",
  },

  textHeading: {
    textTransform: "uppercase",
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.appBar}>
        <Typography variant="h6" className={classes.textHeading}>
          {"Rental Management System"}
        </Typography>

        <CustomSelect data={data} />
      </Toolbar>
    </AppBar>
  );
}
