import React from "react";
import Tabs from "../app/about/tabs";
import TitleBlock from "./shared/titleBlock";

function About() {
  return (
    <div className="relative">
      <TitleBlock
        title="About"
        subtitle="Curriculum Vitae"
        detailedMode={false}
        link="/about"
      />
      <hr className="border-border-custom border-b-[3px]" />
      <div className="flex sm:mx-16 mx-4 border-l-[3px] border-r-[3px] border-border-custom">
        <Tabs />
      </div>
    </div>
  );
}

export default About;
