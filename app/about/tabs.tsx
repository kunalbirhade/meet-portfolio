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
      value: "w orkExperience",
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
    <div className="flex flex-col gap-4 pt-6">
      <div className="gap-4 grid grid-cols-4 w-full text-center text-xl pt-7 font-montserrat">
        {tabs.map((tab) => (
          <span
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`cursor-pointer ${
              activeTab === tab.value
                ? "text-white underline"
                : "text-light-gray"
            }`}
          >
            {tab.label}
          </span>
        ))}
      </div>
      <div className="border-border-custom mx-5">
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
}

export default Tabs;
