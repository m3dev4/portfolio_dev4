/* eslint-disable react/no-unescaped-entities */
import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Header from "@/components/header/header";
import Link from "next/link";
import CursorSticky from "@/components/cursorSticky";
import "./about.css";

const mmFont = localFont({
  src: "../../fonts/mm-font.ttf",
});
const poppinsFont = localFont({
  src: "../../fonts/Poppins-Variable.ttf",
});

export const metadata = {
  title: "About | M3dev4",
  description: "About Me",
};

const About = () => {
  return (
    <div className="min-h-screen w-full block bg-gradient-to-r from-zinc-300 to-zinc-300/70 overflow-hidden ">
      <div className="flex justify-between items-center py-7 px-10 z-20 relative">
        <Link href="/" className="text-2xl font-bold text-black">
          M3DEV4
        </Link>
        <Header />
      </div>
      <div className="flex items-center justify-center w-full">
        <Image
          src="/images/noise-form.png"
          alt="bg pointe"
          width={700}
          height={900}
        />
      </div>
      <div className="flex justify-between w-full ">
        <CursorSticky />
        <div className="flex flex-1 flex-col">
          <div className="px-28">
            <h1
              className={`${poppinsFont.className} 
            text-[155px] font-extrabold uppercase -tracking-tight `}
            >
              About Myself
            </h1>
          </div>
          <div className="opcatity-bg"></div>
          <div className="flex flex-1 justify-between ml-10 relative items-center w-[60%] gap-9 px-10">
            <p className="px-5">
              Salut, je suis Mouhamed Lo, ingénieur logiciel passionné par le
              développement de solutions web et mobiles innovantes. Avec 3 ans
              d'expérience en tant que software engineer, je me spécialise dans
              l'écosystème JavaScript, maîtrisant aussi bien le frontend que le
              backend. Tout au long de mon parcours, j'ai travaillé sur des
              projets variés, en utilisant des technologies telles que React,
              Node.js, et TypeScript pour créer des applications performantes et
              évolutives. Mon approche est axée sur la collaboration,
              l'efficacité, et la résolution de problèmes complexes avec des
              solutions propres et bien structurées. Je suis toujours à la
              recherche de nouveaux défis pour continuer à apprendre et à
              perfectionner mes compétences, tout en apportant une valeur
              ajoutée aux projets sur lesquels je travaille.
            </p>
            <Image 
            src=""
            alt="m3dev4"
            width={700}
            height={900}
            className="float-right"
            />
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default About;
