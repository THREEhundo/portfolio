import React from "react";
import { Link } from "react-router-dom";
import { Li, Ul } from "../../../View/theme";

const links = ["Home", "About", "Work", "Contact"];

const ListItems = ({ show, handleClose }) => (
  <Ul show={show}>
    {links.map((option, index) => {
      let linkName;
      option === "Home" ? (linkName = "") : (linkName = option.toLowerCase());
      return (
        <Li key={index}>
          <Link to={`/${linkName}`}>
            <span onClick={() => handleClose()}>{option}</span>
          </Link>
        </Li>
      );
    })}
  </Ul>
);

export default ListItems;
