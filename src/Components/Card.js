import { makeStyles, Card, Typography, Box } from "@material-ui/core";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  cardContainer: {
    height: "300px",
  },
  catalogImg: {
    display: "block",
    width: "100%",
    height: "85%",
  },

  catalogBox: {
    width: "100%",
    height: "15%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1e90ff",
    textAlign: "center",
  },

  catalogText: {
    color: "#fff",
    width: "80%",
    fontWeight: "bold",
    fontSize: "18px",
    justifySelf: "center",
  },
});

export default function Cards(props) {
  const classes = useStyles();
  const { index, imgSrc, cardText, subcategoryData, branchId } = props;

  return (
    <Card className={classes.cardContainer} key={index}>
      <img
        className={classes.catalogImg}
        src={imgSrc.toString()}
        alt={cardText}
      />
      {subcategoryData ? (
        <Link
          className={classes.catalogBox}
          to={{
            pathname: `/EquipmentCatalog/${branchId}/${cardText}`,
            state: subcategoryData,
          }}
        >
          <Typography variant="h6" className={classes.catalogText}>
            {cardText}
          </Typography>
          <PlayArrowRoundedIcon style={{ color: "#fff" }} />
        </Link>
      ) : (
        <Box className={classes.catalogBox}>
          <Typography variant="h6" className={classes.catalogText}>
            {cardText}
          </Typography>
          <PlayArrowRoundedIcon style={{ color: "#fff" }} />
        </Box>
      )}
    </Card>
  );
}
