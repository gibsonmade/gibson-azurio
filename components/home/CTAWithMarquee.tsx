"use client";

import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import CommonGravitySection from "@/components/animations/CommonGravitySection";
import CommonGravityPermanentObjects from "@/components/animations/CommonGravityPermanentObjects";
import TextScramble from "@/components/animations/TextScramble";
import { siteCopy } from "@/data/siteCopy";
export default function CTAWithMarquee() {
  const { cta } = siteCopy.home;

  return (
    <>
      <BlurSection className="mxd-section home-cta-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-block">
            <CommonGravitySection>
              <div className="mxd-promo mxd-gravity-section transparent home-simple-cta">
                <div className="mxd-promo__wrap">
                  <CommonGravityPermanentObjects />
                  <div className="mxd-promo__content">
                    <CommonScrollAnimated
                      className="mxd-promo__btngroup anim-uni-in-up"
                      as="div"
                      animation="inUp"
                    >
                      <Link
                        className="btn btn-line btn-line-opposite"
                        href={cta.href}
                      >
                        <TextScramble className="btn-caption mxd-scramble">
                          {cta.button}
                        </TextScramble>
                      </Link>
                    </CommonScrollAnimated>
                    <div className="mxd-promo__caption">
                      <Link
                        className="active-cursor-accent"
                        data-cursor-text={cta.cursor}
                        href={cta.href}
                      >
                        <CommonAnimatedText
                          as="h2"
                          className="mxd-split-lines opposite"
                          animation="splitLines"
                        >
                          {cta.headline}
                        </CommonAnimatedText>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CommonGravitySection>
          </div>
        </div>
      </BlurSection>
    </>
  );
}
