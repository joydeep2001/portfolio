import "./App.css";

import Header from "./components/Header";
import Earth from "./components/Earth";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <ParticleBackground />
      <Header />
      <Hero />
      <Education />
      <Experience />
      <TechStack />
      <Project />
      <Earth />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;
