import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useLocation, useParams } from "react-router";
import Cards from "../Components/Card";
import { CategoryImage } from "../Components/categoryImage";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: "90px",
    padding: "2rem 5rem",
  },

  catalogContainer: {
    margin: "1rem 0",
    display: "grid",
    gridGap: "2rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  },
});

export default function CategoryScreen() {
  const classes = useStyles();
  const { branch } = useParams();
  const location = useLocation();

  const Data = location.state;

  const requiredData = Data.find((data) => data.branch_id === branch);

  return (
    <Box className={classes.mainContainer}>
      <Typography variant="h6">{"Equipment Catalog"}</Typography>
      <Box className={classes.catalogContainer}>
        {requiredData?.categories.map((cat, index) => {
          return (
            <>
              {CategoryImage.map((item) => {
                if (item.name === cat.image) {
                  return (
                    <Cards
                      key={index}
                      imgSrc={item.imgSrc}
                      cardText={cat.name}
                      subcategoryData={cat.subcategories}
                      branchId={requiredData.branch_id}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </>
          );
        })}
      </Box>
    </Box>
  );
}
