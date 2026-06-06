import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import Image from "next/image";
import Link from "next/link";
import { siteCopy } from "@/data/siteCopy";

export default function Resume() {
  const { about } = siteCopy;

  return (
    <BlurSection className="mxd-section padding-bottom-default about-resume-section">
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
                        {about.resumeIntro}
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
                        <Link
                          className="split-data__item split-data__item--link"
                          href={`/work/${item.slug}`}
                          key={item.company}
                        >
                          <div className="split-data__divider divider-top" />
                          <div className="split-data__row">
                            {item.cover && (
                              <div className="split-data__thumb">
                                <Image
                                  alt={`${item.company} case study`}
                                  src={item.cover}
                                  width={120}
                                  height={80}
                                />
                              </div>
                            )}
                            <div className="split-data__body">
                              <CommonScrollAnimated
                                className="anim-uni-in-up"
                                as="div"
                                animation="inUp"
                              >
                                <span className="split-data__company">{item.company}</span>
                              </CommonScrollAnimated>
                              <CommonScrollAnimated
                                className="t-medium anim-uni-in-up"
                                as="p"
                                animation="inUp"
                              >
                                {item.role}
                              </CommonScrollAnimated>
                            </div>
                          </div>
                          <div className="split-data__divider divider-bottom" />
                        </Link>
                      ))}
                    </div>
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
