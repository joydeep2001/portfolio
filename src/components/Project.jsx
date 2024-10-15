// import React, { useLayoutEffect } from "react";
// import gsap from "gsap";

// const projects = [
//   {
//     title: "Random title 1",
//     tech: ["html", "css", "js"],
//     description: `Lorem Ipsum is simply dummy text
//        of the printing and typesetting
//        industry. Lorem Ipsum has been the
//        industry's standard dummy text ever since
//        the 1500s, when.`,
//     img: "/portfolio/project_demo.png",
//   },
//   {
//     title: "Random title 1",
//     tech: ["html", "css", "js"],
//     description: `Lorem Ipsum is simply dummy text
//        of the printing and typesetting
//        industry. Lorem Ipsum has been the
//        industry's standard dummy text ever since
//        the 1500s, when.`,
//     img: "/portfolio/project_demo.png",
//   },
//   {
//     title: "Random title 1",
//     tech: ["html", "css", "js"],
//     description: `Lorem Ipsum is simply dummy text
//        of the printing and typesetting
//        industry. Lorem Ipsum has been the
//        industry's standard dummy text ever since
//        the 1500s, when.`,
//     img: "/portfolio/project_demo.png",
//   },
//   {
//     title: "Random title 1",
//     tech: ["html", "css", "js"],
//     description: `Lorem Ipsum is simply dummy text
//        of the printing and typesetting
//        industry. Lorem Ipsum has been the
//        industry's standard dummy text ever since
//        the 1500s, when.`,
//     img: "/portfolio/project_demo.png",
//   },
//   {
//     title: "Random title 1",
//     tech: ["html", "css", "js"],
//     description: `Lorem Ipsum is simply dummy text
//        of the printing and typesetting
//        industry. Lorem Ipsum has been the
//        industry's standard dummy text ever since
//        the 1500s, when.`,
//     img: "/portfolio/project_demo.png",
//   },
// ];


import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  //const [current, setCurrent] = useState("blue");
  const currentProject = useRef("blue");

  function next() {
    let r, l;

    switch (currentProject.current) {
      case "blue": {
        //to show red
        l = "-100";
        r = "-100";
        currentProject.current = "red";
        break;
      }
      case "red": {
        //to show gold
        l = "-200";
        r = "0";
        currentProject.current = "gold";
        break;
      }
      default:
        break;
    }

    leftColumnRef.current.style.transform = `translateY(${l}vh)`;
    rightColumnRef.current.style.transform = `translateY(${r}vh)`;
  }
  function prev() {
    let r, l;

    switch (currentProject.current) {
      case "red": {
        //to show blue and start over
        l = "0";
        r = "-200";
        currentProject.current = "blue";
        break;
      }
      case "gold": {
        //to show red
        l = "-100";
        r = "-100";
        currentProject.current = "red";
        break;
      }
      default:
        break;
    }

    leftColumnRef.current.style.transform = `translateY(${l}vh)`;
    rightColumnRef.current.style.transform = `translateY(${r}vh)`;
  }
  const [w, setW] = useState();
  function scroll(e) {
    clearTimeout(w);

    const wTemp = setTimeout(() => {
      setW(undefined);
      if (e.wheelDelta < 0 || e.detail > 0) {
        next();
      }
      if (e.wheelDelta > 0 || e.detail < 0) {
        prev();
      }
    }, 100);
    setW(wTemp);
  }
  useLayoutEffect(() => {
    // Scroll up the left column
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".project",
          start: "top top",
          end: "top -100%",
          markers: true,
          pin: true,

          onUpdate: function (self) {},
          onEnter: function () {
            document.addEventListener("mousewheel", scroll);
            document.addEventListener("DOMMouseScroll", scroll);
          },
          onLeave: function () {
            document.removeEventListener("mousewheel", scroll);
            document.removeEventListener("DOMMouseScroll", scroll);
          },
          onLeaveBack: function () {
            document.removeEventListener("mousewheel", scroll);
            document.removeEventListener("DOMMouseScroll", scroll);
          },
          onEnterBack: function () {
            document.addEventListener("mousewheel", scroll);
            document.addEventListener("DOMMouseScroll", scroll);
          },
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section class="project">
      <h1>My projects</h1>
      <div class="container">
        <div ref={leftColumnRef} class="left column">
          {/* <!--content 1--> */}
          <div class="content first">
            <h2>The localhost cloud</h2>
            <h3>Cloud Hosting Service</h3>
            <p>
              An opensource initiative to turn your spare computer into a cloud
              hosting service.
            </p>
            <a href="#" role="button">
              more
            </a>
          </div>

          {/* <!--content 2--> */}
          <div class="content second">
            <h2>Crimson Spring</h2>
            <p>Red is not a crime</p>
            <a href="#" role="button">
              more
            </a>
          </div>

          {/* <!--content 3--> */}
          <div class="content third">
            <h2>Mida's Heir</h2>
            <p>Be more with a touch</p>
            <a href="#" role="button">
              more
            </a>
          </div>
        </div>
        <div ref={rightColumnRef} class="right column">
          <div class="pic first"></div>
          <div class="pic second"></div>
          <div class="pic third"></div>
        </div>
      </div>
    </section>
  );
};

export default Project;
