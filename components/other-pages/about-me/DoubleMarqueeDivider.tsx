"use client";

import BlurSection from "@/components/animations/BlurSection";
import {
  initCtaMarqueeToLeft,
  initCtaMarqueeToRight,
} from "@/lib/template/ctaMarqueeEffects";
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
                          src="/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg"
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
                          src="/img-temp/uploads/case-study/carmax/gibson-cars.jpg"
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
                          src="/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - HD.png"
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
                          src="/img-temp/uploads/case-study/staterra/Stationery1.jpg"
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
                          src="/img-temp/uploads/case-study/wiab/gibson-robot.jpg"
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
                          src="/img-temp/uploads/case-study/chistlukes/CHI St Lukes Cover Image.png"
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
                          src="/img-temp/uploads/case-study/ritual/gibson-tulum.jpg"
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
                          src="/img-temp/uploads/case-study/cactus-club/gibson-cactus.jpg"
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
                          src="/img-temp/uploads/case-study/academy/gibson-sports.jpg"
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
                          src="/img-temp/uploads/case-study/staterra/gibson-building.jpg"
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
                          src="/img-temp/uploads/case-study/chistlukes/CHI St Lukes Website Desktop Design.jpg"
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
                          src="/img-temp/uploads/case-study/ritual/gibson-tulum2.jpg"
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
                          src="/img-temp/uploads/case-study/cactus-club/gibson-cacti.jpg"
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
                          src="/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg"
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
                          src="/img-temp/uploads/case-study/carmax/gibson-cars.jpg"
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
                          src="/img-temp/uploads/case-study/carmax/gibson-cars.jpg"
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
                          src="/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg"
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
                          src="/img-temp/uploads/case-study/cactus-club/gibson-cacti.jpg"
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
                          src="/img-temp/uploads/case-study/ritual/gibson-tulum2.jpg"
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
                          src="/img-temp/uploads/case-study/chistlukes/CHI St Lukes Website Desktop Design.jpg"
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
                          src="/img-temp/uploads/case-study/staterra/gibson-building.jpg"
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
                          src="/img-temp/uploads/case-study/academy/gibson-sports.jpg"
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
                          src="/img-temp/uploads/case-study/cactus-club/gibson-cactus.jpg"
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
                          src="/img-temp/uploads/case-study/ritual/gibson-tulum.jpg"
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
                          src="/img-temp/uploads/case-study/chistlukes/CHI St Lukes Cover Image.png"
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
                          src="/img-temp/uploads/case-study/wiab/gibson-robot.jpg"
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
                          src="/img-temp/uploads/case-study/staterra/Stationery1.jpg"
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
                          src="/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - HD.png"
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
                          src="/img-temp/uploads/case-study/carmax/gibson-cars.jpg"
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
                          src="/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg"
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
