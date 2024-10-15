"use client";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Header from "@/components/header/header";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import ModelProject from "@/components/modelProject";
import {
  Environment,
  MeshTransmissionMaterial,
  Text,
  useMotion,
} from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";

const Project = () => {
  const picAniamtion = useRef(null);
  const menuAnimation = useRef(null);

  const [fontSize, setFontSize] = useState(1.2);
  const [modelScale, setModelScale] = useState(7);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setFontSize(0.6);
        setModelScale(5);
      } else if (screenWidth < 1200) {
        setFontSize(0.8);
        setModelScale(6);
      } else {
        setFontSize(1.2);
        setModelScale(7);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 }),
  };

  const manageMouse = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouse);
    return () => window.removeEventListener("mousemove", manageMouse);
  }, []);

  useGSAP(() => {
    // animation timeline with gsap
    const tl = gsap.timeline();
    tl.fromTo(
      picAniamtion.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 2, ease: "power2.out" }
    );
    tl.fromTo(
      menuAnimation.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );
  });
  return (
    <section className="h-full w-full">
      <div className="flex py-5 px-11 fixed z-10 items-center justify-between w-full">
        <Link
          href="/"
          className="cursor-pointer text-2xl text-white font-extrabold uppercase"
          ref={picAniamtion}
        >
          <Image
            src="/images/lo.png"
            alt="logo dev"
            width={70}
            height={70}
            className="rounded-full"
          />
        </Link>
        <div ref={menuAnimation}>
          <Header />
        </div>
      </div>
      <div className="h-screen flex">
        <Canvas
          style={{ background: "#e0e0e2" }}
          orthographic
          camera={{ position: [0, 0, 200], zoom: 10 }}
        >
          <ModelProject mouse={smoothMouse} modelScale={modelScale} />
          <Text
            position={[0, 0, 0]}
            fontSize={25} // Use responsive fontSize
            color="white"
            anchorX="center"
            anchorY="middle"
            castShadow
            fontWeight="bold"
          >
            Project
            <MeshTransmissionMaterial
              clearcoat={1}
              thickness={0.2}
              ior={1.2}
              transmission={0.5}
              chromaticAberration={0.02}
              anisotropicBlur={0.05}
              distortion={0.02}
              roughness={0.15}
              envMapIntensity={0.8}
              color="white"
            />
          </Text>
          <Environment preset="studio" />
        </Canvas>
      </div>
    </section>
  );
};

export default Project;
