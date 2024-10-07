import * as Three from "three";
import { useFrame } from "@react-three/fiber";
import React from "react";

const Rig = ({ vec = new Three.Vector3() }) => {
  useFrame((state) => {
    state.camera.position.lerp(vec.set(1 + state.pointer.x, 0.5, 3), 0.01);
    state.camera.lookAt(0, 0, 0);
  });
};

export default Rig;
