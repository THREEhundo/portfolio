import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./styles/themes";
import { Container, Button, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Work } from "./components/Work";
import { ContactEmail } from "./components/ContactEmail";

// TODO [] Put Home Link in Header
// TODO [] Apply Grid to Header

function App() {
  console.log(theme.typography);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container fixed>
          {/* <Container>
            <Typography variant="h1" component="body1">
              <Link to="/" color="primary" underline="none">
                SB
              </Link>
            </Typography>
          </Container> */}
          <Header />
          <Switch>
            <Route exact path="/about">
              <About id="about" />
            </Route>

            <Route exact path="/work">
              <Work id="work" />
            </Route>

            <Route exact path="/contact">
              <ContactEmail />
            </Route>
          </Switch>
          <Button variant="contained" color="primary">
            Hi
          </Button>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
