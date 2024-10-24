/* eslint-disable react/no-unescaped-entities */
"use client"
import { useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion"
import Lenis from "@studio-freight/lenis";
import Image from "next/image";

const images = [{}];

const ParallaxScroll = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
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

  return (
    <main>
      <div>
        <div>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      </div>
    </main>
  );
};

export default ParallaxScroll;

const Column = ({ images, y }) => {
  return (
    <motion.div>
      {images.map((src, i) => {
        <Image src={`/images/${src}`} alt="image" fill />;
      })}
    </motion.div>
  );
};
