"use client";

import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import Image from "next/image";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import LiquidMetalBlob from "@/components/common/LiquidMetalBlob";
import { siteCopy } from "@/data/siteCopy";
import { useMemo, useRef } from "react";
import {
  useHeroBannersHover,
  type HeroBannerGroupRefs,
} from "@/hooks/useHeroBannersHover";

export default function About() {
  const { about } = siteCopy.home;

  const bannersHoverRef = useRef<HTMLDivElement>(null);
  const trigger1Ref = useRef<HTMLAnchorElement>(null);
  const trigger2Ref = useRef<HTMLAnchorElement>(null);

  const heroBanner1_0 = useRef<HTMLDivElement>(null);
  const heroBanner1_1 = useRef<HTMLDivElement>(null);
  const heroBanner1_2 = useRef<HTMLDivElement>(null);
  const heroBanner1_3 = useRef<HTMLDivElement>(null);
  const heroBanner2_0 = useRef<HTMLDivElement>(null);
  const heroBanner2_1 = useRef<HTMLDivElement>(null);
  const heroBanner2_2 = useRef<HTMLDivElement>(null);
  const heroBanner2_3 = useRef<HTMLDivElement>(null);

  const heroBannerGroups = useMemo(
    (): readonly HeroBannerGroupRefs[] => [
      {
        triggerRef: trigger1Ref,
        bannerRefs: [heroBanner1_0, heroBanner1_1, heroBanner1_2, heroBanner1_3],
      },
      {
        triggerRef: trigger2Ref,
        bannerRefs: [heroBanner2_0, heroBanner2_1, heroBanner2_2, heroBanner2_3],
      },
    ],
    []
  );

  useHeroBannersHover(bannersHoverRef, heroBannerGroups);

  return (
    <>
      <BlurSection id="about" className="mxd-section padding-top-subtitle">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-manifest pre-list">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    <div className="mxd-section-manifest__wrap wrap-text-s home-about-manifest">
                      <CommonScrollAnimated
                        className="mxd-section-manifest__controls anim-uni-in-up"
                        as="div"
                        animation="inUp"
                      >
                        <Link
                          className="home-about-blob active-cursor-accent"
                          href={about.href}
                          aria-label={about.button}
                        >
                          <span className="home-about-blob__motion" aria-hidden="true">
                            <LiquidMetalBlob />
                          </span>
                          <span className="home-about-blob__still" aria-hidden="true">
                            <Image
                              className="home-about-character home-about-character--dark"
                              alt=""
                              src="/img-temp/uploads/gibson-logo-2.png"
                              width={900}
                              height={900}
                              priority={false}
                            />
                            <Image
                              className="home-about-character home-about-character--light"
                              alt=""
                              src="/img-temp/uploads/gibson-logo-1.png"
                              width={900}
                              height={900}
                              priority={false}
                            />
                          </span>
                        </Link>
                      </CommonScrollAnimated>
                      <div className="mxd-section-manifest__text manifest-text-m">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="div"
                          animation="inUp"
                        >
                          <div ref={bannersHoverRef} className="banners-hover">
                            <span className="manifest manifest-m">
                              Gibson works at the intersection of human-centered{" "}
                              <a
                                ref={trigger1Ref}
                                className="inner-headline__trigger banners-trigger-1"
                                href="/about"
                              >
                                design &amp; technology
                              </a>
                              . He loves turning ideas into{" "}
                              <a
                                ref={trigger2Ref}
                                className="inner-headline__trigger banners-trigger-2"
                                href="/about"
                              >
                                experiences
                              </a>{" "}
                              people love using.
                            </span>
                            <div ref={heroBanner1_0} className="headline-banner-01 landscape image-01">
                              <Image alt="The Home Depot project work" src="/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg" width={640} height={960} />
                            </div>
                            <div ref={heroBanner1_1} className="headline-banner-01 portrait image-02">
                              <Image alt="CarMax product design work" src="/img-temp/uploads/case-study/carmax/gibson-cars.jpg" width={560} height={997} />
                            </div>
                            <div ref={heroBanner1_2} className="headline-banner-01 landscape image-03">
                              <Image alt="Straterra product and brand work" src="/img-temp/uploads/case-study/staterra/Stationery1.jpg" width={960} height={640} />
                            </div>
                            <div ref={heroBanner1_3} className="headline-banner-01 portrait image-04">
                              <Image alt="Straterra commercial property project" src="/img-temp/uploads/case-study/staterra/gibson-building.jpg" width={960} height={640} />
                            </div>
                            <div ref={heroBanner2_0} className="headline-banner-02 portrait image-05">
                              <Image alt="Mini Murals civic art experience" src="/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - HD.png" width={560} height={840} />
                            </div>
                            <div ref={heroBanner2_1} className="headline-banner-02 landscape image-06">
                              <Image alt="Ritual launch experience" src="/img-temp/uploads/case-study/ritual/gibson-tulum.jpg" width={640} height={853} />
                            </div>
                            <div ref={heroBanner2_2} className="headline-banner-02 portrait image-07">
                              <Image alt="Cactus Club hospitality experience" src="/img-temp/uploads/case-study/cactus-club/gibson-cactus.jpg" width={560} height={747} />
                            </div>
                            <div ref={heroBanner2_3} className="headline-banner-02 landscape image-08">
                              <Image alt="Academy Sports retail experience" src="/img-temp/uploads/case-study/academy/gibson-sports.jpg" width={640} height={960} />
                            </div>
                          </div>
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurSection>
    </>
  );
}
