import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import Link from "next/link";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import { siteCopy } from "@/data/siteCopy";
export default function About() {
  const { about } = siteCopy.home;

  return (
    <>
      <BlurSection id="about" className="mxd-section padding-top-subtitle">
        <div className="mxd-container grid-l-container">
          {/* Block - Section Manifest Small Start */}
          <div className="mxd-block">
            <div className="mxd-section-manifest pre-list">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    <div className="mxd-section-manifest__wrap wrap-text-s home-about-manifest">
                      <CommonScrollAnimated
                        className="mxd-section-manifest__controls anim-uni-in-up"
                        as="div"
                        animation="inUp"
                      >
                        <Link
                          className="btn btn-line btn-line-default"
                          href={about.href}
                        >
                          <TextScramble className="btn-caption mxd-scramble">
                            {about.button}
                          </TextScramble>
                        </Link>
                      </CommonScrollAnimated>
                      <div className="mxd-section-manifest__text manifest-text-m">
                        <Link data-cursor-text={about.cursor} href={about.href}>
                          <CommonAnimatedText
                            as="span"
                            className="manifest manifest-m mxd-split-lines active-cursor-accent"
                            animation="splitLines"
                          >
                            {about.lead}
                            {" "}
                            <span>{about.accent}</span>
                          </CommonAnimatedText>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Section Manifest Small End */}
        </div>
      </BlurSection>
    </>
  );
}
