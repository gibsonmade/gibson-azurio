"use client";

/* eslint-disable react-hooks/refs -- RefObjects passed to `ref={}`; slotters only touch refs in callbacks */
import type { MutableRefObject } from "react";
import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { MenuLinkItem } from "@/types/menu";
import { insightLinks, worksLinks } from "@/data/menu";
import { useMxdMenuGsap, useMxdMenuGsapRefs } from "@/hooks/useMxdMenuGsap";
import TextScramble from "@/components/animations/TextScramble";
import Logo8bit from "@/components/common/Logo8bit";

function normalizePath(p: string): string {
  if (!p) return "/";
  const t = p.endsWith("/") && p.length > 1 ? p.slice(0, -1) : p;
  return t || "/";
}

function pathMatches(pathname: string, href: string): boolean {
  return normalizePath(pathname) === normalizePath(href);
}

function pathStartsWith(pathname: string, href: string): boolean {
  const normalizedPath = normalizePath(pathname);
  const normalizedHref = normalizePath(href);
  return (
    normalizedPath === normalizedHref ||
    normalizedPath.startsWith(`${normalizedHref}/`)
  );
}

function sectionHasActiveRoute(pathname: string, links: MenuLinkItem[]): boolean {
  return links.some((l) => pathMatches(pathname, l.href));
}

function makeSlotters<T>(
  arr: MutableRefObject<(T | null)[]>,
  len: number,
): ((el: T | null) => void)[] {
  return Array.from({ length: len }, (_, i) => (el: T | null) => {
    arr.current[i] = el;
  });
}

type NavProps = {
  navNode: HTMLElement | null;
  toggleNode: HTMLElement | null;
  hamburgerNode: HTMLElement | null;
  setNavNode: (el: HTMLElement | null) => void;
  registerMenuReset: (fn: (() => void) | null) => void;
};

