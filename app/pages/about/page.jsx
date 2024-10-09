/* eslint-disable react/no-unescaped-entities */
"use client";
import localFont from "next/font/local";
import Image from "next/image";
import Header from "@/components/header/header";
import Link from "next/link";
import CursorSticky from "@/components/cursorSticky";
import "./about.css";
import StickyScroll from "@/components/stickyScroll";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/footer/footer";
import ModelAbout from "@/components/modelAbout";
import Skills from "@/components/skill";

gsap.registerPlugin(ScrollTrigger);

const mmFont = localFont({
  src: "../../fonts/mm-font.ttf",
  weight: "200",
});
const poppinsFont = localFont({
  src: "../../fonts/Poppins-Variable.ttf",
});

// export const metadata = {
//   title: "About | M3dev4",
//   description: "About Me",
// };

const About = () => {
  return (
    <div className="w-full bg-black ">
      <div className="flex justify-between items-center py-7 px-10 z-20 relative anim-gs">
        <Link href="/" className="text-2xl font-bold text-white">
          M3DEV4
        </Link>
        <Header />
      </div>
      <div className="w-full h-screen">
        {/* <ModelAbout /> */}
        </div>
      <div className="h-full w-full">
        <div className="mx-auto my-8 sm:my-16 md:my-28 max-w-full overflow-hidden px-4 sm:px-8 md:px-16 lg:px-40 tracking-widest py-8 sm:py-16 md:py-28 bg-white ">
          <div className="flex flex-col md:flex-row items-start w-full justify-between md:space-x-8 ">
            <p
              className={`${mmFont.className} text-lg sm:text-xl md:text-2xl lg:text-3xl w-full md:w-[45%] uppercase mb-8 md:mb-0`}
            >
              Ingénieur logiciel avec 3 ans d'expérience dans la création
              d'applications web performantes. Spécialisé dans l'utilisation de
              JavaScript et de ses frameworks comme React et Node.js, je conçois
              des interfaces dynamiques et intègre des animations pour une
              expérience utilisateur fluide et immersive. Je me concentre sur la
              qualité du code et l'optimisation des performances pour chaque
              projet.
            </p>
            <div className="w-full md:w-1/2">
              <Image
                src="/images/med.jpeg"
                alt="m3dev4"
                width={600}
                height={700}
                className="object-cover w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
              />
            </div>
          </div>
          <div className="mt-8 sm:mt-12 md:mt-16">
            <p
              className={`${mmFont.className} text-lg sm:text-xl md:text-2xl uppercase w-full md:w-[70%] md:ml-auto`}
            >
              Je suis né à Dakar, Sénégal, et ma passion pour le développement
              logiciel a débuté en 2020. Depuis, je me suis spécialisé dans le
              développement frontend et backend, en particulier dans tout ce qui
              touche aux aspects visuels des sites web, aux animations, et à
              l'optimisation des interfaces. Mon objectif est de créer des
              expériences utilisateurs à la fois captivantes et performantes.
            </p>
          </div>
          <div className=" w-full h-[300vh] z-[100] ">
            <StickyScroll />
          </div>
          <div className="w-full h-[75vh] bg-black absolute left-0">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
