"use client";
import ImageStack from "../app/home/imageStack";
import Image from "next/image";

export default function Highlights(props: any) {
  return (
    <div className="relative border-border-custom">
      <div className="flex flex-col py-16 mx-16 border-l-[3px] border-r-[3px] border-border-custom h-full">
        <div className="flex w-full relative h-full flex-col items-start">
          <span className="font-montserrat text-base text-light-gray">
            Some highlights from the past year
          </span>
          <Image
            src="/highlights/describe-arrow.png"
            alt="describe-arrow"
            width={70}
            height={70}
          />
        </div>
        <div className="flex w-full relative justify-between h-[400px]">
          <ImageStack />
          <ImageStack />
          <ImageStack />
          <ImageStack />
        </div>
      </div>
      <div className="flex w-full border-t-[3px] border-border-custom" />
    </div>
  );
}
