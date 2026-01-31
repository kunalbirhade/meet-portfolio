import Image from "next/image";
import React from "react";

function Tile(props: any) {
  return (
    <div className="flex flex-col items-center justify-center pt-7">
      <Image
        src={props.src}
        alt="work-1"
        width={500}
        height={500}
        className="rounded-lg !h-[400px] "
      />
      <div className="flex flex-col items-center justify-center px-5 pt-4">
        <p className="text-[#EEEEEE] font-light font-montserrat text-xl text-center">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Tile;
