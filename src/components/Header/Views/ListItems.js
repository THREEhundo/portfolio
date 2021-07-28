import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { NavBlocks, scaleUpTopLeft } from "../../../View/theme";

// animate actual links
// when navblocks is open links attrs to fullscreen
// hide after

// initial values
// animate
// reset to initial values
// visibility = hidden

/* 
  opacity: 1; 
  z-index: 0;
  transform: matrix(1, 0, 0, 1, 0, 0)
  transform: matrix(2, 0, 0, 2, 0, 0)
  cubic-bezier(0.23, 1, 0.32, 1)
*/
/* animate &&
    css`
      animation: 3s ${scaleUpTopLeft} cubic-bezier(0.39, 0.575, 0.565, 1)
        forwards;
    `} */
const NavBlock = styled(Link)`
  position: absolute;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  z-index: 0;
  animation: ${(props) =>
      props.animate
        ? css`3s ${scaleUpTopLeft} cubic-bezier(0.39, 0.575, 0.565, 1)
            forwards;`
        : undefined}
    ${(first) =>
      first &&
      css`
        top: 0;
        left: 0;
        background-color: #fff;
        transform-origin: top left;
      `};
`;

/* animate &&
    css`
      animation: 3s ${scaleUpTopLeft} cubic-bezier(0.39, 0.575, 0.565, 1)
        forwards;
    `} */

const NavBlock2 = styled(Link)`
  position: absolute;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  z-index: 0;

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
  z-index: 0;

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
  const [animate, setAnimate] = useState(false);
  const startAnimationAndClose = () => {
    setAnimate(!animate);
    setTimeout(handleClose(), 500);
    return console.log("Show: ", show);
  };

  return (
    <NavBlocks show={show}>
      <NavBlock to="/" first={first} animate={animate}>
        <span onClick={() => startAnimationAndClose()}>{links[0]}</span>
      </NavBlock>
      <NavBlock2
        to={`/${links[1].toLowerCase()}`}
        second={second}
        animate={animate}
      >
        <span onClick={() => startAnimationAndClose()}>{links[1]}</span>
      </NavBlock2>
      <NavBlock3
        to={`/${links[2].toLowerCase()}`}
        third={third}
        animate={animate}
      >
        <span onClick={() => startAnimationAndClose()}>{links[2]}</span>
      </NavBlock3>
      <NavBlock4
        to={`/${links[3].toLowerCase()}`}
        fourth={fourth}
        animate={animate}
      >
        <span onClick={() => startAnimationAndClose()}>{links[3]}</span>
      </NavBlock4>
    </NavBlocks>
  );
};

export default ListItems;
