"use client";;
import { motion } from "motion/react";
import { WorldMap } from "./ui/world-map";

export default function WorldMapDemo() {
  const senegalCoordinates = { lat: 14.4974, lng: -14.4524 }; // Sénégal

  return (
    <div className="py-40 dark:bg-black bg-black w-full">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          className="font-bold text-3xl md:text-5xl dark:text-white text-black mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mon Portfolio International
        </motion.h1>
        <motion.p 
          className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Découvrez mes connexions et expériences à travers le monde, 
          toutes ancrées au cœur du Sénégal.
        </motion.p>
      </div>
      <WorldMap
        dots={[
          {
            start: senegalCoordinates,
            end: { lat: 48.8566, lng: 2.3522 }, // Paris, France
          },
          {
            start: senegalCoordinates,
            end: { lat: 40.7128, lng: -74.0060 }, // New York, USA
          },
          {
            start: senegalCoordinates,
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney, Australie
          },
          {
            start: senegalCoordinates,
            end: { lat: 35.6762, lng: 139.6503 }, // Tokyo, Japon
          },
          {
            start: senegalCoordinates,
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi, Kenya
          },
          {
            start: senegalCoordinates,
            end: { lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro, Brésil
          },
        ]}
        lineColor="#4CAF50" // Couleur verte pour représenter le drapeau sénégalais
      />
    </div>
  );
}

