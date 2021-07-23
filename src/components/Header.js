import React, { useEffect } from "react";
import PortfolioMenu from "./PortfolioMenu";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { loadCSS } from "fg-loadcss";

export const Header = () => {
  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="h1" gutterBottom>
        <Link to="/" color="primary" underline="none">
          SB
        </Link>
      </Typography>

      <PortfolioMenu />
    </Grid>
  );
};
