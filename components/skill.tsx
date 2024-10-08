import {
  Backend_skill,
  Frontend_skill,
  Fullstack_skill,
} from "@/constants/data";
import React from "react";
import SkillProvider from "./skillProvider";
import SkillText from "./skillText";

const Skills = () => {
  return (
    <section
      className="flex flex-col items-center w-full
    justify-center gap-3 h-full relative overflow-hidden 
    py-20"
      id="skills"
      style={{ transform: "scale(0.9)" }}
    >
        <SkillText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center ">
        {Frontend_skill.map((image, index) => (
          <SkillProvider
            key={index}
            src={image.image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center ">
        {Backend_skill.map((image, index) => (
          <SkillProvider
            key={index}
            src={image.image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center ">
        {Fullstack_skill.map((image, index) => (
          <SkillProvider
            key={index}
            src={image.image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video 
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/video/cards-video.webm"
            
            />
        </div>
      </div>
    </section>
  );
};

export default Skills;
