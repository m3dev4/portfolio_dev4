import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./style.css";

const Loader = ({ onComplete }) => {
  const svgPathRef = useRef(null);
  const loaderRef = useRef(null);
  const titleRef = useRef(null);
  const progressBarRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const svgPath = svgPathRef.current;
    const loader = loaderRef.current;
    const title = titleRef.current;
    const progressBar = progressBarRef.current;

    if (!svgPath || !loader || !title || !progressBar) return;

    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 2;
      });
    }, 35);

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    const timeline = gsap.timeline({
      delay: 0.2,
      onComplete: () => {
        document.body.style.overflow = "visible";

        if (typeof onComplete === "function") {
          onComplete();
        }
      },
    });

    timeline
      .fromTo(
        title,
        {
          y: 140,
          skewY: 12,
          opacity: 0,
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
        }
      )
      .to(
        progressBar,
        {
          width: "100%",
          duration: 1.8,
          ease: "power2.inOut",
        },
        "-=0.4"
      )
      .to(title, {
        y: -120,
        skewY: -8,
        opacity: 0,
        duration: 0.75,
        ease: "power4.in",
        delay: 0.3,
      })
      .to(svgPath, {
        duration: 0.75,
        attr: {
          d: curve,
        },
        ease: "power2.in",
      })
      .to(svgPath, {
        duration: 0.75,
        attr: {
          d: flat,
        },
        ease: "power2.out",
      })
      .to(loader, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
      })
      .set(loader, {
        display: "none",
        pointerEvents: "none",
      });

    return () => {
      clearInterval(interval);
      timeline.kill();
      document.body.style.overflow = "visible";
    };
  }, [onComplete]);

  return (
    <div className="loader" ref={loaderRef}>
      <svg
        className="loader__svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          ref={svgPathRef}
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
        />
      </svg>

      <div className="loader__content">
        <div className="loader__title-mask">
          <span ref={titleRef} className="loader__title">
            M3DEV4
          </span>
        </div>

        <div className="loader__bottom">
          <div className="loader__progress">
            <div ref={progressBarRef} className="loader__progress-bar" />
          </div>

          <p className="loader__percent">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;