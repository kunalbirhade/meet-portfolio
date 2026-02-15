import React from "react";
import AboutBlock from "../shared/block";
import ImageBlock from "../shared/imageBlock";
import DescribeListBlock from "../shared/describeListBlock";

const contentInfo = [
  {
    logo: "/about/education/msc.png",
    url: "www.htw-berlin.de",
    university: "HTW BERLIN UNIVERSITY",
    location: "BERLIN, GERMANY",
    degree: "M.SC (MASTER OF SCIENCE)",
    duration: "OCT 2023 - SEP 2025",
    field: "CONSTRUCTION AND REAL ESTATE MANAGEMENT",
    content: [
      {
        title: "Master’s Thesis:",
        description:
          "Business Development Strategies for Facilitating widespread Digital Transformation: Reviewing Business Models for SMEs in the European AEC Industry",
        className: ["text-light-gray", ""],
      },
      {
        title: "Courses:",
        points: [
          "European Life Cycle Management",
          "Project Management and German Culture",
          "Project Development",
          "International Business",
          "Real Estate Technology",
          "International Management",
        ],
        className: ["text-light-gray", ""],
      },
    ],
  },
  {
    logo: "/about/education/meng.png",
    url: "www.metropolia.fi",
    university: "METROPOLIO UNIVERSITY",
    location: "HELSINKI, FINLAND",
    degree: "M.ENG (MASTER OF ENGINEERING)",
    duration: "SEP 2022 - AUG 2023",
    field: "CONSTRUCTION AND REAL ESTATE MANAGEMENT",
    content: [
      {
        title: "Courses:",
        points: [
          "Product Modelling",
          "International Working and Cooperation, Research work",
          "International Site Management",
          "Business English",
          "Renovation and Reconstruction",
          "Applied Product Modelling",
          "Advanced MAthematical Methods in Economics and Management",
          "Sustainable Development in Construction and Real-Estate Management",
        ],
        className: ["text-light-gray", ""],
      },
    ],
  },
  {
    logo: "/about/education/barch.png",
    url: "www.cept.ac.in",
    university: "CEPT UNIVERSITY",
    location: "AHMEDABAD, INDIA",
    degree: "B.ARCH (BACHELOR OF ARCHITECTURE)",
    duration: "JUNE 2013 - OCT 2018",
    field: "DESIGN TECHNOLOGY RESEARCH METHODS",
    content: [
      {
        title: "Master’s Thesis:",
        description:
          "Role of Transitional Spaces in Campus Architecture: Investigating interactive spaces in the built environment",
        className: ["text-light-gray", ""],
      },
      {
        title: "Courses:",
        points: [
          "Research Methods",
          "Sustainable Design",
          "Digital Technology",
          "Hypermodern Architecture",
          "Critical Thinking and Argumentation",
          "Deployable Systems",
          "Climate Responsive Design",
        ],
        className: ["text-light-gray", ""],
      },
    ],
  },
];

function Education() {
  return (
    <div className="rounded-current font-source-code text-base">
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 min-h-[54rem]">
        {contentInfo.map((item, index) => (
          <div className="col-span-1 bg-gradient-to-b from-[var(--color-dark-bg)] to-[var(--color-main-bg)] rounded-current gap-4 flex flex-col px-7 pt-5 pb-12">
            <ImageBlock
              image={item.logo}
              description={item.url}
              width={100}
              height={100}
              className="flex-col !items-start"
            />
            <AboutBlock
              title={item.university}
              description={item.location}
              className={["font-medium", "!font-montserrat"]}
            />
            <AboutBlock
              title={item.degree}
              description={item.duration}
              className={[" ", ""]}
            />
            <div className="text-source-code text-base">{item.field}</div>
            {item.content.map((item, index) => (
              <DescribeListBlock key={index} item={item} index={index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
