/* eslint-disable react/no-unescaped-entities */
"use client";
import "../app/globals.css";
import Image from "next/image";
import { iconTech } from "../constants";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UiGlobe } from "./uiGlobe";

const AboutSkill = () => {
  const control = useAnimation();
  const [inView, setInView] = useState(false);
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("animate-border");
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      control.start({
        opacity: 1,
        width: "100%",
        height: "100%",
        borderRadius: "3rem",
        transition: { duration: 1 },
      });
    } else {
      control.start({
        opacity: 0,
        width: "0%",
        height: "0%",
        borderRadius: "50%",
        transition: { duration: 1 },
      });
    }
  }, [inView, control]);

  return (
    <div className="w-full h-auto">
      <div className="flex flex-col items-start py-5 w-full">
        <motion.div className="w-full">
          <div className="flex">
            <h5>About</h5>
            <div className="table-row px-5"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-start py-5 w-full">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
              className="text-[40px] md:text-[50px] lg:text-[70px] flex-auto normal-case font-serif font-semibold"
            >
              Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl">
              {/* Liste des compétences */}
              <div className="normal-case">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                  className="text-[30px] md:text-[36px] lg:text-[42px]"
                >
                  Web Development
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                  className="text-[16px] md:text-[18px] lg:text-[19px]"
                >
                  Front-End Development
                </motion.p>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                  className="text-[16px] md:text-[18px] lg:text-[19px]"
                >
                  Back-End Development
                </motion.p>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                  className="text-[16px] md:text-[18px] lg:text-[19px]"
                >
                  SEO
                </motion.p>
              </div>
              <div className="normal-case">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                  className="text-[30px] md:text-[36px] lg:text-[42px]"
                >
                  Mobile Development
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                  className="text-[16px] md:text-[18px] lg:text-[19px]"
                >
                  React Native
                </motion.p>
              </div>
              <div className="normal-case">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                  className="text-[30px] md:text-[36px] lg:text-[42px]"
                >
                  CyberSecurity
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                  className="text-[16px] md:text-[18px] lg:text-[19px]"
                >
                  Pentesting
                </motion.p>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                  className="text-[16px] md:text-[18px] lg:text-[19px]"
                >
                  Risk analysis and mitigation
                </motion.p>
              </div>
              <div className="normal-case">
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                  className="text-[30px] md:text-[36px] lg:text-[42px]"
                >
                  Product Design
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                  className="text-[16px] md:text-[18px] lg:text-[19px]"
                >
                  UX/UI Design
                </motion.p>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                  className="text-[16px] md:text-[18px] lg:text-[19px]"
                >
                  Prototyping & System Design
                </motion.p>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                  className="text-[16px] md:text-[18px] lg:text-[19px]"
                >
                  Fluid Developer Handoff
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section ToolBox avec Slider Infini */}
        <motion.div className="w-full py-10 md:py-20">
          <div className="flex">
            <h5>About</h5>
            <div className="table-row px-5"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-start py-5 w-full">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
              className="text-[40px] md:text-[50px] lg:text-[70px] flex-auto normal-case font-serif font-semibold"
            >
              ToolBox
            </motion.h2>
          </div>

          {/* Animation Slider Infini */}
          <div className="overflow-hidden w-full py-5">
            <motion.div
              className="flex space-x-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {[...iconTech, ...iconTech].map((icon, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={icon.img}
                    alt={icon.name}
                    width={80} // Taille réduite pour les petits écrans
                    height={80}
                    className="object-cover md:w-[100px] md:h-[100px]"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* footer  */}
      <div className="w-full h-full ">
        <div className="relative overflow-hidden h-[100vh] min-h-[35rem] max-h-[90rem] grid grid-cols-1 w-full">
          <div
            id="animate-border"
            className="relative row-[2] flex flex-col items-center justify-center text-center w-full"
          >
            <motion.div
              initial={{
                opacity: 0,
                width: "0%",
                height: "0%",
                borderRadius: "50%",
              }}
              animate={control}
              className="border border-indigo-900 opacity-0 absolute"
            ></motion.div>
            <h2>Available for a full-time position</h2>
    
              <Link href="https://www.linkedin.com/in/mouhamed-lo-287a06202/">
                Linkedn
              </Link>
              <Link href="">Download Resume</Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSkill;
