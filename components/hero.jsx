"use client";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import HackerRoom from "./hackerRoom";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "./target";
import Rings from "./rings";
import ReactLogo from "./reactLogo";
import Cube from "./cube";
import HeroCamera from "./heroCamara";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  let sizes = calculateSizes(isSmall, isMobile, isTablet);

  const titleAnimation = useRef(null);
  const subTitle = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      titleAnimation.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, delay: 4, ease: "bounce" }
    );
    tl.fromTo(
      subTitle.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  });

  return (
    <div className="flex items-center justify-center px-6 py-6">
      <div className="p-8 flex flex-col items-center justify-center">
        <h1
          className="text-white poppins text-2xl text-center font-extrabold space-y-2 max-sm:text-[20px]"
          ref={titleAnimation}
        >
          Hi, I am Mouhamed <span className="waving-hand">👋</span>
        </h1>
        <p
          className="text-white text-5xl poppins font-bold py-5 max-sm:text-[20px] text-center"
          ref={subTitle}
        >
          Building Products & Brands
        </p>
      </div>
      <div className="absolute inset-0 h-full w-full">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <HeroCamera isMobile={isMobile}>
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0.1, -Math.PI, 0]}
            />
          </HeroCamera>
          <group>
            <Target position={sizes.targetPosition} />
            <Rings position={sizes.ringPosition} />
            <ReactLogo position={sizes.reactLogoPosition} />
            <Cube position={sizes.cubePosition} />
          </group>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
