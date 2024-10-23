/* eslint-disable react/no-unescaped-entities */
"use client";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Header from "../../../components/header/header";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import ModelProject from "../../../components/modelProject";
import { Environment, MeshTransmissionMaterial, Text } from "@react-three/drei";
import { useMotionValue, useSpring, motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { projects } from "../../../constants";
import ProjectAnim from "../../../components";
import VelocityScroll from "../../../components/velocityScroll";
import localfont from "next/font/local";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const bonny = localfont({ src: "../../fonts/Bonny-Variable.ttf" });

const Project = () => {
  const picAnimation = useRef(null);
  const menuAnimation = useRef(null);
  const mainRef = useRef(null);
  const textRef = useRef(null);
  const projectsContainerRef = useRef(null);

  // Smooth scroll setup with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Responsive font and model scale
  const [fontSize, setFontSize] = useState(1.2);
  const [modelScale, setModelScale] = useState(7);

  const handleResize = useCallback(() => {
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
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Mouse movement animation
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };
  
  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 })
  };

  const manageMouse = useCallback((e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    mouse.x.set(clientX / innerWidth);
    mouse.y.set(clientY / innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", manageMouse);
    return () => window.removeEventListener("mousemove", manageMouse);
  }, [manageMouse]);

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // GSAP animations
  useGSAP(() => {
    // Header animations
    const headerTl = gsap.timeline();
    headerTl
      .fromTo(
        picAnimation.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power2.out" }
      )
      .fromTo(
        menuAnimation.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
        "-=0.5"
      );

    // Text reveal animation
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });

    // Projects stagger animation
    const projects = gsap.utils.toArray('.project-item');
    projects.forEach((project) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "top 85%",
          end: "top 15%",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        duration: 1,
      });
    });
  }, []);

  return (
    <section className="min-h-screen w-full overflow-hidden" ref={mainRef}>
      <div className="relative">
        {/* Header */}
        <motion.div 
          className="flex py-3 sm:py-5 px-4 sm:px-11 fixed z-10 items-center justify-between w-full backdrop-blur-sm bg-white/10"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
              className="rounded-full sm:w-[70px] sm:h-[70px] hover:scale-105 transition-transform"
            />
          </Link>
          <div ref={menuAnimation}>
            <Header />
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="h-screen flex items-center justify-center relative">
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

        {/* Description Section */}
        <div className="w-full bg-[#e0e0e2] flex items-center justify-center min-h-[80vh] py-10 sm:py-0">
          <motion.div 
            className="flex items-center justify-center px-6 sm:px-12 md:px-24"
            ref={textRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className={`sm:text-2xl md:text-3xl lg:text-[60px] lg:leading-[63px] font-semibold w-full md:w-3/4 lg:w-2/3 text-black ${bonny.className}`}>
              En tant que développeur passionné, j'aime explorer les nouvelles
              technologies et créer des expériences numériques innovantes.
              Chaque projet que je réalise est une opportunité d'apprendre, de
              grandir et de partager ma vision unique. Découvrez mes
              réalisations ci-dessous et plongez dans mon univers créatif.
            </p>
          </motion.div>
        </div>

        {/* Projects Section */}
        <main className="flex min-h-screen items-center justify-center bg-white py-10">
          <div
            className="w-full sm:w-[85%] md:w-[80%] lg:w-[70%] px-4 sm:px-0"
            ref={projectsContainerRef}
          >
            <motion.h5
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-black"
            >
              Featured Works
            </motion.h5>
            <div className="space-y-12">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="project-item"
                  initial={{ opacity: 1, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <ProjectAnim project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </main>

        {/* Velocity Scroll Section */}
        <motion.div style={{ y, opacity }}>
          <VelocityScroll />
        </motion.div>
      </div>
    </section>
  );
};

export default Project;