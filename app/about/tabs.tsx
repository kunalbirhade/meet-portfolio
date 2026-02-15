"use client";
import React, { useState } from "react";
import Summary from "./content/summary";
import WorkExperience from "./content/workExperience";
import Education from "./content/education";
import Skills from "./content/skills";

function Tabs() {
  const [activeTab, setActiveTab] = useState("summary");
  const tabs = [
    {
      label: "Summary",
      value: "summary",
      content: <Summary />,
    },
    {
      label: "Work Experience",
      value: "workExperience",
      content: <WorkExperience />,
    },
    {
      label: "Education",
      value: "education",
      content: <Education />,
    },
    {
      label: "Skills",
      value: "skills",
      content: <Skills />,
    },
  ];

  return (
    <div className="flex flex-col gap-4 pt-6 overflow-hidden sm:overflow-y-hidden">
      <div className="gap-4 grid sm:grid-cols-4 grid-cols-1 w-full text-center text-xl pt-7 font-montserrat">
        {tabs.map((tab) => (
          <span
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`cursor-pointer ${
              activeTab === tab.value
                ? "text-[var(--color-text-primary)] font-bold underline"
                : "text-[var(--color-text-primary)] hover:text-[var(--color-text-primary)] hover:font-bold hover:underline transition-all duration-300"
            }`}
          >
            {tab.label}
          </span>
        ))}
      </div>
      <div className="border-border-custom sm:mx-5 mx-2 h-[62rem] min-h-[54rem] overflow-auto">
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
}

export default Tabs;
