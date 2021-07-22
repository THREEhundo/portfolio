import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Typography align="right">
      <Link to="/about">About</Link>
      <Link to="/work">Work</Link>
      <Link to="/contact">Contact</Link>
    </Typography>
  );
};
