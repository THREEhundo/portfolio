// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import theme from "./styles/themes";
import { Typography, Paper, Container, Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Work } from "./components/Work";
import { ContactEmail } from "./components/ContactEmail";

function App() {
  console.log(theme.props);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container fixed={true} maxWidth="false" color="primary">
          <Paper>
            <Container>
              <Typography variant="h1">
                <Link to="/" color="primary" underline="none">
                  SB
                </Link>
              </Typography>
            </Container>
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
          </Paper>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
