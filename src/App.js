import React from "react";
import "./";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// eslint-disable-next-line
import theme from "./styles/themes";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { Work } from "./components/Work";
import { ContactEmail } from "./components/ContactEmail";
// ✅
// TODO [] Install Styled-Components
// TODO [] Setup Splash page
// TODO [] Style Navbar

function App() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
  );
}

export default App;
