import Image from "next/image";
import React from "react";
import workProjects from "../app/work/projectList";
import TitleBlock from "./shared/titleBlock";

function Work({
  projects = workProjects.slice(0, 6),
  detailedMode = false,
}: {
  projects?: {
    id: number;
    src: string;
    col: string;
    row: string;
    className: string;
  }[];
  detailedMode?: boolean;
}) {
  return (
    <div className="relative">
      <TitleBlock
        title="Work"
        subtitle="A selection of recent projects"
        detailedMode={detailedMode}
      />
      {detailedMode && (
        <>
          <hr className="border-border-custom border-b-[3px]" />
          <div className="flex px-4 py-6 mx-16 border-l-[3px] border-r-[3px] border-border-custom text-xl font-montserrat text-light-gray min-h-[200px]">
            A selection of recent professional work informed by strategic
            thinking, where process, context, and execution come together to
            deliver considered outcomes. The work reflects an integrated
            approach that brings together design sensibility, business
            understanding, and technological awareness to navigate complexity,
            align intent with impact, and shape solutions that are both
            thoughtful and effective.
          </div>
        </>
      )}
      <hr className="border-border-custom border-b-[3px]" />
      <div className="flex py-4 mx-16 border-l-[3px] border-r-[3px] border-border-custom">
        {/* <div className=" px-4 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[370px] gap-3"> */}
        <div className=" px-4 w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[421px] gap-3">
          {projects.map((item) => (
            <div key={item.id} className={`${item.col} ${item.row}`}>
              <Image
                src={item.src}
                alt={item.id.toString()}
                className={item.className}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
      {!detailedMode && <hr className="border-border-custom border-t-[3px]" />}
    </div>
  );
}

export default Work;
