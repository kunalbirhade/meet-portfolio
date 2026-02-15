"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "antd/es/typography/Link";

function TitleBlock({
  title,
  subtitle,
  detailedMode = false,
  link = "/work",
}: {
  title: string;
  subtitle: string;
  detailedMode?: boolean;
  link?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex py-4 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom h-full relative">
      <span className="absolute top-[-0.35rem] left-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
      <span className="absolute top-[-0.35rem] right-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
      <span className="absolute bottom-[-0.35rem] left-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
      <span className="absolute bottom-[-0.35rem] right-[-5.5px] w-2 h-2 bg-light-gray rounded-full z-10" />
      <div className="flex w-full h-full p-2 flex-col gap-3">
        <div className="flex w-full h-full font-bebasNeue text-5xl">
          {title}
        </div>
        <div className="flex w-full h-full text-[40px] font-bebasNeue text-light-gray">
          {subtitle}
        </div>
        {!detailedMode && (
          <div
            className="relative h-[52px] max-w-[240px] py-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              unoptimized={true}
              src={"/projects/explore-button.png"}
              alt="explore-work"
              width={50}
              height={50}
              className={`absolute left-0 top-0 transition-all duration-800 ease-out ${
                isHovered
                  ? " opacity-0 translate-x-full rotate-45 pointer-events-none"
                  : "opacity-100 scale-100"
              }`}
            />
            <Link
              href={link}
              className={`absolute left-0 top-0 flex h-[50px] items-center overflow-hidden transition-all duration-800 ease-out ${
                isHovered
                  ? "max-w-[240px] opacity-100"
                  : "max-w-[50px] opacity-0 pointer-events-none"
              }`}
            >
              <span className="flex items-center gap-4 pl-2.5 pr-4 py-[10px] text-base font-medium font-montserrat whitespace-nowrap rounded-full text-theme-text border-2 border-theme-text">
                Click for more
                <Image
                  unoptimized={true}
                  src="/projects/explore-button-hover.png"
                  alt="explore-work"
                  width={30}
                  height={29}
                />
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default TitleBlock;
