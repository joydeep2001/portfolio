import React, { useLayoutEffect } from "react";
import gsap from "gsap";

function TechStack() {
  
  useLayoutEffect(() => {
    gsap.to(document.querySelector(".techstack .container"), {
      x: -2200,
      scrollTrigger: {
        trigger: ".techstack .container",
        start: "top 28%",
        end: "+=2200",
        scrub: true,
        markers: true,

        onEnter: () => {
          console.log("starts");
          document.querySelector(".techstack").style.position = "fixed";
          document.querySelector(".techstack").style.top = "20%";
          
        },
        onLeave: () => {
          console.log("leave");
          document.querySelector(".techstack").style.position = "relative";
        },
        onLeaveBack: () => {
          console.log("leave back");
          document.querySelector(".techstack").style.position = "relative";
        },
      },
    });
  });
  return (
    <section className="techstack">
      <h1>TechStack</h1>
      <div className="container">
        <div className="img-cont">
          <img alt="html" src="/portfolio/html.png" />
        </div>
        <div className="img-cont">
          <img alt="css" src="/portfolio/css.png" />
        </div>
        <div className="img-cont">
          <img alt="html" src="/portfolio/js.png" />
        </div>
        <div className="img-cont">
          <img alt="html" src="/portfolio/react.png" />
        </div>
        <div className="img-cont">
          <img alt="html" src="/portfolio/nodejs.png" />
        </div>
        <div className="img-cont">
          <img alt="html" src="/portfolio/express-js.png" />
        </div>
        <div className="img-cont">
          <img alt="html" src="/portfolio/mongodb.png" />
        </div>
        <div className="img-cont">
          <img alt="html" src="/portfolio/ts.png.png" />
        </div>
        <div className="img-cont">
          <img alt="html" src="/portfolio/html.png" />
        </div>
        <div className="img-cont">
          <img alt="html" src="/portfolio/html.png" />
        </div>
        <div className="img-cont">
          <img alt="html" src="/portfolio/html.png" />
        </div>
        <div className="img-cont">
          <img alt="html" src="/portfolio/html.png" />
        </div>
      </div>
    </section>
  );
}

export default TechStack;
