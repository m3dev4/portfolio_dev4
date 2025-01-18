import { Lenis } from "@studio-freight/react-lenis/types";
import gsap from "gsap";

const InitSmoothScroll = () => {
  const lenis = new Lenis({ lerp: 0.15 });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};

InitSmoothScroll();
