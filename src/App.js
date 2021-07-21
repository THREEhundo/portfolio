import './App.css';
import { Button, Typography, Paper, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { About } from './components/About';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { Work } from './components/Work';

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
    backgroundColor: theme.palette.background.paper
  }
}))

function App() {
  const classes = useStyles()
  return (
    <Container className={classes.paper}>
    <Paper elevation={3}>
      <Button className={classes.primaryButtonDark} variant="outlined">Hi</Button>
      <Button className={classes.secondaryButtonDark} variant="contained">Click Me</Button>
      <Typography color="primary" variant="h3">
      <Header />
      </Typography>
      {/* <Header color="primary" /> */}
      <About id="about" />
      <Work id="work" />
      <Footer id="footer" />
      <div>
        <p></p>
      </div>
    </Paper>
    </Container>
  );
}

export default App;
