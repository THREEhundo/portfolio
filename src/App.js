import './App.css';
import { About } from './components/About';
import Footer from './components/Footer';
import { Header } from './components/Header';
import { Work } from './components/Work';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <About />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
