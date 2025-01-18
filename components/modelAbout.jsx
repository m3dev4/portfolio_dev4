"use client";
import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  Text,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
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

function ResponsiveCamera({ children }) {
  const { size } = useThree();
  const [cameraSettings, setCameraSettings] = useState({
    position: [0, 0, 15],
    fov: 17.5,
  });

  useEffect(() => {
    const updateCamera = () => {
      if (size.width < 768) {
        setCameraSettings({ position: [0, 0, 20], fov: 22 });
      } else if (size.width < 1200) {
        setCameraSettings({ position: [0, 0, 18], fov: 20 });
      } else {
        setCameraSettings({ position: [0, 0, 15], fov: 17.5 });
      }
    };

    updateCamera();
    window.addEventListener('resize', updateCamera);
    return () => window.removeEventListener('resize', updateCamera);
  }, [size]);

  useThree(({ camera }) => {
    camera.position.set(...cameraSettings.position);
    camera.fov = cameraSettings.fov;
    camera.updateProjectionMatrix();
  });

  return children;
}

const ModelAbout = (props) => {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);
  const [fontSize, setFontSize] = useState(1.2);
  const [modelScale, setModelScale] = useState(7);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setFontSize(0.6);
        setModelScale(5);
      } else if (screenWidth < 1200) {
        setFontSize(0.8);
        setModelScale(6);
      } else {
        setFontSize(1.2);
        setModelScale(7);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas
      onClick={click}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ near: 1, far: 20 }}
      {...props}
    >
      <ResponsiveCamera>
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
          position={[0, 0, 0]}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          castShadow
          fontWeight="bold"
        >
          About Myself
          <MeshTransmissionMaterial
            clearcoat={1}
            thickness={0.2}
            ior={1.2}
            transmission={0.5}
            chromaticAberration={0.02}
            anisotropicBlur={0.05}
            distortion={0.02}
            roughness={0.15}
            envMapIntensity={0.8}
            color="white"
          />
        </Text>
        <Physics gravity={[0, 0, 0]}>
          <Pointer />
          {connectors.map((props, i) => (
            <Connector key={i} {...props} scale={modelScale} />
          ))}
          <Connector position={[10, 10, 5]} scale={modelScale}>
            <Model scale={modelScale}>
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
      </ResponsiveCamera>
    </Canvas>
  );
};

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
  const pos = useMemo(() => position || [r(10), r(10), r(10)], [position]);
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
      <CuboidCollider args={[0.38 * scale / 7, 1.27 * scale / 7, 0.38 * scale / 7]} />
      <CuboidCollider args={[1.27 * scale / 7, 0.38 * scale / 7, 0.38 * scale / 7]} />
      <CuboidCollider args={[0.38 * scale / 7, 0.38 * scale / 7, 1.27 * scale / 7]} />
      {children ? children : <Model {...props} scale={scale} />}
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

function Model({ children, color = "white", roughness = 0, scale, ...props }) {
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
      scale={scale}
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

export default ModelAbout;