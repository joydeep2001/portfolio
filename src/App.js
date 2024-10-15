import "./App.css";

import Header from "./components/Header";
import Earth from "./components/Earth";
import Hero from "./components/Hero";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Education />
      <TechStack />
      <Project />
      <div className="full"></div>
      <Earth />
      
    </div>
  );
}

export default App;
