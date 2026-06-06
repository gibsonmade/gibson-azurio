"use client";

import PinnedSection from "@/components/animations/PinnedSection";
import Link from "next/link";
import Image from "next/image";
import {
  CommonScrollAnimated,
  CommonCardBatchAnimated,
} from "@/components/animations/CommonScrollAnimated";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import type { LabArticle } from "@/data/labArticles";

type MoreOnTopicProps = {
  articles: LabArticle[];
};

export default function MoreOnTopic({ articles }: MoreOnTopicProps) {
  if (articles.length === 0) return null;

  return (
    <PinnedSection
      blurSection
      className="mxd-section padding-top-subtitle-mobile padding-bottom-preview"
    >
      <PinnedSection.Inner>
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-title pre-subtitle-s">
              <div className="container-fluid p-0">
                <div className="row g-0 d-flex flex-column-reverse flex-xl-row">
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title">
                      <CommonAnimatedText
                        as="h2"
                        className="reveal-type"
                        animation="revealType"
                      >
                        More articles
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
                        <Link className="btn btn-line btn-line-default" href="/lab">
                          <TextScramble className="btn-caption mxd-scramble">
                            All Articles
                          </TextScramble>
                        </Link>
                      </CommonScrollAnimated>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-block">
            <div className="mxd-blog-grid">
              <div className="container-fluid p-0">
                <div className="row g-0 mxd-blog-grid__gallery">
                  {articles.map((article) => (
                    <CommonCardBatchAnimated
                      key={article.slug}
                      className="col-12 col-lg-4 mxd-blog-item animate-card-3"
                      as="div"
                      columns={3}
                    >
                      <div className="mxd-blog-item__date">
                        <span className="meta-date">{article.date}</span>
                      </div>
                      <Link
                        className="mxd-blog-item__media active-cursor-permanent"
                        data-cursor-text="Read Post"
                        href={`/lab/article/${article.slug}`}
                      >
                        <Image
                          alt={article.imageAlt}
                          src={article.image}
                          width={article.imageWidth}
                          height={article.imageHeight}
                        />
                      </Link>
                      <div className="mxd-blog-item__caption">
                        <div className="mxd-blog-item__title">
                          <Link
                            className="blog-name-m"
                            href={`/lab/article/${article.slug}`}
                          >
                            {article.title}
                          </Link>
                        </div>
                        <div className="mxd-blog-item__tags">
                          {article.tags.slice(0, 3).map((tag) => (
                            <TextScramble
                              key={tag}
                              className="tag tag-s tag-medium mxd-scramble"
                            >
                              {tag}
                            </TextScramble>
                          ))}
                        </div>
                      </div>
                    </CommonCardBatchAnimated>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <PinnedSection.Trigger />
      </PinnedSection.Inner>
    </PinnedSection>
  );
}
