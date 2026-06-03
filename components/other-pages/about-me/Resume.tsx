import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import { siteCopy } from "@/data/siteCopy";

export default function Resume() {
  const { about } = siteCopy;

  return (
    <BlurSection className="mxd-section padding-top-subtitle padding-bottom-default">
      <div className="mxd-container grid-l-container">
        <div className="mxd-block">
          <div className="mxd-block-split">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-5 mxd-grid-item mxd-block-split__item manifest-item">
                  <div className="mxd-block-split__inner">
                    <div className="mxd-block-split__subtitle pre-manifest">
                      <CommonScrollAnimated
                        className="anim-uni-in-up"
                        as="p"
                        animation="inUp"
                      >
                        <span>/ About</span>
                      </CommonScrollAnimated>
                    </div>
                    <div className="mxd-block-split__manifest">
                      <CommonAnimatedText
                        as="p"
                        className="manifest manifest-s mxd-split-lines"
                        animation="splitLines"
                      >
                        {about.introLead}
                        <span>{about.introAccent}</span>
                      </CommonAnimatedText>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-7 mxd-grid-item mxd-block-split__item manifest-item">
                  <div className="mxd-block-split__inner">
                    <div className="mxd-block-split__subtitle pre-grid">
                      <CommonScrollAnimated
                        className="anim-uni-in-up"
                        as="p"
                        animation="inUp"
                      >
                        <span>/ Work history</span>
                      </CommonScrollAnimated>
                    </div>
                    <div className="mxd-block-split__data">
                      {about.workHistory.map((item) => (
                        <div className="split-data__item" key={item.company}>
                          <div className="split-data__divider divider-top" />
                          <div className="split-data__name">
                            <CommonScrollAnimated
                              className="anim-uni-in-up"
                              as="p"
                              animation="inUp"
                            >
                              {item.years}
                              <span>{item.company}</span>
                            </CommonScrollAnimated>
                          </div>
                          <div className="split-data__descr">
                            <CommonScrollAnimated
                              className="t-medium anim-uni-in-up"
                              as="p"
                              animation="inUp"
                            >
                              {item.role}
                            </CommonScrollAnimated>
                          </div>
                          <div className="split-data__divider divider-bottom" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-0 margin-top">
                <div className="col-12 col-xl-6 mxd-grid-item">
                  <div className="mxd-block-split__subtitle pre-grid">
                    <CommonScrollAnimated
                      className="anim-uni-in-up"
                      as="p"
                      animation="inUp"
                    >
                      <span>/ Tool stack</span>
                    </CommonScrollAnimated>
                  </div>
                  <div className="tags-column">
                    {about.toolStack.map((tool) => (
                      <TextScramble
                        key={tool}
                        className="tag tag-m meta-tag mxd-scramble"
                      >
                        {tool}
                      </TextScramble>
                    ))}
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item">
                  <div className="mxd-block-split__subtitle pre-grid">
                    <CommonScrollAnimated
                      className="anim-uni-in-up"
                      as="p"
                      animation="inUp"
                    >
                      <span>/ Personal artifacts</span>
                    </CommonScrollAnimated>
                  </div>
                  <div className="tags-column">
                    {about.personalArtifacts.map((artifact) => (
                      <TextScramble
                        key={artifact}
                        className="tag tag-m meta-tag mxd-scramble"
                      >
                        {artifact}
                      </TextScramble>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlurSection>
  );
}
