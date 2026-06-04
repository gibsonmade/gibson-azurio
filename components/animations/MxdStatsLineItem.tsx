"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef, type ReactNode } from "react";
import { useReducedMotionMode } from "@/components/common/MotionPreferenceContext";

type MxdStatsLineItemProps = {
  /** Divider row (scroll trigger), e.g. `mxd-stats-lines__divider divider-top` */
  dividerClassName?: string;
  /** Inner animated block, e.g. `mxd-stats-lines__inner mxd-stats-lines__anim` */
  innerClassName?: string;
  children: ReactNode;
  className?: string;
};

/** Scroll-scrub stats row reveal (mxdStats). */
export default function MxdStatsLineItem({
  dividerClassName = "mxd-stats-lines__divider divider-top",
  innerClassName = "mxd-stats-lines__inner mxd-stats-lines__anim",
  children,
  className,
}: MxdStatsLineItemProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotionMode();

  useLayoutEffect(() => {
    const inner = innerRef.current;
    const divider = dividerRef.current;
    if (!inner || !divider) return;
    if (reducedMotion) {
      gsap.set(inner, { yPercent: 0, clearProps: "transform" });
      return;
    }

    const tween = gsap.fromTo(
      inner,
      { yPercent: -100, ease: "none" },
      {
        yPercent: 0,
        scrollTrigger: {
          trigger: divider,
          start: "top bottom",
          end: "bottom 60%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reducedMotion]);

  return (
    <div
      className={className ? `mxd-stats-lines__item ${className}` : "mxd-stats-lines__item"}
    >
      <div ref={dividerRef} className={dividerClassName} />
      <div ref={innerRef} className={innerClassName}>
        {children}
      </div>
    </div>
  );
}
