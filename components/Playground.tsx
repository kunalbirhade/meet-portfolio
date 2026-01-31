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
    description: string;
    col: string;
    row: string;
    className: string;
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
          <div className="flex px-4 py-6 mx-16 border-l-[3px] border-r-[3px] border-border-custom text-xl font-montserrat text-light-gray min-h-[200px]">
            This is a selection of cross-disciplinary projects as a explorations
            driven by curiosity and intent. The works in this section emerge
            from experimentation, learning, and reflective thinking, where
            strategy guides making and process becomes a mode of discovery.
          </div>
        </>
      )}
      <hr className="border-border-custom border-b-[3px]" />
      <div className="flex px-4 py-6 mx-16 border-l-[3px] border-r-[3px] border-border-custom">
        <div className="w-full mx-auto grid grid-cols-3 gap-5">
          {projects.map((item) => (
            <div key={item.id} className={` ${item.className}`}>
              <Tile src={item.src} description={item.description} />
            </div>
          ))}
        </div>
      </div>
      {!detailedMode && <hr className="border-border-custom border-t-[3px]" />}
    </div>
  );
}

export default Playground;
