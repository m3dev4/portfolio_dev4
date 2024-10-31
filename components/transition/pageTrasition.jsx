"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "./pageTransition.css";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    setShowContent(false);

    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
      setShowContent(true);
    }, 3000); // La durée de l'animation (3s)

    return () => clearTimeout(transitionTimer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className={`page__style animate_content`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>
      {showContent && <div>{children}</div>}
    </>
  );
};

export default PageTransition;
