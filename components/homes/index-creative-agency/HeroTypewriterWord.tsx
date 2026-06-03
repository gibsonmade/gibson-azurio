"use client";

import { useEffect, useMemo, useState } from "react";

const heroTypewriterWords = [
  "ideas",
  "websites",
  "prototypes",
  "prototypes",
  "concepts",
  "designs",
  "animations",
  "AI agents",
];

export default function HeroTypewriterWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(
    heroTypewriterWords[0].length,
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const word = heroTypewriterWords[wordIndex];
  const displayWord = word.slice(0, visibleChars);
  const accessibleWords = useMemo(
    () => heroTypewriterWords.filter((item, index) => index !== 3).join(", "),
    [],
  );

  useEffect(() => {
    const isTyped = visibleChars === word.length;
    const isDeleted = visibleChars === 0;
    const delay = isTyped && !isDeleting ? 950 : isDeleting ? 48 : 72;

    const timeout = window.setTimeout(() => {
      if (isTyped && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isDeleted && isDeleting) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % heroTypewriterWords.length);
        return;
      }

      setVisibleChars((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, visibleChars, word.length]);

  return (
    <span className="hero-typewriter" aria-label={accessibleWords}>
      <span className="hero-typewriter__word" aria-hidden="true">
        {displayWord}
      </span>
    </span>
  );
}
