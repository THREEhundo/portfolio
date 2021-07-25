import styled from "styled-components/macro";
import { theme as thematic } from "styled-theming";

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

// TODO [] List All Variants

const Container = styled.div`
  width: 100%;
  background-color: ${theme.backgroundColor.default};
`;

const Button = styled.button`
  background-color: ${theme.backgroundColor.secondary.main};
  font-size: ${theme.fontSize.sm};
  color: ${theme.color.white};
`;

const H1 = styled.h1`
  font-family: "Superion";
  color: ${theme.primary.main};
  width: max-content;
  font-size: ${theme.fontSize.xl};
`;

const invertedTheme = ({ primary, secondary }) => ({
  primary: secondary,
  secondary: primary,
});

export { Container, H1, theme, Button, invertedTheme };
