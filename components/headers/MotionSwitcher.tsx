"use client";

import { useCallback } from "react";
import { useMotionPreference } from "@/components/common/MotionPreferenceContext";
import TextScramble from "../animations/TextScramble";
import { HumanArmsUp, HumanArmsDown } from "pixelarticons/react";

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
      <TextScramble className="switcher-text">
        {reducedMotion ? "Dance" : "Still"}
      </TextScramble>
      <span className="switcher-icon" aria-hidden="true" suppressHydrationWarning>
        {reducedMotion ? <HumanArmsDown /> : <HumanArmsUp />}
      </span>
    </button>
  );
}
