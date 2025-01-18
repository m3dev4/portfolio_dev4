"use client";
import { Float, useGLTF } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion-3d";
import { useTransform } from "framer-motion";

export default function ModelProject({ mouse }) {
  const [activeShape, setActiveShape] = useState(1);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const groupRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveShape((prevShape) => (prevShape % 11) + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [activeShape]);

  const { nodes } = useGLTF("/models/floating_shapes4.glb");

  const scaleFactor =
    screenSize.width < 768 ? 0.5 : screenSize.width < 1024 ? 0.75 : 1;

  return (
    <group ref={groupRef} scale={[scaleFactor, scaleFactor, scaleFactor]}>
      <Mesh
        node={nodes.Sphere001}
        multiplier={2.4}
        mouse={mouse}
        isActive={activeShape === 1}
        screenSize={screenSize}
      />
      <Mesh
        node={nodes.Sphere002}
        multiplier={2.4}
        mouse={mouse}
        isActive={activeShape === 2}
        screenSize={screenSize}
      />
      <Mesh
        node={nodes.Cylinder002}
        multiplier={1.2}
        mouse={mouse}
        isActive={activeShape === 3}
        screenSize={screenSize}
      />
      <Mesh
        node={nodes.Sphere003}
        multiplier={1}
        mouse={mouse}
        isActive={activeShape === 4}
        screenSize={screenSize}
      />
      <Mesh
        node={nodes.Cylinder003}
        multiplier={1.8}
        mouse={mouse}
        isActive={activeShape === 5}
        screenSize={screenSize}
      />
      <Mesh
        node={nodes.Cylinder005}
        multiplier={1.8}
        mouse={mouse}
        isActive={activeShape === 6}
        screenSize={screenSize}
      />
      <Mesh
        node={nodes.Cube002}
        multiplier={2}
        mouse={mouse}
        isActive={activeShape === 7}
        screenSize={screenSize}
      />
      <Mesh
        node={nodes.Cylinder006}
        multiplier={1.2}
        mouse={mouse}
        isActive={activeShape === 8}
        screenSize={screenSize}
      />
      <Mesh
        node={nodes.Cylinder007}
        multiplier={1.6}
        mouse={mouse}
        isActive={activeShape === 9}
        screenSize={screenSize}
      />
      <Mesh
        node={nodes.Cylinder009}
        multiplier={1.8}
        mouse={mouse}
        isActive={activeShape === 10}
        screenSize={screenSize}
      />
      <Mesh
        node={nodes.Sphere}
        multiplier={1.5}
        mouse={mouse}
        isActive={activeShape === 11}
        screenSize={screenSize}
      />
    </group>
  );
}

useGLTF.preload("/models/floating_shapes4.glb");

function Mesh({ node, multiplier, mouse, isActive, screenSize }) {
  const { geometry, material, position, scale, rotation } = node;
  const responsiveMultiplier =
    screenSize.width < 768
      ? multiplier * 0.5
      : screenSize.width < 1024
      ? multiplier * 0.75
      : multiplier;

  const a = responsiveMultiplier / 2;
  const rotationX = useTransform(
    mouse.x,
    [0, 1],
    [rotation.x - a, rotation.x + a]
  );
  const rotationY = useTransform(
    mouse.y,
    [0, 1],
    [rotation.y - a, rotation.y + a]
  );
  const positionX = useTransform(
    mouse.x,
    [0, 1],
    [
      position.x - responsiveMultiplier * 2,
      position.x + responsiveMultiplier * 2,
    ]
  );
  const positionY = useTransform(
    mouse.y,
    [0, 1],
    [
      position.y + responsiveMultiplier * 2,
      position.y - responsiveMultiplier * 2,
    ]
  );

  const getRandomMultiplier = () => {
    return Math.floor(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1);
  };

  return (
    <Float>
      <motion.mesh
        castShadow={true}
        receiveShadow={true}
        geometry={geometry}
        material={material}
        position={position}
        rotation={rotation}
        scale={scale}
        rotation-y={rotationX}
        rotation-x={rotationY}
        position-x={positionX}
        position-y={positionY}
        animate={{
          rotateZ: isActive ? rotation.z + getRandomMultiplier() : null,
        }}
        transition={{ type: "spring", stiffness: 75, damping: 100, mass: 3 }}
      />
    </Float>
  );
}
