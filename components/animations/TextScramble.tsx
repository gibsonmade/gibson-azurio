"use client";

import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotionMode } from "@/components/common/MotionPreferenceContext";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const SPEED_MS = 40;
const STEP = 1 / 4;

type TextScrambleProps = {
  children: string;
  className?: string;
  as?: "span" | "div" | "p";
};

type ScrambleState = {
  source: string;
  value: string;
};

/** Hover scramble effect (mxdTextScramble / `.mxd-scramble`). */
const TextScramble = forwardRef<HTMLElement, TextScrambleProps>(function TextScramble(
  { children, className, as: Tag = "span" },
  ref,
) {
  const baseText = children.trim();
  const reducedMotion = useReducedMotionMode();
  const [scrambledText, setScrambledText] = useState<ScrambleState | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearIntervalSafe = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const onEnter = useCallback(() => {
    if (reducedMotion) return;
    if (intervalRef.current) return;
    const source = baseText;
    let iterations = 0;
    intervalRef.current = setInterval(() => {
      setScrambledText(
        {
          source,
          value: source
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return source[index] ?? letter;
              }
              return ALPHABET[Math.floor(Math.random() * ALPHABET.length)]!;
            })
            .join(""),
        },
      );
      if (iterations >= source.length) {
        clearIntervalSafe();
      }
      iterations += STEP;
    }, SPEED_MS);
  }, [baseText, clearIntervalSafe, reducedMotion]);

  const onLeave = useCallback(() => {
    clearIntervalSafe();
    setScrambledText(null);
  }, [clearIntervalSafe]);
  useEffect(() => clearIntervalSafe, [baseText, clearIntervalSafe]);

  return (
    <Tag
      ref={ref as never}
      className={className}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      suppressHydrationWarning
    >
      {scrambledText?.source === baseText ? scrambledText.value : baseText}
    </Tag>
  );
});

export default TextScramble;

export type { TextScrambleProps };
