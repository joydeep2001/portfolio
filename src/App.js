import "./App.css";

import Header from "./components/Header";
import Earth from "./components/Earth";
import Hero from "./components/Hero";
import Education from "./components/Education";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Education />
      <TechStack />
      <Earth />
    </div>
  );
}

export default App;
