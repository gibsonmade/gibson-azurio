"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  applyMotionPreference,
  getInitialMotionPreference,
  getSavedMotionPreference,
  getSystemReducedMotion,
  persistMotionPreference,
  type MotionPreferenceSource,
} from "@/lib/template/motionPreference";

type MotionPreferenceContextValue = {
  reducedMotion: boolean;
  setReducedMotion: (next: boolean) => void;
  source: MotionPreferenceSource;
};

const MotionPreferenceContext =
  createContext<MotionPreferenceContextValue | null>(null);

export function MotionPreferenceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const initial = getInitialMotionPreference();
  const [reducedMotion, setReducedMotionState] = useState(
    initial.preference === "reduced",
  );
  const [source, setSource] = useState<MotionPreferenceSource>(initial.source);

  useEffect(() => {
    const current = getInitialMotionPreference();
    setReducedMotionState(current.preference === "reduced");
    setSource(current.source);
    applyMotionPreference(current.preference);

    if (typeof window === "undefined" || !("matchMedia" in window)) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onSystemChange = () => {
      if (getSavedMotionPreference()) return;
      const next = getSystemReducedMotion();
      setReducedMotionState(next);
      setSource(next ? "system" : "default");
      applyMotionPreference(next ? "reduced" : "full");
    };

    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  useEffect(() => {
    applyMotionPreference(reducedMotion ? "reduced" : "full");
  }, [reducedMotion]);

  const setReducedMotion = useCallback((next: boolean) => {
    setReducedMotionState(next);
    setSource("user");
    persistMotionPreference(next ? "reduced" : "full");
  }, []);

  const value = useMemo(
    () => ({ reducedMotion, setReducedMotion, source }),
    [reducedMotion, setReducedMotion, source],
  );

  return (
    <MotionPreferenceContext.Provider value={value}>
      {children}
    </MotionPreferenceContext.Provider>
  );
}

export function useMotionPreference(): MotionPreferenceContextValue {
  const context = useContext(MotionPreferenceContext);
  if (!context) {
    return {
      reducedMotion: false,
      setReducedMotion: () => undefined,
      source: "default",
    };
  }
  return context;
}

export function useReducedMotionMode(): boolean {
  return useMotionPreference().reducedMotion;
}
