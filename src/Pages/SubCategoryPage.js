import { makeStyles, Box, Typography, Breadcrumbs } from "@material-ui/core";
import { useHistory, useLocation, useParams } from "react-router";
import Cards from "../Components/Card";
import { SubCategoryImage } from "../Components/subcategoryImage";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: "90px",
    padding: "2rem 5rem",
  },

  innerContainer: {
    margin: "1rem 0",
    display: "grid",
    gridGap: "2rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  },

  heading: {
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
    fontSize: "20px",

    "&:hover": {
      opacity: "0.7",
    },
  },

  activeLink: {
    fontWeight: "bold",
    color: "black",
    fontSize: "20px",
  },
});
export default function SubCategoryScreen() {
  const classes = useStyles();
  const { subcategory } = useParams();

  const location = useLocation();
  const history = useHistory();

  const subcategoryData = location.state;

  return (
    <Box className={classes.mainContainer}>
      <Breadcrumbs style={{ fontSize: "20px" }}>
        <Typography
          className={classes.heading}
          onClick={() => history.goBack()}
        >
          {"Equipment Catalog "}
        </Typography>
        <span className={classes.activeLink}>{subcategory}</span>
      </Breadcrumbs>

      <Box className={classes.innerContainer}>
        {subcategoryData.map((subcat, index) => {
          return (
            <>
              {SubCategoryImage.map((item) => {
                if (item.name === subcat.image) {
                  return (
                    <Cards
                      key={index}
                      imgSrc={item.imgSrc}
                      cardText={subcat.name}
                    />
                  );
                }
              })}
            </>
          );
        })}
      </Box>
    </Box>
  );
}
