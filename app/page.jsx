"use client"
import Clock from '@/components/clock/clock'
import Header from '@/components/header/header'
import Hero from '@/components/hero'
import React from 'react'

const Home = () => {
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-black to-slate-950 overflow-x-hidden">
      <div className="flex px-7 py-7 justify-between z-10 relative">
        <h1 className="text-white font-extrabold uppercase poppins bg-gradient-to-r from-gray-300 to-stone-300 bg-clip-text text-transparent">
          M3DEV4
        </h1>
        <Clock />
        <Header />
      </div>
      <Hero />
    </div>
  )
}

export default Home