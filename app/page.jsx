"use client"
import { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";


const Home = () => {

  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const elements = document.querySelectorAll('.grid-item');

    elements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        // Animation fluide de l'arrière-plan et du texte
        gsap.to(element.querySelector('.grid-item__bg'), {
          scale: 1.05,
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          duration: 0.5,
          ease: "power2.out"
        });

        gsap.to(element.querySelector('.grid-item__bg h1'), {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });

        gsap.to(element.querySelector('.text-reg'), {
          opacity: 0.5, // Texte un peu plus transparent
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      element.addEventListener('mouseleave', () => {
        // Réinitialisation de l'arrière-plan et du texte
        gsap.to(element.querySelector('.grid-item__bg'), {
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.14)",
          duration: 0.5,
          ease: "power2.in"
        });

        gsap.to(element.querySelector('.grid-item__bg h1'), {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        });

        gsap.to(element.querySelector('.text-reg'), {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.in"
        });
      });
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      ".grid-item",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out", stagger: 0.3 }
    );
  }, []);

  return (
    <main className="block">
      <section className="justify-center items-center max:w-full flex h-screen w-[100vw] bg-black">
        <div className="grid-section">
          <div className="grid-item col-span-2 about">
            <Link href="/pages/about">
              <div className="clip-reg">
                <div className="text-reg">
                  <p className="inline-block text-white splt" text-split="true">
                    About me
                  </p>
                </div>
              </div>
              <div className="grid-item__bg is--about">
                <h1>About Me</h1>
              </div>
            </Link>
          </div>
          <div className="grid-item col-span-3 work">
            <Link href="/pages/project" className="col-span-1">
              <div className="clip-reg">
                <div text-split className="text-reg">
                  <span className="inline-block text-white">
                    Work
                  </span>
                </div>
              </div>
              <div className="grid-item__bg is--work">
                <h1>Work</h1>
              </div>
            </Link>
          </div>
          <div className="grid-item col-span-2 contact">
            <Link href="/pages/contact">
              <div className="clip-reg">
                <div text-split className="text-reg">
                  <span className="inline-block text-white">
                    Contact
                  </span>
                </div>
              </div>
              <div className="grid-item__bg is--contact">
                <h1>Contact</h1>
              </div>
            </Link>
          </div>
          <div className="grid-item max-sm:col-span-3">
            <div className="clip-reg">
              <div text-split className="text-reg">
                <span className="inline-block text-white">
                  Location 🇸🇳
                </span>
              </div>
            </div>
            <div className="grid-item__bg is--sn">
              <h1>Senegal</h1>
            </div>
            <span className="absolute top-4 text-neutral-200 font-semibold text-[20px]">
                {localTime}
              </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
