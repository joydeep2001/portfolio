import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      id: "p0001",
      liveLink: "https://cloud.thelocalhost.com",
      title: "The Localhost Cloud",
      subtitle: "A cloud hosting platform",
      techs: ["React", "Node.js", "Express", "MongoDB"],
      description: `A full-stack cloud hosting platform built with the MERN stack. Features include user authentication, real-time server monitoring, and automated deployment pipelines.`,
      img: "/portfolio/llc.gif",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: "p0002",
      title: "Clique Ledger",
      subtitle: "Group expense tracker",
      techs: ["Flutter", "Node.js", "Socket.io", "MongoDB"],
      description: `A mobile application for tracking group expenses in real-time. Built with Flutter for cross-platform support and Node.js backend with WebSocket integration for instant updates.`,
      img: "/portfolio/clique_ledger.jpeg",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      id: "p0003",
      title: "Engineersway",
      subtitle: "Learning platform",
      techs: ["React", "Express", "MongoDB"],
      description: `An educational platform for engineering students featuring course materials, interactive quizzes, and progress tracking. Built with MERN stack for seamless user experience.`,
      img: "/portfolio/eway.gif",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
  ];

  return (
    <section className="project">
      <div className="project-header">
        <h1 className="glow">Featured Projects</h1>
        <p className="project-subtitle">
          Showcasing my work in MERN stack and Flutter development
        </p>
      </div>
      
      <div className="projects-grid">
        {projects.map(({ id, title, subtitle, description, techs, img, gradient, liveLink }, index) => (
          <div 
            key={id} 
            className="project-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="project-image-wrapper">
              <div className="project-image" style={{ background: gradient }}>
                <img alt={title} src={img} />
                <div className="project-overlay">
                  <div className="project-links">
                    {liveLink && (
                      <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    <a href="#" className="project-link">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-number">0{index + 1}</div>
              <h2 className="project-title">{title}</h2>
              <h3 className="project-subtitle-text">{subtitle}</h3>
              <p className="project-description">{description}</p>
              
              <div className="tech-stack">
                {techs.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
