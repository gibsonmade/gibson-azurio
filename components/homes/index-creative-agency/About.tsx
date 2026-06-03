"use client";

import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import Image from "next/image";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
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
                          className="btn btn-line btn-line-default"
                          href={about.href}
                        >
                          <TextScramble className="btn-caption mxd-scramble">
                            {about.button}
                          </TextScramble>
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
                              <Image alt="Gibson Hall — design work" src="/img-temp/illustrations/about-us-01.webp" width={640} height={480} />
                            </div>
                            <div ref={heroBanner1_1} className="headline-banner-01 portrait image-02">
                              <Image alt="Gibson Hall — design work" src="/img-temp/illustrations/about-us-02.webp" width={560} height={700} />
                            </div>
                            <div ref={heroBanner1_2} className="headline-banner-01 landscape image-03">
                              <Image alt="Gibson Hall — design work" src="/img-temp/illustrations/about-us-03.webp" width={640} height={480} />
                            </div>
                            <div ref={heroBanner1_3} className="headline-banner-01 portrait image-04">
                              <Image alt="Gibson Hall — design work" src="/img-temp/illustrations/about-us-04.webp" width={560} height={700} />
                            </div>
                            <div ref={heroBanner2_0} className="headline-banner-02 portrait image-05">
                              <Image alt="Gibson Hall — user experiences" src="/img-temp/illustrations/about-us-05.webp" width={560} height={700} />
                            </div>
                            <div ref={heroBanner2_1} className="headline-banner-02 landscape image-06">
                              <Image alt="Gibson Hall — user experiences" src="/img-temp/illustrations/about-us-06.webp" width={640} height={480} />
                            </div>
                            <div ref={heroBanner2_2} className="headline-banner-02 portrait image-07">
                              <Image alt="Gibson Hall — user experiences" src="/img-temp/illustrations/about-us-07.webp" width={560} height={700} />
                            </div>
                            <div ref={heroBanner2_3} className="headline-banner-02 landscape image-08">
                              <Image alt="Gibson Hall — user experiences" src="/img-temp/illustrations/about-us-08.webp" width={640} height={480} />
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
