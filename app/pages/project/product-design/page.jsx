"use client";

import React, { useEffect, useRef, useState } from "react";
import "./design.css";
import "../project.css";
import Link from "next/link";
import Header from "../../../../components/header/header";
import localFont from "next/font/local";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "../../../../components/customCursor";
import { useInView, motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const mangoGrotes = localFont({
  src: "../../../fonts/MangoGrotesque-Regular.ttf",
});
const ppNueve = localFont({
  src: "../../../fonts/NeueMontreal-Light.otf",
});

const projects = [

]

const DesignProduct = () => {
  const contentRef = useRef(null)
  const isInView = useInView(contentRef, {once: true, margin: "-75%"})
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const xPercentRef = useRef(0);
  const directionRef = useRef(1);
  const animationFrameRef = useRef(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
    smooth: true, // Enable smooth scrolling
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    // ScrollTrigger setup
    const scrollTrigger = gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          directionRef.current = e.direction * 1;
        },
      },
      x: "-500px",
    });

    // Animation function
    const animate = () => {
      if (!isHovered) {
        // Réinitialiser la position si hors limites
        if (xPercentRef.current < -100) {
          xPercentRef.current = 0;
        } else if (xPercentRef.current > 0) {
          xPercentRef.current = -100;
        }

        // Mettre à jour les positions du texte
        gsap.set(firstText.current, { xPercent: xPercentRef.current });
        gsap.set(secondText.current, { xPercent: xPercentRef.current });

        // Position d'incrémentation
        xPercentRef.current += 0.1 * directionRef.current;
      }

      // Continue animation
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Démarrer l'animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Nettoyage
    return () => {
      scrollTrigger.kill();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered]);

  useEffect(() => {
    gsap.set(secondText, { x: firstText.offsetWidth });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(slider, {
      x: `-${firstText.offsetWidth}px`,
      duration: 5,
      ease: "linear",
    }).set(slider, { x: 0 });

    return () => tl.kill();
  }, []);

  //Animation mask text with framer motion
    const animationContent = {
      initial: {y: "100%"},
      enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * 1}})
    }

  return (
    <main className="bg-[#0e090d] w-full h-full min-h-screen">
      <CustomCursor />
      <header className="fixed left-0 z-50 top-0">
        <div className="flex my-auto space-between items-center max-w-28 mx-auto ctn hder">
          <Link href="/">
            <span
              className={`title-link uppercase pointer-events-auto text-nowrap overflow-hidden block relative ${mangoGrotes.className}`}
            >
              M.Lo
            </span>
          </Link>
        </div>
        <Header />
      </header>
      <section className="overflow-hidden relative flex flex-col items-center justify-center h-screen min-h-10 ctn hero">
        <div className="self-end flex h-full max-w-[50vw] items-center justify-center pointer-events-none z-20 right-0">
          <Image
            src="/pattern/design.png"
            alt="wbe dev"
            width={700}
            height={700}
            className="object-cover img-hero h-auto select-none w-full pointer-events-none design-img"
          />
        </div>
        <div className="overflow-hidden absolute mt-4 is-title">
          <div className="overflow-visible flex flex-col">
            <div
              className="work-row"
              ref={slider}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className="text-center realtive flex flex-row items-center justify-center work-inner"
                ref={firstText}
              >
                <h1
                  className={`${mangoGrotes.className} whitespace-nowrap work_inner-text`}
                >
                  Product Design
                </h1>
                <span className="work-separator"></span>
                <h1
                  className={`${mangoGrotes.className} whitespace-nowrap work_inner-text`}
                >
                  Product Design
                </h1>
                <span className="work-separator"></span>
                <h1
                  className={`${mangoGrotes.className} whitespace-nowrap work_inner-text`}
                >
                  Product Design
                </h1>
                <span className="work-separator"></span>
              </div>
              <div
                className="text-center relative flex flex-row items-center justify-center work-inner"
                ref={secondText}
              >
                <h1
                  className={`${mangoGrotes.className} whitespace-nowrap work_inner-text`}
                >
                  Product Design
                </h1>
                <span className="work-separator"></span>
                <h1
                  className={`${mangoGrotes.className} whitespace-nowrap work_inner-text`}
                >
                  Product Design
                </h1>
                <span className="work-separator"></span>
                <h1
                  className={`${mangoGrotes.className} whitespace-nowrap work_inner-text`}
                >
                  Product Design
                </h1>
                <span className="work-separator"></span>
              </div>
            </div>
          </div>
          <div className="flex justify-start w-full">
            <ul className="p-0 flex gap-4 flex-wrap text-[#f1dada] px-16">
              <li
                className={`whitespace-nowrap flex items-center gap-4 text-[28px] ${ppNueve.className} `}
              >
                Ux/Ui Design
              </li>
              <li
                className={`whitespace-nowrap flex items-center gap-4 text-[28px] ${ppNueve.className} `}
              >
                Prototyping & System Design
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="grid prj h-auto ctn self-start">
          <div className="flex items-center flex-col justify-start pb-32 m-auto">
          {projects.length === 0 ? (
        <p className="text-center  w-full text-custom-pink text-lg mt-8">
          Des projets arrivent bientôt ! 😉
        </p>
      ) : null}
          </div>
      </section>
      <section className="w-full ctn">
        <div className="flex items-center flex-col justify-center pb-32 m-auto">
          <div className="divider divider--center mt-24">
            <div className="divider_line divider_line--left"></div>
            <h2
              className={`${mangoGrotes.className} py-20 text-[45px] font-semibold text-custom-pink`}
            >
              Discover more project
            </h2>
            <div className="divider_line divider_line--left"></div>
          </div>
          <div className="work container" ref={containerRef}>
            <div className="flex flex-col overflow-visible">
            <Link href="mobile-app" className="relative">
                <motion.div
                  style={{
                    x: useTransform(scrollYProgress, [0, 1], [-100, 100]),
                  }}
                  className={`text-center relative flex flex-row items-center justify-center will-change-transform text-[#f1dada] work_categorie ${mangoGrotes.className}`}
                >
                  <Image
                    src="/pattern/mobileapp.png"
                    alt="design"
                    width={350}
                    height={350}
                    className="object-cover absolute inset-0 m-auto filter img-anime"
                  />
                  <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                    Mobile App
                  </span>
                  <span className="transition-all min-w-[.3em] h-[.3em] mx-[.5em] rounded-[50%] bg-[#fb4566]"></span>
                  <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                    Mobile App
                  </span>
                  <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                  <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                    Mobile App
                  </span>
                  <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                  <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                    Mobile App
                  </span>
                  <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                  <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                    Mobile App
                  </span>
                  <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                  <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                    Mobile App
                  </span>
                  <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                  <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                    Mobile App
                  </span>
                  <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                  <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                    Mobile App
                  </span>
                  <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                </motion.div>
              </Link>
              <div className="divider divider--center">
                <div className="divider_line divider_line--left"></div>
                <div className={`${ppNueve.className} divider-text`}>
                  Click to view project
                </div>
                <div className="divider_line divider_line--left"></div>
              </div>
              <Link href="web-developer" className="relative">
              <motion.div
               style={{x: translateX,}}
                className={`text-center relative flex flex-row items-center justify-center will-change-transform text-[#f1dada] work_categorie ${mangoGrotes.className}`}
              >
                <Image
                  src="/pattern/webdev.png"
                  alt="design"
                  width={350}
                  height={350}
                  className="object-cover absolute inset-0 m-auto filter wb-img-anime"
                />
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
              </motion.div>
            </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex justify-between items-center px-7 text-white font-bold">
          <span>
            Made by @M3dev4
          </span>
          ©2024 M.Lo
        </footer>
    </main>
  );
};

export default DesignProduct;
