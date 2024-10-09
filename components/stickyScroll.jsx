"use client"
import Image from 'next/image';
import { useEffect, useRef } from 'react'
import '../app/globals.css'
import { BackgroundBeamsWithCollisionDemo } from './backgroundCollision';
import { GlobeDemo } from './gridGlobe';
import GridComponents from './grid';

const StickyScroll = () => {
    const container = useRef(null);
    const stickyMask = useRef(null);
  
    const initialMaskSize = .6;
    const targetMaskSize = 200;
    const easing = 0.95;
    let easedScrollProgress = 0;
  
    useEffect(() => {
      requestAnimationFrame(animate)
    }, [])
  
    const animate = () => {
      if (stickyMask.current && container.current) {
        const maskSizeProgress = targetMaskSize * getScrollProgress();
        stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
      }
      requestAnimationFrame(animate)
    }
  
    const getScrollProgress = () => {
      if (!stickyMask.current || !container.current) return 0;
      const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress
    }

  return (
    <div className='mt-[-500px]'>
        <div ref={container} className='absolute left-0 w-full h-[300vh]'>
            <div className='stikimask' ref={stickyMask}>
         
                {/* <BackgroundBeamsWithCollisionDemo /> */}
                <GridComponents />
                
            </div>
        </div>
    </div>
  )
}

export default StickyScroll