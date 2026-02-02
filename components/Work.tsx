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
  }[];
  detailedMode?: boolean;
}) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="relative">
      <TitleBlock
        title="Work"
        subtitle="A selection of recent projects"
        detailedMode={detailedMode}
        link="/work"
      />
      {detailedMode && (
        <>
          <hr className="border-border-custom border-b-[3px]" />
          <div className="flex px-4 py-6 mx-16 border-l-[3px] border-r-[3px] border-border-custom text-xl font-montserrat text-light-gray min-h-[200px] relative">
            A selection of recent professional work informed by strategic
            thinking, where process, context, and execution come together to
            deliver considered outcomes. The work reflects an integrated
            approach that brings together design sensibility, business
            understanding, and technological awareness to navigate complexity,
            align intent with impact, and shape solutions that are both
            thoughtful and effective.
            <span className="absolute top-[-5px] left-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute top-[-5px] right-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute bottom-[-5px] left-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute bottom-[-5px] right-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
          </div>
        </>
      )}
      <hr className="border-border-custom border-b-[3px]" />
      <div className="flex py-4 mx-16 border-l-[3px] border-r-[3px] border-border-custom">
        <div className=" px-4 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[421px] gap-3">
          {projects.map((item) => {
            const isHovered = hoveredId === item.id;
            const src = isHovered ? item.hoverSrc : item.src;
            return (
              <div
                key={item.id}
                className={`${item.col} ${item.row} rounded-xl relative`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Image
                  unoptimized={true}
                  src={src}
                  alt={item.id.toString()}
                  className={`${item.className} rounded-xl `}
                  height={item.height ? item.height : 500}
                  width={item.width ? item.width : 500}
                />
                {isHovered && (
                  <div className="w-full bg-dark-charcoal absolute bottom-0 left-0 px-3 py-4 rounded-b-xl">
                    <div className="flex justify-between">
                      <div className="text-[#EEEEEE] text-[22px] font-montserrat flex-wrap">
                        {item.title}
                      </div>
                      <div className="text-[#EEEEEE] text-base font-source-code text-right w-11/12 font-extralight">
                        <ul className="list-disc list-inside">
                          {item.description.map((description, index) => (
                            <li key={index}>{description}</li>
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
