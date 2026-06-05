"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Logo8bit from "@/components/common/Logo8bit";
import ThemeSwitcher from "@/components/headers/ThemeSwitcher";
import MotionSwitcher from "@/components/headers/MotionSwitcher";
import Nav from "@/components/headers/Nav";
import NavTrigger from "@/components/headers/NavTrigger";
import TextScramble from "@/components/animations/TextScramble";
import { useLenis } from "@/components/common/LenisContext";
import { useReducedMotionMode } from "@/components/common/MotionPreferenceContext";
import { useHeaderScrollHidden } from "@/hooks/useHeaderScrollHidden";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import { usePathname } from "next/navigation";
import ContactCtaIcon from "@/components/common/ContactCtaIcon";

type Header1Props = {
  initialTheme: "light" | "dark";
};

export default function Header1({ initialTheme }: Header1Props) {
  const headerRef = useRef<HTMLElement>(null);
  const [toggleNode, setToggleNode] = useState<HTMLDivElement | null>(null);
  const [navNode, setNavNode] = useState<HTMLElement | null>(null);
  const [hamburgerNode, setHamburgerNode] = useState<HTMLElement | null>(null);
  const [menuReset, setMenuReset] = useState<(() => void) | null>(null);
  const lenis = useLenis();
  const reducedMotion = useReducedMotionMode();
  useHeaderScrollHidden(headerRef, lenis, reducedMotion);
  const pathname = usePathname();
  const isPermanent =
    pathname === "/index-branding-studio" ||
    pathname === "/index-digital-agency" ||
    pathname === "/index-web-studio" ||
    pathname === "/index-freelancer-portfolio" ||
    pathname === "/index-design-studio" ||
    pathname === "/works-default" ||
    pathname === "/work" ||
    pathname === "/services" ||
    pathname === "/team" ||
    pathname === "/blog-creative" ||
    pathname === "/lab";

  const registerMenuReset = useCallback((fn: (() => void) | null) => {
    setMenuReset(() => fn);
  }, []);

  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      const navEntry = performance.getEntriesByType(
        "navigation",
      )[0] as PerformanceNavigationTiming | undefined;
      const isBackForward = navEntry?.type === "back_forward";
      if (event.persisted || isBackForward) {
        menuReset?.();
      }
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [menuReset]);

  return (
    <>
      <CommonLoadAnimation>
        <header
          id="header"
          ref={headerRef}
          className={`mxd-header ${isPermanent ? "mxd-header-permanent" : ""}`}
        >
          <CommonLoadFade index={0}>
            <div className="mxd-header__logo loading-fade">
              <Link className="mxd-logo" href={`/`}>
                <Logo8bit />
                <div className="mxd-logo__text">
                  <TextScramble className="mxd-scramble">Gibsooon</TextScramble>
                </div>
              </Link>
            </div>
          </CommonLoadFade>
          <CommonLoadFade index={1}>
            <div className="mxd-header__controls loading-fade">
              <Link
                className="btn mxd-header__link slide-right"
                href="/contact"
                aria-label="Say hi!"
              >
                <span className="btn-caption mxd-header__link-label mxd-header__link-label--desktop">
                  <TextScramble className="mxd-scramble">Say hi!</TextScramble>
                </span>
                <span className="btn-caption mxd-header__link-label mxd-header__link-label--mobile">
                  <TextScramble className="mxd-scramble">HI!</TextScramble>
                </span>
                <i>
                  <ContactCtaIcon />
                </i>
              </Link>
              <ThemeSwitcher
                isPermanent={isPermanent}
                initialTheme={initialTheme}
              />
              <MotionSwitcher isPermanent={isPermanent} />
            </div>
          </CommonLoadFade>
          <NavTrigger
            setToggleNode={setToggleNode}
            setHamburgerNode={setHamburgerNode}
          />
        </header>
      </CommonLoadAnimation>
      <Nav
        navNode={navNode}
        toggleNode={toggleNode}
        hamburgerNode={hamburgerNode}
        setNavNode={setNavNode}
        registerMenuReset={registerMenuReset}
      />
    </>
  );
}
