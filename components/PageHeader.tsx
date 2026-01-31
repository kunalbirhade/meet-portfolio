import Image from "next/image";

export default function PageHeader({
  title = "Portfolio",
  subtitle = "Meet Panchal",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <hr className="border-border-custom border-b-[3px] w-full" />
      <div className="flex w-full px-16">
        <div className="flex flex-col w-full border-l-[3px] border-r-[3px] border-border-custom relative">
          <span className="absolute top-[-5px] left-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
          <span className="absolute top-[-5px] right-[-5px] w-2 h-2 bg-light-gray rounded-full z-10" />
          <div className="flex items-center justify-between w-full px-4 relative h-36">
            <div className="flex items-center justify-center font-bebasNeue text-6xl text-[#272727] [-webkit-text-stroke:1px_#777B84]">
              {title}
            </div>
            <div className="flex items-center justify-center gap-0 absolute top-0 left-0 right-0 bottom-0">
              <Image
                src="/home/hero-loading.gif"
                alt="hero-loading"
                width={100}
                height={10}
              />
              <Image
                src="/home/hero-loading.gif"
                alt="hero-loading"
                width={100}
                height={10}
              />
              <Image
                src="/home/hero-loading.gif"
                alt="hero-loading"
                width={100}
                height={10}
              />
            </div>
            <div className="flex items-center justify-center font-bebasNeue text-6xl text-[#272727] [-webkit-text-stroke:1px_#777B84]">
              {subtitle}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-border-custom border-b-[3px] w-full" />
    </div>
  );
}
