"use client";
import Clock from "@/components/clock/clock";
import Header from "@/components/header/header";
import Hero from "@/components/hero";
import { useGSAP } from "@gsap/react";
import { IconNumber6Small } from "@tabler/icons-react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import "./globals.css";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const picAniamtion = useRef(null);
  const menuAnimation = useRef(null);

  useGSAP(() => {
    // animation timeline with gsap
    const tl = gsap.timeline();
    tl.fromTo(
      picAniamtion.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 3.5, ease: "power2.out" }
    );
    tl.fromTo(
      menuAnimation.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-black to-slate-950 overflow-hidden">
      <div className="flex px-7 py-7 justify-between z-10 relative">
        <Image
          ref={picAniamtion}
          src="/images/m4.png"
          alt="logo"
          width={70}
          height={70}
          className="object-contain rounded-full"
        />
        {/* <Clock /> */}
        <div ref={menuAnimation}>
          <Header />
        </div>
      </div>
      {/* <Hero /> */}
    </div>
  );
};

export default Home;
