import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SVGAnimation = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Une fois le SVG chargé, tu peux accéder à son contenu et animer les éléments
    const svgObject = svgRef.current;
    svgObject.addEventListener("load", () => {
      const svgDoc = svgObject.contentDocument;
      const path = svgDoc.querySelector("path"); // Sélectionne un élément <path> par exemple

      const pathLength = path.getTotalLength();

      // Initialisation de GSAP
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        stroke: "#88a4bc", // Personnalise la couleur du tracé
        strokeWidth: 2, // Épaisseur du tracé
        fill: "none", // Pas de remplissage pour voir l'animation du contour
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: svgObject,
          start: "top 100%",
          end: "bottom 20%",
          scrub: 1,
        },
        duration: 2,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div className="w-full h-auto">
      <object
        ref={svgRef}
        type="image/svg+xml"
        data="/images/country.svg" 
        className="absolute bottom-40 left-8 w-[33%]"      
      />
    </div>
  ); 
};

export default SVGAnimation;
