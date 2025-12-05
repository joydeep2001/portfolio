import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-sec">
      {/* Intro */}
      <div className="my-desc">
        <h1 className="glow">Hello World!</h1>
        <h2>
          Hi, I'm <span>Joydeep Bhattacharjee</span>
        </h2>
        <p>
          A passionate MERN Stack & Flutter Developer crafting beautiful, 
          responsive web and mobile applications. I specialize in building 
          full-stack solutions with MongoDB, Express, React, and Node.js, 
          along with cross-platform mobile apps using Flutter. Let's build 
          something amazing together!
        </p>
      </div>
      {/* sidebar  */}
      <section className="sidebar-sec">
        <div className="sidebar">
          <h3>CONNECT</h3>
          <ul>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin color="#00f2fe" size={30} />
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub color="#00f2fe" size={30} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
