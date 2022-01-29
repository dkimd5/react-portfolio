import About from "./About/About";
import "./App.css";
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
    </div>
  );
}

export default App;
