import React, { useEffect } from "react";

const techIcons = [
  {
    name: "MongoDB",
    icon: "tech-icons/MongoDB.png",
  },
  {
    name: "Express.js",
    icon: "tech-icons/Express.png",
  },
  {
    name: "React",
    icon: "tech-icons/React.png",
  },
  {
    name: "Node.js",
    icon: "tech-icons/Node.js.png",
  },
  {
    name: "Flutter",
    icon: "tech-icons/Flutter.png",
  },
  {
    name: "JavaScript",
    icon: "tech-icons/JavaScript.png",
  },
  {
    name: "Tailwind CSS",
    icon: "tech-icons/Tailwind CSS.png",
  },
  {
    name: "Git",
    icon: "tech-icons/Git.png",
  },
];

function TechStack() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      },
      { threshold: 0.1 }
    );

    const techItems = document.querySelectorAll('.techstack .img-cont');
    techItems.forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="techstack">
      <h1 className="glow">Tech Stack</h1>
      <div className="container">
        {techIcons.map(({ name, icon }, index) => (
          <div 
            key={index} 
            title={name} 
            className="img-cont"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img alt={name} src={`/portfolio/${icon}`} />
            <span className="tech-name">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