export default function Nav({
  navNode,
  toggleNode,
  hamburgerNode,
  setNavNode,
  registerMenuReset,
}: NavProps) {
  const pathname = usePathname();
  const g = useMxdMenuGsapRefs();

  const homeSectionActive = pathMatches(pathname, "/");
  const worksSectionActive =
    sectionHasActiveRoute(pathname, worksLinks) || pathStartsWith(pathname, "/work");
  const pagesSectionActive = pathMatches(pathname, "/about");
  const insightsSectionActive = sectionHasActiveRoute(pathname, insightLinks);
  const contactSectionActive = pathMatches(pathname, "/contact");

  const renderSubmenuLinks = (links: MenuLinkItem[]) =>
    links.map((link) => (
      <li
        key={link.href}
        className={`submenu__item ${pathMatches(pathname, link.href) ? "active" : ""}`}
      >
        <Link href={link.href}>{link.label}</Link>
      </li>
    ));

  const parentItemClass = (current: boolean) =>
    `main-menu__item${current ? " main-menu__item--current" : ""}`;

  const headerSlots = useMemo(() => makeSlotters(g.headerSplitTargets, 2), [g]);
  const mainSlots = useMemo(() => makeSlotters(g.mainMenuLinkSpans, 10), [g]);
  const contactSlots = useMemo(() => makeSlotters(g.contactAnchors, 8), [g]);
  const contactRevealSlots = useMemo(
    () => makeSlotters(g.contactRevealTargets, 8),
    [g],
  );
  const footerSlots = useMemo(() => makeSlotters(g.footerSplitTargets, 2), [g]);
  const dividerSlots = useMemo(() => makeSlotters(g.dividers, 6), [g]);
  const arrowSlots = useMemo(() => makeSlotters(g.arrows, 2), [g]);
  const liSlots = useMemo(() => makeSlotters(g.menuItemLis, 5), [g]);
  const toggleSlots = useMemo(() => makeSlotters(g.menuToggles, 5), [g]);
  const submenuSlots = useMemo(() => makeSlotters(g.menuSubmenus, 5), [g]);

  useMxdMenuGsap(navNode, toggleNode, hamburgerNode, registerMenuReset, g);

  return (
    <nav className="mxd-menu mxd-menu--gsap" ref={setNavNode}>
      <div ref={g.backdrop} className="mxd-menu__backdrop" />
      {/* Menu Overlay Start */}
      <div ref={g.overlay} className="mxd-menu__overlay">
        <div
          ref={g.content}
          className="mxd-menu__content"
          data-lenis-prevent=""
        >
          {/* Menu Logo Start */}
          <div className="mxd-menu__logo">
            <Link href={`/`} className="menu-logo">
              <Logo8bit className="menu-logo__image" />
              {/* logo text */}
              <div className="menu-logo__text">
                <span ref={headerSlots[0]}>Gibsooon</span>
              </div>
            </Link>
          </div>
          {/* Menu Logo End */}
          {/* Menu Media Start */}
          <div className="mxd-menu__media">
            <div ref={g.mediaWrapper} className="menu-media__wrapper">
              <Image
                alt="Gibsooon menu visual showing a strategic conversation"
                src="/img-temp/uploads/gibson-nav.jpeg"
                width={1920}
                height={1280}
                priority
              />
            </div>
          </div>
          {/* Menu Media End */}
          {/* Main Navigation Start */}
          <div className="mxd-menu__navigation">
            <div className="mxd-menu__inner">
              <div className="mxd-menu__shadow shadow-top" />
              <div className="mxd-menu__caption">
                <p ref={headerSlots[1]}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem" }}>
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <rect x="5" y="0" width="2" height="1" />
                      <rect x="4" y="1" width="3" height="1" />
                      <rect x="3" y="2" width="5" height="1" />
                      <rect x="2" y="3" width="14" height="1" />
                      <rect x="1" y="4" width="16" height="1" />
                      <rect x="0" y="5" width="18" height="1" />
                      <rect x="0" y="6" width="18" height="1" />
                      <rect x="1" y="7" width="16" height="1" />
                      <rect x="2" y="8" width="13" height="1" />
                      <rect x="3" y="9" width="11" height="1" />
                      <rect x="4" y="10" width="9" height="1" />
                      <rect x="5" y="11" width="7" height="1" />
                      <rect x="6" y="12" width="5" height="1" />
                      <rect x="7" y="13" width="3" height="1" />
                    </svg>
                    Get started today
                  </span>
                  <br />
                  From ideas to launch.
                </p>
              </div>
              {/* left side */}
              <div className="mxd-menu__left">
                <div className="main-menu">
                  <div className="main-menu__content">
                    <ul id="main-menu" className="main-menu__accordion">
                      <li
                        ref={liSlots[0]}
                        className={parentItemClass(homeSectionActive)}
                      >
                        <div
                          ref={dividerSlots[0]}
                          className="main-menu__divider divider-top"
                        />
                        <div ref={toggleSlots[0]} className="main-menu__toggle">
                          <Link className="main-menu__link" href={`/`}>
                            <span
                              ref={mainSlots[0]}
                              className="main-menu__number"
                            >
                              / 01
                            </span>
                            <span
                              ref={mainSlots[1]}
                              className="main-menu__caption"
                            >
                              Home
                            </span>
                          </Link>
                        </div>
                        <div
                          ref={dividerSlots[1]}
                          className="main-menu__divider divider-bottom"
                        />
                      </li>
                      <li
                        ref={liSlots[1]}
                        className={parentItemClass(pagesSectionActive)}
                      >
                        <div ref={toggleSlots[1]} className="main-menu__toggle">
                          <Link className="main-menu__link" href={`/about`}>
                            <span
                              ref={mainSlots[2]}
                              className="main-menu__number"
                            >
                              / 02
                            </span>
                            <span
                              ref={mainSlots[3]}
                              className="main-menu__caption"
                            >
                              About
                            </span>
                          </Link>
                        </div>
                        <div
                          ref={dividerSlots[2]}
                          className="main-menu__divider divider-bottom"
                        />
                      </li>
                      <li
                        ref={liSlots[2]}
                        className={parentItemClass(worksSectionActive)}
                      >
                        <div ref={toggleSlots[2]} className="main-menu__toggle">
                          <p className="main-menu__link">
                            <span
                              ref={mainSlots[4]}
                              className="main-menu__number"
                            >
                              / 03
                            </span>
                            <span
                              ref={mainSlots[5]}
                              className="main-menu__caption"
                            >
                              Work
                            </span>
                          </p>
                          <div ref={arrowSlots[0]} className="main-menu__arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              viewBox="0 0 18 18"
                            >
                              <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                            </svg>
                          </div>
                        </div>
                        <ul ref={submenuSlots[2]} className="submenu">
                          {renderSubmenuLinks(worksLinks)}
                        </ul>
                        <div
                          ref={dividerSlots[3]}
                          className="main-menu__divider divider-bottom"
                        />
                      </li>
                      <li
                        ref={liSlots[3]}
                        className={parentItemClass(insightsSectionActive)}
                      >
                        <div ref={toggleSlots[3]} className="main-menu__toggle">
                          <p className="main-menu__link">
                            <span
                              ref={mainSlots[6]}
                              className="main-menu__number"
                            >
                              / 04
                            </span>
                            <span
                              ref={mainSlots[7]}
                              className="main-menu__caption"
                            >
                              Lab
                            </span>
                          </p>
                          <div ref={arrowSlots[1]} className="main-menu__arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              viewBox="0 0 18 18"
                            >
                              <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                            </svg>
                          </div>
                        </div>
                        <ul ref={submenuSlots[3]} className="submenu">
                          {renderSubmenuLinks(insightLinks)}
                        </ul>
                        <div
                          ref={dividerSlots[4]}
                          className="main-menu__divider divider-bottom"
                        />
                      </li>
                      <li
                        ref={liSlots[4]}
                        className={parentItemClass(contactSectionActive)}
                      >
                        <div ref={toggleSlots[4]} className="main-menu__toggle">
                          <Link className="main-menu__link" href={`/contact`}>
                            <span
                              ref={mainSlots[8]}
                              className="main-menu__number"
                            >
                              / 05
                            </span>
                            <span
                              ref={mainSlots[9]}
                              className="main-menu__caption"
                            >
                              Contact
                            </span>
                          </Link>
                        </div>
                        <div
                          ref={dividerSlots[5]}
                          className="main-menu__divider divider-bottom"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* right side */}
              <div className="mxd-menu__right">
                <div className="menu-contact">
                  <div className="menu-contact__item">
                    <span className="menu-contact__label">Contact</span>
                    <ul className="menu-contact__list">
                      <li>
                        <a
                          ref={contactSlots[0]}
                          className="tag tag-m"
                          href="mailto:gibhall@gmail.com?subject=Message%20from%20your%20site"
                        >
                          <TextScramble
                            ref={contactRevealSlots[0]}
                            className="mxd-scramble"
                          >
                            gibhall@gmail.com
                          </TextScramble>
                        </a>
                      </li>
                      <li>
                        <a
                          ref={contactSlots[1]}
                          className="tag tag-m"
                          href="/contact"
                        >
                          <TextScramble
                            ref={contactRevealSlots[1]}
                            className="mxd-scramble"
                          >
                            Say hi!
                          </TextScramble>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-contact__item">
                    <span className="menu-contact__label">FOCUS</span>
                    <ul className="menu-contact__list">
                      <li>
                        <a
                          ref={contactSlots[2]}
                          className="tag tag-m"
                          href="/work"
                        >
                          <span ref={contactRevealSlots[2]}>
                            Startups,
                            <br />
                            Scaleups,
                            <br />
                            Enterprise
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="menu-contact__item">
                    <span className="menu-contact__label">Capabilities</span>
                    <ul className="menu-contact__list">
                      <li>
                        <a
                          ref={contactSlots[3]}
                          className="tag tag-m"
                          href="https://dribbble.com/"
                          target="_blank"
                        >
                          <TextScramble
                            ref={contactRevealSlots[3]}
                            className="mxd-scramble"
                          >
                            Strategy
                          </TextScramble>
                        </a>
                      </li>
                      <li>
                        <a
                          ref={contactSlots[4]}
                          className="tag tag-m"
                          href="https://www.behance.net/"
                          target="_blank"
                        >
                          <TextScramble
                            ref={contactRevealSlots[4]}
                            className="mxd-scramble"
                          >
                            Design
                          </TextScramble>
                        </a>
                      </li>
                      <li>
                        <a
                          ref={contactSlots[5]}
                          className="tag tag-m"
                          href="https://github.com/"
                          target="_blank"
                        >
                          <TextScramble
                            ref={contactRevealSlots[5]}
                            className="mxd-scramble"
                          >
                            Development
                          </TextScramble>
                        </a>
                      </li>
                      <li>
                        <a
                          ref={contactSlots[6]}
                          className="tag tag-m"
                          href="https://www.figma.com/community"
                          target="_blank"
                        >
                          <TextScramble
                            ref={contactRevealSlots[6]}
                            className="mxd-scramble"
                          >
                            Growth
                          </TextScramble>
                        </a>
                      </li>
                      <li>
                        <a
                          ref={contactSlots[7]}
                          className="tag tag-m"
                          href="https://codepen.io/"
                          target="_blank"
                        >
                          <TextScramble
                            ref={contactRevealSlots[7]}
                            className="mxd-scramble"
                          >
                            Automation
                          </TextScramble>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* data bottom line */}
              <div className="mxd-menu__shadow" />
              <div className="mxd-menu__data">
                <div className="menu-data__left">
                  <Link
                    href="/project-launch"
                    style={{ opacity: 0.4, fontSize: "0.7em", marginRight: "1.25rem", letterSpacing: "0.06em" }}
                    className="menu-data__text"
                  >
                    Project Launch
                  </Link>
                </div>
                <div className="menu-data__right">
                  <p ref={footerSlots[0]} className="menu-data__text">
                    Copyright Gibsooon
                  </p>
                  <p ref={footerSlots[1]} className="menu-data__text">
                    ©{new Date().getFullYear()}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Main Navigation End */}
        </div>
      </div>
      {/* Menu Overlay End */}
    </nav>
  );
}
