"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CursorStackEntry } from "@/components/cursor/cursorTypes";
import { useReducedMotionMode } from "@/components/common/MotionPreferenceContext";

type CursorCtxValue = {
  push: (entry: CursorStackEntry) => void;
  pop: () => void;
  stack: CursorStackEntry[];
};

const CursorCtx = createContext<CursorCtxValue | null>(null);

export function CursorProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotionMode();
  const [stack, setStack] = useState<CursorStackEntry[]>([]);

  const push = useCallback((entry: CursorStackEntry) => {
    if (reducedMotion) return;
    setStack((s) => [...s, entry]);
  }, [reducedMotion]);

  const pop = useCallback(() => {
    if (reducedMotion) return;
    setStack((s) => s.slice(0, -1));
  }, [reducedMotion]);

  const visibleStack = reducedMotion ? [] : stack;

  const value = useMemo(
    () => ({ push, pop, stack: visibleStack }),
    [pop, push, visibleStack],
  );

  return <CursorCtx.Provider value={value}>{children}</CursorCtx.Provider>;
}

export function useCursorInteraction(): CursorCtxValue {
  const ctx = useContext(CursorCtx);
  if (!ctx) {
    throw new Error("useCursorInteraction requires CursorProvider");
  }
  return ctx;
}

export function useCursorTop(): CursorStackEntry | null {
  const { stack } = useCursorInteraction();
  return stack.length ? stack[stack.length - 1]! : null;
}
