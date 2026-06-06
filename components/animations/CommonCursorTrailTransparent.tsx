"use client";

import { gsap } from "gsap";
import Image, { type ImageProps } from "next/image";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  type Ref,
} from "react";
import { useReducedMotionMode } from "@/components/common/MotionPreferenceContext";
import { CURSOR_TRAIL_TRANSPARENT_DIR } from "@/data/cursorTrailTransparentImages";

const MAX_SIZE = 220;
const MOBILE_MAX_SIZE = 150;
const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, summary, [role="button"], [role="link"], [data-no-tap-trail]';

function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b;
}

function distance(x1: number, y1: number, x2: number, y2: number) {
  return Math.hypot(x2 - x1, y2 - y1);
}

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(target.closest(INTERACTIVE_SELECTOR));
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

type TrailContextValue = {
  registerWrapper: (el: HTMLElement | null) => void;
  registerContent: (el: HTMLElement | null) => void;
  registerImage: (index: number) => (el: HTMLImageElement | null) => void;
  imagesActive: boolean;
};

const TrailContext = createContext<TrailContextValue | null>(null);

function mergeRefs<T>(...refs: Array<Ref<T> | undefined>) {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        ref(value);
        return;
      }
      (ref as { current: T | null }).current = value;
    });
  };
}

type CommonCursorTrailTransparentProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children: ReactNode;
  threshold?: number;
  active?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function CommonCursorTrailTransparent<
  T extends ElementType = "div",
>({
  as,
  className,
  children,
  threshold = 120,
  active = true,
  ...rest
}: CommonCursorTrailTransparentProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const sectionRef = useRef<HTMLElement | null>(null);
  const wrapperRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);
  const imageRefs = useRef<HTMLImageElement[]>([]);
  const reducedMotion = useReducedMotionMode();
  const [imagesActive, setImagesActive] = useState(false);

  const registerWrapper = useMemo(
    () => (el: HTMLElement | null) => {
      wrapperRef.current = el;
    },
    [],
  );

  const registerContent = useMemo(
    () => (el: HTMLElement | null) => {
      contentRef.current = el;
    },
    [],
  );

  const registerImage = useMemo(
    () => (index: number) => (el: HTMLImageElement | null) => {
      if (!el) return;
      imageRefs.current[index] = el;
    },
    [],
  );

  // Phase 1: activate images on first pointer interaction (deferred from initial load)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion || !active) return;
    const activate = () => setImagesActive(true);
    section.addEventListener("pointermove", activate, { once: true });
    section.addEventListener("pointerdown", activate, { once: true });
    return () => {
      section.removeEventListener("pointermove", activate);
      section.removeEventListener("pointerdown", activate);
    };
  }, [active, reducedMotion]);

  // Phase 2: set up animation once images are in the DOM
  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const images = imageRefs.current.filter(Boolean);
    if (!section || !wrapper || !images.length) return;
    if (reducedMotion || !active) {
      gsap.set(images, { opacity: 0, scale: 1, clearProps: "transform" });
      return;
    }

    let rafId = 0;
    let zIndex = 1;
    let currentIndex = 0;
    let prevPos = { x: 0, y: 0 };
    let cachedPos = { x: 0, y: 0 };
    const mousePos = { x: 0, y: 0 };
    let hasPointer = false;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    const handleMove = (ev: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();
      mousePos.x = ev.clientX - rect.left;
      mousePos.y = ev.clientY - rect.top;
      if (!hasPointer) {
        hasPointer = true;
        prevPos = { ...mousePos };
        cachedPos = { ...mousePos };
      }
    };

    const setImageSize = (img: HTMLImageElement) => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      const maxSize = isCoarsePointer
        ? Math.min(MOBILE_MAX_SIZE, Math.max(140, window.innerWidth * 0.42))
        : MAX_SIZE;
      if (w >= h) {
        img.style.width = `${maxSize}px`;
        img.style.height = "auto";
      } else {
        img.style.height = `${maxSize}px`;
        img.style.width = "auto";
      }
    };

    const showNext = (
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      rotation: number,
      fadeStart = 0.55,
      fadeDuration = 0.8,
    ) => {
      const img = images[currentIndex];
      const rect = img.getBoundingClientRect();
      const offsetX = rect.width / 2;
      const offsetY = rect.height / 2;

      gsap.killTweensOf(img);
      gsap
        .timeline()
        .set(img, {
          opacity: 1,
          scale: 1,
          zIndex: zIndex++,
          x: startX - offsetX,
          y: startY - offsetY,
          rotation,
        })
        .to(
          img,
          {
            duration: 1,
            x: endX - offsetX,
            y: endY - offsetY,
            rotation,
            ease: "expo.out",
          },
          0,
        )
        .to(
          img,
          {
            duration: fadeDuration,
            scale: 0,
            ease: "power1.out",
            onComplete: () => {
              gsap.set(img, { scale: 1, opacity: 0 });
            },
          },
          fadeStart,
        );

      currentIndex = (currentIndex + 1) % images.length;
    };

    const showNextFromMove = (dx: number, dy: number) => {
      showNext(
        cachedPos.x,
        cachedPos.y,
        mousePos.x,
        mousePos.y,
        gsap.utils.clamp(-14, 14, -(dx + dy) * 0.3),
      );
    };

    const handleTap = (ev: PointerEvent) => {
      if (isInteractiveTarget(ev.target)) return;
      const rect = wrapper.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      const headline = section.querySelector<HTMLElement>(".mxd-hero-05__headline");
      const headlineRect = headline?.getBoundingClientRect();
      const headlineX = headlineRect
        ? headlineRect.left - rect.left + headlineRect.width / 2
        : rect.width / 2;
      const headlineY = headlineRect
        ? headlineRect.top - rect.top + headlineRect.height / 2
        : rect.height * 0.36;
      const spawnX = headlineRect
        ? clamp(
            headlineX + (x - headlineX) * 0.28 + gsap.utils.random(-34, 34),
            headlineRect.left - rect.left,
            headlineRect.right - rect.left,
          )
        : x;
      const spawnY = headlineRect
        ? clamp(
            headlineY + (y - headlineY) * 0.28 + gsap.utils.random(-24, 24),
            headlineRect.top - rect.top,
            headlineRect.bottom - rect.top,
          )
        : y;
      const driftX = gsap.utils.random(-14, 14);
      const driftY = gsap.utils.random(-14, 14);

      showNext(
        spawnX - driftX * 0.35,
        spawnY - driftY * 0.35,
        spawnX + driftX,
        spawnY + driftY,
        gsap.utils.random(-14, 14),
        1.08,
        1.05,
      );

      if (!images.some((img) => gsap.getTweensOf(img).length > 0)) {
        zIndex = 1;
      }
    };

    const update = () => {
      if (!hasPointer) {
        rafId = window.requestAnimationFrame(update);
        return;
      }
      const dx = mousePos.x - prevPos.x;
      const dy = mousePos.y - prevPos.y;
      const dist = distance(mousePos.x, mousePos.y, prevPos.x, prevPos.y);

      cachedPos.x = lerp(cachedPos.x, mousePos.x, 0.14);
      cachedPos.y = lerp(cachedPos.y, mousePos.y, 0.14);

      if (dist > threshold) {
        showNextFromMove(dx, dy);
        prevPos = { ...mousePos };
      }

      if (!images.some((img) => gsap.getTweensOf(img).length > 0)) {
        zIndex = 1;
      }

      rafId = window.requestAnimationFrame(update);
    };

    images.forEach(setImageSize);
    if (isCoarsePointer) {
      section.addEventListener("pointerdown", handleTap);
    } else {
      section.addEventListener("pointermove", handleMove);
      rafId = window.requestAnimationFrame(update);
    }

    return () => {
      section.removeEventListener("pointermove", handleMove);
      section.removeEventListener("pointerdown", handleTap);
      if (rafId) window.cancelAnimationFrame(rafId);
      images.forEach((img) => gsap.killTweensOf(img));
    };
  }, [active, imagesActive, reducedMotion, threshold]);

  return (
    <TrailContext.Provider
      value={{ registerWrapper, registerContent, registerImage, imagesActive }}
    >
      <Tag className={className} {...rest} ref={sectionRef}>
        {children}
      </Tag>
    </TrailContext.Provider>
  );
}

type CommonCursorTrailWrapperProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function CommonCursorTrailWrapper<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: CommonCursorTrailWrapperProps<T>) {
  const context = useContext(TrailContext);
  const Tag = (as ?? "div") as ElementType;
  if (!context) return <Tag className={className} {...rest}>{children}</Tag>;
  return (
    <Tag
      className={className}
      {...rest}
      ref={mergeRefs((rest as { ref?: Ref<HTMLElement> }).ref, context.registerWrapper)}
    >
      {children}
    </Tag>
  );
}

type CommonCursorTrailContentProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function CommonCursorTrailContent<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: CommonCursorTrailContentProps<T>) {
  const context = useContext(TrailContext);
  const Tag = (as ?? "div") as ElementType;
  if (!context) return <Tag className={className} {...rest}>{children}</Tag>;
  return (
    <Tag
      className={className}
      {...rest}
      ref={mergeRefs((rest as { ref?: Ref<HTMLElement> }).ref, context.registerContent)}
    >
      {context.imagesActive ? children : null}
    </Tag>
  );
}

type CommonCursorTrailImageProps = {
  index: number;
} & Omit<ImageProps, "ref">;

export function CommonCursorTrailImage({
  index,
  className,
  alt,
  src,
  ...rest
}: CommonCursorTrailImageProps) {
  const context = useContext(TrailContext);

  if (typeof src !== "string" || !src.startsWith(CURSOR_TRAIL_TRANSPARENT_DIR)) {
    return null;
  }

  const ref = context ? context.registerImage(index) : undefined;
  return (
    <Image className={className} alt={alt} src={src} {...rest} ref={ref} />
  );
}
