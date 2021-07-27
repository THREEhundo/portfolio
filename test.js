import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const first = {
  top: 0,
  left: 0,
  background: "#fff",
  transformOrigin: "top left",
};
const second = {
  top: 0,
  left: 0,
  background: "red",
  transformOrigin: "top right",
};
const third = {
  bottom: 0,
  left: 0,
  background: "blue",
  transformOrigin: "bottom left",
};

const fourth = {
  bottom: 0,
  right: 0,
  background: "yellow",
  transformOrigin: "bottom right",
};

const NavBlock = styled(Link).attrs((props) => ({
  top: (props) => props.obj.top || "initial",
  bottom: (props) => props.obj.bottom || "initial",
  left: (props) => props.obj.left || "initial",
  right: (props) => props.obj.right || "initial",
  background: (props) => props.obj.background,
  transformOrigin: (props) => props.obj.transformOrigin,
}))`
  position: absolute;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const nb = (
  <NavBlock
    top={first.top}
    left={first.left}
    background={first.background}
    transformOrigin={first.transformOrigin}
  ></NavBlock>
);
const numb = [1, 2, 3, 4];

const test = (arr) => {
  console.log(arr);
  return (
    <NavBlock
      top={first.top}
      left={first.left}
      background={first.background}
      transformOrigin={first.transformOrigin}
    ></NavBlock>
  );
};

console.log(test(numb));

export default test;
