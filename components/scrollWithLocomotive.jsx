"use client";
import React, { useEffect } from "react";
import Intro from "./intro";

const ScrollWithLocomotive = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Intro />
    </>
  );
};

export default ScrollWithLocomotive;
