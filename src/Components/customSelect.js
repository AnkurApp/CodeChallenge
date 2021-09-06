import { makeStyles, Box, Typography, List, ListItem } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  selectContainer: {
    color: "#fff",
    width: "200px",
    padding: "0.3rem 0",
    cursor: "pointer",
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  selectText: {
    fontSize: "17px",
  },

  optionsOuterContainer: {
    width: "100%",
    position: "absolute",
    top: "60px",
    color: "#000",
    boxShadow: "0px 5px 8px rgb(0 0 0 / 0.2)",
  },

  locationOption: {
    height: "40px",
    padding: "0.65rem 1rem",
    position: "relative",
    borderBottom: "1px solid #F5F5F5",
    backgroundColor: "#fff",
  },

  branchesContainer: {
    position: "absolute",
    top: "0",
    left: "202px",
    boxShadow: "0px 5px 8px rgb(0 0 0 / 0.2)",
  },

  branchOption: {
    width: "200px",
    height: "40px",
    padding: "0.65rem 1rem",
    borderBottom: "1px solid #F5F5F5",
    backgroundColor: "#fff",
  },

  optionLink: {
    textDecoration: "none",
    color: "#333",

    "&:focus, &:hover, &:visited, &:link, &:active ": {
      textDecoration: "none",
    },
  },
});

export default function CustomSelect({ data }) {
  const classes = useStyles();
  const locations = data.data.locations;

  const [location, setLocation] = useState(null);
  const [displaySelect, setDisplaySelect] = useState(false);

  return (
    <Box
      className={classes.selectContainer}
      onClick={() => setDisplaySelect(!displaySelect)}
    >
      <Typography className={classes.selectText} variant="h6">
        {"Select Location"}
      </Typography>
      <Box
        className={classes.optionsOuterContainer}
        style={displaySelect ? { display: "block" } : { display: "none" }}
      >
        <List style={{ margin: "0", padding: "0" }}>
          {locations.map((loc, index) => {
            return (
              <ListItem
                className={classes.locationOption}
                key={index}
                onMouseOver={() => setLocation(loc.name)}
                onMouseLeave={() => setLocation(null)}
              >
                {loc.name}
                <Box className={classes.branchesContainer}>
                  <List style={{ margin: "0", padding: "0" }}>
                    {location === loc.name &&
                      loc.branches.map((branch, ind) => {
                        return (
                          <ListItem className={classes.branchOption} key={ind}>
                            <Link
                              className={classes.optionLink}
                              to={{
                                pathname: `/EquipmentCatalog/${branch.branch_id}`,
                                state: loc.branches,
                              }}
                            >
                              {branch.name}
                            </Link>
                          </ListItem>
                        );
                      })}
                  </List>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}
