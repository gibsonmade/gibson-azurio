import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import type { WorkProject } from "@/data/workProjects";

type SplitList2Props = {
  project?: WorkProject;
};

export default function SplitList2({ project }: SplitList2Props) {
  const services = project?.services.slice(0, 3) ?? [];
  const serviceDetails = project?.serviceDetails ?? [];

  return (
    <>
      <BlurSection className="mxd-section padding-top-subtitle padding-bottom-default">
        <div className="mxd-container grid-l-container">
          {/* Block - Split List v02 Start */}
          <div className="mxd-block">
            <div className="mxd-block-split">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item mxd-block-split__item manifest-item">
                    <div className="mxd-block-split__inner">
                      <div className="mxd-block-split__subtitle pre-manifest">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          <span>/ Challenge</span>
                        </CommonScrollAnimated>
                      </div>
                      <div className="mxd-block-split__manifest">
                        <CommonAnimatedText
                          as="p"
                          className="manifest manifest-s mxd-split-lines"
                          animation="splitLines"
                        >
                          {project?.challenge ??
                            "Gibson helped shape a clearer digital path from early strategy to usable execution."}
                          {project?.collaborationContext ? (
                            <span>{project.collaborationContext}</span>
                          ) : null}
                        </CommonAnimatedText>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item mxd-block-split__item manifest-item">
                    <div className="mxd-block-split__inner">
                      <div className="mxd-block-split__subtitle pre-grid">
                        <CommonScrollAnimated
                          className="anim-uni-in-up"
                          as="p"
                          animation="inUp"
                        >
                          <span>/ Provided Services</span>
                        </CommonScrollAnimated>
                      </div>
                      {/* split data list */}
                      <div className="mxd-block-split__data">
                        {services.map((service, index) => (
                          <div className="split-data__item" key={service}>
                            <div className="split-data__divider divider-top" />
                            <div className="split-data__name">
                              <CommonScrollAnimated
                                className="anim-uni-in-up"
                                as="p"
                                animation="inUp"
                              >
                                {service}
                              </CommonScrollAnimated>
                            </div>
                            <div className="split-data__descr">
                              <CommonScrollAnimated
                                className="t-medium anim-uni-in-up"
                                as="p"
                                animation="inUp"
                              >
                                {serviceDetails[index] ??
                                  "This work helped connect strategy, execution, and a clearer launch path."}
                              </CommonScrollAnimated>
                            </div>
                            <div className="split-data__divider divider-bottom" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Split List v02 End */}
        </div>
      </BlurSection>
    </>
  );
}
