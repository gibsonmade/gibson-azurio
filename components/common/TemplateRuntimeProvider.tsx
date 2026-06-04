"use client";

import "lenis/dist/lenis.css";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { useViewportHeight } from "@/hooks/useViewportHeight";
import { LenisContext } from "@/components/common/LenisContext";
import BlurScrollRoot from "@/components/animations/BlurScrollRoot";
import { CursorProvider } from "@/components/cursor/CursorContext";
import CustomCursor from "@/components/cursor/CustomCursor";
import {
  MotionPreferenceProvider,
  useReducedMotionMode,
} from "@/components/common/MotionPreferenceContext";
import ScrollProgress from "@/components/headers/ScrollProgress";

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", ".87, 0, .13, 1");
CustomEase.create("common", ".23, .65, .74, 1.09");
CustomEase.create("custom", ".23, .65, .74, 1.09");

let pageTransitionRevealCompleted = false;

export default function TemplateRuntimeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <MotionPreferenceProvider>
      <TemplateRuntimeProviderInner>{children}</TemplateRuntimeProviderInner>
    </MotionPreferenceProvider>
  );
}

function TemplateRuntimeProviderInner({ children }: { children: ReactNode }) {
  useViewportHeight();
  const pathname = usePathname();
  const reducedMotion = useReducedMotionMode();

  const pageTransitionRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const routeFeedbackTimerRef = useRef<number | null>(null);
  const routeFeedbackActiveRef = useRef(false);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const isFirstPathRef = useRef(true);

  useEffect(() => {
    const transitionEl = pageTransitionRef.current;
    let transitionTween: gsap.core.Tween | null = null;

    if (reducedMotion) {
      setLenis(null);
      lenisRef.current = null;
      if (transitionEl) {
        gsap.set(transitionEl, { y: "-100%", pointerEvents: "none" });
      }
      ScrollTrigger.getAll().forEach((st) => st.kill());
      return;
    }

    if (transitionEl) {
      if (pageTransitionRevealCompleted) {
        gsap.set(transitionEl, { y: "-100%", pointerEvents: "none" });
      } else {
        pageTransitionRevealCompleted = true;
        transitionTween = gsap.to(transitionEl, {
          y: "-100%",
          duration: 0.7,
          ease: "hop",
          onComplete: () => {
            gsap.set(transitionEl, { pointerEvents: "none" });
          },
        });
      }
    }

    const instance = new Lenis();
    lenisRef.current = instance;
    instance.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        const l = lenisRef.current;
        if (!l) {
          if (arguments.length) {
            window.scrollTo(0, value as number);
          }
          return window.pageYOffset || document.documentElement.scrollTop;
        }
        if (arguments.length) {
          l.scrollTo(value ?? 0, { immediate: true });
        }
        return l.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.documentElement.style.transform ? "transform" : "fixed",
    });

    const prevScrollTriggerDefaults = (
      ScrollTrigger.defaults as unknown as () => ScrollTrigger.StaticVars
    )();
    ScrollTrigger.defaults({
      ...prevScrollTriggerDefaults,
      scroller: document.documentElement,
    });

    const tickerFn = (time: number) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    const lenisStateRafId = requestAnimationFrame(() => {
      setLenis(instance);
    });

    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    void document.fonts.ready.then(() => ScrollTrigger.refresh());

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    const onPageShow = (event: PageTransitionEvent) => {
      const navEntry = performance.getEntriesByType("navigation")[0] as
        | PerformanceNavigationTiming
        | undefined;
      const isBackForward = navEntry?.type === "back_forward";
      if (event.persisted || isBackForward) {
        const el = pageTransitionRef.current;
        if (el) gsap.set(el, { y: "-100%", pointerEvents: "none" });
      }
    };
    window.addEventListener("pageshow", onPageShow);
    const prevScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      transitionTween?.kill();
      cancelAnimationFrame(lenisStateRafId);
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pageshow", onPageShow);
      window.history.scrollRestoration = prevScrollRestoration;
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ScrollTrigger.defaults(prevScrollTriggerDefaults);
      lenisRef.current = null;
      setLenis(null);
      gsap.ticker.remove(tickerFn);
      instance.destroy();
    };
  }, [reducedMotion]);

  useLayoutEffect(() => {
    if (isFirstPathRef.current) {
      isFirstPathRef.current = false;
      return;
    }

    if (routeFeedbackTimerRef.current !== null) {
      window.clearTimeout(routeFeedbackTimerRef.current);
      routeFeedbackTimerRef.current = null;
    }

    const l = lenisRef.current;
    if (l) {
      l.scrollTo(0, { immediate: true, force: true });
    } else {
      window.scrollTo(0, 0);
    }

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const transitionEl = pageTransitionRef.current;
      if (!routeFeedbackActiveRef.current || !transitionEl) return;

      routeFeedbackActiveRef.current = false;
      transitionEl.classList.remove("is-route-pending");
      if (reducedMotion) {
        gsap.set(transitionEl, { y: "-100%", pointerEvents: "none" });
        return;
      }

      gsap.killTweensOf(transitionEl);
      gsap.to(transitionEl, {
        y: "-100%",
        duration: 0.45,
        ease: "hop",
        onComplete: () => {
          gsap.set(transitionEl, { pointerEvents: "none" });
        },
      });
    });
  }, [pathname, reducedMotion]);

  useEffect(() => {
    const clearRouteFeedbackTimer = () => {
      if (routeFeedbackTimerRef.current === null) return;
      window.clearTimeout(routeFeedbackTimerRef.current);
      routeFeedbackTimerRef.current = null;
    };

    const hideRouteFeedback = () => {
      clearRouteFeedbackTimer();
      const transitionEl = pageTransitionRef.current;
      if (!transitionEl || !routeFeedbackActiveRef.current) return;
      routeFeedbackActiveRef.current = false;
      transitionEl.classList.remove("is-route-pending");
      gsap.set(transitionEl, { y: "-100%", pointerEvents: "none" });
    };

    const showRouteFeedback = () => {
      const transitionEl = pageTransitionRef.current;
      if (!transitionEl) return;

      routeFeedbackActiveRef.current = true;
      transitionEl.classList.add("is-route-pending");
      gsap.killTweensOf(transitionEl);

      if (reducedMotion) {
        gsap.set(transitionEl, { y: "0%", pointerEvents: "auto" });
        return;
      }

      gsap.set(transitionEl, { y: "100%", pointerEvents: "auto" });
      gsap.to(transitionEl, {
        y: "0%",
        duration: 0.45,
        ease: "hop",
      });
    };

    const shouldHandleLink = (link: HTMLAnchorElement) => {
      const href = link.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        link.hasAttribute("download") ||
        link.target === "_blank"
      ) {
        return false;
      }

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return false;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return false;
      }

      return true;
    };

    const onDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (!link || !shouldHandleLink(link)) return;

      clearRouteFeedbackTimer();
      routeFeedbackTimerRef.current = window.setTimeout(showRouteFeedback, 150);
    };

    window.addEventListener("pageshow", hideRouteFeedback);
    document.addEventListener("click", onDocumentClick, true);

    return () => {
      clearRouteFeedbackTimer();
      window.removeEventListener("pageshow", hideRouteFeedback);
      document.removeEventListener("click", onDocumentClick, true);
    };
  }, [reducedMotion]);

  return (
    <LenisContext.Provider value={reducedMotion ? null : lenis}>
      <CursorProvider>
        <BlurScrollRoot>
          <div
            ref={pageTransitionRef}
            className="mxd-page-transition"
            aria-hidden
          >
            <div className="mxd-page-transition__content">
              <span className="mxd-page-transition__eyebrow">Gibsooon</span>
              <img
                className="mxd-page-transition__logo logo-dark"
                src="/img-temp/uploads/gibson-logo-2.svg"
                alt=""
              />
              <img
                className="mxd-page-transition__logo logo-light"
                src="/img-temp/uploads/gibson-logo-1.svg"
                alt=""
              />
              <span className="mxd-page-transition__bar" />
            </div>
          </div>
          {!reducedMotion ? <CustomCursor /> : null}
          <ScrollProgress />
          {children}
        </BlurScrollRoot>
      </CursorProvider>
    </LenisContext.Provider>
  );
}
