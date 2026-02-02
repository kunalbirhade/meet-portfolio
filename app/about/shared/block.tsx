import React from "react";
import Image from "next/image";

function AboutBlock({
  title,
  description,
  image,
  className = [],
}: {
  title: string;
  description: string;
  image?: string;
  className?: string[];
}) {
  return (
    <div className="flex flex-col">
      <div className={`text-xl font-montserrat ${className[0]}`}>{title}</div>
      <div
        className={`text-base font-source-code text-light-gray ${className[1]}`}
      >
        {description}
      </div>
      {image && (
        <Image
          unoptimized={true}
          src={image}
          alt={title}
          width={100}
          height={100}
        />
      )}
    </div>
  );
}

export default AboutBlock;
