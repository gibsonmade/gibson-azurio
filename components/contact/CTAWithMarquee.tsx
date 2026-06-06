"use client";

import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { initCtaMarqueeToLeft } from "@/lib/ctaMarqueeEffects";
import Link from "next/link";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
export default function CTAWithMarquee() {
  const marqueeTrackRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    return initCtaMarqueeToLeft(marqueeTrackRef.current);
  }, []);
  return (
    <>
      <BlurSection className="mxd-section bg-color-opposite">
        <div className="mxd-container fullwidth-container">
          {/* Block - CTA with Matter.js Objects Start */}
          <div className="mxd-block">
            <div className="mxd-promo transparent">
              <div className="mxd-promo__wrap auto-height">
                {/* content */}
                <div className="mxd-promo__content">
                  <CommonScrollAnimated
                    className="mxd-promo__btngroup anim-uni-in-up"
                    as="div"
                    animation="inUp"
                  >
                    <Link
                      className="btn btn-line btn-line-opposite"
                      href={`/contact`}
                    >
                      <TextScramble className="btn-caption mxd-scramble">
                        Write a line
                      </TextScramble>
                    </Link>
                  </CommonScrollAnimated>
                  <div className="mxd-promo__caption">
                    <Link
                      className="active-cursor-accent"
                      data-cursor-text="Contact Gibson"
                      href={`/contact`}
                    >
                      <CommonAnimatedText
                        as="h2"
                        className="opposite mxd-split-lines"
                        animation="splitLines"
                      >
                        Let&apos;s talk about your project
                      </CommonAnimatedText>
                    </Link>
                  </div>
                </div>
                {/* marquee */}
                <div className="mxd-promo__marquee">
                  {/* Marquee Divider Start */}
                  <div className="marquee marquee-left--gsap">
                    <div
                      className="marquee__toleft marquee__images"
                      ref={marqueeTrackRef}
                    >
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            Product UX
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/the-home-depot/home-depot-ux.jpg"
                            width={1200}
                            height={1200}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            Retail systems
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/carmax/carmax-cars.jpg"
                            width={1200}
                            height={685}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            Development
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/mini-murals/mini-murals-website.png"
                            width={700}
                            height={700}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            Brand systems
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/staterra/staterra-stationery.jpg"
                            width={737}
                            height={1200}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            AI workflows
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/wiab-ai/wiab-robot.jpg"
                            width={800}
                            height={1200}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            Civic discovery
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/chi-st-lukes/chi-st-lukes-cover.png"
                            width={1200}
                            height={1200}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            Launch systems
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/ritual/ritual-tulum.jpg"
                            width={1200}
                            height={900}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            Motion
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/cactus-club/cactus-club-food.jpg"
                            width={737}
                            height={1200}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            Brand systems
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/academy-sports-outdoors/academy-sports-hero.jpg"
                            width={800}
                            height={1200}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            Founder strategy
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/staterra/staterra-building.jpg"
                            width={1200}
                            height={873}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            Product UX
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/the-home-depot/home-depot-ux.jpg"
                            width={1200}
                            height={1200}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            Retail systems
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/carmax/carmax-cars.jpg"
                            width={1200}
                            height={685}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            Development
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/mini-murals/mini-murals-website.png"
                            width={700}
                            height={700}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            Brand systems
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/staterra/staterra-stationery.jpg"
                            width={737}
                            height={1200}
                          />
                        </div>
                      </div>
                      {/* single item */}
                      <div className="marquee__item item-imageblock">
                        <div className="marquee__tags">
                          <TextScramble className="tag tag-s tag-medium-opposite mxd-scramble">
                            AI workflows
                          </TextScramble>
                        </div>
                        <div className="marquee__image">
                          <Image
                            alt=""
                            src="/images/projects/wiab-ai/wiab-robot.jpg"
                            width={800}
                            height={1200}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Marquee Divider End */}
                </div>
              </div>
            </div>
          </div>
          {/* Block - CTA with Matter.js Objects End */}
        </div>
      </BlurSection>
    </>
  );
}
