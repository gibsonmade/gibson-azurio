"use client";
import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import CommonLoadAnimation, {
  CommonLoadFade,
  CommonLoadItem,
} from "@/components/animations/CommonLoadAnimation";
import CommonHeroTyped from "@/components/animations/CommonHeroTyped";
import TextScramble from "@/components/animations/TextScramble";
import { siteCopy } from "@/data/siteCopy";
export default function InnerHeadline() {
  const { about } = siteCopy;

  return (
    <CommonLoadAnimation>
      <>
        <BlurSection className="mxd-section loading-wrap about-hero-section">
          <div className="mxd-container grid-l-container">
            {/* Block - Inner Headline v01 Start */}
            <div className="mxd-block">
              <div className="inner-headline margin-bottom-subtitle">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 mxd-grid-item">
                      {/* breadcrumbs */}
                      <CommonLoadFade index={0}>
                        <div className="inner-headline__breadcrumbs loading-fade">
                          <div className="breadcrumbs__nav">
                            <span>
                              <Link href={`/`}>
                                <TextScramble className="mxd-scramble">
                                  Home
                                </TextScramble>
                              </Link>
                            </span>
                            <span className="current-item">About Me </span>
                          </div>
                        </div>
                      </CommonLoadFade>
                    </div>
                    <div className="col-12">
                      {/* content */}
                      <div className="inner-headline__content has-large-title">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 mxd-grid-item">
                              <CommonLoadItem index={0}>
                                <div className="inner-headline__title no-sup loading-item">
                                  <CommonHeroTyped className="large animated-type">
                                    {about.typedRoles.map((role) => (
                                      <b key={role}>{role}</b>
                                    ))}
                                  </CommonHeroTyped>
                                </div>
                              </CommonLoadItem>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Inner Headline v01 End */}
          </div>
        </BlurSection>
      </>
    </CommonLoadAnimation>
  );
}
