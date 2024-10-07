"use client"
import { ControlledInput } from "@/hooks/useControlled";
import { Html, Text } from "@react-three/drei";
import React, { useState } from "react";

const Input = (props) => {
  const [text, setText] = useState("Me 😊");

  return (
    <group {...props}>
      <Text
        position={[-1.2, -0.022, 0]}
        anchorX="0px"
        fontSize={0.335}
        letterSpacing={-0.0}
      >
        {text}
        <meshStandardMaterial color={"black"} />
      </Text>
      <mesh position={[0, -0.022, 0]} scale={[2.5, 0.48, 1]}>
        <planeGeometry />
        <meshBasicMaterial transparent opacity={0.3} depthWrite={false} />
      </mesh>
      <Html transform>
        <ControlledInput type={text} onChange={(e) => set(e.target.value)} value={text} />
      </Html>
    </group>
  );
};

export default Input;
