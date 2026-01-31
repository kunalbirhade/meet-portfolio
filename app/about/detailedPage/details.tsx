import React from "react";
import Image from "next/image";
import competenciesList from "./competencies-list";

function PersonalDetails() {
  return (
    <div className="flex py-4 px-10">
      <div className="w-full grid grid-cols-3 gap-10">
        <div className="col-span-2 w-4/5">
          <div className="text-5xl font-bebasNeue py-4 text-[#EEEEEE] w-3/4 border-b border-[#565656]">
            Creative StrategisT | Business Analyst | UX designer
          </div>
          <div className="grid grid-cols-2 items-center justify-center w-full py-8 gap-16">
            <div className="col-span-1">
              <Image
                src="/about/full-page-profile.png"
                alt="Profile"
                width={350}
                height={350}
              />
            </div>
            <div className="col-span-1 font-montserrat text-[#EEEEEE] text-base">
              ‘Creative Strategist and an absolute learner with six years of
              work experience in product roles, digital consulting, strategy
              driven solutions and user-centred design. I develop work flows
              with deep work at the intersection of Business + Technology +
              Design for delivering impactful solutions’
            </div>
          </div>
          <div className="text-4xl font-bebasNeue py-4 text-light-gray w-3/4 border-t border-[#565656]">
            Digital transformation ENTHUSIAST| Project Manager | architect
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <div className="text-4xl font-bebasNeue py-4">Competencies</div>
          <div className="flex flex-wrap justify-start gap-2">
            {competenciesList.map((competency) => (
              <span
                key={competency}
                className="text-base font-montserrat bg-black px-4 py-2 rounded-full text-[#EEEEEE] w-fit"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
