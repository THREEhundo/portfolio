import React from "react";
import { theme, Nav, Container } from "../../../View/theme";
import styled, { css, keyframes } from "styled-components";

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
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  animation: ${(props) =>
    props.show
      ? css`
          ${slideLeftHide} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
        `
      : css`
          ${slideRightShow} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
        `};
`;

const NavClose = styled.div`
  animation: ${(props) =>
    props.show
      ? css`
          ${slideRightShow} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
        `
      : css`
          ${slideLeftHide} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
        `};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const slideLeftHide = keyframes`
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-50px);
      opacity: 0;
    }
`;

const slideRightShow = keyframes`
    0% {
      transform: translateX(-50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
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
    </Navigator>
  );
};

export default Navbar;
