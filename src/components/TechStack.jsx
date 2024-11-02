import React, { useLayoutEffect } from "react";
import gsap from "gsap";

const techIcons = [
  {
    name: "HTML",
    icon: "tech-icons/HTML5.png",
  },
  {
    name: "CSS",
    icon: "tech-icons/CSS3.png",
  },
  {
    name: "JavaScript",
    icon: "tech-icons/JavaScript.png",
  },
  {
    name: "React",
    icon: "tech-icons/React.png",
  },
  {
    name: "Next.js",
    icon: "tech-icons/Next.js.png",
  },
  {
    name: "Node.js",
    icon: "tech-icons/Node.js.png",
  },
  {
    name: "Node.js",
    icon: "tech-icons/Express.png",
  },
  {
    name: "Flutter",
    icon: "tech-icons/Flutter.png",
  },
  {
    name: "MySQL",
    icon: "tech-icons/MySQL.png",
  },
  {
    name: "NGNIX",
    icon: "tech-icons/NGINX.png",
  },
  {
    name: "Git",
    icon: "tech-icons/Git.png",
  },
  {
    name: "MongoDB",
    icon: "tech-icons/MongoDB.png",
  },
  {
    name: "Rust",
    icon: "tech-icons/Rust.png",
  },
  {
    name: "Actix",
    icon: "tech-icons/Actix.png",
  },
];

function TechStack() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(document.querySelector(".techstack .container"), {
        x: -3260,
        scrollTrigger: {
          trigger: ".techstack",
          start: "top 20%",
          end: "+=3260",
          scrub: true,
          markers: true,
          pin: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="techstack">
      <h1>TechStack</h1>

      <div className="container">
        {techIcons.map(({ name, icon }) => (
          <div title={name} className="img-cont">
            <img alt="html" src={`/portfolio/${icon}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
