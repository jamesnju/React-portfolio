import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/pages/Contact';
import Experience from './components/pages/Experience';
import Footer from './components/pages/Footer';
import Portfolio from './components/pages/Portfolio';
import Services from './components/pages/Services';
import Testimonies from './components/pages/Testimonies';
import Works from './components/pages/Works';
import Intro from './intro/Intro';
import { themeContext } from './Context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{background: darkMode? 'black': '', color: darkMode? 'white': ''}}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      {/* <Testimonies/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
