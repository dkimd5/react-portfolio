import About from "./About/About";
import "./App.css";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Service from "./Service/Service";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
