import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { NavBlocks } from "../../../View/theme";

// animate actual links
// when navblocks is open links attrs to fullscreen
// hide after

/* 
  opacity: 1; 
  z-index: 0;
  transform: matrix(1, 0, 0, 1, 0, 0)
  transform: matrix(2, 0, 0, 2, 0, 0)
*/

const NavBlock = styled(Link)`
  position: absolute;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1);

  ${(first) =>
    first &&
    css`
      top: 0;
      left: 0;
      background-color: #fff;
      transform-origin: top left;
    `};
`;
const NavBlock2 = styled(Link)`
  position: absolute;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  ${(second) =>
    second &&
    css`
      top: 0;
      right: 0;
      background-color: red;
      transform-origin: "top right";
    `}
`;
const NavBlock3 = styled(Link)`
  position: absolute;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  ${(third) =>
    third &&
    css`
      bottom: 0;
      left: 0;
      background-color: blue;
      transform-origin: bottom left;
    `}
`;

const NavBlock4 = styled(Link)`
  position: absolute;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  ${(fourth) =>
    fourth &&
    css`
      bottom: 0;
      right: 0;
      background-color: yellow;
      transformorigin: bottom right;
    `}
`;

const ListItems = ({ show, handleClose, first, second, third, fourth }) => {
  const links = ["Home", "About", "Work", "Contact"];
  return (
    <NavBlocks show={show}>
      <NavBlock to="/" first={first}>
        <span onClick={() => handleClose()}>{links[0]}</span>
      </NavBlock>
      <NavBlock2 to={`/${links[1].toLowerCase()}`} second={second}>
        <span onClick={() => handleClose()}>{links[1]}</span>
      </NavBlock2>
      <NavBlock3 to={`/${links[2].toLowerCase()}`} third={third}>
        <span onClick={() => handleClose()}>{links[2]}</span>
      </NavBlock3>
      <NavBlock4 to={`/${links[3].toLowerCase()}`} fourth={fourth}>
        <span onClick={() => handleClose()}>{links[3]}</span>
      </NavBlock4>
    </NavBlocks>
  );
};

// const ListItems = ({ show, handleClose, first, second, third, fourth }) => (
//   <NavBlocks show={show}>
//     {links.map((option, index) => {
//       let linkName, tile;
//       option === "Home" ? (linkName = "") : (linkName = option.toLowerCase());
//       option === "Home"
//         ? (tile = first)
//         : option === "About"
//         ? (tile = second)
//         : option === "Work"
//         ? (tile = third)
//         : (tile = fourth);
//       return (
//         <NavBlock key={index} to={`/${linkName}`} tile={tile}>
//           <span to={`/${linkName}`} onClick={() => handleClose()}>
//             {option}
//           </span>
//         </NavBlock>
//       );
//     })}
//   </NavBlocks>
// );

export default ListItems;
