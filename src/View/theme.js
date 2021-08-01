import styled, { keyframes, css } from "styled-components/macro";
import { LinkWithRouteAndRef } from "../components/Header/Views/StyledLink";
import { NavContainer } from "../components/Header/Views/NavContainer";
import { NavSpan } from "../components/Header/Views/NavSpan";

const theme = {
  primary: {
    main: "#B6D094",
    dark: "#7f9167",
    light: "#c4d9a9",
  },
  secondary: {
    main: "#E1AA7D",
    dark: "#9d7657",
    light: "#e7bb97",
  },
  backgroundColor: {
    default: "#424242",
    primary: {
      main: "#B6D094",
      dark: "#7f9167",
      light: "#c4d9a9",
    },
    secondary: {
      main: "#E1AA7D",
      dark: "#9d7657",
      light: "#e7bb97",
    },
  },
  color: {
    black: "#000",
    white: "#fff",
  },
  font: [
    "Muller",
    "Tropical",
    "Don Graffiti",
    "Botanical",
    "Arkhip",
    "Maghfirea",
    "Facon",
    "Colus",
    "Bebasneue",
    "KensmarkSlant",
    "KensmarkBold",
  ],
  fontSize: {
    sm: "1rem",
    md: "2rem",
    lg: "3rem",
    xl: "4rem",
  },
};

const Container = styled.div`
  background-color: ${theme.backgroundColor.default};
  color: ${theme.primary.dark};
`;

const Button = styled.button`
  background-color: ${theme.backgroundColor.secondary.main};
  font-size: ${theme.fontSize.sm};
  color: ${theme.color.white};
`;

const H1 = styled.h1`
  font-family: "KensmarkBold";
  color: ${theme.primary.main};
  width: max-content;
  font-size: ${theme.fontSize.xl};
`;

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  flex-flow: column nowrap;
`;
const NavBlocks = styled(NavContainer)`
  visibility: ${(props) => (props.show ? "inherit" : "hidden")};
  flex-flow: column wrap;
  padding: 0;
  width: 100%;
  position: relative;
  height: 100vh;
  animation: ${(props) => (props.fade ? css`1s ${fadeOut} both` : undefined)};
`;

const Block = styled(LinkWithRouteAndRef)`
  position: absolute;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  z-index: 0;
  font-size: ${theme.fontSize.md};
  animation: ${(props) =>
    props.animate
      ? css`3s ${scaleUp} cubic-bezier(0.39, 0.575, 0.565, 1)
            forwards;`
      : props.show
      ? css`1s ${fadeInFrame} ${props.delay} both;`
      : undefined};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  transform-origin: ${(props) => props.transformOrigin};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: ${theme.backgroundColor.default};
    color: ${(props) => props.hoverColor};
  }
`;

const NavBlockSpan = styled(NavSpan)`
  transform: rotate(${(props) => props.rotation});
  animation: ${(props) =>
    props.animate && props.rotation === "-45deg"
      ? css`
          ${rotateClockwise} 3s;
        `
      : props.animate && props.rotation === "45deg"
      ? css`
          ${rotateCounterClockwise} 3s;
        `
      : undefined};
  animation-fill-mode: forwards;
`;

const BigLink = styled.div`
  width: 100%;
  height: 100%;
`;

const Li = styled.div`
  list-style: none;
`;

const rotateClockwise = keyframes`
  0% {
    transform: rotate(-45deg);
    
  }
  100% {
    transform: rotate(0);
    
  }
`;

const rotateCounterClockwise = keyframes`
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(0);
  }
`;

const scaleUp = keyframes`

  0% {
    transform: scale(1);
    z-index: 1;
    opacity: 1;
  }

  100% {
    transform: scale(2);
    z-index: 1;
    opacity: 1;
}`;

const fadeOut = keyframes`

  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-1000px);
  }
`;

const fadeInFrame = keyframes`

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export {
  Container,
  H1,
  theme,
  Button,
  Nav,
  NavBlocks,
  NavBlockSpan,
  BigLink,
  Li,
  scaleUp,
  fadeOut,
  fadeInFrame,
  Block,
};
