import React from "react";

function ImageStack(props: any) {
  return (
    <div className={`image-stack w-[15%] relative`}>
      <div className="image-stack-img bg-[url('/highlights/image-stack-2.png')] bg-cover bg-center transition-all duration-300"></div>
      <div className="image-placeholder rounded-xl border-border-custom border-[3px] border-dashed shadow-md bg-[url('/highlights/image-stack-2.png')] filter"></div>
    </div>
  );
}

export default ImageStack;
