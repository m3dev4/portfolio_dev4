"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import SplitType from "split-type";

const Home = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll(".grid-item");

    elements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        // Animation fluide de l'arrière-plan et du texte
        gsap.to(element.querySelector(".grid-item__bg"), {
          scale: 1.05,
          backgroundColor: "rgba(255, 255, 255, 0.14)",
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(element.querySelector(".grid-item__bg h1"), {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(element.querySelector(".text-reg"), {
          opacity: 0.5, // Texte un peu plus transparent
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      element.addEventListener("mouseleave", () => {
        // Réinitialisation de l'arrière-plan et du texte
        gsap.to(element.querySelector(".grid-item__bg"), {
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.14)",
          duration: 0.5,
          ease: "power2.in",
        });

        gsap.to(element.querySelector(".grid-item__bg h1"), {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });

        gsap.to(element.querySelector(".text-reg"), {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.in",
        });
      });
    });
  }, []);

  
  

  useEffect(() => {
    const updateClock = () => {
      const dakarTime = new Date().toLocaleTimeString("fr-FR", {
        timeZone: "Africa/Dakar",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(dakarTime);
    };

    updateClock(); // Initialisation immédiate
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId); // Nettoyage à la fin
  }, []);

  const gridVariant = {
    hidden: {
      clipPath: "inset(100% 0% 0% 0%)",
      opacity: 0,
      transform: "rotateX(-10deg) translateZ(-50px)",
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transform: "rotateX(0deg) translateZ(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delayChildren: 0.2,
        staggerChildren: 0.1, // Stagger for immersive effect
      },
    },
  };

  useEffect(() => {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((item) => {
      // Split text only once per grid item
      const textElement = item.querySelector(".text-reg");
      const splitText = new SplitType(textElement, { types: "chars" });

      item.addEventListener("mouseenter", () => {
        // Animate the letters when hovering over the grid item
        gsap.fromTo(
          splitText.chars,
          { opacity: 0, y: 50, rotationX: -90 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.05,
          }
        );
      });

      // Optional: Reset on mouseleave if desired
      item.addEventListener("mouseleave", () => {
        gsap.to(splitText.chars, {
          opacity: 1, // Text stays visible
          y: 0,
          rotationX: 0,
          duration: 0.5,
          ease: "power1.in",
        });
      });
    });
  }, []);

  return (
    <main className="block overflow-hidden w-full">
      <section className="justify-center items-center max:w-full  flex h-screen w-[100vw] bg-black">
        <div className="grid-section">
          <motion.div
            variants={gridVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid-item col-span-2 about"
          >
            <Link href="/pages/about">
              <div className="clip-reg">
                <div className="text-reg">
                  <p className="inline-block text-white">About me</p>
                </div>
              </div>
              <div className="grid-item__bg is--about">
                <h1>About Me</h1>
              </div>
            </Link>
          </motion.div>

          <motion.div
            variants={gridVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid-item col-span-3 work"
          >
            <Link href="/pages/project" className="col-span-1">
              <div className="clip-reg">
                <div className="text-reg">
                  <span className="inline-block text-white">Work</span>
                </div>
              </div>
              <div className="grid-item__bg is--work">
                <h1>Work</h1>
              </div>
            </Link>
          </motion.div>

          <motion.div
            variants={gridVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid-item col-span-2 contact"
          >
            <Link href="/pages/contact">
              <div className="clip-reg">
                <div className="text-reg">
                  <span className="inline-block text-white">Contact</span>
                </div>
              </div>
              <div className="grid-item__bg is--contact">
                <h1>Contact</h1>
              </div>
            </Link>
          </motion.div>

          <motion.div
            variants={gridVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid-item max-sm:col-span-3"
          >
            <div className="clip-reg">
              <div className="text-reg">
                <span className="inline-block text-white">Location 🇸🇳</span>
              </div>
            </div>
            <div className="grid-item__bg is--sn">
              <h1>Senegal</h1>
            </div>
            <span className="absolute top-4 text-neutral-200 font-semibold text-[20px]">
              {time}
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
