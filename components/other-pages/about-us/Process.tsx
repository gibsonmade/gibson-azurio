import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import Link from "next/link";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
export default function Process() {
  return (
    <>
      <BlurSection id="process" className="mxd-section padding-top-manifest-m padding-bottom-tag-m-desktop">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-manifest pre-points">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    <div className="mxd-section-manifest__wrap wrap-text-m">
                      <div className="mxd-section-manifest__text manifest-text-m">
                        <Link data-cursor-text="View Work" href="/work">
                          <CommonAnimatedText
                            as="span"
                            className="manifest manifest-m mxd-split-lines active-cursor-accent"
                            animation="splitLines"
                          >
                            How I work: clarify the moment, design the path, then build toward launch.
                            <span>
                              The work starts by making the messy parts explicit, then turning them into decisions, interfaces, and systems people can actually use.
                            </span>
                          </CommonAnimatedText>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mxd-block">
            <div className="mxd-process-points">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  {/* Clarify */}
                  <div className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item">
                    <CommonScrollAnimated className="mxd-process-points__divider top anim-uni-clip-in" as="div" animation="clipIn" />
                    <CommonScrollAnimated className="mxd-process-points__title anim-uni-in-up" as="div" animation="inUp">
                      <div className="mxd-process-points__icon"><i className="ph ph-crosshair" /></div>
                      <p>Clarify</p>
                    </CommonScrollAnimated>
                    <div className="mxd-process-points__descr">
                      <CommonAnimatedText as="p" className="t-medium mxd-split-lines" animation="splitLines">
                        Name the business moment, the user problem, and the decision points that need to become clear before the team commits.
                      </CommonAnimatedText>
                    </div>
                    <CommonScrollAnimated className="mxd-process-points__time anim-uni-in-up" as="div" animation="inUp">
                      <span className="tag tag-m meta-time">Discovery · Research · Strategy</span>
                    </CommonScrollAnimated>
                  </div>
                  {/* Design */}
                  <div className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item">
                    <CommonScrollAnimated className="mxd-process-points__divider top anim-uni-clip-in" as="div" animation="clipIn" />
                    <CommonScrollAnimated className="mxd-process-points__title anim-uni-in-up" as="div" animation="inUp">
                      <div className="mxd-process-points__icon"><i className="ph ph-bezier-curve" /></div>
                      <p>Design</p>
                    </CommonScrollAnimated>
                    <div className="mxd-process-points__descr">
                      <CommonAnimatedText as="p" className="t-medium mxd-split-lines" animation="splitLines">
                        Shape the experience into brand systems, product flows, content, and visual patterns that earn trust and guide action.
                      </CommonAnimatedText>
                    </div>
                    <CommonScrollAnimated className="mxd-process-points__time anim-uni-in-up" as="div" animation="inUp">
                      <span className="tag tag-m meta-time">Figma · Brand systems · Product UX</span>
                    </CommonScrollAnimated>
                  </div>
                  {/* Launch */}
                  <div className="col-12 col-xl-4 mxd-process-points__item mxd-grid-item">
                    <CommonScrollAnimated className="mxd-process-points__divider top anim-uni-clip-in" as="div" animation="clipIn" />
                    <CommonScrollAnimated className="mxd-process-points__title anim-uni-in-up" as="div" animation="inUp">
                      <div className="mxd-process-points__icon"><i className="ph ph-codesandbox-logo" /></div>
                      <p>Launch</p>
                    </CommonScrollAnimated>
                    <div className="mxd-process-points__descr">
                      <CommonAnimatedText as="p" className="t-medium mxd-split-lines" animation="splitLines">
                        Build the useful version, connect the right workflows, and create a launch path the team can maintain and improve.
                      </CommonAnimatedText>
                    </div>
                    <CommonScrollAnimated className="mxd-process-points__time anim-uni-in-up" as="div" animation="inUp">
                      <span className="tag tag-m meta-time">Next.js · AI workflows · Iteration</span>
                    </CommonScrollAnimated>
                    <CommonScrollAnimated className="mxd-process-points__divider bottom anim-uni-clip-in" as="div" animation="clipIn" />
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
