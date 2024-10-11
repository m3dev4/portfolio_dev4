"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import "./pageTransition.css";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 3000); // Ajustement du timer pour 3s

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <motion.div
      className={`page__style ${isTransitioning ? "animate_content" : ""}`}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
