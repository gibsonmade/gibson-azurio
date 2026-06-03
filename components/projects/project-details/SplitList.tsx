import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import type { WorkProject } from "@/data/workProjects";

type SplitListProps = {
  project?: WorkProject;
};

export default function SplitList({ project }: SplitListProps) {
  const name = project?.name ?? "Gibsooon";
  const summary =
    project?.summary ??
    "A Gibson Hall case study about turning a complex business moment into a more usable digital system.";
  const industry = project?.industry ?? "Digital product and brand systems";
  const date = project?.date ?? "October 2025 - January 2026";
  const urlLabel = project?.urlLabel ?? "Gibsooon.dev";
  const outcome = project?.outcome ?? "";

  return (
    <>
      <BlurSection id="overview" className="mxd-section padding-top-subtitle padding-bottom-default">
        <div className="mxd-container grid-l-container">
          {/* Block - Split List v01 Start */}
          <div className="mxd-block">
            <div className="mxd-block-split">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item mxd-block-split__item">
                    <div className="mxd-block-split__inner">
                      <div className="mxd-block-split__subtitle pre-manifest">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          <span>/ Overview</span>
                        </CommonScrollAnimated>
                      </div>
                      <div className="mxd-block-split__manifest">
                        <CommonAnimatedText
                          as="p"
                          className="manifest manifest-s mxd-split-lines"
                          animation="splitLines"
                        >
                          {summary}
                          {outcome ? <span>{outcome}</span> : null}
                        </CommonAnimatedText>
                        <CommonScrollAnimated
                          className="btn btn-default-icon btn-default-accent slide-right anim-uni-in-up"
                          href="#0"
                          as="a"
                          animation="inUp"
                        >
                          <TextScramble className="btn-caption mxd-scramble">
                            See it live
                          </TextScramble>
                          {/* <i class="btn-icon ph-bold ph-arrow-right"></i> */}
                          <i className="btn-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              viewBox="0 0 18 18"
                            >
                              <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                            </svg>
                          </i>
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                  {/* <div class="col-12 col-xl-1"></div> */}
                  <div className="col-12 col-xl-6 mxd-grid-item mxd-block-split__item">
                    <div className="mxd-block-split__inner">
                      <div className="mxd-block-split__subtitle pre-grid">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          <span>/ Project Details</span>
                        </CommonScrollAnimated>
                      </div>
                      {/* split info list */}
                      <div className="mxd-block-split__info">
                        {/* split info item */}
                        <div className="split-info__item">
                          <div className="split-info__divider divider-top" />
                          <div className="split-info__details">
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="p"
                              animation="inUp"
                            >
                              Name:
                              <span>{name}</span>
                            </CommonScrollAnimated>
                          </div>
                          <div className="split-info__divider divider-bottom" />
                        </div>
                        {/* split info item */}
                        <div className="split-info__item">
                          <div className="split-info__divider divider-top" />
                          <div className="split-info__details">
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="p"
                              animation="inUp"
                            >
                              Client:
                              <span>{name}</span>
                            </CommonScrollAnimated>
                          </div>
                          <div className="split-info__divider divider-bottom" />
                        </div>
                        {/* split info item */}
                        <div className="split-info__item">
                          <div className="split-info__divider divider-top" />
                          <div className="split-info__details">
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="p"
                              animation="inUp"
                            >
                              Industries:
                              <span>{industry}</span>
                            </CommonScrollAnimated>
                          </div>
                          <div className="split-info__divider divider-bottom" />
                        </div>
                        {/* split info item */}
                        <div className="split-info__item">
                          <div className="split-info__divider divider-top" />
                          <div className="split-info__details">
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="p"
                              animation="inUp"
                            >
                              Date:
                              <span>{date}</span>
                            </CommonScrollAnimated>
                          </div>
                          <div className="split-info__divider divider-bottom" />
                        </div>
                        {/* split info item */}
                        <div className="split-info__item">
                          <div className="split-info__divider divider-top" />
                          <div className="split-info__details">
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="p"
                              animation="inUp"
                            >
                              Role:
                              <span>
                                {project?.role ?? urlLabel}
                              </span>
                            </CommonScrollAnimated>
                          </div>
                          <div className="split-info__divider divider-bottom" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Split List v01 End */}
        </div>
      </BlurSection>
    </>
  );
}
