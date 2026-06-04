"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "@/components/common/LenisContext";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    const setProgress = (progress: number) => {
      if (barRef.current) {
        const clamped = Math.min(1, Math.max(0, progress));
        barRef.current.style.transform = `scaleX(${0.2 + clamped * 0.8})`;
      }
    };

    if (lenis) {
      // Lenis active: use its scroll event for progress
      const unsub = lenis.on("scroll", () => {
        setProgress(lenis.progress);
      });
      setProgress(lenis.progress);
      return () => unsub();
    }

    // Still mode (no Lenis): native scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lenis]);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" ref={barRef} />
    </div>
  );
}
