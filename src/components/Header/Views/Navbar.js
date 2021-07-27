import React, { useState } from "react";
import { theme, Nav, Container } from "../../../View/theme";
import ListItems from "./ListItems";
import styled from "styled-components";

const Navigator = styled(Nav)`
  background-color: transparent;
  position: fixed;
  z-index: 10;
  top: 50px;
  right: 20px;
`;

const NavbarContainer = styled(Container)`
  background-color: transparent;
  position: fixed;
  z-index: 10;
  height: 3rem;
  width: 3rem;
  top: 53px;
  right: 20px;
`;

const NavMenu = styled.div`
  /* opacity: ${(props) => (props.show ? 0 : 1)}; */
  animation: ${(props) =>
    props.show
      ? `slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`
      : `slide-right-2 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`};
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  @keyframes slide-right {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(40px);
      opacity: 0;
    }
  }
  @keyframes slide-right-2 {
    0% {
      transform: translateX(-40px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  } ;
`;

const NavClose = styled.div`
  /* opacity: ${(props) => (props.show ? 0 : 1)}; */
  /* opacity: 0; */
  animation: ${(props) =>
    props.show
      ? `slide-right-2 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`
      : `slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both`};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  @keyframes slide-right {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(40px);
      opacity: 0;
    }
  }
  @keyframes slide-right-2 {
    0% {
      transform: translateX(-40px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const NavSpan = styled.span`
  width: 100%;
  height: 1px;
  background: ${theme.primary.main};
`;

const NavX = styled(NavSpan)`
  transform: ${(props) => (props.left ? `rotate(45deg)` : `rotate(-45deg)`)};
  position: absolute;
`;

const Navbar = ({ show, handleClick }) => {
  return (
    <Navigator>
      <NavbarContainer onClick={() => handleClick()}>
        <NavMenu show={show}>
          <NavSpan />
          <NavSpan />
          <NavSpan />
        </NavMenu>
        <NavClose show={show}>
          <NavX left />
          <NavX />
        </NavClose>
      </NavbarContainer>
      {/* <MenuContainer>
        <ListItems show={show} handleClose={handleClose} />
      </MenuContainer> */}
    </Navigator>
  );
};

export default Navbar;
