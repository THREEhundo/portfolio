import styled from "styled-components/macro";

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
`;

const Li = styled.div`
  list-style: none;
`;

const invertedTheme = ({ primary, secondary }) => ({
  primary: secondary,
  secondary: primary,
});

export { Container, H1, theme, Button, Nav, NavBlocks, Li, invertedTheme };
