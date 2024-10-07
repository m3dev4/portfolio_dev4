import { Center } from "@react-three/drei";
import React from "react";

const Sphere = (props) => {
  return (
    <Center top {...props}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial />
      </mesh>
    </Center>
  );
};

export default Sphere;
