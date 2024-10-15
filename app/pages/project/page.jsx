"use client";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Header from "@/components/header/header";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import ModelProject from "@/components/modelProject";
import { Environment, MeshTransmissionMaterial, Text } from "@react-three/drei";
import {
  useMotionValue,
  useSpring,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { projects } from "@/constants";
import ProjectAnim from "@/components";

const Project = () => {
  const picAnimation = useRef(null);
  const menuAnimation = useRef(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const [fontSize, setFontSize] = useState(1.2);
  const [modelScale, setModelScale] = useState(7);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setFontSize(0.4);
        setModelScale(3);
      } else if (screenWidth < 768) {
        setFontSize(0.6);
        setModelScale(5);
      } else if (screenWidth < 1024) {
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
    const tl = gsap.timeline();
    tl.fromTo(
      picAnimation.current,
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
    <section className="min-h-screen w-full">
      <div className="flex py-3 sm:py-5 px-4 sm:px-11 fixed z-10 items-center justify-between w-full">
        <Link
          href="/"
          className="cursor-pointer text-xl sm:text-2xl text-white font-extrabold uppercase"
          ref={picAnimation}
        >
          <Image
            src="/images/m4.png"
            alt="logo dev"
            width={50}
            height={50}
            className="rounded-full sm:w-[70px] sm:h-[70px]"
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
            fontSize={fontSize * 25}
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
      <div className="w-full bg-[#e0e0e2] flex items-center justify-center min-h-[80vh] py-10 sm:py-0">
        <div
          className="flex items-center justify-center px-6 sm:px-12 md:px-24"
          ref={ref}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 95 },
              visible: { opacity: 1, y: 0 },
            }}
            animate={mainControls}
            transition={{ duration: 0.75, delay: 0.8 }}
            className="text-lg sm:text-2xl md:text-3xl lg:text-[40px] font-semibold w-full md:w-3/4 lg:w-1/2"
          >
            En tant que développeur passionné, j'aime explorer les nouvelles
            technologies et créer des expériences numériques innovantes. Chaque
            projet que je réalise est une opportunité d'apprendre, de grandir et
            de partager ma vision unique. Découvrez mes réalisations ci-dessous
            et plongez dans mon univers créatif.
          </motion.p>
        </div>
      </div>
      <main className="flex min-h-screen items-center justify-center bg-white py-10">
        <div className="w-full sm:w-[85%] md:w-[80%] lg:w-[70%] px-4 sm:px-0">
          <h5 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
            Featured Works
          </h5>
          {projects.map((project, index) => (
            <ProjectAnim key={index} project={project} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Project;
