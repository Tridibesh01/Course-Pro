import './App.css';
import Navbar from './components/layout/Navbar';
import Front from './components/layout/Front';
import Courses from './components/layout/Courses';
import Earners from './components/layout/Earners';
import Strategy from './components/layout/Strategy';
import Testimonials from './components/layout/Testimonials';
import Contact from './components/layout/Contact';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Front />
        <Courses />
        <Earners />
        <Strategy />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
