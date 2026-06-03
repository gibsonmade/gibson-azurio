"use client";
import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import CommonLoadAnimation, {
  CommonLoadFade,
  CommonLoadItem,
} from "@/components/animations/CommonLoadAnimation";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import { siteCopy } from "@/data/siteCopy";
export default function InnerHeadline() {
  const tags = siteCopy.about.tags;

  return (
    <CommonLoadAnimation>
      <>
        <BlurSection className="mxd-section">
          <div className="mxd-container grid-l-container">
            {/* Block - Inner Headline v02 Start */}
            <div className="mxd-block loading-wrap">
              <div className="inner-headline margin-bottom-title-medium">
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
                            <span className="current-item">Works </span>
                          </div>
                        </div>
                      </CommonLoadFade>
                    </div>
                    <div className="col-12">
                      {/* content */}
                      <div className="inner-headline__content has-medium-title">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 col-xl-9 mxd-grid-item">
                              <div className="inner-headline__title">
                                <CommonAnimatedText
                                  as="h1"
                                  className="medium loading-split"
                                  animation="splitLinesLoad"
                                >
                                  Serious projects <span>for serious moments</span>
                                </CommonAnimatedText>
                              </div>
                              {/* <div class="inner-headline__subtitle">
                              <p>Creative solutions <span>made simple</span></p>
                            </div> */}
                            </div>
                            <div className="col-12 col-xl-3 mxd-grid-item">
                              <div className="inner-headline__tags align-end-desktop tags-medium-title">
                                <CommonLoadItem index={0}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    {tags[0]}
                                  </TextScramble>
                                </CommonLoadItem>
                                <CommonLoadItem index={1}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    {tags[1]}
                                  </TextScramble>
                                </CommonLoadItem>
                                <CommonLoadItem index={2}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    {tags[2]}
                                  </TextScramble>
                                </CommonLoadItem>
                                <CommonLoadItem index={3}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    {tags[3]}
                                  </TextScramble>
                                </CommonLoadItem>
                                <CommonLoadItem index={4}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    {tags[4]}
                                  </TextScramble>
                                </CommonLoadItem>
                                <CommonLoadItem index={5}>
                                  <TextScramble className="tag tag-m meta-tag mxd-scramble loading-item">
                                    {tags[5]}
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
            {/* Block - Inner Headline v02 End */}
          </div>
        </BlurSection>
      </>
    </CommonLoadAnimation>
  );
}
