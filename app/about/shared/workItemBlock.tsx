import React from "react";

function WorkItemBlock({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="text-base font-montserrat border-light-gray border-b-2 w-fit">
        {title}
      </div>
      <div className="text-base font-source-code text-light-gray">
        {description}
      </div>
    </div>
  );
}

export default WorkItemBlock;
