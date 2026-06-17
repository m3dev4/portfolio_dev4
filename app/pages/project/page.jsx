/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Header from "../../../components/header/header";
import localFont from "next/font/local";
import "./project.css";
import CustomCursor from "../../../components/customCursor";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { SpinningText } from "components/ui/spinning";

const mangoGrotesqueMedium = localFont({
  src: "../../fonts/MangoGrotesque-Medium.ttf",
});

const mangoGrotesqueRegular = localFont({
  src: "../../fonts/MangoGrotesque-Regular.ttf",
});

const nueveMonreal = localFont({
  src: "../../fonts/NeueMontreal-Bold.otf",
});

const textVariants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const PROJECT_CATEGORIES = [
  {
    href: "project/product-design",
    label: "Product Design",
    image: "/pattern/design.png",
    imageAlt: "design",
    imageAnimation: "animate-rotate",
    direction: "left",
  },
  {
    href: "project/mobile-app",
    label: "Mobile App",
    image: "/pattern/mobileapp.png",
    imageAlt: "mobile app",
    imageAnimation: "animate-float",
    direction: "right",
  },
  {
    href: "project/web-developer",
    label: "Web Development",
    image: "/pattern/webdev.png",
    imageAlt: "web development",
    imageAnimation: "animate-float",
    direction: "left",
  },
];

const CategoryMarquee = ({ project, fontClassName, translateX }) => {
  const repeatedItems = Array.from({ length: 8 });

  return (
    <Link href={project.href} className="relative">
      <motion.div
        style={{ x: translateX }}
        className={`${fontClassName} work_categorie flex relative text-center flex-row items-center justify-center will-change-transform text-custom-pink text-veloanim`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={350}
          height={350}
          className={`absolute inset-0 object-cover m-auto pattern-view ${project.imageAnimation}`}
        />

        {repeatedItems.map((_, index) => (
          <React.Fragment key={`${project.label}-${index}`}>
            <span className="whitespace-nowrap font-thin text-custom-pink transition-all h-full">
              {project.label}
            </span>

            <span className="transition-[all .3s] min-w-[.3em] h-[.3em] my-0 mx-[.5em] rounded-[50%] bg-[#fb4566]" />
          </React.Fragment>
        ))}
      </motion.div>
    </Link>
  );
};

const Divider = ({ fontClassName }) => {
  return (
    <div className="divider divider--center">
      <div className="divider_line divider_line--left" />

      <div className={`${fontClassName} divider-text`}>
        Click to view project
      </div>

      <div className="divider_line divider_line--left" />
    </div>
  );
};

const Project = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const moveLeft = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const moveRight = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const getTranslateX = (direction) => {
    return direction === "right" ? moveRight : moveLeft;
  };

  return (
    <div className="h-auto min-h-screen w-full bg-layout">
      <CustomCursor />

      <header className="fixed flex justify-between items-center left-0 z-50 top-0">
        <div className="flex space-between items-center mx-auto">
          <Link href="/" className="mt-8 max-sm:-ml-20">
            <span
              className={`uppercase px-28 text-[60px] text-custom-pink pointer-events-auto text-nowrap overflow-hidden relative ${mangoGrotesqueMedium.className}`}
            >
              <SpinningText>M.LO</SpinningText>
            </span>
          </Link>

          <div className="absolute top-0">
            <Header />
          </div>
        </div>
      </header>

      <div className="w-full px-auto ">
        <section className="flex justify-center items-center py-7 space-y-5 overflow-hidden">
          <div className="flex justify-center items-center flex-col h-screen w-full">
            <motion.h2
              className={`${mangoGrotesqueRegular.className} lg:text-titleproject max-sm:text-titlemobile sm:text-titledesktop text-custom-pink`}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Select Work
            </motion.h2>

            <motion.div
              className="flex flex-col justify-center items-center -mt-9 py-0"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <div
                className={`${mangoGrotesqueRegular.className} text-paradesktop max-sm:text-paramobile text-center text-custom-pink`}
              >
                <div className="flex items-center justify-between gap-12">
                  <div>
                    <div className="origin-left" />
                    Découvrez mon expertise créative 🎨
                    <div className="origin-right" />
                  </div>
                </div>
              </div>

              <span
                className={`${mangoGrotesqueRegular.className} text-custom-pink text-[25px]`}
              >
                Découvrez quelques-uns de mes projets par domaine d'expertise
              </span>
            </motion.div>

            <div className="row-[3] flex justify-center self-center my-11">
              <div className="scroll-down" />
            </div>
          </div>
        </section>

        <section
          ref={containerRef}
          className="overflow-hidden work relative mx-auto px-custom max-w-custom w-full flex items-center justify-center h-[250vh] bg-layout"
        >
          <div className="flex flex-col overflow-visible gap-20">
            {PROJECT_CATEGORIES.map((project, index) => (
              <React.Fragment key={project.label}>
                <CategoryMarquee
                  project={project}
                  fontClassName={mangoGrotesqueRegular.className}
                  translateX={getTranslateX(project.direction)}
                />

                {index < PROJECT_CATEGORIES.length - 1 && (
                  <Divider fontClassName={nueveMonreal.className} />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        <footer className="flex justify-between items-center px-7 text-white font-bold">
          <span>Made by @M3dev4</span>
          ©2026 M.Lo
        </footer>
      </div>
    </div>
  );
};

export default Project;