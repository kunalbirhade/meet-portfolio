import React from "react";
import PersonalDetails from "../app/about/detailedPage/details";
import Tabs from "../app/about/tabs";
import TitleBlock from "./shared/titleBlock";

function AboutDetail() {
  return (
    <div className="relative">
      <TitleBlock
        title="About"
        subtitle="Curriculum Vitae"
        detailedMode={true}
        link="/about"
      />
      <hr className="border-border-custom border-b-[3px]" />
      <div className="flex flex-col sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom py-8">
        <PersonalDetails />
        <hr className="border-border-custom border-b-[3px] sm:hidden block" />
        <Tabs />
      </div>
    </div>
  );
}

export default AboutDetail;
