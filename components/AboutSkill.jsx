/* eslint-disable react/no-unescaped-entities */
import "../app/globals.css";
import Image from "next/image";
import { iconTech } from "../constants";
import { motion } from "framer-motion";
import { GlobeDemo } from "./gridGlobe";
import Link from "next/link";

const AboutSkill = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col items-start py-5 w-full">
        {/* Section Skills */}
        <div className="w-full">
          <div className="flex">
            <h5>About</h5>
            <div className="table-row px-5"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-start py-5 w-full">
            <h2 className="text-[40px] md:text-[50px] lg:text-[70px] flex-auto normal-case font-serif font-semibold">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl">
              {/* Liste des compétences */}
              <div className="normal-case">
                <h3 className="text-[30px] md:text-[36px] lg:text-[42px]">Web Development</h3>
                <p className="text-[16px] md:text-[18px] lg:text-[19px]">Front-End Development</p>
                <p className="text-[16px] md:text-[18px] lg:text-[19px]">Back-End Development</p>
                <p className="text-[16px] md:text-[18px] lg:text-[19px]">SEO</p>
              </div>
              <div className="normal-case">
                <h3 className="text-[30px] md:text-[36px] lg:text-[42px]">Mobile Development</h3>
                <p className="text-[16px] md:text-[18px] lg:text-[19px]">React Native</p>
              </div>
              <div className="normal-case">
                <h3 className="text-[30px] md:text-[36px] lg:text-[42px]">CyberSecurity</h3>
                <p className="text-[16px] md:text-[18px] lg:text-[19px]">Pentesting</p>
                <p className="text-[16px] md:text-[18px] lg:text-[19px]">Risk analysis and mitigation</p>
              </div>
              <div className="normal-case">
                <h3 className="text-[30px] md:text-[36px] lg:text-[42px]">Product Design</h3>
                <p className="text-[16px] md:text-[18px] lg:text-[19px]">UX/UI Design</p>
                <p className="text-[16px] md:text-[18px] lg:text-[19px]">Prototyping & System Design</p>
                <p className="text-[16px] md:text-[18px] lg:text-[19px]">Fluid Developer Handoff</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section ToolBox avec Slider Infini */}
        <div className="w-full py-10 md:py-20">
          <div className="flex">
            <h5>About</h5>
            <div className="table-row px-5"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-start py-5 w-full">
            <h2 className="text-[40px] md:text-[50px] lg:text-[70px] flex-auto normal-case font-serif font-semibold">
              ToolBox
            </h2>
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
        </div>       
      </div>
      
        {/* footer  */}
      <div className="block">
            <div className="relative overflow-hidden h-[50vh] min-h-[35rem] max-h-[90rem] grid grid-cols-1">
                <div className="relative row-[2] flex flex-col items-center justify-center text-center">
                    <h2>Available for a full-time position</h2>
                    <div>
                    {/* <GlobeDemo /> */}
                    <Link href="https://www.linkedin.com/in/mouhamed-lo-287a06202/">
                        Linkedn
                    </Link>
                    <Link href="">
                        Download Resume
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutSkill;
