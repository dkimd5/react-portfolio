import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Service from "./components/Service/Service";
import Skills from "./components/Skills/Skills";

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
