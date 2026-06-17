"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import "./pageTransition.css";

const overlayVariants = {
  initial: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
  animate: {
    opacity: 1,
    backdropFilter: "blur(10px)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textVariants = {
  initial: {
    opacity: 0,
    y: 18,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants = {
  initial: {
    opacity: 0,
    y: 14,
    scale: 0.985,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const PageTransition = ({ children, isFirstLoad }) => {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isFirstLoad) return;
    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;
    setIsTransitioning(true);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [pathname, isFirstLoad]);

  return (
    <>
      <motion.div
        key={pathname}
        variants={contentVariants}
        initial={isFirstLoad ? false : "initial"}
        animate="animate"
      >
        {children}
      </motion.div>

      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            className="page-transition"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              className="page-transition__content"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <span className="page-transition__text">M3DEV4</span>
              <span className="page-transition__line" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageTransition;