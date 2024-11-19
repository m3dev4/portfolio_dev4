import React, { useState } from "react";
import "../app/globals.css";
import localFont from "next/font/local";
import Image from "next/image";

const MangoGrotesque = localFont({
  src: "../app/fonts/MangoGrotesque-Medium.ttf",
});

const ppNueve = localFont({
  src: "../app/fonts/NeueMontreal-Bold.otf",
});

const projects = [
  {
    title: "Kortext",
    description:
      "Kortex est une application web moderne construite avec Next.js et l'utilisation avancée de TypeScript assure la stabilité du code et améliore la maintenance à long terme. La fonctionnalité phare de Kortex est l'intégration transparente de modèles de génération de langage naturel d'OpenAI pour proposer des contenus originaux à la demande. Le moteur de Kortex récupère intelligemment le contexte de la page pour alimenter le modèle textuel d'OpenAI. Qu'il s'agisse de compléter une biographie, générer un paragraphe ou proposer des intitulés accrocheurs.",
    lien: "https://kortex-ai-6kny.vercel.app/",
    img: "/images/kortext.png",
  },
  {
    title: "Meethub",
    description:
      "MeetHub est une plateforme de vidéoconférence intuitive conçue pour réunir les gens du monde entier en ligne. Avec MeetHub, vous pouvez organiser des réunions professionnelles, des séminaires en ligne, des cours virtuels et des retrouvailles avec vos proches, le tout en quelques clics.",
    lien: "https://meet-hub-4eyg.vercel.app/",
    img: "/images/meethub.png",
  },
  {
    title: "Syntek",
    description:
      "syntek est un outil de création et de retouche d'images conçu pour faciliter les tâches de traitement visuel complexes, le tout dans une interface simple et intuitive. Inspirée de Canva, elle permet aux utilisateurs de transformer leurs images avec plusieurs fonctionnalités puissante. Syntek s'adresse à tous, des créateurs de contenu aux professionnels du design, cherchant un outil polyvalent pour perfectionner leurs visuels en quelques clics.",
    lien: "https://syntek.vercel.app/",
    img: "/images/syntek.png",
  },
  {
    title: "Conteo",
    description:
      "Conteo est une plateforme immersive dédiée aux passionnés d'histoires. Inspirée de Wattpad, elle offre un espace unique où les lecteurs peuvent découvrir et suivre des récits captivants. Que vous soyez amateur de romance, de science-fiction, de fantasy ou d'aventure, Conteo regorge d'histoires pour tous les goûts. Conteo est conçu pour vous plonger dans des mondes imaginaires riches et variés, tout en rendant la lecture accessible à tous.",
    lien: "https://syntek.vercel.app/",
    img: "/images/conteo.png",
  },
];

const WebDevProject = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  return (
    <>
      <nav className="block self-start sticky pr-2 top-custom-top ">
        <div className="flex items-center gap-5">
          <div className="mb-12 ">
            <div className="justify-left origin-left">
              <div className="text-left whitespace-nowrap text-clamp text-custom-pink font-medium">
                Project
              </div>
              <div className="h-1 flex-grow scale-1 bg-primary relative">
                <div className="origin-right absolute"></div>
              </div>
              <ul className="flex flex-col gap-[.5em] text-clampSub tracking-[.05m] pl-0 font-[400] ">
                {projects.map((project, index) => (
                  <li
                    key={index}
                    className={`w-fit whitespace-nowrap cursor-pointer list-none
                      ${
                        activeProjectIndex === index
                          ? "text-white"
                          : "text-custom-pink hover:text-white"
                      }`}
                    onClick={() => {
                      const projectElement = document.getElementById(
                        `project-${index}`
                      );
                      if (projectElement) {
                        projectElement.scrollIntoView({ behavior: "smooth" });
                        setActiveProjectIndex(index);
                      }
                    }}
                  >
                    {project.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col gap-48 pl-24 border-l border-gray-200">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-16">
            <div className="flex items-center gap-6 justify-left">
              <div className="text-clampSub font-[200] text-left text-custom-pink whitespace-nowrap">
                Product Design
              </div>
              <div className="h-[1px] flex-grow scale-1 bg-primary origin-left"></div>
              <span className="text-clampSub font-[200] text-left text-custom-pink whitespace-nowrap">
                {`0${index + 1}`}
              </span>
            </div>
            <div className={`w-full flex pb-96 ${MangoGrotesque.className}`}>
              <div className="flex justify-between">
                <h2 className="max-w-[72%] leading-3 mb-8 text-[70px] text-custom-pink">
                  {project.title}
                </h2>
                <p
                  className={`font-[300] text-[24px] text-custom-pink leading-2 w-[65%] ${ppNueve.className}`}
                >
                  {project.description}
                </p>
              </div>
            </div>
            <div className="flex self-stretch gap-8 overflow-hidden">
              <div className="rounded-[.5em] relative overflow-hidden w-full">
                <div className=""></div>
                <Image 
                  src={project.img}
                  alt={project.title}
                  width={1080}
                  height={1080}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default WebDevProject;
