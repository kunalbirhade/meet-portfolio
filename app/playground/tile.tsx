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
    const isShowVideo = isVideo && videoOnHover && isHovered;
    const showImage = !isShowVideo;
    const imageSrc = isHovered ? hoverSrc : src;

    return (
      <div className="relative w-full h-[21rem] rounded-current border-2 overflow-hidden border-border-custom bg-white hover:border-[--color-hover-bg]">
        {isVideo && videoOnHover && (
          <video
            key="hover-video"
            src={hoverSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full transition-opacity object-cover bg-center duration-300 ease-out pointer-events-none ${
              isShowVideo ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        )}
        <Image
          unoptimized={true}
          objectFit="cover"
          src={imageSrc}
          alt="work-1"
          width={500}
          height={500}
          className={`object-cover transition-opacity duration-300 ease-out pointer-events-none !h-full !w-full ${
            showImage ? "opacity-100 z-10" : "opacity-0 z-0"
          } ${isHovered ? "bg-white" : ""}`}
        />
      </div>
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-center pt-7"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full">{getMediaBlock()}</div>
      <div className="flex flex-col items-start justify-start px-3 pt-4 min-h-40 transition-transform">
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
