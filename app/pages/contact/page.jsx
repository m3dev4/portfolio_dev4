/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SocialMedia } from "../../../constants";
import localFont from "next/font/local";
import Header from ".././../../components/header/header"
import { BackgroundLines } from "../../../components/ui/background-ilne";
import { CoverDemo } from "../../../components/faster";

const popinsFont = localFont({
  src: "../../fonts/Poppins-Variable.ttf",
});

const mangoGrotesqueMedium = localFont({
  src: "../../fonts/MangoGrotesque-Medium.ttf",
});
const mangoGrotesqueRegular = localFont({
  src: "../../fonts/MangoGrotesque-Regular.ttf",
});
const mangoGrotesqueBold = localFont({
  src: "../../fonts/MangoGrotesque-Bold.ttf",
});

const images = [
  "1.png",
  "2.png",
  "11.jpg",
  "3.png",
  "4.png",
  "5.jpg",
  "6.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "12.jpg",
];


export default function Home() {
  const picAniamtion = useRef(null);
  const menuAnimation = useRef(null);
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
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

  return (
    <main className="bg-layout">
      <header className="fixed flex justify-between items-center left-0 z-50 top-0">
        <div className="flex  space-between items-center  mx-auto ">
          <Link href="/" className="mt-8 max-sm:-ml-20">
            <span
              className={` uppercase px-28 text-[60px] max-sm:absolute max:sm:left-0 text-custom-pink pointer-events-auto text-nowrap overflow-hidden relative ${mangoGrotesqueMedium.className}`}
            >
              M.Lo
            </span>
          </Link>
          <div className="absolute top-0">
          <Header />
          </div>
        </div>
        
      </header>
      <div className="flex flex-col items-center justify-center pt-60">
        <BackgroundLines className="bg-layout">
          <CoverDemo />
        </BackgroundLines>
      </div>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className={styles.spacer}></div>
      <footer className="flex justify-between items-center px-7 text-white font-bold">
          <span>Made by @M3dev4</span>
          ©2025 M.Lo
        </footer>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/images/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
