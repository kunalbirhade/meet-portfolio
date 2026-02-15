import Image from "next/image";
import React from "react";

function Summary() {
  return (
    <div className="bg-gradient-to-b from-[var(--color-dark-bg)] to-[var(--color-main-bg)]  sm:px-16 px-4 sm:py-20 py-5 rounded-current font-source-code text-base">
      <div className="grid sm:grid-cols-5 grid-cols-1 gap-4 min-h-[35rem]">
        <p className="col-span-4 sm:pr-12 pr-0 text-left sm:whitespace-break-spaces text-ellipsis overflow-hidden min-h-20 whitespace-nowrap">
          For nearly a decade, I’ve worked with people across academia,
          corporate environments, startups, and freelance settings. This
          exposure has shaped how I approach management consulting: building
          practical, cross-industry partnerships and helping organizations make
          better decisions. <br /> <br /> My work is rooted in strategic
          thinking and problem-solving. What began as an interest in how
          strategy influences outcomes has developed into a structured practice
          focused on analysis, clarity, and execution. I spend time
          understanding how teams actually operate, how users behave, and what
          businesses need to function effectively—so solutions are realistic,
          not theoretical. <br /> <br /> I combine research and analysis with
          clear communication and strong visual thinking. I help teams frame
          problems, evaluate options, align priorities through workshops, and
          test ideas early so decisions are informed by evidence rather than
          assumptions. Working closely with founders, product teams, and
          operational leaders has taught me how to navigate ambiguity and
          translate it into actionable roadmaps.
          <br />
          <br /> I’m less concerned with labels like strategy, design, or
          technology, and more focused on outcomes: better processes, aligned
          teams, and solutions that hold up in real-world conditions. If this
          approach resonates with you.
          <br />
          <br />
          Let’s connect.
          <br />
          <br />
        </p>
        <div className="flex gap-4 flex-col col-span-1">
          <span>ARTS </span>
          <span>+</span>
          <span>DESIGN</span>
          <span>+</span>
          <span>BUSINESS</span>
          <span>+</span>
          <span>PSYCHOLOGY</span>
          <span>+</span>
          <span>TECHNOLOGY</span>
        </div>
      </div>
      <div className="relative flex items-center w-full space-x-4 sm:flex-row flex-col">
        <Image
          unoptimized={true}
          src="/about/toon-1.png"
          alt="Summary"
          width={190}
          height={200}
        />
        <div className="flex flex-col">
          <span className="text-2xl font-bold">INTJ- ARCHITECT</span>
          <span className="font-bold border-t">(MBTI PERSONALITY TYPE)</span>
        </div>
        <div className="flex items-center justify-center pl-12">
          <span className="sm:text-8xl text-4xl font-regular bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-hero-stroke)] bg-clip-text text-transparent font-bebasNeue tracking-widest">
            POLYMATH
          </span>
        </div>
        <div className="absolute right-0 bottom-0">
          <Image
            unoptimized={true}
            src="/about/toon-2.png"
            alt="Summary"
            width={650}
            height={580}
          />
        </div>
      </div>
    </div>
  );
}

export default Summary;
