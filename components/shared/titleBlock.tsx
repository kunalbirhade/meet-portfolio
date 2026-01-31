import React from "react";
import Image from "next/image";

function TitleBlock({
  title,
  subtitle,
  detailedMode = false,
}: {
  title: string;
  subtitle: string;
  detailedMode?: boolean;
}) {
  return (
    <div className="flex py-4 mx-16 border-l-[3px] border-r-[3px] border-border-custom h-full relative">
      <span className="absolute top-[-5px] left-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
      <span className="absolute top-[-5px] right-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
      <span className="absolute bottom-[-5px] left-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
      <span className="absolute bottom-[-5px] right-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
      <div className="flex w-full h-full p-2 flex-col gap-3">
        <div className="flex w-full h-full font-bebasNeue text-5xl">
          {title}
        </div>
        <div className="flex w-full h-full text-[40px] font-bebasNeue text-light-gray">
          {subtitle}
        </div>
        {!detailedMode && (
          <Image
            unoptimized={true}
            src="/projects/explore-button.png"
            alt="explore-work"
            className="pt-4"
            width={50}
            height={50}
          />
        )}
      </div>
    </div>
  );
}

export default TitleBlock;
