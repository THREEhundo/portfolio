import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#B60894"
    },
    secondary: {
      main: "#E1AA7D"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,

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

