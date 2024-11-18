/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRef } from "react";
import localFont from "next/font/local";
import "./project.css";
import Link from "next/link";
import CustomCursor from "../../../components/customCursor";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import Header from "../../../components/header/header";

const mangoGrotesqueMedium = localFont({
  src: "../../fonts/MangoGrotesque-Medium.ttf",
});
const mangoGrotesqueRegular = localFont({
  src: "../../fonts/MangoGrotesque-Regular.ttf",
});
const mangoGrotesqueBold = localFont({
  src: "../../fonts/MangoGrotesque-Bold.ttf",
});

const nueveMonreal = localFont({
  src: "../../fonts/NeueMontreal-Bold.otf",
});

const Project = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
    smooth: true, // Enable smooth scrolling
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [100, -100], );


  return (
    <main className="h-auto min-h-screen w-full bg-[#0e090d]">
      <Header />
      <div className="px-14 py-14 z-50 fixed max-sm:px-2 max-sm:py-7 ">
        <Link href="/" className="realtive">
          <span className={`${mangoGrotesqueMedium.className} text-white text-[60px] max-sm:text-[25px] relative -top-8`}>M.Lo</span>
        </Link>
      </div>
      <div className=" w-full px-auto">
        <section className="flex justify-center py-7 space-y-5 overflow-hidden ">
          <div className="flex justify-center items-center flex-col py-10 w-full">
            <h2
              className={`lg:text-[211px] max-sm:text-[100px] sm:text-[100px] text-[#f1dada] ${mangoGrotesqueRegular.className}`}
            >
              Selected Work
            </h2>
            <div className="flex items-center justify-center flex-col">
              <p
                className={`text-[56px] max-sm:text-[30px] text-center flex text-[#f1dada] ${mangoGrotesqueRegular.className}`}
              >
                <div className="divider divider--center">
                  <div className="divider_line divider_line--left"></div>
                  Explore my creative expertise{" "}
                  <div className="divider_line divider_line--right"></div>
                </div>
              </p>
              <span
                className={`text-[16px] text-[#f1dada]  ${mangoGrotesqueMedium}`}
              >
                Check out some of my project by area of expertise
              </span>
            </div>
            <div className=" row-[3] flex justify-center self-center my-11">
              <div className="scroll-down"></div>
            </div>
          </div>
        </section>
        <section className="work container" ref={containerRef}>
          <CustomCursor />
          <div className="flex flex-col overflow-visible">
            <Link href="project/product-design" className="relative">
              <motion.div
                style={{x: translateX,}}
                className={`text-center relative flex flex-row items-center justify-center will-change-transform text-[#f1dada] work_categorie ${mangoGrotesqueRegular.className}`}
              >
                <Image
                  src="/pattern/design.png"
                  alt="design"
                  width={350}
                  height={350}
                  className="object-cover absolute inset-0 m-auto filter design-patter-img"
                />
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Product Design
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Product Design
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Product Design
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Product Design
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Product Design
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Product Design
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Product Design
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Product Design
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
              </motion.div>
            </Link>
            <div className="divider divider--center">
              <div className="divider_line divider_line--left"></div>
              <div className={`${nueveMonreal.className} divider-text`}>
                Click to view project
              </div>
              <div className="divider_line divider_line--left"></div>
            </div>
            <Link href="project/mobile-app" className="relative">
              <motion.div 
              style={{ x: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
                className={`text-center relative flex flex-row items-center justify-center will-change-transform text-[#f1dada] work_categorie ${mangoGrotesqueRegular.className}`}
              >
                <Image
                  src="/pattern/mobileapp.png"
                  alt="design"
                  width={350}
                  height={350}
                  className="object-cover absolute inset-0 m-auto filter img-anime"
                />
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Mobile App
                </span>
                <span className="transition-all min-w-[.3em] h-[.3em] mx-[.5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Mobile App
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Mobile App
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Mobile App
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Mobile App
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Mobile App
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Mobile App
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  Mobile App
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
              </motion.div>
            </Link>
            <div className="divider divider--center">
              <div className="divider_line divider_line--left"></div>
              <div className={`${nueveMonreal.className} divider-text`}>
                Click to view project
              </div>
              <div className="divider_line divider_line--left"></div>
            </div>
            <Link href="project/web-developer" className="relative">
              <motion.div
               style={{x: translateX,}}
                className={`text-center relative flex flex-row items-center justify-center will-change-transform text-[#f1dada] work_categorie ${mangoGrotesqueRegular.className}`}
              >
                <Image
                  src="/pattern/webdev.png"
                  alt="design"
                  width={350}
                  height={350}
                  className="object-cover absolute inset-0 m-auto filter wb-img-anime"
                />
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
                <span className="whitespace-nowrap font-thin text-[#f1dada] transition-[opacity .3s] ">
                  web Development
                </span>
                <span className="transition-[all .3s] min-w-[.3em] h-[.3em] m-[0 .5em] rounded-[50%] bg-[#fb4566]"></span>
              </motion.div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Project;
