"use client";

import { useCallback, useEffect, useState } from "react";
import { safeLocalGet, safeLocalSet } from "@/lib/template/safeStorage";
import TextScramble from "../animations/TextScramble";
import { CloudSun, Moon } from "pixelarticons/react";

const STORAGE_KEY = "template.theme";
type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("color-scheme", theme);
}

type ThemeSwitcherProps = {
  initialTheme: Theme;
  isPermanent?: boolean;
};

export default function ThemeSwitcher({
  initialTheme,
  isPermanent = false,
}: ThemeSwitcherProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  // Sync state once from the value already set by the inline theme script (or localStorage).
  // Intentionally does NOT call applyTheme — the inline script already applied the correct
  // color-scheme before React hydrated, so calling applyTheme("dark") here would undo it.
  useEffect(() => {
    const saved = safeLocalGet(STORAGE_KEY) as Theme | null;
    const resolved = saved === "light" || saved === "dark" ? saved : initialTheme;
    setTheme(resolved);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // applyTheme is only called when the user explicitly toggles — not on initial mount.
  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      safeLocalSet(STORAGE_KEY, next);
      applyTheme(next);
      return next;
    });
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      id="color-switcher"
      className={`btn mxd-color-switcher ${isPermanent ? "permanent" : ""}`}
      type="button"
      role="switch"
      aria-label="light/dark mode"
      aria-checked={isDark}
      onClick={toggle}
    >
      {isDark ? (
        <>
          <TextScramble className="switcher-text">Day</TextScramble>
          <span className="switcher-icon">
            <CloudSun aria-hidden="true" />
          </span>
        </>
      ) : (
        <>
          <TextScramble className="switcher-text">Night</TextScramble>
          <span className="switcher-icon night">
            <Moon aria-hidden="true" />
          </span>
        </>
      )}
    </button>
  );
}
