"use client";

import PinnedSection from "@/components/animations/PinnedSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import MxdStatsLineItem from "@/components/animations/MxdStatsLineItem";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import { siteCopy } from "@/data/siteCopy";
export default function StatisticsLines() {
  const stats = [
    ["250+", "Mini Murals public artworks brought into a digital discovery system"],
    ["40+", "Houston artists represented through the Mini Murals initiative"],
    ["1M+", "Monthly visitors supported by the CarMax sell-your-car journey"],
    ["10k+", "Recommended starting point for end-to-end launch engagements"],
  ];

  return (
    <>
      <PinnedSection
        blurSection
        className="mxd-section padding-top-number padding-bottom-tag-m"
      >
        <PinnedSection.Inner>
          <div className="mxd-container grid-l-container">
            <div className="mxd-block">
              <div className="mxd-section-title">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-section-title__data top-number">
                        <CommonScrollAnimated
                          className="mxd-section-title__number pre-manifest anim-uni-in-up"
                          as="div"
                          animation="inUp"
                        >
                          <TextScramble className="title-number mxd-scramble">
                            /01
                          </TextScramble>
                        </CommonScrollAnimated>
                      </div>
                    </div>
                    <div className="col-12 col-xl-8 mxd-grid-item">
                      {/* Manifest Start */}
                      <div className="mxd-section-title__manifest title-manifest-s no-padding-mobile">
                        <a data-cursor-text="Contact Gibson" href="/contact">
                          <CommonAnimatedText
                            as="span"
                            className="manifest manifest-s mxd-split-lines active-cursor-accent"
                            animation="splitLines"
                          >
                            {siteCopy.about.introLead}
                            <span>{siteCopy.about.introAccent}</span>
                          </CommonAnimatedText>
                        </a>
                      </div>
                      {/* Manifest End */}
                      {/* Statistics Lines Start */}
                      <div className="mxd-stats-lines manifest-title">
                        {/* statistics single item */}
                        {stats.map(([value, label], index) => (
                          <MxdStatsLineItem key={label}>
                            <div className="mxd-stats-lines__number">
                              <p id={`stats-counter-${index + 1}`}>{value}</p>
                            </div>
                            <div className="mxd-stats-lines__caption">
                              <p>{label}</p>
                            </div>
                          </MxdStatsLineItem>
                        ))}
                      </div>
                      {/* Statistics Lines End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PinnedSection.Trigger />
        </PinnedSection.Inner>
      </PinnedSection>
    </>
  );
}
