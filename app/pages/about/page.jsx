import StickyScroll from '@/components/stickyScroll'
import React from 'react'

const About = () => {
  return (
   <section>
    <div className='h-screen w-full bg-red-500 flex items-center justify-center'>
      <h1 className='text-indigo-700 font-extrabold text-3xl'>
        content
      </h1>
    </div>
    <div className='relative h-screen w-full'>
      <StickyScroll />
    </div>
   </section>
  )
}

export default About