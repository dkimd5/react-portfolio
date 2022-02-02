import About from "./About/About";
import "./App.css";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Service from "./Service/Service";
import Skills from "./Skills/Skills";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
