import './App.css';
import '@fontsource/roboto';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { About } from './components/About';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { Work } from './components/Work';

const useStlyes = makeStyles({
  root: {
    height: "100vh",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
  }
})

function App() {
  const classes = useStlyes();
  return (
    <div className={classes.root}>
      <Button color="secondary" variant="contained">Hi</Button>
      <Header className={classes.root}>
        {/* <Header /> */}
      </Header>
      <About id="about" />
      <Work id="work" />
      <Footer id="footer" />
      <div>
        <p></p>
      </div>
    </div>
  );
}

export default App;
