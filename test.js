import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { scaleUpTopLeft } from "./src/View/theme";

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
      : undefined};

  ${(first) =>
    first &&
    css`
      top: 0;
      left: 0;
      background-color: #fff;
      transform-origin: top left;
    `};
`;

const Test = () => {
  const [animate, setAnimate] = useState(false);
  return <NavBlock animate={animate}>Hi</NavBlock>;
};

console.log(Test);

export default Test;
