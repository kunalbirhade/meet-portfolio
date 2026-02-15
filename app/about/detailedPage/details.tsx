import React from "react";
import Image from "next/image";
import competenciesList from "./competencies-list";

function PersonalDetails() {
  return (
    <div className="flex py-4 sm:px-10 px-2">
      <div className="w-full grid sm:grid-cols-3 grid-cols-1 sm:gap-10">
        <div className="col-span-2  sm:w-4/5 w-full">
          <div className="text-5xl font-bebasNeue py-4 text-[var(--color-hover-bg)] sm:w-3/4 w-full border-b border-[var(--color-text-accent)]">
            Creative StrategisT | Business Analyst | UX designer
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center justify-center w-full py-8 gap-16">
            <div className="col-span-1">
              <Image
                unoptimized={true}
                src="/about/full-page-profile.png"
                alt="Profile"
                width={350}
                height={350}
              />
            </div>
            <div className="col-span-1 font-montserrat text-[var(--color-hover-bg)] text-base">
              ‘Creative Strategist and an absolute learner with six years of
              work experience in product roles, digital consulting, strategy
              driven solutions and user-centred design. I develop work flows
              with deep work at the intersection of Business + Technology +
              Design for delivering impactful solutions’
            </div>
          </div>
          <div className="text-4xl font-bebasNeue py-4 text-light-gray sm:w-3/4 w-full border-t border-[var(--color-text-accent)]">
            Digital transformation ENTHUSIAST| Project Manager | architect
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <div className="text-4xl font-bebasNeue py-4">Competencies</div>
          <div className="flex flex-wrap justify-start gap-2">
            {competenciesList.map((competency) => (
              <span
                key={competency}
                className="text-base font-montserrat bg-[var(--color-dark-bg)] px-4 py-2 rounded-full text-[var(--color-hover-bg)] w-fit "
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
