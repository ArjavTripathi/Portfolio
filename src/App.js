import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Skills from './components/Skills';
import Works from './components/Works';
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;