import React, { useEffect } from "react";
import { Grid, Icon, Typography } from "@material-ui/core";
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

      <Icon
        className="fas fa-angle-left"
        color="primary"
        style={{ fontSize: "3.25rem" }}
      />

      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-end"
      >
        <Typography variant="h2" align="right" gutterBottom>
          <Link to="/about">About</Link>
        </Typography>
        <Typography variant="h2" align="right" gutterBottom>
          <Link to="/work">Work</Link>
        </Typography>
        <Typography variant="h2" align="right" gutterBottom>
          <Link to="/contact">Contact</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};
