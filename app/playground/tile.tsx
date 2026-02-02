"use client";
import Image from "next/image";
import React, { useState } from "react";

function Tile(props: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center pt-7"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        unoptimized={true}
        src={isHovered ? props.hoverSrc : props.src}
        alt="work-1"
        width={500}
        height={500}
        className={`rounded-lg !h-[400px] transition-all duration-900 ${isHovered ? " bg-white border-2 hover:scale-105 transition-all duration-300" : ""}`}
      />
      <div className="flex flex-col items- justify-center px-3 pt-4 min-h-40 transition-transform duration-900">
        {isHovered ? (
          <p className={props.hoverClass}>{props.hoverText}</p>
        ) : (
          <p className="text-[#EEEEEE] font-light font-montserrat text-xl text-center">
            {props.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Tile;
