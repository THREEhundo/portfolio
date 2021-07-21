import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#B6D094",
      dark: "#7f9167",
      light: "#c4d9a9"
    },
    secondary: {
      main: "#E1AA7D",
      dark: "#9d7657",
      light: "#e7bb97"
    },
    text: {
      primary: "#e7bb97"
    }
  },
  typography: {
    fontFamily: [
      'Superion',
      'Yeager',
      'RoadRage',
      "SkyScrapers",
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>  
    <App /> 
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

