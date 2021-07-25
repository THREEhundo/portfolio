import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoCubeSharp } from "react-icons/io5";
// import styled from "styled-components/macro";
import { theme, Nav, Ul, Li } from "../../../View/theme";

const options = ["Home", "About", "Work", "Contact"];

const menuListItems = ({ handleClose }) =>
  options.map((option, index, { handleClose }) => {
    let linkName;
    option === "Home" ? (linkName = "") : (linkName = option);
    return (
      <Li key={index}>
        <Link to={`/${linkName}`}>
          <span onClick={() => handleClose()}>{option}</span>
        </Link>
      </Li>
    );
  });

const UnorderedList = ({ hide, handleClose }) => (
  <Ul id="navbarList" hide={hide}>
    {menuListItems(handleClose)}
  </Ul>
);

const Navbar = () => {
  // eslint-disable-next-line
  const [hide, setHide] = useState(false);

  // eslint-disable-next-line
  const handleClick = () => setHide(!hide);

  const handleClose = () => {
    setHide(false);
    console.log(`handle close`);
  };

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
      <UnorderedList hide={hide} handleClose={handleClose} />
    </Nav>
  );
};

export default Navbar;
