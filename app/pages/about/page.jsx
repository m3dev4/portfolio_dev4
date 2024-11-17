/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./about.css";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import Header from "../../../components/header/header";
import AboutSkill from "../../../components/AboutSkill";
import { motion } from "framer-motion";
import localFont from "next/font/local";

gsap.registerPlugin(Flip);


const nueveMontrealFont = localFont({ src: "../../fonts/NeueMontreal-Bold.otf"})
const nueveMontrealFontLight = localFont({ src: "../../fonts/NeueMontreal-Light.otf"})


const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const [isInitialized, setIsInitialized] = useState(false);
  const [isExplored, setIsExplored] = useState(false);

  const handleExploreClick = () => {
    setIsExplored(true);
    enterFullview();
  };

  const bodyRef = useRef(null);
  const frameRef = useRef(null);
  const contentRef = useRef(null);
  const enterButtonRef = useRef(null);
  const fullviewRef = useRef(null);
  const gridRef = useRef(null);
  const gridRowsRef = useRef([]);

  // State
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [winsize, setWinsize] = useState({ width: 0, height: 0 });
  const [requestId, setRequestId] = useState(null);

  // Configuration
  const config = {
    translateX: true,
    skewX: false,
    contrast: true,
    scale: false,
    brightness: true,
  };

  const baseAmt = 0.15;
  const minAmt = 0.05;
  const maxAmt = 0.1;

  // Initialize rendered styles ref
  const renderedStylesRef = useRef([]);

  // Helper functions
  const calculateMappedX = () => {
    return (((mousePos.x / winsize.width) * 2 - 1) * 40 * winsize.width) / 100;
  };

  const calculateMappedSkew = () => {
    return ((mousePos.x / winsize.width) * 2 - 1) * 3;
  };

  const calculateMappedContrast = () => {
    const centerContrast = 100;
    const edgeContrast = 330;
    const t = Math.abs((mousePos.x / winsize.width) * 2 - 1);
    const factor = Math.pow(t, 2);
    return centerContrast - factor * (centerContrast - edgeContrast);
  };

  const calculateMappedScale = () => {
    const centerScale = 1;
    const edgeScale = 0.95;
    return (
      centerScale -
      Math.abs((mousePos.x / winsize.width) * 2 - 1) * (centerScale - edgeScale)
    );
  };

  const calculateMappedBrightness = () => {
    const centerBrightness = 100;
    const edgeBrightness = 15;
    const t = Math.abs((mousePos.x / winsize.width) * 2 - 1);
    const factor = Math.pow(t, 2);
    return centerBrightness - factor * (centerBrightness - edgeBrightness);
  };

  const getCSSVariableValue = (element, variableName) => {
    if (!element) return "0px"; // Valeur par défaut si l'élément n'existe pas
    return getComputedStyle(element).getPropertyValue(variableName).trim();
  };

  const lerp = (a, b, n) => (1 - n) * a + n * b;

  const getMousePos = (e) => {
    return {
      x: e.clientX,
      y: e.clientY,
    };
  };

  // Animation render loop
  const render = () => {
    const mappedValues = {
      translateX: calculateMappedX(),
      skewX: calculateMappedSkew(),
      contrast: calculateMappedContrast(),
      scale: calculateMappedScale(),
      brightness: calculateMappedBrightness(),
    };

    gridRowsRef.current.forEach((row, index) => {
      const style = renderedStylesRef.current[index];

      // Update current positions and interpolate values
      for (let prop in config) {
        if (config[prop]) {
          style[prop].current = mappedValues[prop];
          const amt = prop === "scale" ? style.scaleAmt : style.amt;
          style[prop].previous = lerp(
            style[prop].previous,
            style[prop].current,
            amt
          );
        }
      }

      let gsapSettings = {};
      if (config.translateX) gsapSettings.x = style.translateX.previous;
      if (config.skewX) gsapSettings.skewX = style.skewX.previous;
      if (config.scale) gsapSettings.scale = style.scale.previous;
      if (config.contrast)
        gsapSettings.filter = `contrast(${style.contrast.previous}%)`;
      if (config.brightness)
        gsapSettings.filter = `${
          gsapSettings.filter ? gsapSettings.filter + " " : ""
        }brightness(${style.brightness.previous}%)`;

      gsap.set(row, gsapSettings);
    });

    setRequestId(requestAnimationFrame(render));
  };

  const startRendering = () => {
    if (!requestId) {
      render();
    }
  };

  const stopRendering = () => {
    if (requestId) {
      cancelAnimationFrame(requestId);
      setRequestId(null);
    }
  };

  const enterFullview = () => {
    if (!isInitialized) {
      console.warn("Component is not fully initialized yet");
      return;
    }

    // Le reste de votre code enterFullview...
    const middleRowIndex = Math.floor(gridRowsRef.current.length / 2);
    const middleRow = gridRowsRef.current[middleRowIndex];

    if (!middleRow) {
      console.warn("Middle row not found");
      return;
    }

    const middleRowItems = middleRow.querySelectorAll(".row__item");
    const middleItemIndex = Math.floor(middleRowItems.length / 2);
    const middleItemInner =
      middleRowItems[middleItemIndex]?.querySelector(".row__item-inner");
    const middleItemImage = middleItemInner?.querySelector(".row__item-img");

    if (!middleItemInner || !middleItemImage) {
      console.warn("Required elements not found");
      return;
    }

    const flipstate = Flip.getState(middleItemInner);
    fullviewRef.current.appendChild(middleItemInner);

    const transContent = getCSSVariableValue(
      contentRef.current,
      "--trans-content"
    );

    const tl = gsap.timeline();

    tl.add(
      Flip.from(flipstate, {
        duration: 0.9,
        ease: "power4",
        absolute: true,
        onComplete: stopRendering,
      })
    )
      .to(
        gridRef.current,
        {
          duration: 0.9,
          ease: "power4",
          opacity: 0.01,
        },
        0
      )
      .to(
        middleItemImage,
        {
          scale: 1.2,
          duration: 3,
          ease: "sine",
        },
        "<-=0.45"
      )
      .to(contentRef.current, {
        y: transContent,
        duration: 0.9,
        ease: "power4",
      })
      .add(() => {
        if (frameRef.current) {
          frameRef.current.classList.remove("hidden");
        }
      }, "<")
      .to(
        middleItemImage,
        {
          scale: 1.1,
          startAt: { filter: "brightness(100%)" },
          filter: "brightness(50%)",
          y: "-5vh",
          duration: 0.9,
          ease: "power4",
        },
        "<"
      );

    if (enterButtonRef.current) {
      enterButtonRef.current.classList.add("hidden");
    }
    if (bodyRef.current) {
      bodyRef.current.classList.remove("noscroll");
    }
  };

  // Initialize grid rows and styles
  useEffect(() => {
    if (gridRef.current) {
      const rows = gridRef.current.querySelectorAll(".row");
      gridRowsRef.current = Array.from(rows);

      const numRows = gridRowsRef.current.length;
      const middleRowIndex = Math.floor(numRows / 2);

      renderedStylesRef.current = Array.from(
        { length: numRows },
        (_, index) => {
          const distanceFromMiddle = Math.abs(index - middleRowIndex);
          const amt = Math.max(baseAmt - distanceFromMiddle * 0.03, minAmt);
          const scaleAmt = Math.min(
            baseAmt + distanceFromMiddle * 0.03,
            maxAmt
          );

          let style = { amt, scaleAmt };

          if (config.translateX) style.translateX = { previous: 0, current: 0 };
          if (config.skewX) style.skewX = { previous: 0, current: 0 };
          if (config.contrast) style.contrast = { previous: 100, current: 100 };
          if (config.scale) style.scale = { previous: 1, current: 1 };
          if (config.brightness)
            style.brightness = { previous: 100, current: 100 };

          return style;
        }
      );

      // Set initial size of middle image
      const middleRow = gridRowsRef.current[middleRowIndex];
      if (middleRow) {
        const middleRowItems = middleRow.querySelectorAll(".row__item");
        const middleItemIndex = Math.floor(middleRowItems.length / 2);
        const middleItemImage =
          middleRowItems[middleItemIndex]?.querySelector(".row__item-img");
        if (middleItemImage) {
          middleItemImage.classList.add("row__item-img--large");
        }
      }

      // Vérifier que toutes les refs nécessaires sont initialisées
      if (
        frameRef.current &&
        contentRef.current &&
        enterButtonRef.current &&
        fullviewRef.current &&
        gridRef.current &&
        gridRowsRef.current.length > 0
      ) {
        setIsInitialized(true);
      }
    }
  }, []);

  // Initialize window size and event listeners

  useEffect(() => {
    const handleResize = () => {
      setWinsize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const updateMousePosition = (ev) => {
      const pos = getMousePos(ev);
      setMousePos({ x: pos.x, y: pos.y });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchmove", (ev) =>
      updateMousePosition(ev.touches[0])
    );

    startRendering();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchmove", updateMousePosition);
      stopRendering();
    };
  }, []);

  
  useEffect(() => {
    // Animation des images du grid
    const allImages = document.querySelectorAll('.row__item-img');
    
    allImages.forEach((img) => {
      // Vérifie si l'image n'est pas celle à exclure
      if (!img.style.backgroundImage.includes('/images/med-sn.png')) {
        // Position initiale aléatoire
        const randomY = Math.random() * 100 - 50; // Valeur entre -50 et 50
        
        gsap.set(img, {
          y: randomY,
          opacity: 0
        });

        // Animation avec un délai aléatoire
        gsap.to(img, {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: Math.random() * 0.5,
          ease: "power3.out"
        });

        // Animation continue
        gsap.to(img, {
          y: randomY * 0.3, // Amplitude réduite pour le mouvement continu
          duration: 2 + Math.random() * 2, // Durée aléatoire entre 2 et 4 secondes
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: Math.random() * 2 // Délai aléatoire pour désynchroniser les animations
        });
      }
    });
  }, []);

  return (
    <main className={`${isExplored ? "" : "noscroll"}`}>
      <header className="frame" ref={frameRef}>
        <div className="flex py-5 px-11 fixed z-10 items-center justify-between w-full">
          <Link
            href="/"
            className="cursor-pointer text-2xl text-white font-extrabold uppercase"
          >
            <Image
              src="/images/m4.png"
              alt="logo dev"
              width={70}
              height={70}
              className="rounded-full"
            />
          </Link>
          <div className="z-10">
            <Header />
          </div>
        </div>
      </header>
      <section className="intro">
        <div className="gride" ref={gridRef}>
          <div className="row">
            {Array.from({ length: 7 }).map((_, i) => (
              <div className="row__item" key={i}>
                <div className="row__item-inner">
                  <div
                    className="row__item-img"
                    style={{ backgroundImage: `url('/test/img/${i + 1}.jpg')` }}
                  />
                </div>
              </div>
            ))}
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/css.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/html.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/js.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/typescript.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/reactjs.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/nextjs.png')" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/docker.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/exjs.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/nodejs.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/python.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/db.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/dbgraph.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/postgres.png')" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/firebase.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/tailwind.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/js.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/images/med-sn.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/typescript.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/html.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/css.png')" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/python.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/git.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/reactjs.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/nextjs.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/firebase.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/docker.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/exjs.png')" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/nodejs.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/dbgraph'.png)" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/git.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/tailwind'.png)" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/icons/db.png')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/test/img/8.jpg')" }}
                ></div>
              </div>
            </div>
            <div class="row__item">
              <div class="row__item-inner">
                <div
                  class="row__item-img"
                  style={{ backgroundImage: "url('/test/img/9.jpg')" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="fullview" ref={fullviewRef}></div>
        <div
          ref={enterButtonRef}
          className={`enter ${!isInitialized ? "disabled" : ""}`}
          onClick={isInitialized ? handleExploreClick : undefined}
          onTouchStart={isInitialized ? handleExploreClick : undefined}
        >
          <span>Explore</span>
        </div>
      </section>
      <section className="content max-sm:h-auto w-full" ref={contentRef}>
        <div class="content__header">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            variants={fadeLeft}
          >
            Mouhamed Lo
          </motion.h2>
        </div>
        <div className="text-balance flex flex-col gap-[10vh] px-[5vw]">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className={`max-w-[700px] text-[1.5rem] ml-auto m-0 leading-[1.4] text-[#f1dada] ${nueveMontrealFont.className}`}
          >
            Ingénieur logiciel avec 3 ans d'expérience dans la création
            d'applications web performantes. Spécialisé dans l'utilisation de
            JavaScript et de ses frameworks comme React et Node.js, je conçois
            des interfaces dynamiques et intègre des animations pour une
            expérience utilisateur fluide et immersive. Je me concentre sur la
            qualité du code et l'optimisation des performances pour chaque
            projet.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className={`max-w-[1000px] text-[2rem] font-bold text-[#f1dada] ${nueveMontrealFont.className}`}
          >
            Je suis né à Dakar, Sénégal, et ma passion pour le développement
            logiciel a débuté en 2020. Depuis, je me suis spécialisé dans le
            développement frontend et backend, en particulier dans tout ce qui
            touche aux aspects visuels des sites web, aux animations, et à
            l'optimisation des interfaces. Mon objectif est de créer des
            expériences utilisateurs à la fois captivantes et performantes.
          </motion.p>
          <AboutSkill />
        </div>
        <footer className="content__footer text-white font-bold">
          <span>
            Made by @M3dev4
          </span>
          ©2024 M.Lo
        </footer>
      </section>
    </main>
  );
};

export default About;
