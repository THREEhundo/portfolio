import styled, { keyframes, css } from "styled-components/macro";
import { Link } from "react-router-dom";

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

const NavBlocks = styled.div`
  visibility: ${(props) => (props.show ? "inherit" : "hidden")};
  flex-flow: column wrap;
  padding: 0;
  width: 100%;
  position: relative;
  height: 100vh;
  animation: ${(props) => (props.fade ? css`1s ${fadeOut} both` : undefined)};
`;

const NavBlockTemplate = styled(Link)`
  position: absolute;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  z-index: 0;
  font-size: ${theme.fontSize.md};
  &:hover {
    background-color: ${theme.backgroundColor.default};
  }
`;

const NavBlockSpan = styled.span`
  transform: rotate(${(props) => props.rotation});
`;

const Li = styled.div`
  list-style: none;
`;

const scaleUp = keyframes`

  0% {
            transform: scale(1);
            z-index: 1;
  }
  /* 99% {
            z-index: 1;
  } */
  100% {
            transform: scale(2);
            z-index: 1;
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
  NavBlockTemplate,
  NavBlockSpan,
  Li,
  scaleUp,
  fadeOut,
  fadeInFrame,
};
