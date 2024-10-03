/* eslint-disable react/no-unescaped-entities */
"use client"
import localFont from "next/font/local";
import Image from "next/image";
import Header from "@/components/header/header";
import Link from "next/link";
import CursorSticky from "@/components/cursorSticky";
import "./about.css";
import StickyScroll from "@/components/stickyScroll";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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


    // gssap animation 


    useEffect(() => {
      // Animation de l'image comme si elle se dépliait
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Animation de l'image
    tl.fromTo(".image-unfold", 
      { scaleY: 0, transformOrigin: "top center", opacity: 0 },
      { scaleY: 1, opacity: 1, duration: 2, ease: "power2.out" }
    );

    // Animation du header
    tl.fromTo(".anim-gs",
      { y: "-100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1.5, stagger: 0.2 },
      "-=1.5" // Commencer un peu avant la fin de l'animation de l'image
    );

    // Animation du titre
    tl.fromTo(".title", 
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 2, ease: "power3.out" },
      "-=1" // Commencer avant la fin de l'animation précédente
    );
    gsap.fromTo(".content-anim", 
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
          toggleActions: "play none none reverse"
        }
      }
    );
    gsap.fromTo(".content-pic", 
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
          toggleActions: "play none none reverse"
        }
      }
    );
    }, []);


  return (
    <div className="w-full bg-gradient-to-r from-zinc-300 to-zinc-300/70 overflow-hidden ">
      <div className="flex justify-between items-center py-7 px-10 z-20 relative anim-gs">
        <Link href="/" className="text-2xl font-bold text-black">
          M3DEV4
        </Link>
        <Header />
      </div>
      <div className="flex items-center justify-center flex-col bg-anim">
        <Image
          src="/images/noise-form.png"
          alt="bg pointe"
          width={700}
          height={400}
          className="image-unfold"
        />
        <div className="rond"></div>
        <div className="absolute bottom-0">
          <h1
            className={`${poppinsFont.className} 
            text-[200px] font-extrabold uppercase -tracking-tight title `}
          >
            About Myself
          </h1>
        </div>
      </div>
      <div className="">
        <CursorSticky />
        {/* <div className="bg-layout-screen"></div> */}

        <div className="mx-auto my-28 max-w-[1730rem] px-40 tracking-widest py-28 absolute ">
          <div className="flex items-start justify-between">
            <p className={`${mmFont.className} text-3xl w-[45%] uppercase content-anim `}>
              Ingénieur logiciel avec 3 ans d'expérience dans la création
              d'applications web performantes. Spécialisé dans l'utilisation de
              JavaScript et de ses frameworks comme React et Node.js, je conçois
              des interfaces dynamiques et intègre des animations pour une
              expérience utilisateur fluide et immersive. Je me concentre sur la
              qualité du code et l'optimisation des performances pour chaque
              projet.
            </p>
            <Image
              src="/images/med.jpeg"
              alt="m3dev4"
              width={600}
              height={500}
              className="object-cover w-[600px] h-[700px] content-pic"
            />
          </div>
          <div className="mt-12">
            <p
              className={`${mmFont.className} text-2xl uppercase w-[70%] ml-auto`}
            >
              Je suis né à Dakar, Sénégal, et ma passion pour le développement
              logiciel a débuté en 2020. Depuis, je me suis spécialisé dans le
              développement frontend et backend, en particulier dans tout ce qui
              touche aux aspects visuels des sites web, aux animations, et à
              l'optimisation des interfaces. Mon objectif est de créer des
              expériences utilisateurs à la fois captivantes et performantes.
            </p>
          </div>
          <div className=" w-full">
            <StickyScroll />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
