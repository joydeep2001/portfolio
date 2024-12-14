import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSeeSawScroll from "../hooks/useSeeSawScroll";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projects = [
    {
      id: "p0001",
      liveLink: "https://cloud.thelocalhost.com",
      title: "The Localhost Cloud",
      subtitle: "A cloud hosting platform",
      techs: ["React", "Rust", "Actix", "MongoDB"],
      description: `Lorem Ipsum is simply dummy text
         of the printing and typesetting
         industry. Lorem Ipsum has been the
         industry's standard dummy text ever since
         the 1500s, when.`,
      img: "/portfolio/llc.gif",
      leftBgColor: "#000000",
      rightBgImg: "/portfolio/starts.jpg",
    },
    {
      id: "p0002",
      title: "Clique Ledger",
      techs: ["Flutter", "Nodejs", "Socket.io"],
      description: `Lorem Ipsum is simply dummy text
         of the printing and typesetting
         industry. Lorem Ipsum has been the
         industry's standard dummy text ever since
         the 1500s, when.`,
      img: "/portfolio/clique_ledger.jpeg",
      leftBgColor: "#070f2b",
      rightBgImg: "/portfolio/flower-purple.jpg",
    },
    {
      id: "p0003",
      title: "Engineersway",
      techs: ["Next.js", "MongoDB"],
      description: `Lorem Ipsum is simply dummy text
         of the printing and typesetting
         industry. Lorem Ipsum has been the
         industry's standard dummy text ever since
         the 1500s, when.`,
      img: "/portfolio/eway.gif",
      leftBgColor: "#070f2b",
      rightBgImg: "/portfolio/flower-purple.jpg",
    },

  ];

  const { leftColumnRef, rightColumnRef } = useSeeSawScroll(projects.length);

  return (
    <section class="project">
      <h1>My projects</h1>
      <div class="container">
        <div ref={leftColumnRef} class="left column">
          {projects.map(
            ({ title, subtitle, description, techs, leftBgColor }) => (
              <div style={{ backgroundColor: leftBgColor }} class="content">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{description}</p>

                <div className="tech-cont">
                  {techs.map((tech) => {
                    return <div className="tech-chip">{tech}</div>;
                  })}
                </div>
              </div>
            )
          )}
        </div>
        <div ref={rightColumnRef} class="right column">
          {projects.map(({ rightBgImg, img }) => (
            <div
              style={{ backgroundImage: `url(${rightBgImg})` }}
              className="pic"
            >
              <img alt={"llc"} src={img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
