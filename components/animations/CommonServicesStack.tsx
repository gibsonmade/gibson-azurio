"use client";

import {
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type ComponentPropsWithoutRef,
  type MutableRefObject,
  type ReactElement,
  type ReactNode,
  type Ref,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText.js";
import { useReducedMotionMode } from "@/components/common/MotionPreferenceContext";

gsap.registerPlugin(ScrollTrigger, SplitText);

type SplitTextInstance = InstanceType<typeof SplitText>;

export type ServicesStackPart =
  | "card"
  | "wrapper"
  | "subtitle"
  | "title"
  | "descr"
  | "tags"
  | "image";

type ServicesStackContextValue = {
  register: (part: ServicesStackPart, index: number) => (el: HTMLElement | null) => void;
};

const ServicesStackContext = createContext<ServicesStackContextValue | null>(
  null,
);

function mergeRefs<T>(...refs: Array<Ref<T> | undefined>) {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") ref(value);
      else (ref as { current: T | null }).current = value;
    });
  };
}

function withMergedRef(
  children: ReactNode,
  refCb: (el: HTMLElement | null) => void,
): ReactNode {
  if (!isValidElement(children)) return children;
  const el = children as ReactElement<{ ref?: Ref<HTMLElement> }>;
  return cloneElement(el, { ref: mergeRefs(el.props.ref, refCb) });
}

function collectCards(cardRefs: MutableRefObject<Array<HTMLElement | null>>) {
  const cards: HTMLElement[] = [];
  const indices: number[] = [];
  const raw = cardRefs.current;
  for (let i = 0; i < raw.length; i++) {
    const c = raw[i];
    if (c) {
      cards.push(c);
      indices.push(i);
    }
  }
  return { cards, indices };
}

const splitTextVars = {
  type: "words, lines",
  mask: "lines",
  tag: "span",
  linesClass: "line++",
  aria: "none",
} as const;

const titleRevealStart = "top 85%";
const titleRevealViewportRatio = 0.85;

