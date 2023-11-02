import './App.css';
import Navbar from './components/Navbar/Navbar';
import Experience from './components/pages/Experience';
import Services from './components/pages/Services';
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
    </div>
  );
}

export default App;
