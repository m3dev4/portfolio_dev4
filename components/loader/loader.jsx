import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import './style.css';

const Loader = ({ onComplete }) => {
  const svgRef = useRef(null);
  const loaderWrapRef = useRef(null);
  const [progress, setProgress] = useState(0); // État pour gérer le pourcentage

  useEffect(() => {
    const svg = svgRef.current;
    const loaderWrap = loaderWrapRef.current;

    if (!svg || !loaderWrap) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4; // Augmente le pourcentage progressivement
      });
    }, 50); // Ajustez la vitesse d'incrémentation ici

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "visible";
        if (onComplete) onComplete(); // Notifier le parent que le chargement est terminé
      },
    });

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.from(".loader-wrap-heading h1", {
      delay: 0.5,
      y: 200,
      skewY: 20,
    })
      .to(".loader-wrap-heading h1", {
        delay: 0.5,
        y: -200,
        skewY: 20,
      })
      .to(svg, {
        duration: 0.8,
        attr: { d: curve },
        ease: "power2.easeIn",
      })
      .to(svg, {
        duration: 0.8,
        attr: { d: flat },
        ease: "power2.easeOut",
      })
      .to(loaderWrap, {
        y: -1500,
      })
      .to(loaderWrap, {
        zIndex: -1,
        display: "none",
      });

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, []);

  return (
    <div className="">
      <div className="loader-wrap" ref={loaderWrapRef}>
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path
            id="svg"
            ref={svgRef}
            d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
          ></path>
        </svg>
        <div className="loader-wrap-heading">
          <span>
            <h1>M3DEV4</h1>
          </span>
        </div>
        {/* Affichage du pourcentage */}
        <div className="loader-progress">
          <p>{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
