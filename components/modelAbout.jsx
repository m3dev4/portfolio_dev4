"use client";
import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  Text,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { easing } from "maath";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { useMemo, useReducer, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

const accents = [
  "#4060ff", "#20ffa0", "#ff4060", "#ffcc00", "#ff7f50", "#32cd32", 
  "#8a2be2", "#00ced1", "#ff6347", "#7fffd4", "#ba55d3", "#ff1493", 
  "#4682b4", "#ffa500", "#00fa9a", "#dc143c", "#f0e68c", "#00bfff", 
  "#9acd32", "#da70d6", "#e9967a", "#00ff7f", "#ff00ff", "#98fb98", 
  "#ff69b4", "#87cefa", "#ff4500", "#6a5acd", "#40e0d0", "#f08080"
];

const shuffle = (accent = 0) => [
  { color: "#444", roughness: 0.1 },
  { color: "#444", roughness: 0.75 },
  { color: "#444", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];

const ModelAbout = (props) => {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);
  const [fontSize, setFontSize] = useState(1.2); // Taille de départ

  // Gestion du responsive en fonction de la largeur de l'écran
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        // Mobile
        setFontSize(0.8); // Taille plus petite pour mobile
      } else if (screenWidth >= 768 && screenWidth < 1200) {
        // Tablettes et petits écrans
        setFontSize(1.0);
      } else {
        // Grand écran
        setFontSize(1.2); // Taille par défaut pour grands écrans
      }
    };

    // Applique l'ajustement lors du premier rendu et à chaque redimensionnement
    window.addEventListener('resize', handleResize);
    handleResize(); // Ajustement initial

    // Cleanup pour éviter les fuites de mémoire
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Canvas
      onClick={click}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
      {...props}
      className=""
    >
      <color attach="background" args={["#141622"]} />
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
       <Text
      position={[0, 0, 0]} // Centré dans la scène
      fontSize={fontSize} // Taille du texte responsive
      color="white" // Couleur de base avant l'effet
      anchorX="center" // Alignement horizontal centré
      anchorY="middle" // Alignement vertical centré
      castShadow
      fontWeight="bold"
    >
      About Myself
      <MeshTransmissionMaterial
        clearcoat={1}
        thickness={0.2}
        ior={1.2}
        transmission={0.5} // Limiter l'effet de verre pour plus de lisibilité
        chromaticAberration={0.02} // Effet d'aberration chromatique réduit
        anisotropicBlur={0.05} // Réduire le flou anisotropique
        distortion={0.02} // Limiter la distorsion
        roughness={0.15} // Un peu de rugosité pour adoucir l'effet miroir
        envMapIntensity={0.8} // Moins d'intensité pour un reflet plus subtil
        color="white" // Couleur du texte après effet
      />
    </Text>
      <Physics gravity={[0, 0, 0]}>
        <Pointer />
        {connectors.map((props, i) => (
          <Connector key={i} {...props} />
        ))}
        <Connector position={[10, 10, 5]}>
          <Model>
            <MeshTransmissionMaterial
              clearcoat={1}
              thickness={0.1}
              anisotropicBlur={0.1}
              chromaticAberration={0.1}
              samples={8}
              resolution={512}
            />
          </Model>
        </Connector>
      </Physics>
      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
      </EffectComposer>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </Canvas>
  );
};

export default ModelAbout;

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  ...props
}) {
  const api = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
    );
  });
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      {children ? children : <Model {...props} />}
      {accent && (
        <pointLight intensity={4} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      )
    );
  });
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

function Model({ children, color = "white", roughness = 0, ...props }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/models/c-transformed.glb");
  useFrame((state, delta) => {
    easing.dampC(ref.current.material.color, color, 0.2, delta);
  });
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={7}
      geometry={nodes.connector.geometry}
    >
      <meshStandardMaterial
        metalness={0.2}
        roughness={roughness}
        map={materials.base.map}
      />
      {children}
    </mesh>
  );
}
