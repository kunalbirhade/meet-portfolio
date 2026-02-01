import React from "react";
import Tile from "../app/playground/tile";
import playgroundProjects from "../app/playground/playgroundProjects";
import TitleBlock from "./shared/titleBlock";

function Playground({
  detailedMode = false,
  projects = playgroundProjects,
}: {
  detailedMode?: boolean;
  projects?: {
    id: number;
    src: string;
    hoverSrc?: string;
    description: string;
    col: string;
    row: string;
    className: string;
    hoverClass: string;
    hoverText: string;
  }[];
}) {
  return (
    <div className="relative">
      <TitleBlock
        title="Playground"
        subtitle="cross-disciplinary explorations"
        detailedMode={detailedMode}
      />
      {detailedMode && (
        <>
          <hr className="border-border-custom border-b-[3px]" />
          <div className="flex px-4 py-6 mx-16 border-l-[3px] border-r-[3px] border-border-custom text-xl font-montserrat text-light-gray min-h-[200px] relative">
            This is a selection of cross-disciplinary projects as a explorations
            driven by curiosity and intent. The works in this section emerge
            from experimentation, learning, and reflective thinking, where
            strategy guides making and process becomes a mode of discovery.
            <span className="absolute top-[-5px] left-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute top-[-5px] right-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute bottom-[-5px] left-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
            <span className="absolute bottom-[-5px] right-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
          </div>
        </>
      )}
      <hr className="border-border-custom border-b-[3px]" />
      <div className="flex px-4 py-6 mx-16 border-l-[3px] border-r-[3px] border-border-custom">
        <div className="w-full mx-auto grid grid-cols-3 gap-5">
          {projects.map((item) => (
            <div key={item.id} className={` ${item.className}`}>
              <Tile
                src={item.src}
                hoverSrc={item.hoverSrc}
                description={item.description}
                hoverClass={item.hoverClass}
                hoverText={item.hoverText}
              />
            </div>
          ))}
        </div>
      </div>
      {!detailedMode && <hr className="border-border-custom border-t-[3px]" />}
    </div>
  );
}

export default Playground;
