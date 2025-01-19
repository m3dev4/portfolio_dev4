"use client";
import { useEffect } from 'react';

const ResourcePreloader = () => {
  useEffect(() => {
    // Précharger les polices
 
    
    fonts.forEach(font => {
      new FontFace('PreloadFont', `url(${font})`).load();
    });

    // Précharger les images
    const images = [
      "/pattern/webdev.png",
      "/pattern/design.png",
      "/pattern/mobileapp.png"
    ];

    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null;
};

export default ResourcePreloader; 