import BlurSection from "@/components/animations/BlurSection";
import Image from "next/image";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";

const QUOTE_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 4.4 3.3">
    <path d="M1.1,1.1v2.2H0V1.1h1.1ZM1.1,1.1V0h1.1v1.1h-1.1ZM3.3,1.1v2.2h-1.1V1.1h1.1ZM4.4,0v1.1h-1.1V0h1.1Z" />
  </svg>
);

export default function TestimonialsSticky() {
  return (
    <>
      <BlurSection className="mxd-section padding-top-title">
        <div className="mxd-container grid-l-container">
          <div className="mxd-testimonials-sticky">
            <div className="mxd-testimonials-sticky__static">
              <div className="mxd-testimonials-sticky__title">
                <div className="mxd-block">
                  <div className="mxd-section-title">
                    <div className="container-fluid p-0">
                      <div className="row g-0 d-flex justify-content-center">
                        <div className="col-12 mxd-grid-item">
                          <div className="mxd-section-title__title centered">
                            <CommonAnimatedText as="h2" className="reveal-type" animation="revealType">
                              A few words
                              <br />
                              from clients
                            </CommonAnimatedText>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mxd-testimonials-sticky__scroll">
              <div className="mxd-block">
                <div className="mxd-testimonials-sticky__cards">

                  {/* Row 1: Steve Allman + Olive Randall */}
                  <div className="mxd-testimonials-sticky__row">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 col-xl-7 mxd-grid-item mxd-testimonials-sticky__column margin-bottom-mobile">
                          <div className="mxd-testimonials-card">
                            <div className="mxd-testimonials-card__controls">
                              <div className="mxd-testimonials-card__quote">{QUOTE_ICON}</div>
                            </div>
                            <div className="mxd-testimonials-card__content">
                              <p className="mxd-testimonials-card__descr">
                                Working with Gibson has been such a breeze.{" "}
                                <span>We couldn&apos;t have launched our app without his design and thought leadership.</span>
                              </p>
                            </div>
                            <div className="mxd-testimonials-card__author">
                              <div className="mxd-testimonials-card__photo">
                                <Image alt="Steve Allman" src="/img-temp/avatars/300x300_ava-01.webp" width={300} height={300} />
                              </div>
                              <div className="mxd-testimonials-card__data">
                                <p className="mxd-testimonials-card__name">Steve Allman</p>
                                <p className="mxd-testimonials-card__position">
                                  CEO at{" "}
                                  <a href="#">
                                    <TextScramble className="mxd-scramble">MeddyPay</TextScramble>
                                  </a>
                                  {" "}· Houston, TX
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="mxd-testimonials-image justify-end has-padding-top">
                            <CommonScrollAnimated className="mxd-testimonials-image__wrap mxd-clip-image" as="div" animation="clipImage">
                              <Image alt="MeddyPay project" src="/img-temp/avatars/800x800_ava-01.webp" width={800} height={800} />
                            </CommonScrollAnimated>
                          </div>
                        </div>
                        <div className="col-12 col-xl-5 mxd-grid-item mxd-testimonials-sticky__column">
                          <div className="mxd-testimonials-card fullheight">
                            <div className="mxd-testimonials-card__content">
                              <div className="mxd-testimonials-card__controls">
                                <div className="mxd-testimonials-card__quote">{QUOTE_ICON}</div>
                              </div>
                              <p className="mxd-testimonials-card__descr">
                                Gibson brought my vision to life{" "}
                                <span>with the logo and website he made for my pilates studio.</span>
                              </p>
                            </div>
                            <div className="mxd-testimonials-card__author">
                              <div className="mxd-testimonials-card__photo">
                                <Image alt="Olive Randall" src="/img-temp/avatars/300x300_ava-02.webp" width={300} height={300} />
                              </div>
                              <div className="mxd-testimonials-card__data">
                                <p className="mxd-testimonials-card__name">Olive Randall</p>
                                <p className="mxd-testimonials-card__position">
                                  CEO/Founder at{" "}
                                  <a href="#">
                                    <TextScramble className="mxd-scramble">Ritual</TextScramble>
                                  </a>
                                  {" "}· Houston, TX
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: image + Jacob Sullivan + image */}
                  <div className="mxd-testimonials-sticky__row">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 col-xl-3 mxd-grid-item mxd-testimonials-sticky__column margin-bottom-mobile">
                          <div className="mxd-testimonials-image justify-end">
                            <CommonScrollAnimated className="mxd-testimonials-image__wrap mxd-clip-image" as="div" animation="clipImage">
                              <Image alt="Staterra project" src="/img-temp/avatars/800x800_ava-02.webp" width={800} height={800} />
                            </CommonScrollAnimated>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 mxd-grid-item mxd-testimonials-sticky__column">
                          <div className="mxd-testimonials-card">
                            <div className="mxd-testimonials-card__controls">
                              <div className="mxd-testimonials-card__quote">{QUOTE_ICON}</div>
                            </div>
                            <div className="mxd-testimonials-card__content">
                              <p className="mxd-testimonials-card__descr">
                                I was referred to Gibson for a website{" "}
                                <span>and ended up gaining a design and technology partner for several of my other projects.</span>
                              </p>
                            </div>
                            <div className="mxd-testimonials-card__author">
                              <div className="mxd-testimonials-card__photo">
                                <Image alt="Jacob Sullivan" src="/img-temp/avatars/300x300_ava-03.webp" width={300} height={300} />
                              </div>
                              <div className="mxd-testimonials-card__data">
                                <p className="mxd-testimonials-card__name">Jacob Sullivan</p>
                                <p className="mxd-testimonials-card__position">
                                  CEO at{" "}
                                  <a href="#">
                                    <TextScramble className="mxd-scramble">Staterra</TextScramble>
                                  </a>
                                  {" "}· Houston, TX
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-3 mxd-grid-item mxd-testimonials-sticky__column margin-bottom-mobile">
                          <div className="mxd-testimonials-image justify-start has-padding-top">
                            <CommonScrollAnimated className="mxd-testimonials-image__wrap mxd-clip-image" as="div" animation="clipImage">
                              <Image alt="Project work" src="/img-temp/avatars/800x800_ava-03.webp" width={800} height={800} />
                            </CommonScrollAnimated>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Aaron Peterson + image */}
                  <div className="mxd-testimonials-sticky__row">
                    <div className="container-fluid p-0">
                      <div className="row g-0">
                        <div className="col-12 col-xl-6 mxd-grid-item mxd-testimonials-sticky__column margin-bottom-mobile has-padding-bottom">
                          <div className="mxd-testimonials-card fullheight">
                            <div className="mxd-testimonials-card__content">
                              <div className="mxd-testimonials-card__controls">
                                <div className="mxd-testimonials-card__quote">{QUOTE_ICON}</div>
                              </div>
                              <p className="mxd-testimonials-card__descr">
                                Gibson helped me automate my business{" "}
                                <span>and improved my app significantly since joining.</span>
                              </p>
                            </div>
                            <div className="mxd-testimonials-card__author">
                              <div className="mxd-testimonials-card__photo">
                                <Image alt="Aaron Peterson" src="/img-temp/avatars/300x300_ava-04.webp" width={300} height={300} />
                              </div>
                              <div className="mxd-testimonials-card__data">
                                <p className="mxd-testimonials-card__name">Aaron Peterson</p>
                                <p className="mxd-testimonials-card__position">
                                  CEO at{" "}
                                  <a href="#">
                                    <TextScramble className="mxd-scramble">Cactus Club</TextScramble>
                                  </a>
                                  {" "}· Austin, TX
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6 mxd-grid-item mxd-testimonials-sticky__column has-padding-top">
                          <div className="mxd-testimonials-image justify-start">
                            <CommonScrollAnimated className="mxd-testimonials-image__wrap mxd-clip-image" as="div" animation="clipImage">
                              <Image alt="Cactus Club project" src="/img-temp/avatars/800x800_ava-04.webp" width={800} height={800} />
                            </CommonScrollAnimated>
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
      </BlurSection>
    </>
  );
}
