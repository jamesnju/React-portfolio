import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/pages/Contact';
import Experience from './components/pages/Experience';
import Portfolio from './components/pages/Portfolio';
import Services from './components/pages/Services';
import Testimonies from './components/pages/Testimonies';
import Works from './components/pages/Works';
import Intro from './intro/Intro';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonies/>
      <Contact/>
    </div>
  );
}

export default App;
