"use client";

import PinnedSection from "@/components/animations/PinnedSection";
import Link from "next/link";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import { labArticles } from "@/data/labArticles";
export default function BlogPreview() {
  const [firstArticle, secondArticle] = labArticles.slice(1, 3);

  return (
    <>
      <PinnedSection
        blurSection
        className="mxd-section padding-top-subtitle-mobile padding-bottom-default"
      >
        <PinnedSection.Inner>
          <div className="mxd-container grid-l-container">
            {/* Block - Section Title v01 Start */}
            <div className="mxd-block">
              <div className="mxd-section-title pre-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0 d-flex flex-column-reverse flex-xl-row">
                    <div className="col-12 col-xl-8 mxd-grid-item">
                      <div className="mxd-section-title__title">
                        <CommonAnimatedText
                          as="h2"
                          className="reveal-type"
                          animation="revealType"
                        >
                          Featured
                          <br />
                          news
                        </CommonAnimatedText>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-grid-item">
                      <div className="mxd-section-title__data top-controls">
                        <CommonScrollAnimated
                          className="mxd-section-title__controls pre-title justify-end anim-uni-in-up"
                          as="div"
                          animation="inUp"
                        >
                          <Link
                            className="btn btn-line btn-line-default"
                            href={`/lab`}
                          >
                            <TextScramble className="btn-caption mxd-scramble">
                              Lab overview
                            </TextScramble>
                          </Link>
                        </CommonScrollAnimated>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block - Section Title v01 End */}
            {/* Block - Blog Preview List Start */}
            <div className="mxd-block">
              <div className="mxd-blog-list">
                <Link
                  className="mxd-blog-list__item active-cursor-image active-cursor-permanent"
                  data-cursor-image={firstArticle.image}
                  data-cursor-text="Read Article"
                  href={`/lab/article/${firstArticle.slug}`}
                >
                  <div className="mxd-blog-list__divider top" />
                  <div className="container-fluid px-0 mxd-blog-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 mxd-grid-padding">
                        <div className="mxd-blog-list__meta">
                          <span className="meta-tag comma-tag">{firstArticle.tags[0]}</span>
                          <span className="meta-tag comma-tag">{firstArticle.tags[1]}</span>
                          <span className="meta-time">{firstArticle.readTime}</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-7 mxd-grid-padding">
                        <div className="mxd-blog-list__title">
                          <p>{firstArticle.title}</p>
                          <div className="mxd-blog-list__data">
                            <span className="meta-author comma-tag">
                              Gibson Hall
                            </span>
                            <span className="meta-date">{firstArticle.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-blog-list__excerpt">
                          <p className="t-medium">
                            {firstArticle.excerptLead} {firstArticle.excerptAccent}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-blog-list__divider bottom" />
                </Link>
                <Link
                  className="mxd-blog-list__item active-cursor-image active-cursor-permanent"
                  data-cursor-image={secondArticle.image}
                  data-cursor-text="Read Article"
                  href={`/lab/article/${secondArticle.slug}`}
                >
                  <div className="mxd-blog-list__divider top" />
                  <div className="container-fluid px-0 mxd-blog-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 mxd-grid-padding">
                        <div className="mxd-blog-list__meta">
                          <span className="meta-tag comma-tag">{secondArticle.tags[0]}</span>
                          <span className="meta-tag comma-tag">{secondArticle.tags[1]}</span>
                          <span className="meta-time">{secondArticle.readTime}</span>
                        </div>
                      </div>
                      <div className="col-12 col-xl-7 mxd-grid-padding">
                        <div className="mxd-blog-list__title">
                          <p>{secondArticle.title}</p>
                          <div className="mxd-blog-list__data">
                            <span className="meta-author comma-tag">
                              Gibson Hall
                            </span>
                            <span className="meta-date">{secondArticle.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-5 mxd-grid-padding">
                        <div className="mxd-blog-list__excerpt">
                          <p className="t-medium">
                            {secondArticle.excerptLead} {secondArticle.excerptAccent}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-blog-list__divider bottom" />
                </Link>
              </div>
            </div>
            {/* Block - Blog Preview List End */}
          </div>
          <PinnedSection.Trigger />
        </PinnedSection.Inner>
      </PinnedSection>
    </>
  );
}
