import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import Link from "next/link";
import Image from "next/image";
import TextScramble from "@/components/animations/TextScramble";
import FooterBackToTop from "@/components/footers/FooterBackToTop";
import {
  CommonScrollAnimated,
  CommonScrollAnimatedLink,
} from "@/components/animations/CommonScrollAnimated";
import {
  footer1BackgroundImages,
  footer1ForegroundImages,
  footer1NavColumns,
} from "@/data/footer";
import ContactCtaIcon from "@/components/common/ContactCtaIcon";
import { workProjects } from "@/data/workProjects";

const navLinkClass = "anim-uni-slide-down";
const recentCaseStudies = workProjects.slice(0, 3);

export default function Footer1() {
  const pagesBlock = footer1NavColumns[0]?.blocks[0];

  return (
    <BlurSection as="footer" className="mxd-demo-footer">
      {/* Footer Block - Background Start */}
      <div className="mxd-demo-footer__background">
        {footer1BackgroundImages.map((layer) => (
          <div key={layer.src} className={layer.wrapperClass}>
            <Image
              alt={layer.alt}
              src={layer.src}
              width={layer.width}
              height={layer.height}
            />
          </div>
        ))}
      </div>
      {/* Footer Block - Background End */}
      <div className="mxd-container grid-l-container">
        {/* Footer Block - Navigation Start */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-12 col-md-4 col-xxl-6 mxd-demo-footer__item mxd-grid-item">
                <CommonScrollAnimated
                  className="mxd-demo-footer__available anim-uni-in-up"
                  as="div"
                  animation="inUp"
                >
                  <div className="mxd-hero__mark permanent">
                    <span className="mark-icon" />
                    <span className="mark-text">Available for hire</span>
                  </div>
                </CommonScrollAnimated>
                <div className="mxd-demo-footer__slogan">
                  <CommonAnimatedText
                    as="p"
                    className="t-bold t-large t-120 mxd-split-lines-reverse"
                    animation="splitLinesReverse"
                  >
                    Gibson Hall helps founder-led teams and enterprise partners{" "}
                    <span>
                      turn complex ideas into launch-ready brands, websites,
                      and digital products.
                    </span>
                  </CommonAnimatedText>
                </div>
                <CommonScrollAnimated
                  className="mxd-demo-footer__btn anim-uni-in-up"
                  as="div"
                  animation="inUp"
                >
                  <Link
                    className="btn btn-default-icon-small btn-default-fullwidth-mobile btn-default-outline slide-right-up"
                    href="/work"
                  >
                    <TextScramble className="btn-caption mxd-scramble">
                      View work
                    </TextScramble>
                    {/* <i class="btn-icon ph-bold ph-arrow-right"></i> */}
                    <i className="btn-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 18 18"
                      >
                        <path d="M18,0v14.4h-3.6v-7.2h-3.6v-3.6H3.6V0h14.4ZM7.2,10.8h3.6v-3.6h-3.6s0,3.6,0,3.6ZM3.6,14.4h3.6v-3.6h-3.6v3.6ZM0,18h3.6v-3.6H0v3.6Z" />
                      </svg>
                    </i>
                  </Link>
                  <a
                    className="btn btn-default-icon-small btn-default-fullwidth-mobile btn-default-accent slide-right"
                    href="/contact"
                    aria-label="Say hi!"
                  >
                    <TextScramble className="btn-caption mxd-scramble">
                      Say hi!
                    </TextScramble>
                    <i className="btn-icon">
                      <ContactCtaIcon />
                    </i>
                  </a>
                </CommonScrollAnimated>
              </div>
              <div className="col-12 col-md-2 col-xxl-2 mxd-demo-footer__item mxd-grid-item">
                <nav className="mxd-demo-footer__nav">
                  {pagesBlock ? (
                    <div className="mxd-demo-footer-nav__block">
                      <div className="mxd-footer-nav02__title">
                        <CommonScrollAnimated
                          className="footer-data anim-uni-slide-down"
                          as="p"
                          animation="slideDownLine"
                        >
                          <span>{pagesBlock.title}</span>
                        </CommonScrollAnimated>
                      </div>
                      <div className="mxd-footer-nav02__list small">
                        <ul>
                          {pagesBlock.links.map((link) => (
                            <li key={`${pagesBlock.title}-${link.href}-${link.label}`}>
                              <CommonScrollAnimatedLink
                                className={navLinkClass}
                                href={link.href}
                                animation="slideDownLine"
                              >
                                <span>{link.label}</span>
                              </CommonScrollAnimatedLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </nav>
              </div>
              <div className="col-12 col-md-6 col-xxl-4 mxd-demo-footer__item mxd-grid-item">
                <div className="mxd-demo-footer__promo">
                  <div className="mxd-footer-nav02__block">
                    <div className="mxd-footer-nav02__title">
                      <CommonScrollAnimated
                        className="footer-data anim-uni-slide-down"
                        as="p"
                        animation="slideDownLine"
                      >
                        <span>/ Made by Gibson</span>
                      </CommonScrollAnimated>
                    </div>
                    <div className="mxd-footer-nav02__list">
                      <div className="mxd-footer-promo__list">
                        {recentCaseStudies.map((project) => (
                          <Link
                            key={project.slug}
                            className="mxd-footer-promo__item"
                            href={`/work/${project.slug}`}
                          >
                            <Image
                              className="mxd-footer-promo__icon mxd-footer-promo__thumb"
                              alt={`${project.name} case study thumbnail`}
                              src={project.images.cover}
                              width={160}
                              height={120}
                            />
                            <p className="t-medium t-bold mxd-footer-promo__link mxd-footer-promo__link--compact mxd-split-lines-reverse">
                              <span className="mxd-footer-promo__link-summary">
                                {project.summary}
                              </span>
                            </p>
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
        {/* Footer Block - Navigation End */}
        {/* Footer Block - Controls Start */}
        <div className="mxd-block">
          <div className="container-fluid p-0">
            <div className="row g-0">
              {/* <div class="col-12 col-xl-6 mxd-footer__item"></div> */}
              <div className="col-12 mxd-footer__item mxd-grid-item">
                <div className="mxd-footer__controls-middle controls-landing caption-small">
                  <CommonScrollAnimated
                    className="anim-uni-slide-down"
                    as="div"
                    animation="slideDownLine"
                  >
                    <FooterBackToTop />
                  </CommonScrollAnimated>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Controls End */}
        {/* Footer Block - Fullwidth Text Start */}
        <div className="mxd-block">
          <div className="mxd-footer__fw-mark mxd-grid-item">
            <CommonScrollAnimated
              className="mxd-footer__planet01 anim-uni-in-up"
              as="div"
              animation="inUp"
            >
              <Image
                className="mxd-move-slow"
                alt="Gibsooon Footer Decoration Image"
                src="/img-temp/demo/planet-01.webp"
                width={400}
                height={404}
              />
            </CommonScrollAnimated>
            <div className="fw-mark__wrap">
              <Link
                className="fw-mark__content small justify-content-center"
                href="/"
                aria-label="Gibsooon Portfolio"
              >
                <CommonAnimatedText
                  as="span"
                  className="anim-uni-chars footer-wordmark"
                  animation="animChars"
                >
                  Gibsooon
                </CommonAnimatedText>
              </Link>
            </div>
            <CommonScrollAnimated
              className="mxd-footer__planet02 anim-uni-in-up"
              as="div"
              animation="inUp"
            >
              <Image
                className="mxd-move"
                alt="Gibsooon Footer Decoration Image"
                src="/img-temp/demo/planet-02.webp"
                width={250}
                height={255}
              />
            </CommonScrollAnimated>
          </div>
        </div>
        {/* Footer Block - Fullwidth Text End */}
      </div>
      {/* Footer Block - Foreground Start */}
      <div className="mxd-demo-footer__foreground">
        {footer1ForegroundImages.map((layer) => (
          <div key={layer.src} className={layer.wrapperClass}>
            <Image
              alt={layer.alt}
              src={layer.src}
              width={layer.width}
              height={layer.height}
            />
          </div>
        ))}
      </div>
      {/* Footer Block - Foreground End */}
      <div className="mxd-container grid-l-container">
        {/* Footer Block - Data Start */}
        <div className="mxd-block">
          <div className="mxd-footer__data caption-small">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-4 col-xxl-6 mxd-footer__item mxd-grid-item">
                  <CommonScrollAnimated
                    className="mxd-footer__data-item anim-uni-fade-in"
                    as="div"
                    animation="fadeIn"
                  >
                    <p className="footer-data bright">
                      <span>
                        Copyright Gibsooon. All rights reserved.{" "}
                        <Link href="/credits">Credits</Link>
                      </span>
                    </p>
                  </CommonScrollAnimated>
                </div>
                <div className="col-12 col-xl-8 col-xxl-6 mxd-footer__item">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-6 mxd-grid-item">
                        <CommonScrollAnimated
                          className="mxd-footer__data-item anim-uni-fade-in"
                          as="div"
                          animation="fadeIn"
                        >
                          <p className="footer-data bright">
                            <span>
                              Digital systems by&nbsp;
                              <Link
                                href="/"
                              >
                                <TextScramble className="mxd-scramble">
                                  Gibsooon
                                </TextScramble>
                              </Link>
                            </span>
                          </p>
                        </CommonScrollAnimated>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-item">
                        <CommonScrollAnimated
                          className="mxd-footer__data-item anim-uni-fade-in justify-end"
                          as="div"
                          animation="fadeIn"
                        >
                          <p className="footer-data bright">
                            <span>©{new Date().getFullYear()}</span>
                          </p>
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Block - Data End */}
      </div>
    </BlurSection>
  );
}
