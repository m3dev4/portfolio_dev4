"use client"
import React, { useEffect } from 'react'
import Lenis from 'lenis';

const Footer = () => {
    useEffect( () => {

        const lenis = new Lenis()
    
    
    
        function raf(time) {
    
          lenis.raf(time)
    
          requestAnimationFrame(raf)
    
        }
    
    
    
        requestAnimationFrame(raf)
    
      }, [])
  return (
    <div 

    className='relative bg-blue-500 h-[200px]'

    style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}

  >

    <div className='fixed bottom-0 h-[200px] w-full'>

    </div>
    hey content
  </div>
  )
}

export default Footer