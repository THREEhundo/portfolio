import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// eslint-disable-next-line
import theme from "./styles/themes";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import { About } from "./View/About/About";
import { Header } from "./components/Header/Header";
import { Work } from "./View/Work/Work";
import { ContactEmail } from "./components/Email/ContactEmail";
import logo from "./assets/logo.svg";
// ✅
// TODO [✅] Install Styled-Components
// TODO [✅] Reorganize file structure
// TODO [] Setup Splash page
// TODO [] Style Navbar

function App() {
  console.log(logo);
  return (
    <Router>
      <ThemeProvider>
        <img src={logo} alt="Logo" />
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
      </ThemeProvide>
    </Router>
  );
}

export default App;
