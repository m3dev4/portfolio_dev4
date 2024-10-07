"use client";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Input from "./input";
import {
  AccumulativeShadows,
  Center,
  Environment,
  RandomizedLight,
  Text,
  Html,
  Effects,
  PresentationControls,
  Sparkles,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import Model from "./model";
import Sphere from "./sphere";
import Rig from "./rig";
import { WaterPass } from "three-stdlib";
import { useRef } from "react";

extend({ WaterPass });

const ModelAbout = () => {
  return (
    <Canvas
      eventPrefix="client"
      shadows
      camera={{ position: [1, 0.5, 10] }}
      className="z-10"
    >
      <color attach="background" args={["#000"]} />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <group position={[0, -1, 0]} dispose={null}>
          <Model scale={3.5} rotation={[0, -Math.PI / 4, 0]} />
          <Center position={[0, 3, 0]}>
            <Text
              fontSize={2.7}
              fontWeight="bold"
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              About Myself
              <MeshTransmissionMaterial
                backside
                samples={16}
                resolution={512}
                transmission={1}
                roughness={0.1}
                thickness={0.1}
                ior={1.5}
                chromaticAberration={0.06}
                anisotropy={0.1}
                distortion={0.0}
                distortionScale={0.3}
                temporalDistortion={0.5}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
              />
            </Text>
          </Center>
          <FloatingSpheres count={100} position={[1, -40, -10]} />
          <Sparkles count={200} scale={10} size={2} speed={0.4} />
        </group>
      </PresentationControls>

      <AccumulativeShadows
        temporal
        frames={100}
        alphaTest={0.85}
        opacity={0.75}
        scale={12}
      >
        <RandomizedLight
          amount={8}
          radius={4}
          ambient={0.5}
          intensity={1}
          position={[2.5, 5, -10]}
        />
      </AccumulativeShadows>

      <Environment preset="sunset" />
    </Canvas>
  );
};
const FloatingSpheres = ({ count = 10 }) => {
  const ref = useRef();
  const positions = [...Array(count)].map(
    () =>
      new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10),
        THREE.MathUtils.randFloatSpread(10)
      )
  );

  useFrame((state) => {
    ref.current.children.forEach((child, i) => {
      child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5;
      child.scale.setScalar(
        Math.sin(state.clock.elapsedTime * 2 + i) * 0.2 + 0.8
      );
    });
  });

  return (
    <group ref={ref}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color={`hsl(${i * 50}, 100%, 75%)`} />
        </mesh>
      ))}
    </group>
  );
};

export default ModelAbout;
