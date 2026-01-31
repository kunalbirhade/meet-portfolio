import React from "react";
import Image from "next/image";

function ImageBlock({
  description,
  image,
  width = 50,
  height = 50,
  className = "",
}: {
  description: string;
  image: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        unoptimized={true}
        src={image}
        alt="image"
        width={width}
        height={height}
        className="object-cover"
      />
      <div className="text-base font-source-code text-light-gray underline break-all">
        {description}
      </div>
    </div>
  );
}

export default ImageBlock;