export default function CommonServicesStack({
  children,
  ...rest
}: { children: ReactNode } & ComponentPropsWithoutRef<"div">) {
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const wrapperRefs = useRef<Array<HTMLElement | null>>([]);
  const subtitleRefs = useRef<Array<HTMLElement | null>>([]);
  const titleRefs = useRef<Array<HTMLElement | null>>([]);
  const descrRefs = useRef<Array<HTMLElement | null>>([]);
  const tagsRefs = useRef<Array<HTMLElement | null>>([]);
  const imageRefs = useRef<Array<HTMLElement | null>>([]);
  const reducedMotion = useReducedMotionMode();

  const ctxValue = useMemo<ServicesStackContextValue>(
    () => ({
      register: (part, index) => (el) => {
        switch (part) {
          case "card":
            cardRefs.current[index] = el;
            break;
          case "wrapper":
            wrapperRefs.current[index] = el;
            break;
          case "subtitle":
            subtitleRefs.current[index] = el;
            break;
          case "title":
            titleRefs.current[index] = el;
            break;
          case "descr":
            descrRefs.current[index] = el;
            break;
          case "tags":
            tagsRefs.current[index] = el;
            break;
          case "image":
            imageRefs.current[index] = el;
            break;
        }
      },
    }),
    [],
  );

  useEffect(() => {
    let cancelled = false;
    const cleanups: Array<() => void> = [];
    const titleSplits: SplitTextInstance[] = [];
    const descrSplits: SplitTextInstance[] = [];

    const revertTitleSplits = () => {
      titleSplits.forEach((s) => s.revert());
      titleSplits.length = 0;
    };
    const revertDescrSplits = () => {
      descrSplits.forEach((s) => s.revert());
      descrSplits.length = 0;
    };

    if (reducedMotion) {
      gsap.set(
        [
          ...cardRefs.current,
          ...wrapperRefs.current,
          ...subtitleRefs.current,
          ...titleRefs.current,
          ...descrRefs.current,
          ...tagsRefs.current,
          ...imageRefs.current,
        ].filter(Boolean),
        {
          opacity: 1,
          scale: 1,
          y: 0,
          clearProps: "transform,clipPath,visibility",
        },
      );
      return;
    }

    function animateContentIn(lines: HTMLElement[]) {
      gsap.to(lines, {
        y: "0%",
        duration: 0.75,
        ease: "common",
        stagger: 0.08,
        overwrite: "auto",
      });
    }

    function animateContentInSecond(
      linesDescr: HTMLElement[],
      description: Element,
    ) {
      gsap.to(linesDescr, {
        y: "0%",
        duration: 0.75,
        ease: "common",
        stagger: 0.08,
      });
      gsap.to(description, {
        opacity: 1,
        duration: 0.75,
        ease: "common",
      });
    }

    function animateContentOut(lines: HTMLElement[]) {
      gsap.to(lines, {
        y: "100%",
        duration: 0.5,
        ease: "common",
      });
    }

    /**
     * When the stack is in the title reveal band but `onEnter` never
     * ran (common for `#services` / first paint), lines stay at 100% — this plays `animateContentIn` so
     * the entrance matches the other cards. When a tween is already running or lines are at rest at 0%,
     * it only fixes state on refresh (resize) without re-triggering.
     */
    function syncTitleLineY(
      cardList: HTMLElement[],
      splits: SplitTextInstance[],
    ) {
      if (!cardList.length) return;
      const vh = window.innerHeight;
      const revealY = vh * titleRevealViewportRatio;
      cardList.forEach((card, i) => {
        const lines = splits[i]?.lines;
        if (!lines?.length) return;
        const top = card.getBoundingClientRect().top;
        if (top >= revealY) {
          gsap.set(lines, { y: "100%" });
          return;
        }
        if (gsap.isTweening(lines)) return;
        const yp = Number(
          gsap.getProperty(lines[0] as HTMLElement, "yPercent") ?? 0,
        );
        if (Number.isNaN(yp) || yp > 0.1) {
          animateContentIn(lines);
        } else {
          gsap.set(lines, { y: "0%" });
        }
      });
    }

    function animateContentOutSecond(
      linesDescr: HTMLElement[],
      description: Element,
    ) {
      gsap.to(linesDescr, {
        y: "100%",
        duration: 0.5,
        ease: "common",
      });
      gsap.to(description, {
        opacity: 0,
        duration: 0.3,
        ease: "common",
      });
    }

    const runSetup = () => {
      if (cancelled) return;

      const { cards, indices } = collectCards(cardRefs);
      if (!cards.length) return;

      const lastCard = cards[cards.length - 1];

      for (let index = 0; index < cards.length; index++) {
        const slot = indices[index];
        const title = titleRefs.current[slot];
        if (!title) {
          revertTitleSplits();
          return;
        }
        titleSplits.push(SplitText.create(title, { ...splitTextVars }));
      }

      for (let index = 0; index < cards.length; index++) {
        const slot = indices[index];
        const linesDescrEl = descrRefs.current[slot];
        if (!linesDescrEl) {
          revertDescrSplits();
          revertTitleSplits();
          return;
        }
        descrSplits.push(SplitText.create(linesDescrEl, { ...splitTextVars }));
      }

      /* main.css .line { translateY(100%) } + mask — ensure GSAP inline values apply cleanly (no leftover -webkit-). */
      titleSplits.forEach((split) => {
        const lines = split.lines;
        if (!lines?.length) return;
        lines.forEach((line) => {
          line.style.removeProperty("-webkit-transform");
          line.style.removeProperty("-moz-transform");
          line.style.removeProperty("-ms-transform");
          line.style.removeProperty("transform");
        });
        gsap.set(lines, { y: "100%" });
      });
      descrSplits.forEach((split) => {
        const lines = split.lines;
        if (!lines?.length) return;
        lines.forEach((line) => {
          line.style.removeProperty("-webkit-transform");
          line.style.removeProperty("-moz-transform");
          line.style.removeProperty("-ms-transform");
          line.style.removeProperty("transform");
        });
        gsap.set(lines, { y: "100%" });
      });

      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;
        const pinSt = ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: isLast ? "+=100vh" : "top top",
          endTrigger: isLast ? undefined : lastCard,
          pin: true,
          pinSpacing: isLast,
        });
        cleanups.push(() => pinSt.kill());
      });

      cards.forEach((_, index) => {
        if (index >= cards.length - 1) return;
        const slot = indices[index];
        const wrapper = wrapperRefs.current[slot];
        if (!wrapper) return;
        const st = ScrollTrigger.create({
          trigger: cards[index + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
          onUpdate: (self) => {
            gsap.set(wrapper, {
              scale: 1 - self.progress * 0.15,
              opacity: 1 - self.progress,
            });
          },
        });
        cleanups.push(() => st.kill());
      });

      cards.forEach((card, index) => {
        const slot = indices[index];
        const imageHost = imageRefs.current[slot];
        const img = imageHost?.querySelector("img");
        if (!img) return;
        gsap.set(img, { scale: 1.4 });
        if (imageHost) gsap.set(imageHost, { opacity: 0 });
        const st = ScrollTrigger.create({
          trigger: card,
          start: "top bottom",
          end: "top top",
          scrub: true,
          onUpdate: (self) => {
            gsap.set(img, { scale: 1.4 - self.progress * 0.4 });
          },
        });
        cleanups.push(() => st.kill());
      });

      cards.forEach((card, index) => {
        const slot = indices[index];
        const subtitleEl = subtitleRefs.current[slot];
        const titleSplit = titleSplits[index];
        const descrSplit = descrSplits[index];
        const tagsEl = tagsRefs.current[slot];
        const imageHost = imageRefs.current[slot];

        if (!titleSplit || !descrSplit) return;
        const titleLines = titleSplit.lines;
        const descrLines = descrSplit.lines;
        if (!titleLines.length) return;

        // Initial states
        if (subtitleEl) gsap.set(subtitleEl, { opacity: 0, y: 6 });

        // 1. Subtitle — loads first
        if (subtitleEl) {
          const inSubtitle = ScrollTrigger.create({
            trigger: card,
            start: "top 90%",
            onEnter: () => gsap.to(subtitleEl, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }),
            onLeaveBack: () => {
              if (index === 0) return;
              gsap.set(subtitleEl, { opacity: 0, y: 6 });
            },
          });
          cleanups.push(() => inSubtitle.kill());
        }

        // 2. Title — loads second
        const inTitle = ScrollTrigger.create({
          trigger: card,
          start: titleRevealStart,
          onEnter: () => animateContentIn(titleLines),
          onEnterBack: () => {
            if (index === 0) gsap.set(titleLines, { y: "0%" });
            else animateContentIn(titleLines);
          },
          onLeaveBack: () => {
            if (index === 0) { gsap.set(titleLines, { y: "0%" }); return; }
            animateContentOut(titleLines);
          },
        });
        cleanups.push(() => inTitle.kill());

        // 3. Description — loads third
        const inDescr = ScrollTrigger.create({
          trigger: card,
          start: "top 76%",
          onEnter: () => animateContentIn(descrLines),
          onLeaveBack: () => animateContentOut(descrLines),
        });
        cleanups.push(() => inDescr.kill());

        // 4. Tags/list — loads fourth
        if (tagsEl) {
          const inTags = ScrollTrigger.create({
            trigger: card,
            start: "top 70%",
            onEnter: () => gsap.to(tagsEl, { opacity: 1, duration: 0.6, ease: "power2.out" }),
            onLeaveBack: () => gsap.set(tagsEl, { opacity: 0 }),
          });
          cleanups.push(() => inTags.kill());
        }

        // 5. Image — loads last
        if (imageHost) {
          const inImage = ScrollTrigger.create({
            trigger: card,
            start: "top 60%",
            onEnter: () => gsap.to(imageHost, { opacity: 1, duration: 0.75, ease: "power2.out" }),
            onLeaveBack: () => {
              if (index === 0) return;
              gsap.set(imageHost, { opacity: 0 });
            },
          });
          cleanups.push(() => inImage.kill());
        }
      });

      const onStRefresh = () => {
        if (cancelled) return;
        const { cards: c } = collectCards(cardRefs);
        if (c.length && titleSplits.length) {
          syncTitleLineY(c, titleSplits);
        }
      };
      ScrollTrigger.addEventListener("refresh", onStRefresh);
      cleanups.push(() => {
        ScrollTrigger.removeEventListener("refresh", onStRefresh);
      });
      ScrollTrigger.refresh();
      requestAnimationFrame(() => {
        if (cancelled) return;
        ScrollTrigger.refresh();
      });
    };

    let raf1 = 0;
    let raf2 = 0;
    document.fonts.ready.then(() => {
      if (cancelled) return;
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(runSetup);
      });
    });

    const onLoad = () => {
      if (!cancelled) ScrollTrigger.refresh();
    };
    window.addEventListener("load", onLoad);
    cleanups.push(() => window.removeEventListener("load", onLoad));

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      cleanups.forEach((fn) => fn());
      revertDescrSplits();
      revertTitleSplits();
    };
  }, [reducedMotion]);

  return (
    <ServicesStackContext.Provider value={ctxValue}>
      <div {...rest}>{children}</div>
    </ServicesStackContext.Provider>
  );
}

/** Merges a ref with the services stack for GSAP (one slot per part per card). */
export function ServicesStackSlot({
  part,
  index,
  children,
}: {
  part: ServicesStackPart;
  index: number;
  children: ReactNode;
}) {
  const ctx = useContext(ServicesStackContext);
  if (!ctx) return children;
  return withMergedRef(children, ctx.register(part, index));
}
