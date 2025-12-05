import { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.querySelector(`.${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />
      
      <header className="header">
        <div className="header-container">
          <div className="logo" onClick={() => scrollToSection('hero-sec')}>
            <span className="logo-text">JB</span>
          </div>

          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li onClick={() => scrollToSection('hero-sec')}>Home</li>
              <li onClick={() => scrollToSection('education-sec')}>Education</li>
              <li onClick={() => scrollToSection('experience-sec')}>Experience</li>
              <li onClick={() => scrollToSection('techstack')}>Tech Stack</li>
              <li onClick={() => scrollToSection('project')}>Projects</li>
              <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
          </nav>

          <div className="header-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
          </div>

          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>
    </>
  );
}
