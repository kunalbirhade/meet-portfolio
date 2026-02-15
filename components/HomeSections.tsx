"use client";

import React from "react";
import { motion, useTransform } from "framer-motion";
import HeroSection from "./HeroSection";
import Highlights from "./Highlights";
import Work from "./Work";
import Playground from "./Playground";
import About from "./About";
import ContactUs from "./ContactUs";
import { useScrollContainer } from "./ScrollContext";
import { useContainerScrollProgress } from "./useContainerScroll";
export default function HomeSections({
  playgroundProjects = [],
}: {
  playgroundProjects?: Parameters<typeof Playground>[0]["projects"];
}) {
  const scrollRef = useScrollContainer();
  const scrollYProgress = useContainerScrollProgress(scrollRef);

  const workY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    [0, -12, -20, 0],
  );
  const playgroundY = useTransform(
    scrollYProgress,
    [0.15, 0.4, 0.65, 1],
    [0, -18, -25, 0],
  );
  const aboutY = useTransform(
    scrollYProgress,
    [0.3, 0.55, 0.8, 1],
    [0, -15, -22, 0],
  );

  return (
    <>
      <HeroSection />
      <Highlights />
      <motion.div>
        <Work />
      </motion.div>
      <motion.div>
        <Playground projects={playgroundProjects.slice(0, 6)} />
      </motion.div>
      <motion.div>
        <About />
      </motion.div>
      <ContactUs />
    </>
  );
}
