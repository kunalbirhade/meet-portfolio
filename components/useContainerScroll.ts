"use client";

import { useEffect } from "react";
import { useMotionValue } from "framer-motion";
import type { RefObject } from "react";

/**
 * Returns a motion value (0–1) that tracks scroll progress of a custom scroll container.
 * Use this when useScroll({ container }) doesn't work (e.g. ref not ready on first paint).
 */
export function useContainerScrollProgress(
  containerRef: RefObject<HTMLDivElement | null> | null,
) {
  const progress = useMotionValue(0);

  useEffect(() => {
    const el = containerRef?.current;
    if (!el) return;

    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const maxScroll = scrollHeight - clientHeight;
      progress.set(maxScroll <= 0 ? 0 : scrollTop / maxScroll);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [containerRef, progress]);

  return progress;
}
