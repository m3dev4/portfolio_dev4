import React from "react";
import { Cover } from "./ui/cover";
import Link from "next/link";
import { motion } from "framer-motion";

export function CoverDemo() {
  const textVariants = {
    hidden: {
      clipPath: "inset(100% 0% 0% 0%)",
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div>
      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 top-20 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
      >
        Designing innovative and high-performing websites <br />
        <Link href="mailto:m3dev4@gmail.com">
          <Cover children={undefined} className={undefined}>
            m3dev4@gmail.com
          </Cover>
        </Link>
      </motion.h1>
    </div>
  );
}
