import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

gsap.registerPlugin(ScrollTrigger);

export default function UseLocoScroll(start, hash) {
  
  useEffect(() => {
    let locoScroll = null;

    const scrollEl = document.querySelector("#main-container");

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 0.45,
      class: "is-reveal",
    });

    if (hash) {
      const target = document.querySelector(hash)
      locoScroll.scrollTo(target)
    }

    locoScroll.on("scroll", () => {
        document.getElementById('first-moving-text').style.left = Math.max(600 - 0.45 * locoScroll.scroll.instance.scroll.y, -1000) + "px"
        document.getElementById('second-moving-text').style.right = Math.max(1800 - 0.45 * locoScroll.scroll.instance.scroll.y, -1000) + "px"
    })

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x;
        }
        return null;
      },
    });

    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
      }
    };
  }, [start, hash]);
}