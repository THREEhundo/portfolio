import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoCubeSharp } from "react-icons/io5";
import { Li, theme, Nav, Ul } from "../../../View/theme";
import ListItems from "./ListItems";
// import styled from "styled-components/macro";

const links = ["Home", "About", "Work", "Contact"];

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handleClose = () => setShow(false);

  return (
    <Nav>
      <IoCubeSharp
        style={{
          width: "3rem",
          height: "3rem",
          color: theme.primary.main,
          stroke: theme.color.white,
          strokeWidth: 20,
          marginLeft: "auto",
        }}
        onClick={() => handleClick()}
      />
      <ListItems show={show} handleClose={handleClose} />
    </Nav>
  );
};

export default Navbar;
