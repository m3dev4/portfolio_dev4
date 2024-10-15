"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

const slideAnim = {
  initial: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { height: 0, opacity: 0 },
};

export default function ProjectAnim({ project }) {
  const [isActive, setIsActive] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const { title, description, lien, img } = project;

  return (
    <div className="flex flex-col w-full cursor-pointer py-[0.8vw] border-t-2 border-y-indigo-950">
      <div
        className="flex justify-center items-center w-full"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p className="text-[5vw] m-0">{title}</p>
        <motion.div
          variants={anim}
          animate={isActive ? "open" : "closed"}
          className="flex justify-center overflow-hidden w-0"
        >
          <img src={`/images/${img}`} className="w-[15vw]"></img>
        </motion.div>
      </div>
      <motion.div
        variants={slideAnim}
        initial="initial"
        animate={isExpanded ? "open" : "closed"}
        className="overflow-hidden"
      >
        <div className="py-4 px-2">
          <p className="text-base mb-4">{description}</p>
          <Link
            href={lien}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg text-center hover:bg-indigo-700 transition-colors duration-300"
          >
            Visiter le projet
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
