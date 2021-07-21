import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Typography, Paper, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { About } from './components/About';
import { Header } from './components/Header';
import { Work } from './components/Work';
import { ContactEmail } from './components/ContactEmail';

const useStyles = makeStyles(theme => ({
  primaryButtonDark: {
    backgroundColor: theme.palette.primary.dark
  },
  PrimaryButtonLight: {
    backgroundColor: theme.palette.primary.light
  },
  secondaryButtonDark: {
    backgroundColor: theme.palette.secondary.dark,
  },
  secondaryButtonLight: {
    backgroundColor: theme.palette.secondary.light
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    minHeight: "100vh"
  },
  root: {
    padding: "25px 0",
    textDecoration: "none"
  },
  links: {
    color: theme.palette.primary.main,
    textDecoration: "none"
  }
}))

function App() {
  const classes = useStyles()
  return (
    <Router>
      <Container className={classes.paper}>
        <Paper className={classes.root && classes.paper} elevation={3}>
          <Typography variant="h1">
            <Link className={classes.links} to="/" underline="none">SB</Link>
          </Typography>
            
          
          <Header linkStyle={classes.links} />
          
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
        </Paper>
      </Container>
    </Router>
  );
}

export default App;
