/* eslint-disable react/no-unescaped-entities */

import localFont from "next/font/local";
import Image from "next/image";
import Header from "@/components/header/header";
import Link from "next/link";
import CursorSticky from "@/components/cursorSticky";
import "./about.css";

const mmFont = localFont({
  src: "../../fonts/mm-font.ttf",
  weight: "200",
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
    <div className="w-full bg-gradient-to-r from-zinc-300 to-zinc-300/70 overflow-hidden ">
      <div className="flex justify-between items-center py-7 px-10 z-20 relative">
        <Link href="/" className="text-2xl font-bold text-black">
          M3DEV4
        </Link>
        <Header />
      </div>
      <div className="flex items-center justify-center flex-col">
        <Image
          src="/images/noise-form.png"
          alt="bg pointe"
          width={700}
          height={400}
        />
        <div className="absolute bottom-0">
          <h1
            className={`${poppinsFont.className} 
            text-[155px] font-extrabold uppercase -tracking-tight `}
          >
            About Myself
          </h1>
        </div>
      </div>
      <div className="">
        <CursorSticky />
        <div className="bg-layout-screen"></div>

        <div className="mx-auto my-0 max-w-[1730rem] px-40 tracking-widest py-0 absolute">
          <div className="flex items-start justify-between">
            <p className={`${mmFont.className} text-3xl w-[45%] uppercase `}>
              Ingénieur logiciel avec 3 ans d'expérience dans la création
              d'applications web performantes. Spécialisé dans l'utilisation de
              JavaScript et de ses frameworks comme React et Node.js, je conçois
              des interfaces dynamiques et intègre des animations pour une
              expérience utilisateur fluide et immersive. Je me concentre sur la
              qualité du code et l'optimisation des performances pour chaque
              projet.
            </p>
            <Image
              src="/images/med.jpeg"
              alt="m3dev4"
              width={600}
              height={500}
              className="object-cover w-[600px] h-[650px]"
            />
          </div>
          <div className="mt-12">
            <p
              className={`${mmFont.className} text-2xl uppercase w-[70%] ml-auto`}
            >
              Je suis né à Dakar, Sénégal, et ma passion pour le développement
              logiciel a débuté en 2020. Depuis, je me suis spécialisé dans le
              développement frontend et backend, en particulier dans tout ce qui
              touche aux aspects visuels des sites web, aux animations, et à
              l'optimisation des interfaces. Mon objectif est de créer des
              expériences utilisateurs à la fois captivantes et performantes.
            </p>
          </div>
          <div className="h-screen">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
