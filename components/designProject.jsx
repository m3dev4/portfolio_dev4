import React, { useEffect, useRef, useState } from "react";
import "../app/globals.css";
import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";

const MangoGrotesque = localFont({
  src: "../app/fonts/MangoGrotesque-Medium.ttf",
});

const ppNueve = localFont({
  src: "../app/fonts/NeueMontreal-Bold.otf",
});

const projects = [
  {
    title: "JOJ Events",
    description:
      "JOJ Events est une plateforme web conçue pour simplifier le suivi des événements sportifs des jeux olympique de la jeunesse 2026 à Dakar. L'application regroupe les différentes disciplines, les athlètes, les médailles, les résultats, les classements, les news, les alertes, les informations pratiques, les plans, les vidéos, les photos, les interviews etc..",
    images: [
      "/images/product1.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
  },
];

const imageVariants = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

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

const ProjectImage = ({ src, title }) => {
  return (
    <motion.div
      className="flex self-stretch gap-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        className="rounded-[.5em] relative overflow-hidden w-full"
        variants={imageVariants}
      >
        <Image
          src={src}
          alt={title}
          width={900}
          height={1080}
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectVideo = ({ src, title }) => {
  return (
    <div className="flex self-stretch gap-8 overflow-hidden">
      <div className="rounded-[.5em] relative overflow-hidden w-full">
        <video
          src={src}
          title={title}
          width={1080}
          height={1080}
          className="object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

const DesignProjects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [markerPosition, setMarkerPosition] = useState(0);

  const contentRef = useRef(null);
  const titleRefs = useRef([]);

  useEffect(() => {
    const activeTitle = titleRefs.current[activeProjectIndex];

    if (!activeTitle) return;

    const rect = activeTitle.getBoundingClientRect();

    setMarkerPosition(rect.top + window.scrollY);
  }, [activeProjectIndex]);

  const handleProjectClick = (index) => {
    setActiveProjectIndex(index);

    const projectElement = document.getElementById(`project-${index}`);

    if (!projectElement) return;

    projectElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <nav className="block self-start sticky pr-2 top-custom-top max-sm:hidden">
        <div className="flex items-center gap-5">
          <div className="mb-12">
            <div className="justify-left origin-left">
              <div className="text-left whitespace-nowrap text-clamp text-custom-pink font-medium underline pb-7">
                Project
              </div>

              <div className="h-1 flex-grow scale-1 bg-primary absolute">
                <motion.div
                  className="origin-right absolute bg-custom-pink"
                  style={{
                    width: "2px",
                    height: "20px",
                  }}
                  animate={{
                    top: markerPosition,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />
              </div>

              <ul className="flex flex-col gap-[.5em] text-clampSub tracking-[.05m] pl-0 font-[400]">
                {projects.map((project, index) => {
                  const isActive = activeProjectIndex === index;

                  return (
                    <li
                      key={project.title}
                      ref={(el) => {
                        titleRefs.current[index] = el;
                      }}
                      className={`w-fit whitespace-nowrap cursor-pointer list-none ${
                        isActive
                          ? "text-white"
                          : "text-custom-pink hover:text-white"
                      }`}
                      onClick={() => handleProjectClick(index)}
                    >
                      {project.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div
        ref={contentRef}
        className="flex flex-col gap-48 pl-24 border-l max-sm:pl-0 max-sm:border-l-0 border-gray-200"
      >
        {projects.map((project, index) => (
          <article
            key={project.title}
            id={`project-${index}`}
            className="flex flex-col gap-16"
          >
            <div className="flex items-center overflow-hidden gap-6 max-sm:gap-24 justify-left">
              <div className="text-clampSub font-[200] text-left text-custom-pink whitespace-nowrap">
                Design
              </div>

              <div className="h-[1px] flex-grow scale-1 bg-primary origin-left" />

              <span className="text-clampSub font-[200] text-left text-custom-pink whitespace-nowrap">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className={`w-full flex pb-16 ${MangoGrotesque.className}`}
            >
              <div className="flex justify-between w-full max-sm:flex-col">
                <motion.h2 className="max-w-[72%] leading-3 mb-8 text-[70px] max-sm:text-[50px] text-custom-pink">
                  {project.title}
                </motion.h2>

                <motion.p
                  variants={textVariants}
                  className={`font-[300] text-[24px] max-sm:text-[14px] text-custom-pink leading-2 w-[65%] max-sm:w-[100%] max-sm:pr-7 ${ppNueve.className}`}
                >
                  {project.description}
                </motion.p>
              </div>
            </motion.div>

            {project.images?.map((image) => (
              <ProjectImage key={image} src={image} title={project.title} />
            ))}

            {project.video && (
              <ProjectVideo src={project.video} title={project.title} />
            )}
          </article>
        ))}
      </div>
    </>
  );
};

export default DesignProjects;
