"use client";

import React, { useRef } from "react";
import Header from "./Header";
import { ScrollProvider } from "./ScrollContext";

export default function LayoutScrollArea({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollProvider scrollRef={scrollRef}>
      <div className="h-full p-4">
        <div
          ref={scrollRef}
          className="h-full w-full bg-theme-main text-theme-text rounded-[30px] overflow-y-auto scroll-smooth border-2 border-theme-text"
        >
          <div className="space-y-4">
            <Header />
          </div>
          <main>{children}</main>
        </div>
      </div>
    </ScrollProvider>
  );
}
