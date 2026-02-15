"use client";

import Image from "next/image";
import React, { useState } from "react";
import workProjects from "../app/work/projectList";
import TitleBlock from "./shared/titleBlock";

function Work({
  projects = workProjects.slice(0, 6),
  detailedMode = false,
}: {
  projects?: {
    id: number;
    src: string;
    hoverSrc?: string;
    col: string;
    row: string;
    className: string;
    height?: number;
    width?: number;
    title?: string;
    description?: string[];
    subtitle?: string;
    defaultMedia: "image" | "video" | string;
    hoverMedia: "image" | "video" | string;
    hoverClass: string;
    hoverClassExtra?: string;
    hoverListClass?: string;
  }[];
  detailedMode?: boolean;
}) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const getMediaBlock = (item: {
    id: number;
    src: string;
    hoverSrc?: string;
    defaultMedia: "image" | "video" | string;
    hoverMedia: "image" | "video" | string;
    hoverClass: string;
    hoverClassExtra?: string;
    hoverListClass?: string;
  }) => {
    const isHovered = hoveredId === item.id;
    const mediaToShow = isHovered ? item.hoverMedia : item.defaultMedia;
    const src = isHovered && item.hoverSrc ? item.hoverSrc : item.src;

    if (mediaToShow === "video") {
      return (
        <video
          src={src}
          autoPlay
          loop
          muted
          className="rounded-[18px] !h-full !w-full bg-cover object-cover bg-center transition-all duration-2000 bg-white "
        />
      );
    }
    return (
      <Image
        unoptimized={true}
        src={src}
        alt="work-1"
        width={500}
        height={500}
        className={`rounded-[18px] !h-full !w-full transition-all ease-in-out duration-900 bg-white ${isHovered ? "transition-all duration-1800 ease-linear" : ""}`}
      />
    );
  };

  return (
    <div className="relative">
      <TitleBlock
        title="Work"
        subtitle="A selection of recent projects"
        detailedMode={detailedMode}
        link="/work"
      />
      {detailedMode && (
        <div className="relative">
          <hr className="border-border-custom border-b-[3px]" />
          <div className="flex px-4 py-6 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom text-xl font-montserrat text-light-gray min-h-[200px] relative">
            A selection of recent professional work informed by strategic
            thinking, where process, context, and execution come together to
            deliver considered outcomes. The work reflects an integrated
            approach that brings together design sensibility, business
            understanding, and technological awareness to navigate complexity,
            align intent with impact, and shape solutions that are both
            thoughtful and effective.
            {/* <span className="absolute top-[-5px] left-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute top-[-5px] right-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" /> */}
            <span className="absolute bottom-[-0.35rem] left-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute bottom-[-0.35rem] right-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
          </div>
        </div>
      )}
      <hr className="border-border-custom border-b-[3px]" />
      <div className="flex py-4 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom">
        <div className=" px-1 sm:px-4 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[23vw] sm:gap-3 gap-1">
          {projects.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <div
                key={item.id}
                className={`${item.col} ${item.row} rounded-current relative hover:border-[--color-hover-bg] border-2 border-border-custom`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {getMediaBlock(item)}

                {isHovered && (
                  <div
                    className={`flex flex-col justify-between bg-dark-charcoal px-2 py-4 ${item.hoverClass}`}
                  >
                    <div
                      className={`flex justify-between w-full ${item.hoverClassExtra}`}
                    >
                      <div
                        className={`text-theme-overlay-text text-[1.375em] font-montserrat flex-wrap ${item.hoverClassExtra ? "w-full" : "w-[35%] break-words"}`}
                      >
                        {item.title}
                      </div>
                      <div
                        className={`text-theme-overlay-text text-base font-source-code text-right font-light ${item.hoverClassExtra ? "w-full" : "w-[60%]"}`}
                      >
                        <ul className={`list-none ${item.hoverListClass}`}>
                          {item.description.map((description, index) => (
                            <li
                              className="before:content-['•'] before:mr-1"
                              key={index}
                            >
                              {description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className=" text-light-gray pt-3 font-montserrat text-base font-medium">
                      {item.subtitle}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {!detailedMode && <hr className="border-border-custom border-t-[3px]" />}
    </div>
  );
}

export default Work;
