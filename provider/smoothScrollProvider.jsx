import { useEffect, useRef } from "react";
import { initSmoothScroll } from "../utils/smoothScroll";

 const ScrollProvider = ({ children }) => {
  const lenisRef = useRef();
  useEffect(() => {
    lenisRef.current = initSmoothScroll();

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);
  return;
  <>{children}</>;
};

export default ScrollProvider