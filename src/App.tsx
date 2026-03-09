
import './styles/global.css'
import Navbar from './components/navbar';
import Home from './components/home';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Navbar />
    <div className="d-flex flex-column min-vh-100">
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  );
};

export default App;
