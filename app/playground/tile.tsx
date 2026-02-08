"use client";
import Image from "next/image";
import React, { useState } from "react";

function Tile({
  isVideo,
  videoOnHover,
  src,
  hoverSrc = "",
  description = "",
  hoverClass = "",
  hoverText = "",
}: {
  isVideo?: boolean;
  videoOnHover?: boolean;
  src: string;
  hoverSrc: string;
  description?: string;
  hoverClass?: string;
  hoverText?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  const getMediaBlock = () => {
    console.log(isVideo, videoOnHover);
    if (isVideo && videoOnHover && isHovered) {
      return (
        <video
          src={isHovered ? hoverSrc : src}
          autoPlay
          loop
          muted
          className="rounded-lg !h-[400px] bg-cover object-cover bg-center transition-all duration-2000 bg-white border-2"
        />
      );
    }
    return (
      <Image
        unoptimized={true}
        src={isHovered ? hoverSrc : src}
        alt="work-1"
        width={500}
        height={500}
        className={`rounded-lg !h-[400px] transition-all ease-in-out bg-cover bg-center duration-900 ${isHovered ? " bg-white border-2 scale-101 transition-all duration-1800 ease-linear" : ""}`}
      />
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-center pt-7"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {getMediaBlock()}
      <div className="flex flex-col items- justify-center px-3 pt-4 min-h-40 transition-transform duration-900">
        {isHovered ? (
          <p className={hoverClass}>{hoverText}</p>
        ) : (
          <p className="text-[var(--color-overlay-text)] font-light font-montserrat text-xl text-center">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Tile;
