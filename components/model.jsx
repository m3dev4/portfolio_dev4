import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import React from "react";

const Model = (props) => {
  const { nodes } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bunny/model.gltf"
  );
  return (
    <mesh castShadow receiveShadow geometry={nodes.bunny.geometry} {...props}>
      <MeshTransmissionMaterial
        backside
        samples={16}
        resolution={512}
        transmission={1}
        roughness={0.1}
        thickness={0.2}
        ior={1.5}
        chromaticAberration={0.06}
        anisotropy={0.1}
        distortion={0.5}
        distortionScale={0.5}
        temporalDistortion={0.1}
        iridescence={1}
        iridescenceIOR={1}
        iridescenceThicknessRange={[0, 1400]}
      />
    </mesh>
  );
};

export default Model;
