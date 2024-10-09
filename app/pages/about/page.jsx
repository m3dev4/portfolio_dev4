import Header from "@/components/header/header";
import Skills from "@/components/skill";
import StickyScroll from "@/components/stickyScroll";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="w-full h-full block ">
      <div className="bg-blue-400 flex py-8 px-11 fixed z-10 items-center justify-between w-full">
        <Link href="/" className="cursor-pointer text-2xl font-extrabold uppercase">
          M3dev4
        </Link>
        <Header />
      </div>
      <div className="h-screen w-full bg-red-500 flex items-center justify-center"></div>
      <div className=" h-[300vh] w-full">
        <StickyScroll />    
      </div>
      <div className="relative w-full">
        <Skills />
      </div>
    </section>
  );
};

export default About;
