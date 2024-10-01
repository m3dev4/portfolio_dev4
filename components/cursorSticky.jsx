"use client";
import { useMotionValue, useSpring, motion } from "framer-motion";
import React, { useEffect } from "react";

const CursorSticky = ({ stickyElement }) => {
  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  // Correct the manageMouseMove function to use clientX and clientY from the event
  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    // Pass the manageMouseMove function, not the string
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div>
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className="fixed w-4 h-4 bg-black rounded-full pointer-events-none"
      ></motion.div>
    </div>
  );
};

export default CursorSticky;
