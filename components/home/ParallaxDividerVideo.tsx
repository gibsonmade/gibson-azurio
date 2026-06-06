"use client";

import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import TextScramble from "@/components/animations/TextScramble";
import Link from "next/link";
import { Fragment, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText.js";
import { initVelocityMarqueeRows } from "@/lib/stackCardsEffects";
import { siteCopy } from "@/data/siteCopy";
import { useReducedMotionMode } from "@/components/common/MotionPreferenceContext";

gsap.registerPlugin(ScrollTrigger, SplitText);

const INTRO_CARD = siteCopy.home.introDivider;

const INTRO_MARQUEE_WORDS = [
  ...INTRO_CARD.leftTags,
  ...INTRO_CARD.rightTags,
].map((word) => `${word}/`);

function getRevealBaseSize(): number {
  const w = window.innerWidth;
  if (w >= 1600) return 460;
  if (w >= 1024) return 400;
  return Math.min(w - 60, 390);
}

export default function ParallaxDividerVideo() {
  const reducedMotion = useReducedMotionMode();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const coverRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const introMarqueeRef = useRef<HTMLDivElement | null>(null);
  const topRefs = useRef<HTMLDivElement[]>([]);
  const bottomRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    return initVelocityMarqueeRows(topRefs.current, bottomRefs.current, {
      allowReducedMotion: true,
    });
  }, [reducedMotion]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const imageWrapper = imageWrapperRef.current;
    const image = imageRef.current;
    const cover = coverRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const introMarquee = introMarqueeRef.current;
    if (!section || !imageWrapper || !image || !cover || !title || !introMarquee) {
      return;
    }

    if (reducedMotion) {
      gsap.set([section, imageWrapper, image, cover, title, description, introMarquee].filter(Boolean), {
        opacity: 1,
        scale: 1,
        y: 0,
        clearProps: "clipPath,filter,visibility",
      });
      gsap.set(cover, { opacity: 0.72 });
      gsap.set(introMarquee, { opacity: 0.05 });
      return;
    }

    let baseSize = getRevealBaseSize();
    let lastProgress = 0;
    let contentVisible = false;
    const split = SplitText.create(title, {
      type: "words, lines",
      mask: "lines",
      linesClass: "line",
    });
    const titleLines = split.lines as HTMLElement[];

    const updateClip = (progress: number) => {
      const cutY = ((window.innerHeight - baseSize) / 2) * (1 - progress);
      const cutX = ((window.innerWidth - baseSize) / 2) * (1 - progress);
      gsap.set(imageWrapper, {
        clipPath: `inset(${cutY}px ${cutX}px ${cutY}px ${cutX}px)`,
      });
    };

    updateClip(0);
    gsap.set(image, { scale: 0.9 });
    gsap.set(cover, { opacity: 0.68 });
    gsap.set(introMarquee, { opacity: 0.05 });
    // Title starts visible — no initial hide
    gsap.set(titleLines, { y: "0%" });
    if (description) gsap.set(description, { y: 0, opacity: 1 });

    const showContent = () => {
      gsap.to(titleLines, {
        y: "0%",
        duration: 0.75,
        ease: "common",
        stagger: { amount: 0.15 },
      });
      if (description) {
        gsap.to(description, {
          y: 0,
          opacity: 1,
          duration: 0.75,
          delay: 0.1,
          ease: "common",
        });
      }
    };

    const hideContent = () => {
      // Title stays visible on scroll back — only description hides
      if (description) {
        gsap.to(description, {
          y: "40px",
          opacity: 0,
          duration: 0.1,
          ease: "common",
        });
      }
    };

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        lastProgress = self.progress;
        updateClip(lastProgress);
        const coverOpacity = 0.68 + self.progress * 0.22;
        gsap.set(image, { scale: 0.9 + self.progress * 0.1 });
        gsap.set(cover, { opacity: coverOpacity });

        if (self.progress >= 0.4 && self.progress <= 0.75) {
          const fadeProgress = (self.progress - 0.4) / (0.75 - 0.4);
          gsap.set(introMarquee, { opacity: 0.05 * (1 - fadeProgress) });
        } else if (self.progress < 0.4) {
          gsap.set(introMarquee, { opacity: 0.05 });
        } else {
          gsap.set(introMarquee, { opacity: 0 });
        }

        if (self.progress >= 0.25 && !contentVisible) {
          contentVisible = true;
          showContent();
        }
        if (self.progress < 0.25 && contentVisible) {
          contentVisible = false;
          hideContent();
        }
      },
    });

    const onResize = () => {
      baseSize = getRevealBaseSize();
      updateClip(lastProgress);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      trigger.kill();
      split.revert();
    };
  }, [reducedMotion]);

  return (
    <CommonLoadAnimation>
      <>
        <div
          ref={sectionRef}
          className="mxd-section home-divider-reveal home-intro-stack"
        >
          <div className="mxd-container fullwidth-container">
            <CommonLoadFade index={0}>
              <div className="mxd-stack-cards opposite loading-fade home-intro-stack__sticky">
                <div className="mxd-stack-cards__card home-intro-stack__card">
                  <div className="card__marquees">
                    <div
                      className="marquee marquee-stack marquee--gsap muted-extra-opposite"
                      ref={introMarqueeRef}
                    >
                      {[0, 1].map((row) => (
                        <Fragment key={`intro-marquee-${row}`}>
                          <div
                            className="marquee__top home-intro-marquee__row"
                            ref={(el) => {
                              if (!el) return;
                              topRefs.current[row] = el;
                            }}
                          >
                            {INTRO_MARQUEE_WORDS.map((word) => (
                              <div
                                key={`intro-top-${row}-${word}`}
                                className="marquee__item item-regular text"
                              >
                                <p className="marquee__text text-with-gliph">
                                  {word}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div
                            className="marquee__bottom home-intro-marquee__row"
                            ref={(el) => {
                              if (!el) return;
                              bottomRefs.current[row] = el;
                            }}
                          >
                            {INTRO_MARQUEE_WORDS.map((word) => (
                              <div
                                key={`intro-bottom-${row}-${word}`}
                                className="marquee__item item-regular text"
                              >
                                <p className="marquee__text text-with-gliph">
                                  {word}
                                </p>
                              </div>
                            ))}
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="card__wrapper">
                    <div className="card__content">
                      <div className="card__descr" ref={descriptionRef}>
                        <div className="card__tags">
                          {INTRO_CARD.leftTags.map((tag) => (
                            <TextScramble
                              key={`intro-left-${tag}`}
                              className="tag tag-m tag-permanent mxd-scramble"
                            >
                              {tag}
                            </TextScramble>
                          ))}
                        </div>
                        <div className="card__tags desktop-right">
                          {INTRO_CARD.rightTags.map((tag) => (
                            <TextScramble
                              key={`intro-right-${tag}`}
                              className="tag tag-m tag-permanent mxd-scramble"
                            >
                              {tag}
                            </TextScramble>
                          ))}
                        </div>
                      </div>
                      <Link
                        className="card__title active-cursor-permanent"
                        data-cursor-text="About me"
                        href={INTRO_CARD.href}
                      >
                        <p className="permanent" ref={titleRef}>
                          {INTRO_CARD.titleLines.map((line, lineIndex) => (
                            <Fragment key={`intro-title-${lineIndex}`}>
                              {lineIndex > 0 ? <br /> : null}
                              {line}
                            </Fragment>
                          ))}
                        </p>
                      </Link>
                    </div>
                    <div className="card__image" ref={imageWrapperRef}>
                      <img
                        ref={imageRef}
                        className="card__media"
                        src="/img-temp/uploads/pexels-mintworkspace-18293807.jpg"
                        alt="Warm desk workspace visual for ideas becoming beautiful websites"
                      />
                      <div className="card__cover" ref={coverRef} />
                    </div>
                  </div>
                </div>
              </div>
            </CommonLoadFade>
          </div>
        </div>
      </>
    </CommonLoadAnimation>
  );
}
