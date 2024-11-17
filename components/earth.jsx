'use client';
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { motion } from 'framer-motion-3d';

const Scene = ({ scrollYProgress }) => {
  const { viewport } = useThree();
  // Calculer l'échelle en fonction de la largeur du viewport
  const scale = viewport.width < 768 ? 1.5 : 2.5;

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    '/icons/color.jpg',
    '/icons/normal.png',
    '/icons/occlusion.jpg'
  ]);

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
      <motion.mesh scale={scale} rotation-y={scrollYProgress}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          map={color} 
          normalMap={normal} 
          aoMap={aoMap} 
        />
      </motion.mesh>
    </>
  );
};

const Earth = () => {
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Canvas ref={scene} camera={{ position: [0, 0, 4] }}>
        <Scene scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
};

export default Earth;