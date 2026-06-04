"use client";

import { safeLocalGet, safeLocalSet } from "@/lib/template/safeStorage";

export const MOTION_STORAGE_KEY = "template.motion";

export type MotionPreference = "full" | "reduced";
export type MotionPreferenceSource = "storage" | "system" | "default" | "user";

export function getSystemReducedMotion(): boolean {
  if (typeof window === "undefined" || !("matchMedia" in window)) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getSavedMotionPreference(): MotionPreference | null {
  const saved = safeLocalGet(MOTION_STORAGE_KEY);
  return saved === "full" || saved === "reduced" ? saved : null;
}

export function getInitialMotionPreference(): {
  preference: MotionPreference;
  source: MotionPreferenceSource;
} {
  if (typeof window !== "undefined") {
    const forced = new URLSearchParams(window.location.search).get("motion");
    if (forced === "reduced" || forced === "still") {
      return { preference: "reduced", source: "default" };
    }
    if (forced === "full") {
      return { preference: "full", source: "default" };
    }
  }

  const saved = getSavedMotionPreference();
  if (saved) return { preference: saved, source: "storage" };
  if (getSystemReducedMotion()) {
    return { preference: "reduced", source: "system" };
  }
  return { preference: "full", source: "default" };
}

export function applyMotionPreference(preference: MotionPreference): void {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.motion = preference;
}

export function persistMotionPreference(preference: MotionPreference): void {
  safeLocalSet(MOTION_STORAGE_KEY, preference);
  applyMotionPreference(preference);
}

export function isReducedMotionMode(): boolean {
  if (typeof document !== "undefined") {
    const current = document.documentElement.dataset.motion;
    if (current === "reduced") return true;
    if (current === "full") return false;
  }
  const saved = getSavedMotionPreference();
  if (saved) return saved === "reduced";
  return getSystemReducedMotion();
}
