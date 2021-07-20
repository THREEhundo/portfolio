import './App.css';
import '@fontsource/roboto';
import { About } from './components/About';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { Work } from './components/Work';

function App() {
  return (
    <div className="App">
      <Header className="App-header">
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
