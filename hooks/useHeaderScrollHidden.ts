"use client";

import type Lenis from "lenis";
import { useEffect, type RefObject } from "react";

/** Keeps the fixed header visible and marks it once the page has scrolled. */
export function useHeaderScrollHidden(
  headerRef: RefObject<HTMLElement | null>,
  lenis: Lenis | null,
  _disabled = false,
): void {
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    let frame = 0;

    const syncScrollState = () => {
      frame = 0;
      const currentScroll = lenis?.animatedScroll ?? window.scrollY;
      el.classList.remove("is-hidden");
      el.classList.toggle("is-scrolled", currentScroll > 12);
    };

    const requestSync = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(syncScrollState);
    };

    const onLenisScroll = () => requestSync();

    el.classList.remove("is-hidden");
    syncScrollState();

    window.addEventListener("scroll", requestSync, { passive: true });
    lenis?.on("scroll", onLenisScroll);

    return () => {
      window.removeEventListener("scroll", requestSync);
      lenis?.off("scroll", onLenisScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [headerRef, lenis]);
}
