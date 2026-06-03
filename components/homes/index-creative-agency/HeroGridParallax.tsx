"use client";

import { useEffect } from "react";

const MAX_OFFSET = 6;

export default function HeroGridParallax() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".mxd-hero-special");
    const canAnimate = window.matchMedia(
      "(min-width: 1200px) and (pointer: fine)",
    );
    if (!hero || !canAnimate.matches) return;

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const setOffset = () => {
      hero.style.setProperty("--gibson-hero-grid-x", `${nextX}px`);
      hero.style.setProperty("--gibson-hero-grid-y", `${nextY}px`);
      frame = 0;
    };

    const queueOffset = (x: number, y: number) => {
      nextX = x;
      nextY = y;
      if (!frame) frame = window.requestAnimationFrame(setOffset);
    };

    const handleMove = (event: PointerEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      queueOffset(x * MAX_OFFSET, y * MAX_OFFSET);
    };

    const handleLeave = () => queueOffset(0, 0);

    hero.addEventListener("pointermove", handleMove);
    hero.addEventListener("pointerleave", handleLeave);

    return () => {
      hero.removeEventListener("pointermove", handleMove);
      hero.removeEventListener("pointerleave", handleLeave);
      if (frame) window.cancelAnimationFrame(frame);
      hero.style.removeProperty("--gibson-hero-grid-x");
      hero.style.removeProperty("--gibson-hero-grid-y");
    };
  }, []);

  return null;
}
