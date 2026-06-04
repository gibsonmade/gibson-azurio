"use client";

import { useCallback } from "react";
import { useMotionPreference } from "@/components/common/MotionPreferenceContext";

type MotionSwitcherProps = {
  isPermanent?: boolean;
};

export default function MotionSwitcher({
  isPermanent = false,
}: MotionSwitcherProps) {
  const { reducedMotion, setReducedMotion } = useMotionPreference();

  const toggle = useCallback(() => {
    setReducedMotion(!reducedMotion);
  }, [reducedMotion, setReducedMotion]);

  return (
    <button
      className={`btn mxd-color-switcher mxd-motion-switcher ${
        isPermanent ? "permanent" : ""
      }`}
      type="button"
      role="switch"
      aria-label="Reduce site motion"
      aria-checked={reducedMotion}
      onClick={toggle}
      suppressHydrationWarning
    >
      <span className="switcher-text" suppressHydrationWarning>
        {reducedMotion ? "Still" : "Move"}
      </span>
      <span className="switcher-icon" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path d="M2 2h14v14H2V2Zm3 3v8h8V5H5Z" />
        </svg>
      </span>
    </button>
  );
}
