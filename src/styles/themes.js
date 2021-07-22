import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  type: "dark",
  palette: {
    type: "dark",
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
    text: {
      primary: "#e7bb97",
    },
  },
  typography: {
    fontFamily: [
      "Superion",
      "Yeager",
      "RoadRage",
      "SkyScrapers",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
  MuiContainer: {
    maxWidth: "xl",
  },
};

theme.overrides = {
  MuiContainer: {
    root: {
      padding: "1rem",
      height: "100%",
      backgroundColor: theme.palette.background.default,
    },
    maxWidthXs: {
      height: "100%",
    },
    fixed: {
      minHeight: "100vh",
    },
  },
  MuiPaper: {
    root: {
      height: "100%",
    },
  },
  MuiTypography: {
    root: {
      color: theme.palette.primary.main,
      textDecoration: "none",
      padding: "1rem",
    },
  },
  MuiLink: {
    root: {
      fontSize: "200px",
      textDecoration: "none",
    },
  },
};

export default theme;
