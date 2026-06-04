import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import Image from "next/image";
import { CommonCardBatchAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
export default function BlogGrid() {
  return (
    <>
      <BlurSection id="posts" className="mxd-section bg-color-base padding-bottom-tag-m">
        <div className="mxd-container grid-l-container">
          <div className="mxd-posts-area">
            <div className="mxd-posts-container fullwidth-posts-container">
              {/* Regular Posts Alt Grid Start */}
              <div className="mxd-posts-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0 mxd-posts-grid__row">
                    <CommonCardBatchAnimated
                      className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-posts-grid__item animate-card-3"
                      as="div"
                      columns={3}
                    >
                      <article className="mxd-post post-simple-alt">
                        <div className="post-simple-alt__date">
                          <span className="meta-date">02 February, 2026</span>
                        </div>
                        <Link
                          className="post-simple-alt__media active-cursor-permanent"
                          data-cursor-text="Read Post"
                          href={`/lab/article/frontend-innovations-and-user-journeys`}
                        >
                          <Image
                            className=""
                            alt="Blog Preview Image"
                            src="/img-temp/uploads/case-study/wiab/gibson-robot.jpg"
                            width={1170}
                            height={800}
                          />
                        </Link>
                        <div className="post-simple-alt__caption">
                          <div className="post-simple-alt__title">
                            <h3>
                              <Link href={`/lab/article/frontend-innovations-and-user-journeys`}>
                                Frontend innovations and user journeys
                              </Link>
                            </h3>
                          </div>
                          <div className="post-simple-alt__tags">
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                UI/UX
                              </TextScramble>
                            </a>
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Development
                              </TextScramble>
                            </a>
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Insights
                              </TextScramble>
                            </a>
                          </div>
                        </div>
                      </article>
                    </CommonCardBatchAnimated>
                    <CommonCardBatchAnimated
                      className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-posts-grid__item animate-card-3"
                      as="div"
                      columns={3}
                    >
                      <article className="mxd-post post-simple-alt">
                        <div className="post-simple-alt__date">
                          <span className="meta-date">28 January, 2026</span>
                        </div>
                        <Link
                          className="post-simple-alt__media active-cursor-permanent"
                          data-cursor-text="Read Post"
                          href={`/lab/article/branding-in-creating-digital-experiences`}
                        >
                          <Image
                            className=""
                            alt="Blog Preview Image"
                            src="/img-temp/uploads/case-study/staterra/Stationery1.jpg"
                            width={1200}
                            height={1200}
                          />
                        </Link>
                        <div className="post-simple-alt__caption">
                          <div className="post-simple-alt__title">
                            <h3>
                              <Link href={`/lab/article/branding-in-creating-digital-experiences`}>
                                Branding in creating digital experiences
                              </Link>
                            </h3>
                          </div>
                          <div className="post-simple-alt__tags">
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Concept
                              </TextScramble>
                            </a>
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Editorial
                              </TextScramble>
                            </a>
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Event
                              </TextScramble>
                            </a>
                          </div>
                        </div>
                      </article>
                    </CommonCardBatchAnimated>
                    <CommonCardBatchAnimated
                      className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-posts-grid__item animate-card-3"
                      as="div"
                      columns={3}
                    >
                      <article className="mxd-post post-simple-alt">
                        <div className="post-simple-alt__date">
                          <span className="meta-date">15 January, 2026</span>
                        </div>
                        <Link
                          className="post-simple-alt__media active-cursor-permanent"
                          data-cursor-text="Read Post"
                          href={`/lab/article/designing-for-the-future-of-interactive-digital-spaces`}
                        >
                          <Image
                            className=""
                            alt="Blog Preview Image"
                            src="/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - HD.png"
                            width={1423}
                            height={800}
                          />
                        </Link>
                        <div className="post-simple-alt__caption">
                          <div className="post-simple-alt__title">
                            <h3>
                              <Link href={`/lab/article/designing-for-the-future-of-interactive-digital-spaces`}>
                                Designing for the future of interactive digital
                                spaces
                              </Link>
                            </h3>
                          </div>
                          <div className="post-simple-alt__tags">
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Midjourney
                              </TextScramble>
                            </a>
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                News
                              </TextScramble>
                            </a>
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Editorial
                              </TextScramble>
                            </a>
                          </div>
                        </div>
                      </article>
                    </CommonCardBatchAnimated>
                    <CommonCardBatchAnimated
                      className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-posts-grid__item animate-card-3"
                      as="div"
                      columns={3}
                    >
                      <article className="mxd-post post-simple-alt">
                        <div className="post-simple-alt__date">
                          <span className="meta-date">03 January, 2026</span>
                        </div>
                        <Link
                          className="post-simple-alt__media active-cursor-permanent"
                          data-cursor-text="Read Post"
                          href={`/lab/article/frontend-innovations-and-user-journeys`}
                        >
                          <Image
                            className=""
                            alt="Blog Preview Image"
                            src="/img-temp/uploads/case-study/carmax/gibson-cars.jpg"
                            width={896}
                            height={1152}
                          />
                        </Link>
                        <div className="post-simple-alt__caption">
                          <div className="post-simple-alt__title">
                            <h3>
                              <Link href={`/lab/article/frontend-innovations-and-user-journeys`}>
                                Frontend innovations and user journeys
                              </Link>
                            </h3>
                          </div>
                          <div className="post-simple-alt__tags">
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                UI/UX
                              </TextScramble>
                            </a>
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Development
                              </TextScramble>
                            </a>
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Insights
                              </TextScramble>
                            </a>
                          </div>
                        </div>
                      </article>
                    </CommonCardBatchAnimated>
                    <CommonCardBatchAnimated
                      className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-posts-grid__item animate-card-3"
                      as="div"
                      columns={3}
                    >
                      <article className="mxd-post post-simple-alt">
                        <div className="post-simple-alt__date">
                          <span className="meta-date">21 December, 2025</span>
                        </div>
                        <Link
                          className="post-simple-alt__media active-cursor-permanent"
                          data-cursor-text="Read Post"
                          href={`/lab/article/branding-in-creating-digital-experiences`}
                        >
                          <Image
                            className=""
                            alt="Blog Preview Image"
                            src="/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg"
                            width={1280}
                            height={853}
                          />
                        </Link>
                        <div className="post-simple-alt__caption">
                          <div className="post-simple-alt__title">
                            <h3>
                              <Link href={`/lab/article/branding-in-creating-digital-experiences`}>
                                Branding in creating digital experiences
                              </Link>
                            </h3>
                          </div>
                          <div className="post-simple-alt__tags">
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Concept
                              </TextScramble>
                            </a>
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Editorial
                              </TextScramble>
                            </a>
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Event
                              </TextScramble>
                            </a>
                          </div>
                        </div>
                      </article>
                    </CommonCardBatchAnimated>
                    <CommonCardBatchAnimated
                      className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-posts-grid__item animate-card-3"
                      as="div"
                      columns={3}
                    >
                      <article className="mxd-post post-simple-alt">
                        <div className="post-simple-alt__date">
                          <span className="meta-date">15 December, 2025</span>
                        </div>
                        <Link
                          className="post-simple-alt__media active-cursor-permanent"
                          data-cursor-text="Read Post"
                          href={`/lab/article/designing-for-the-future-of-interactive-digital-spaces`}
                        >
                          <Image
                            className=""
                            alt="Blog Preview Image"
                            src="/img-temp/uploads/case-study/cactus-club/gibson-cactus.jpg"
                            width={853}
                            height={1280}
                          />
                        </Link>
                        <div className="post-simple-alt__caption">
                          <div className="post-simple-alt__title">
                            <h3>
                              <Link href={`/lab/article/designing-for-the-future-of-interactive-digital-spaces`}>
                                Designing for the future of interactive digital
                                spaces
                              </Link>
                            </h3>
                          </div>
                          <div className="post-simple-alt__tags">
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Midjourney
                              </TextScramble>
                            </a>
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                News
                              </TextScramble>
                            </a>
                            <a href="#0" className="tag tag-s tag-medium">
                              <TextScramble className="mxd-scramble">
                                Editorial
                              </TextScramble>
                            </a>
                          </div>
                        </div>
                      </article>
                    </CommonCardBatchAnimated>
                  </div>
                </div>
              </div>
              {/* Regular Posts Alt Grid End */}
            </div>
          </div>
        </div>
      </BlurSection>
    </>
  );
}
