import React from "react";
import AboutBlock from "../shared/block";
import WorkItemBlock from "../shared/workItemBlock";
import ImageBlock from "../shared/imageBlock";

const contentInfo = {
  stackBuilder: (
    <p>
      Acted as a bridge between business, IT and design teams to refine and
      optimize products based on market needs.
      <br /> <br /> Conducted competitor analysis for multiple products across
      domains with necessary insights documentation with clients and internal
      team.
      <br /> <br /> Managed the product vision, roadmap, and backlog expediting,
      transforming complex features into prioritized user stories.
      <br /> <br /> Developed an investor pitch deck and whitepaper, presenting
      progressive demos to stakeholders and investors to showcase product
      progress.
      <br /> <br />
    </p>
  ),
  aasaan: (
    <p>
      Assessed stakeholder needs and recommended customized solutions by
      leveraging both Agile and Waterfall methodologies for optimal project
      outcomes.
      <br /> <br />
      Designed technical workflows, developed comprehensive documentation, and
      visual prototypes to enhance product design and functionality.
      <br /> <br />
    </p>
  ),
  htw: (
    <p>
      Proposals for University: DAAD, IKI Grants, GIANT, Multiple public
      funding's.
      <br /> <br />
      Closely worked with stakeholders and researchers for project realisation
      and collaboration for data gathering and proposal.
      <br /> <br />
    </p>
  ),
  uoh: (
    <p>
      Program management and content curation with wordpress Website development
      for the UNESCO Chair in Vulnerability Studies at University of Hyderabad.
      <br /> <br />
      Catalogue and Proposal with assistance in reapplication for funding and
      operations 2026-2030.
      <br /> <br />
      Lecture series and Relationship management with international community
      for Academic-Industry collaboration.
    </p>
  ),
  ara: (
    <p>
      Internship in architecture and real estate industry, contributing to
      project design and development.
    </p>
  ),
  ini: (
    <p>
      Assessed stakeholder needs and recommended tailored solutions using Agile
      and Waterfall for optimal outcomes. <br /> <br /> Designed workflows,
      documentation, and visual prototypes to improve real estate and
      architectural functionality.
      <br /> <br /> Managed bids with clear acceptance criteria, performed gap
      analyses, and delivered projects to support business development. <br />{" "}
      <br /> Collaborated with developers to align technical and functional
      requirements, provided accurate estimates, and supported marketing
      initiatives. <br /> <br /> <br /> <br />
    </p>
  ),
};

function WorkExperience() {
  return (
    <div className="rounded-current font-source-code text-base">
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-2">
        <div className="col-span-1 bg-gradient-to-b from-[var(--color-dark-bg)] to-[var(--color-main-bg)] rounded-current p-4 gap-4 flex flex-col">
          <AboutBlock
            title="CREATIVE STRATEGIST"
            description="JUN 2023 - PRESENT"
          />
          <AboutBlock
            title="BUSINESS ANALYST"
            description="JAN 2022 - MAY 2023"
          />
          <WorkItemBlock title="STACKBUILDER" description="(REMOTE) INDIA" />
          <ImageBlock
            image="/projects/stackbuilder/logo.png"
            description="www.stackbuilder.in"
          />
          <div className="text-base font-source-code text-light-gray">
            {contentInfo.stackBuilder}
          </div>
        </div>

        <div className="col-span-1 flex flex-col">
          <div className="bg-gradient-to-b from-[var(--color-dark-bg)] to-[var(--color-main-bg)] rounded-current p-4 gap-4 flex flex-col">
            <AboutBlock
              title="PRODUCT RESEARCH"
              description="OCT 2018 - MAR 2019"
            />
            <WorkItemBlock
              title="AASAAN TECH pvt. ltd."
              description="(INTERNSHIP)"
            />
            <ImageBlock
              image="/projects/aasaan/logo.png"
              description="www.aasaan.co"
            />
            <div className="text-base font-source-code text-light-gray">
              {contentInfo.aasaan}
            </div>
          </div>
          <div className="bg-gradient-to-b from-[var(--color-dark-bg)] to-[var(--color-main-bg)] rounded-current p-4 gap-4 flex flex-col">
            <AboutBlock
              title="PROPOSAL MANAGER"
              description="OCT 2024 - MAR 2025"
            />
            <WorkItemBlock title="HTW BERLIN" description="(ASSISTANCE)" />
            <ImageBlock
              image="/projects/htw/logo.png"
              description="www.htw-berlin.de"
            />
            <div className="text-base font-source-code text-light-gray">
              {contentInfo.htw}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col">
          <div className="bg-gradient-to-b from-[var(--color-dark-bg)] to-[var(--color-main-bg)] rounded-current p-4 gap-4 flex flex-col">
            <AboutBlock
              title="PROGRAM ASSISTANT"
              description="DEC 2024- PRESENT"
            />
            <WorkItemBlock
              title="UNESCO CHAIR (UOH)"
              description="(FREELANCE REMOTE) INDIA"
            />
            <ImageBlock
              image="/projects/uoh/logo.png"
              description="ucvulnerabilitystudies.uohyd.ac.in"
            />
            <div className="text-base font-source-code text-light-gray">
              {contentInfo.uoh}
            </div>
          </div>
          <div className="bg-gradient-to-b from-[var(--color-dark-bg)] to-[var(--color-main-bg)] rounded-current p-4 gap-4 flex flex-col">
            <AboutBlock
              title="REAL-ESTATE INTERN"
              description="JUN 2017 - DEC 2017"
            />
            <WorkItemBlock title="AR+A Associates" description="(INTERNSHIP)" />
            <ImageBlock
              image="/projects/ARA/logo.png"
              description="www.ar+aassociates.in"
            />
            <div className="text-base font-source-code text-light-gray">
              {contentInfo.ara}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col">
          <div className="bg-gradient-to-b from-[var(--color-dark-bg)] to-[var(--color-main-bg)] rounded-current p-4 gap-4 flex flex-col">
            <AboutBlock
              title="PROJECT MANAGER"
              description="APR 2020 - JUL 2022"
            />
            <AboutBlock
              title="VISUAL DESIGNER"
              description="APR 2019- MAR 2020"
            />
            <WorkItemBlock
              title="INI DESIGN STUDIO"
              description="IN OFFICE, INDIA"
            />
            <ImageBlock
              image="/projects/ini/logo.png"
              description="inidesignstudio.com"
            />
            <div className="text-base font-source-code text-light-gray">
              {contentInfo.ini}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
