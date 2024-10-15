/* eslint-disable react/no-unescaped-entities */

"use client";
import Header from "@/components/header/header";
import ModelAbout from "@/components/modelAbout";
import Skills from "@/components/skill";
import StickyScroll from "@/components/stickyScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView, motion, useAnimation } from "framer-motion";

gsap.registerPlugin(useGSAP);

const mmFont = localFont({
  src: "../../fonts/mm-font.ttf",
  weight: "200",
});

const About = () => {
  const picAniamtion = useRef(null);
  const menuAnimation = useRef(null);

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })


  // timeline animation
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

  const mainControls = useAnimation()
  const slideAnimation = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      slideAnimation.start("visible") 
    }
  }, [isInView])


  return (
    <section className="w-full h-full block">
      <div className="flex py-5 px-11 fixed z-10 items-center justify-between w-full">
        <Link
          href="/"
          className="cursor-pointer text-2xl text-white font-extrabold uppercase"
          ref={picAniamtion}
        >
          <Image src="/images/lo.png" alt="logo dev" width={70} height={70} className="rounded-full" />
        </Link>
        <div ref={menuAnimation}>
          <Header />
        </div>
      </div>
      <div className="h-screen w-full">
        <ModelAbout />
      </div>
      <div
        ref={ref}
        className="mx-auto my-8 sm:my-16 md:my-28 max-w-full px-4 sm:px-8 md:px-16 lg:px-40 tracking-wide py-8 relative sm:py-16 md:py-20 h-full">
        <motion.div

          variants={{
            hidden: { opacity: 0, y: 85 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-start w-full jutify-between md:space-x-8">
            <p
              className={`${mmFont.className} text-lg sm:text-xl md:text-2xl lg:text-3xl w-full text-white md:w-[45%] uppercase mb-8 md:mb-0`}
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
              className={`${mmFont.className} text-lg sm:text-xl md:text-2xl text-white uppercase w-full md:w-[70%] md:ml-auto`}
            >
              Je suis né à Dakar, Sénégal, et ma passion pour le développement
              logiciel a débuté en 2020. Depuis, je me suis spécialisé dans le
              développement frontend et backend, en particulier dans tout ce qui
              touche aux aspects visuels des sites web, aux animations, et à
              l'optimisation des interfaces. Mon objectif est de créer des
              expériences utilisateurs à la fois captivantes et performantes.
            </p>
          </div>
        </motion.div>
        {/* <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" }
          }}
          initial="hidden"
          animate={slideAnimation}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "green",
            zIndex: 20
          }}
        >

        </motion.div> */}
      </div>
      <div className=" h-[300vh] w-ful">
        <StickyScroll />
      </div>
      <div className="relative w-full bg-black">
        <Skills />
      </div>
    </section>
  );
};

export default About;
