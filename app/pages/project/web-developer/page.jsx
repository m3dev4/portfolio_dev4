import React from 'react'
import './wb.css'
import Link from "next/link";
import Header from '../../../../components/header/header';
import localFont from 'next/font/local';
import Image from 'next/image';

const mangoGrotes = localFont({
  src: "../../../fonts/MangoGrotesque-Regular.ttf"
})
const ppNueve = localFont({
  src: "../../../fonts/NeueMontreal-Light.otf"
})

const Webdeveloper = () => {
  return (
    <main className="bg-[#0e090d] w-full h-full min-h-screen">
      <header className="fixed left-0 z-50 top-0">
        <div className="flex my-auto space-between items-center max-w-28 mx-auto ctn hder">
          <Link href="/">
          <span className={`title-link uppercase pointer-events-auto text-nowrap overflow-hidden block relative ${mangoGrotes.className}`}>M.Lo</span>
          </Link>         
        </div>
        <Header />
      </header>
      <section className='overflow-hidden relative flex flex-col items-center justify-center h-screen min-h-10 ctn hero'>
        <div className='self-end flex h-full max-w-[50vw] items-center justify-center pointer-events-none z-20 right-0 img_hero'>
          <Image
            src="/pattern/webdev.png"
            alt='wbe dev'
            width={700}
            height={700}
            className="object-cover img-hero h-auto select-none w-full pointer-events-none"
          />
        </div>
        <div className="overflow-hidden absolute mt-4 is-title">
          <div className="overflow-visible flex flex-col">
            <div className="work-row">
              <div className="text-center absolute flex flex-row items-center justify-center work-inner"> 
                <h1 className={`${mangoGrotes.className} whitespace-nowrap work_inner-text`}>Web Development</h1>
                  <span className='work-separator'></span>
                  <h1 className={`${mangoGrotes.className} whitespace-nowrap work_inner-text`}>Web Development</h1>
                  <span className='work-separator'></span>
                  <h1 className={`${mangoGrotes.className} whitespace-nowrap work_inner-text`}>Web Development</h1>
                  <span className='work-separator'></span>
              </div>
              <div className="text-center relative flex flex-row items-center justify-center work-inner"> 
                <h1 className={`${mangoGrotes.className} whitespace-nowrap work_inner-text`}>Web Development</h1>
                  <span className='work-separator'></span>
                  <h1 className={`${mangoGrotes.className} whitespace-nowrap work_inner-text`}>Web Development</h1>
                  <span className='work-separator'></span>
                  <h1 className={`${mangoGrotes.className} whitespace-nowrap work_inner-text`}>Web Development</h1>
                  <span className='work-separator'></span>
              </div>
            </div>
          </div>
          <div className="flex justify-start w-full">
            <ul className="p-0 flex gap-4 flex-wrap text-[#f1dada] px-16">
              <li className={`whitespace-nowrap flex items-center gap-4 text-[28px] ${ppNueve.className} `}>
                Frontend Development
              </li>
              <li className={`whitespace-nowrap flex items-center gap-4 text-[28px] ${ppNueve.className} `}>
                Backend Development
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Webdeveloper