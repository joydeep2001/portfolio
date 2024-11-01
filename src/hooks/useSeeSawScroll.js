import {
  useRef,
  useLayoutEffect,
  useCallback,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useSeeSawScroll(totalCount) {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const leftScroll = useRef(0);
  const rightScroll = useRef((totalCount - 1) * 100 * -1);
  const scrollState = useRef(null);

  function next() {
    if (rightScroll.current === 0) return;

    leftScroll.current -= 100;
    rightScroll.current += 100;

    //console.log(leftScroll.current);
    //console.log(rightScroll.current);

    leftColumnRef.current.style.transform = `translateY(${leftScroll.current}vh)`;
    rightColumnRef.current.style.transform = `translateY(${rightScroll.current}vh)`;
  }

  function prev() {
    if (leftScroll.current === 0) return;

    leftScroll.current += 100;
    rightScroll.current -= 100;

    //console.log(leftScroll.current);
    //console.log(rightScroll.current);

    leftColumnRef.current.style.transform = `translateY(${leftScroll.current}vh)`;
    rightColumnRef.current.style.transform = `translateY(${rightScroll.current}vh)`;
  }
  const scroll = useCallback((e) => {
    e.preventDefault();
    if (scrollState.current === "IN_PROGRESS") return;

    scrollState.current = "IN_PROGRESS";

    setTimeout(() => {
      //releasing for next scroll
      scrollState.current = null;

      if (e.deltaY > 0) {
        next();
      } else {
        prev();
      }
    }, 500);
  }, []);

  useLayoutEffect(() => {
    if (rightColumnRef.current) {
      rightColumnRef.current.style.transform = `translateY(${rightScroll.current}vh)`;
      console.log("Size set", rightScroll);
    }

    // Scroll up the left column
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".project",
          start: "top top",
          end: "top -120%",
          markers: true,
          pin: true,

          onUpdate: function (self) {},
          onEnter: function () {
            document.addEventListener("wheel", scroll);
          },
          onLeave: function () {
            document.removeEventListener("wheel", scroll);
          },
          onLeaveBack: function () {
            document.removeEventListener("wheel", scroll);
          },
          onEnterBack: function () {
            document.addEventListener("wheel", scroll);
          },
        },
      });
    });
    return () => ctx.revert();
  }, [rightColumnRef, scroll]);

  return {
    leftColumnRef,
    rightColumnRef,
  };
}
