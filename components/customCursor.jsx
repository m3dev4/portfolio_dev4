"use client"
import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const innerDotRef = useRef({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [innerDotPos, setInnerDotPos] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const lerp = (start, end, factor) => start * (1 - factor) + end * factor;
      const smoothFactor = 0.15;
      const innerDotFactor = 0.08;

      cursorRef.current.x = lerp(cursorRef.current.x, targetRef.current.x, smoothFactor);
      cursorRef.current.y = lerp(cursorRef.current.y, targetRef.current.y, smoothFactor);
      
      const dx = targetRef.current.x - cursorRef.current.x;
      const dy = targetRef.current.y - cursorRef.current.y;
      const maxOffset = 2;
      
      innerDotRef.current.x = lerp(innerDotRef.current.x, Math.min(Math.max(dx / 2, -maxOffset), maxOffset), innerDotFactor);
      innerDotRef.current.y = lerp(innerDotRef.current.y, Math.min(Math.max(dy / 2, -maxOffset), maxOffset), innerDotFactor);

      setCursorPos({
        x: Math.round(cursorRef.current.x * 100) / 100,
        y: Math.round(cursorRef.current.y * 100) / 100
      });

      setInnerDotPos({
        x: Math.round(innerDotRef.current.x * 100) / 100,
        y: Math.round(innerDotRef.current.y * 100) / 100
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a, .work_categorie');
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div 
        className={`
          relative rounded-full border border-[#f1dada]
          flex items-center justify-center
          transition-all duration-500 ease-out
          ${isHovering ? 'w-32 h-32' : 'w-6 h-6'}
        `}
      >
        {/* Point central animé */}
        <div 
          className={`
            absolute bg-[#f1dada] rounded-full
            transition-opacity duration-300
            ${isHovering ? 'opacity-0' : 'w-1 h-1 opacity-100'}
          `}
          style={{
            transform: `translate(${innerDotPos.x}px, ${innerDotPos.y}px)`,
          }}
        />
        
        {/* Cercle View avec blur */}
        <div 
          className={`
            absolute rounded-full
            flex items-center justify-center
            backdrop-blur-sm bg-[#f1dada]/10
            transition-all duration-500 ease-out
            ${isHovering ? 'w-full h-full opacity-100' : 'w-0 h-0 opacity-0'}
          `}
        >
          <span className="text-[#f1dada] text-sm font-light">
            View
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;