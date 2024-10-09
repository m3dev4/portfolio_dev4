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
  // const smoothWrapperRef = useRef(null);
  // const smoothContentRef = useRef(null);

  // useEffect(() => {
  //   let smoother = ScrollSmoother.create({
  //     wrapper: smoothWrapperRef.current,
  //     content: smoothContentRef.current,
  //     smooth: 1.5,
  //     effects: true,
  //   });
  // }, []);

  // gssap animation

  useEffect(() => {
    // Animation de l'image comme si elle se dépliait
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Animation de l'image
    tl.fromTo(
      ".image-unfold",
      { scaleY: 0, transformOrigin: "top center", opacity: 0 },
      { scaleY: 1, opacity: 1, duration: 2, ease: "power2.out" }
    );

    // Animation du header
    tl.fromTo(
      ".anim-gs",
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1.5, stagger: 0.2 },
      "-=1.5" // Commencer un peu avant la fin de l'animation de l'image
    );

    // Animation du titre
    tl.fromTo(
      ".title",
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 2, ease: "power3.out" },
      "-=1" // Commencer avant la fin de l'animation précédente
    );
    gsap.fromTo(
      ".content-anim",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".content-anim",
          start: "top 100%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".content-pic",
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".content-pic",
          start: "left 80%",
          end: "right 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="w-full bg-black  overflow-hidden ">
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
        <CursorSticky />
        {/* <div className="bg-layout-screen"></div> */}

        <div className="mx-auto my-8  max-w-full overflow-hidden px-4  tracking-widest py-8 ">
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
          <div className=" w-full" style={{ height: '300vh', zIndex: 50 }}>
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
