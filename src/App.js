import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "./View/theme";
import { About } from "./View/About/About";
import { Header } from "./components/Header/Header";
import { Work } from "./View/Work/Work";
import { ContactEmail } from "./components/Email/ContactEmail";
// ✅
// TODO [✅] Install Styled-Components
// TODO [✅] Reorganize file structure
// TODO [✅] Setup Styled-Components Theme
//  TODO [✅] backgroundColor
//  TODO [✅] font size
//  TODO [✅] color
//  TODO [✅] width
//  TODO [✅] height

// TODO [] Setup Splash page
// TODO [] Style Navbar

function App() {
  return (
    <Router>
      <Container>
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
      </Container>
    </Router>
  );
}

export default App;
