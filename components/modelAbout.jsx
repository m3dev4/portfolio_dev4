"use client";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  AccumulativeShadows,
  Center,
  Environment,
  RandomizedLight,
  Text,
  PresentationControls,
  Sparkles,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import Model from "./model"; // Assurez-vous que votre modèle est exporté correctement
import { useRef, useEffect } from "react";

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

      <CameraIntroAnimation /> {/* Appel de l'animation de la caméra */}

      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <group position={[0, -1, 0]} dispose={null}>
          <Model scale={2} rotation={[0, -Math.PI / 4, 0]} />
          <Center position={[0, 2, 0]}> {/* Ajustement de la position Y */}
            <Text
              fontSize={1.5} // Réduction de la taille de la police
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

// Composant pour l'animation d'intro de la caméra
const CameraIntroAnimation = () => {
  const { camera } = useThree();
  const isAnimating = useRef(true);
  const clock = new THREE.Clock(); // Pour contrôler le temps

  // Position et rotation cibles
  const targetPosition = new THREE.Vector3(1, 1, 4);
  const targetRotation = new THREE.Euler(0, Math.PI / 4, 0);
  
  // Durée de l'animation
  const duration = 3; // en secondes

  useEffect(() => {
    camera.position.set(0, 0, 10); // Position de départ
    const animate = () => {
      if (isAnimating.current) {
        const elapsedTime = clock.getElapsedTime();
        const progress = Math.min(elapsedTime / duration, 1); // Valeur entre 0 et 1

        // Interpolation pour la position
        camera.position.lerpVectors(
          new THREE.Vector3(0, 0, 10), // Départ
          targetPosition, // Cible
          progress
        );

        // Interpolation pour la rotation
        camera.rotation.x += (targetRotation.x - camera.rotation.x) * 0.1;
        camera.rotation.y += (targetRotation.y - camera.rotation.y) * 0.1;

        if (progress >= 1) {
          isAnimating.current = false; // Arrêter l'animation une fois terminé
        }
      }
    };

    // Boucle d'animation
    const frame = () => {
      requestAnimationFrame(frame);
      animate();
    };
    frame();

    return () => {
      isAnimating.current = false; // Nettoyage
    };
  }, [camera]);

  return null; // Aucun rendu à afficher
};

export default ModelAbout;
