"use client";

import Image from "next/image";

export default function HeroSection(props: any) {
  return (
    <div className="mt-16 border-t-[3px] h-[calc(100vh-64px)] border-border-custom">
      <div className="flex flex-col items-center justify-center h-full mx-16 border-l-[3px] border-r-[3px] border-border-custom relative">
        <span className="absolute top-[-6px] left-[-6px] w-2 h-2 bg-light-gray rounded-full" />
        <span className="absolute top-[-6px] right-[-6px] w-2 h-2 bg-light-gray rounded-full" />
        <div className="flex items-center justify-center flex-col gap-4">
          <Image
            unoptimized={true}
            src="/home/profile.png"
            alt="Meet Panchal"
            width={175}
            height={35}
          />
          <h1 className="text-6xl font-bold font-bebasNeue">MEET PANCHAL</h1>
          <div className="flex items-center justify-center max-w-xl text-center font-montserrat">
            <span className="text-base font-inter">
              Creative Strategist | Digital Transformation Enthusiast | Project
              Manager | Business Analyst | UX Designer | Architect
            </span>
          </div>
          <div className="flex items-center flex-col justify-center font-bebasNeue">
            <span className="text-4xl text-[#565656]">
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
        <div className="flex items-center justify-between mx-[-4rem] w-full border-b-[3px] border-t-[3px] border-border-custom px-4 relative h-36">
          <span className="absolute top-[-5px] left-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
          <span className="absolute top-[-5px] right-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
          <span className="absolute bottom-[-5px] left-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
          <span className="absolute bottom-[-5px] right-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
          <div className="flex items-center justify-center font-bebasNeue text-6xl text-[#272727] [-webkit-text-stroke:1px_#777B84]">
            Portfolio
          </div>
          <div className="flex items-center justify-center gap-0 absolute top-0 left-0 right-0 bottom-0">
            <Image
              unoptimized={true}
              src="/home/hero-loading.gif"
              alt="hero-loading"
              width={100}
              height={10}
            />
            <Image
              unoptimized={true}
              src="/home/hero-loading.gif"
              alt="hero-loading"
              width={100}
              height={10}
            />
            <Image
              unoptimized={true}
              src="/home/hero-loading.gif"
              alt="hero-loading"
              width={100}
              height={10}
            />
          </div>
          <div className="flex items-center justify-center font-bebasNeue text-6xl text-[#272727] [-webkit-text-stroke:1px_#777B84]">
            Meet Panchal
          </div>
        </div>
      </div>
    </div>
  );
}
