"use client";
import { Effects } from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import React, { useRef } from "react";
import { WaterPass } from "three-stdlib";

extend({ WaterPass });

const PostPro = () => {
  const ref = useRef();
  useFrame((state) => (ref.current.time = state.clock.elapsedTime * 3));
  return (
    <Effects>
      <waterPass ref={ref} factor={0.5} />
    </Effects>
  );
};

export default PostPro;
