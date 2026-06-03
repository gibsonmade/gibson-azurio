"use client";
import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import CommonLoadAnimation, {
  CommonLoadFade,
  CommonLoadItem,
} from "@/components/animations/CommonLoadAnimation";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import CommonHeroTyped from "@/components/animations/CommonHeroTyped";
import TextScramble from "@/components/animations/TextScramble";
import { siteCopy } from "@/data/siteCopy";
export default function InnerHeadline() {
  const { about } = siteCopy;

  return (
    <CommonLoadAnimation>
      <>
        <BlurSection className="mxd-section loading-wrap">
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
                              <Link href={`/index-personal-portfolio`}>
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
                            <div className="col-12 col-xl-9 mxd-grid-item">
                              <CommonLoadItem index={0}>
                                <div className="inner-headline__title no-sup pre-subtitle-large loading-item">
                                  <CommonHeroTyped className="large animated-type">
                                    {about.typedRoles.map((role) => (
                                      <b key={role}>{role}</b>
                                    ))}
                                  </CommonHeroTyped>
                                </div>
                              </CommonLoadItem>
                              <div className="inner-headline__subtitle">
                                <CommonAnimatedText
                                  as="a"
                                  className="active-cursor-accent loading-split"
                                  animation="splitLinesLoad"
                                  data-cursor-text="Contact Gibson"
                                  href="/contact"
                                >
                                  {about.introLead} <span>{about.introAccent}</span>
                                </CommonAnimatedText>
                              </div>
                            </div>
                            <div className="col-12 col-xl-3 mxd-grid-item">
                              <div className="inner-headline__tags align-end-desktop tags-large-subtitle">
                                <CommonLoadItem index={1}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    {about.tags[0]}
                                  </TextScramble>
                                </CommonLoadItem>
                                <CommonLoadItem index={2}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    {about.tags[1]}
                                  </TextScramble>
                                </CommonLoadItem>
                                <CommonLoadItem index={3}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    {about.tags[2]}
                                  </TextScramble>
                                </CommonLoadItem>
                                <CommonLoadItem index={4}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    {about.tags[3]}
                                  </TextScramble>
                                </CommonLoadItem>
                                <CommonLoadItem index={5}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    {about.tags[4]}
                                  </TextScramble>
                                </CommonLoadItem>
                                <CommonLoadItem index={6}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    {about.tags[5]}
                                  </TextScramble>
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
            </div>
            {/* Block - Inner Headline v01 End */}
          </div>
        </BlurSection>
      </>
    </CommonLoadAnimation>
  );
}
