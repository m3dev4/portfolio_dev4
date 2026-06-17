import React from "react";
import Link from "next/link";
import localFont from "next/font/local";

const mangoGrotesqueMedium = localFont({
  src: "../../fonts/MangoGrotesque-Medium.ttf",
});

const page = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-end">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div
          style={{
            backgroundImage: "url('/images/me.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="w-full h-full opacity-70"
        />
        {/* Subtle gradient overlay to make the bottom card pop more */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>

      {/* Content Card */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 md:mb-10">
        <div className="w-full rounded-[2.5rem] bg-neutral-900/30 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden group transition-all duration-700">
          <div className="flex flex-col md:flex-row items-center justify-center min-h-[350px] md:h-[450px] p-8 md:p-12 relative">
            {/* Say Hello Section */}
            <div className="flex-1 flex items-center justify-center w-full">
              <a
                href="mailto:mouhamedlo948@gmail.com"
                className="group/hello flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-500 ease-out"
              >
                <span
                  className={`${mangoGrotesqueMedium.className} text-7xl sm:text-8xl md:text-[10rem] lg:text-[13rem] xl:text-[15rem] text-white tracking-widest drop-shadow-2xl transition-all duration-300 group-hover/hello:text-neutral-300 leading-none`}
                >
                  Say Hello
                </span>
                <span className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] ml-4 md:ml-8 transition-transform duration-300 group-hover/hello:animate-bounce">
                  👋
                </span>
              </a>
            </div>

            {/* Links Section */}
            <div className="w-full mt-10 md:mt-0 md:absolute md:bottom-8 md:right-10 flex flex-col items-center md:items-end gap-4 z-20">
              {/* Navigation */}
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm uppercase tracking-widest text-neutral-300 font-medium">
                <Link
                  href="/"
                  className="hover:text-white hover:underline underline-offset-4 decoration-white/30 transition-all duration-300"
                >
                  Accueil
                </Link>
                <Link
                  href="/about"
                  className="hover:text-white hover:underline underline-offset-4 decoration-white/30 transition-all duration-300"
                >
                  About
                </Link>
                <Link
                  href="/project"
                  className="hover:text-white hover:underline underline-offset-4 decoration-white/30 transition-all duration-300"
                >
                  Project
                </Link>
              </div>

              {/* Socials */}
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm tracking-widest mt-2 md:mt-0">
                <Link
                  href=""
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:scale-105 transition-transform duration-300"
                >
                  Instagram
                </Link>
                <Link
                  href=""
                  className="font-bold text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  X
                </Link>
                <Link
                  href=""
                  className="font-bold text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  Github
                </Link>
                <Link
                  href=""
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 transition-transform duration-300"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
