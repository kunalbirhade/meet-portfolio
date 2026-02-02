import React from "react";

function ImageStack(props: any) {
  const { className } = props;

  return (
    <div className={`image-stack w-[20%] relative`}>
      <div
        className={`image-stack-img ${className} bg-cover bg-center transition-all duration-300`}
      ></div>
      <div className="image-placeholder rounded-xl border-border-custom border-[3px] border-dashed shadow-md bg-[#696969]"></div>
    </div>
  );
}

export default ImageStack;
