"use client";

import Image from "next/image";
import { useTheme } from "../app/theme/ThemeProvider";

export default function HeroSection(props: any) {
  const { theme } = useTheme();
  const heroBgSrc =
    theme === "dark" ? "/home/dark-bg.png" : "/home/light-bg.png";

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex items-center justify-center flex-col relative w-full">
          <div className="mx-4 sm:mx-16 pt-[70px] relative z-10 flex flex-col items-center justify-center gap-4 text-center sm:text-left  ">
            <Image
              unoptimized={true}
              src="/home/profile.png"
              alt="Meet Panchal"
              width={175}
              height={35}
              className="rounded-full border-2 border-theme-hero-stroke bg-dark-charcoal"
            />
            <h1 className="text-7xl  font-normal font-bebasNeue">
              MEET PANCHAL
            </h1>
            <div className="flex items-center justify-center max-w-xl text-center font-montserrat">
              <span className="text-base font-inter">
                Creative Strategist | Digital Transformation Enthusiast |
                Project Manager | Business Analyst | UX Designer | Architect
              </span>
            </div>
            <div className="flex items-center flex-col justify-center font-bebasNeue">
              <span className="text-4xl text-[var(--color-text-muted)]">
                Business + Design + Technology
              </span>
              <span className="text-4xl ">Portfolio</span>
            </div>
            <div className="flex items-center justify-center">
              <Image
                unoptimized={true}
                src="/home/hero-section.gif"
                alt="hero-section"
                width={100}
                height={10}
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              unoptimized={true}
              src={heroBgSrc}
              alt={theme === "dark" ? "Hero background" : "Hero background"}
              width={1500}
              height={100}
              className="w-full h-full object-fill"
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full border-b-[3px] border-t-[3px] sm:px-16 px-4 border-border-custom relative sm:h-36 h-48">
          <div className="flex border-l-[3px] justify-between px-4 border-border-custom border-r-[3px] w-full sm:h-36 h-48 sm:py-0 py-4 relative flex-col sm:flex-row">
            <span className="absolute top-[-0.2rem] left-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute top-[-0.2rem] right-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute bottom-[-0.2rem] left-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute bottom-[-0.2rem] right-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <div className="flex items-center justify-center font-bebasNeue text-6xl text-[var(--color-border-custom)] [-webkit-text-stroke:1px_var(--color-hero-stroke)]">
              Portfolio
            </div>
            <div className="flex items-center justify-center gap-0 absolute top-0 left-0 right-0 bottom-0">
              <Image
                unoptimized={true}
                src="/home/hero-loading.gif"
                alt="hero-loading"
                width={100}
                height={10}
                className="opacity-50 sm:block hidden"
              />
              <Image
                unoptimized={true}
                src="/home/hero-loading.gif"
                alt="hero-loading"
                width={100}
                height={10}
                className="opacity-50 sm:block hidden"
              />
              <Image
                unoptimized={true}
                src="/home/hero-loading.gif"
                alt="hero-loading"
                width={100}
                height={10}
                className="opacity-50"
              />
            </div>
            <div className="flex items-center justify-center font-bebasNeue text-6xl text-[var(--color-border-custom)] [-webkit-text-stroke:1px_var(--color-hero-stroke)]">
              Meet Panchal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
