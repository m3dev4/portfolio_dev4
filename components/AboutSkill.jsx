"use client";
import "../app/globals.css";
import Image from "next/image";
import { iconTech } from "../constants";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import dynamic from 'next/dynamic';

// Chargement dynamique de WorldMapDemo


const nueveMontrealFontLight = localFont({ src: "../app/fonts/NeueMontreal-Bold.otf"})

// Déplacer les animations en dehors du composant
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Composant pour les compétences pour éviter les re-renders inutiles
const SkillSection = ({ title, skills }) => (
  <div className="normal-case">
    <motion.h3
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={fadeIn}
      className="text-[30px] md:text-[36px] lg:text-[42px]"
    >
      {title}
    </motion.h3>
    {skills.map((skill, index) => (
      <motion.p
        key={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        variants={fadeIn}
        className="text-[16px] md:text-[18px] lg:text-[19px]"
      >
        {skill}
      </motion.p>
    ))}
  </div>
);

// Composant pour le slider infini
const InfiniteSlider = () => (
  <div className="overflow-hidden w-full py-5">
    <motion.div
      className="flex space-x-8"
      animate={{ x: ["0%", "-50%"] }} // Optimisé pour moins de charge
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      }}
    >
      <div className="flex space-x-8">
        {iconTech.map((icon, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={icon.img}
              alt={icon.name}
              width={80}
              height={80}
              className="object-cover md:w-[100px] md:h-[100px]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-8">
        {iconTech.map((icon, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0">
            <Image
              src={icon.img}
              alt={icon.name}
              width={80}
              height={80}
              className="object-cover md:w-[100px] md:h-[100px]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

const AboutSkill = () => {
  const skillsData = {
    webDev: {
      title: "Web Development",
      skills: ["Front-End Development", "Back-End Development", "SEO"]
    },
    mobileDev: {
      title: "Mobile Development",
      skills: ["React Native"]
    },
    security: {
      title: "CyberSecurity",
      skills: ["Pentesting", "Risk analysis and mitigation"]
    },
    design: {
      title: "Product Design",
      skills: ["UX/UI Design", "Prototyping & System Design", "Fluid Developer Handoff"]
    }
  };

  return (
    <div className="w-full h-auto text-white">
      <div className="flex flex-col items-start py-5 w-full">
        <motion.div className="w-full">
          <div className="flex">
            <h5 className="text-white">About</h5>
            <div className="table-row px-5"></div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-evenly items-start py-5 w-full">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
              className="text-[40px] md:text-[50px] lg:text-[70px] flex-auto normal-case font-serif font-semibold text-white"
            >
              Skills
            </motion.h2>
            
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl ${nueveMontrealFontLight.className}`}>
              {Object.values(skillsData).map((section, index) => (
                <SkillSection key={index} {...section} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section ToolBox */}
        <motion.div className="w-full py-10 md:py-20">
          <div className="flex">
            <h5>About</h5>
            <div className="table-row px-5"></div>
          </div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="text-[40px] md:text-[50px] lg:text-[70px] flex-auto normal-case font-serif font-semibold mb-8"
          >
            ToolBox
          </motion.h2>

          <InfiniteSlider />
        </motion.div>
      </div>

      <div className="w-full h-full">
        <WorldMapDemo />
      </div>
    </div>
  );
};

export default AboutSkill;