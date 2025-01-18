"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "./pageTransition.css";

const PageTransition = ({ children, isFirstLoad }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      // Si c'est le premier chargement, ignore les transitions
      setShowContent(true);
      setIsTransitioning(false);
    } else {
      // Applique les transitions uniquement entre les pages
      setIsTransitioning(true);
      setShowContent(false);

      const transitionTimer = setTimeout(() => {
        setIsTransitioning(false);
        setShowContent(true);
      }, 3000); // Durée de l'animation (3s)

      return () => clearTimeout(transitionTimer);
    }
  }, [pathname, isFirstLoad]);

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
