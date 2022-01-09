import './App.css';
import Navbar from './components/layout/Navbar';
import Front from './components/layout/Front';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/layout/About';
import Skills from './components/layout/Skills';
import Projects from './components/layout/Projects';
import Certificates from './components/layout/Certificates';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Front />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
