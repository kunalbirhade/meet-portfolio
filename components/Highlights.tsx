"use client";
import ImageStack from "../app/home/imageStack";
import Image from "next/image";

const imageStacks = [
  {
    src: "/highlights/1.png",
    alt: "image-stack-1",
    className:
      "bg-[url(/highlights/1.png)] rotate-[10deg] hover:rotate-0 hover:border-2 hover:border-border-white hover:border-grid",
    classNamePlaceholder: "bg-[url(/highlights/1.png)] ",
  },
  {
    src: "/highlights/2.png",
    alt: "image-stack-2",
    className:
      "bg-[url(/highlights/2.png)] rotate-[-10deg] hover:rotate-0 hover:border-2 hover:border-border-white hover:border-grid",
    classNamePlaceholder: "bg-[url(/highlights/2.png)]",
  },
  {
    src: "/highlights/3.png",
    alt: "image-stack-3",
    className:
      "bg-[url(/highlights/3.png)] rotate-[10deg] hover:rotate-0 hover:border-2 hover:border-border-white hover:border-grid",
    classNamePlaceholder: "bg-[url(/highlights/3.png)]",
  },
  {
    src: "/highlights/4.png",
    alt: "image-stack-4",
    className:
      "bg-[url(/highlights/4.png)] rotate-[-10deg] hover:rotate-0 hover:border-2 hover:border-border-white hover:border-grid",
    classNamePlaceholder: "bg-[url(/highlights/4.png)]",
  },
];

export default function Highlights(props: any) {
  return (
    <div className="relative border-border-custom">
      <div className="flex flex-col sm:py-16 py-8 sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom h-full">
        <div className="flex w-full relative h-full flex-col items-start px-4">
          <span className="font-montserrat text-base text-light-gray">
            Some highlights from the past year
          </span>
          <Image
            unoptimized={true}
            src="/highlights/describe-arrow.png"
            alt="describe-arrow"
            width={70}
            height={70}
          />
        </div>
        <div className="flex sm:w-full relative justify-between sm:h-[400px] h-[1100px] pt-4 flex-col sm:flex-row w-4/5 mx-auto gap-14 sm:gap-0">
          {imageStacks.map((imageStack) => (
            <ImageStack
              key={imageStack.alt}
              className={imageStack.className}
              classNamePlaceholder={imageStack.classNamePlaceholder}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full border-t-[3px] border-border-custom" />
    </div>
  );
}
