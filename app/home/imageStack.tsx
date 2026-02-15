import React from "react";

function ImageStack(props: any) {
  const { className } = props;

  return (
    <div
      className={`image-stack sm:w-[20%] w-full relative sm:h-[400px] h-[1100px]`}
    >
      <div
        className={`image-stack-img ${className} bg-cover bg-center transition-all duration-300`}
      ></div>
      <div className="image-placeholder rounded-current border-border-custom border-[3px] border-dashed shadow-md bg-[#696969]"></div>
    </div>
  );
}

export default ImageStack;
