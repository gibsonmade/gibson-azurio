"use client";

import BlurSection from "@/components/animations/BlurSection";
import {
  initCtaMarqueeToLeft,
  initCtaMarqueeToRight,
} from "@/lib/ctaMarqueeEffects";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";

export default function DoubleMarqueeDivider() {
  const leftTrackRef = useRef<HTMLDivElement | null>(null);
  const rightTrackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const cleanLeft = initCtaMarqueeToLeft(leftTrackRef.current);
    const cleanRight = initCtaMarqueeToRight(rightTrackRef.current);
    return () => {
      cleanLeft();
      cleanRight();
    };
  }, []);

  return (
    <CommonLoadAnimation>
      <>
        <BlurSection className="mxd-section">
          <div className="mxd-container fullwidth-container">
            {/* Block - Marquee Double Start */}
            <CommonLoadFade index={0}>
              <div className="mxd-block loading-fade">
                <div className="marquee marquee-left--gsap">
                  <div
                    className="marquee__toleft marquee__images"
                    ref={leftTrackRef}
                  >
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/the-home-depot/home-depot-ux.jpg"
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/carmax/carmax-cars.jpg"
                          width={1200}
                          height={685}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/mini-murals/mini-murals-website.png"
                          width={700}
                          height={700}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/staterra/staterra-stationery.jpg"
                          width={737}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/wiab-ai/wiab-robot.jpg"
                          width={800}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/chi-st-lukes/chi-st-lukes-cover.png"
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/ritual/ritual-tulum.jpg"
                          width={1200}
                          height={900}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/cactus-club/cactus-club-food.jpg"
                          width={737}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/academy-sports-outdoors/academy-sports-hero.jpg"
                          width={800}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/staterra/staterra-building.jpg"
                          width={1200}
                          height={873}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/chi-st-lukes/chi-st-lukes-desktop.jpg"
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/ritual/ritual-tulum-2.jpg"
                          width={1200}
                          height={685}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/cactus-club/cactus-club-city.jpg"
                          width={700}
                          height={700}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/the-home-depot/home-depot-ux.jpg"
                          width={737}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/carmax/carmax-cars.jpg"
                          width={800}
                          height={1200}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="marquee marquee-right--gsap">
                  <div
                    className="marquee__toright marquee__images align-start"
                    ref={rightTrackRef}
                  >
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/carmax/carmax-cars.jpg"
                          width={800}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/the-home-depot/home-depot-ux.jpg"
                          width={737}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/cactus-club/cactus-club-city.jpg"
                          width={700}
                          height={700}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/ritual/ritual-tulum-2.jpg"
                          width={1200}
                          height={685}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/chi-st-lukes/chi-st-lukes-desktop.jpg"
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/staterra/staterra-building.jpg"
                          width={1200}
                          height={873}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/academy-sports-outdoors/academy-sports-hero.jpg"
                          width={800}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/cactus-club/cactus-club-food.jpg"
                          width={737}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/ritual/ritual-tulum.jpg"
                          width={1200}
                          height={900}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/chi-st-lukes/chi-st-lukes-cover.png"
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/wiab-ai/wiab-robot.jpg"
                          width={800}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/staterra/staterra-stationery.jpg"
                          width={737}
                          height={1200}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/mini-murals/mini-murals-website.png"
                          width={700}
                          height={700}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/carmax/carmax-cars.jpg"
                          width={1200}
                          height={685}
                        />
                      </div>
                    </div>
                    {/* single item */}
                    <div className="marquee__item item-imageblock">
                      <div className="marquee__image">
                        <Image
                          alt="Gibsooon Image Example"
                          src="/images/projects/the-home-depot/home-depot-ux.jpg"
                          width={1200}
                          height={1200}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CommonLoadFade>
            {/* Block - Marquee Double End */}
          </div>
        </BlurSection>
      </>
    </CommonLoadAnimation>
  );
}
