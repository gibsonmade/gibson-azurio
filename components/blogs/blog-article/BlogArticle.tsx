"use client";

import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import Image from "next/image";
import CommonLoadAnimation, {
  CommonLoadFade,
  CommonLoadItem,
} from "@/components/animations/CommonLoadAnimation";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import SmoothAnchorLink from "@/components/common/SmoothAnchorLink";
import type { LabArticle } from "@/data/labArticles";

type BlogArticleProps = {
  article: LabArticle;
  previous: LabArticle;
  next: LabArticle;
};

export default function BlogArticle({ article, previous, next }: BlogArticleProps) {
  return (
    <CommonLoadAnimation>
      <BlurSection className="mxd-section">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="inner-headline">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item">
                    <CommonLoadFade index={0}>
                      <div className="inner-headline__breadcrumbs loading-fade">
                        <div className="breadcrumbs__nav">
                          <span>
                            <Link href="/">
                              <TextScramble className="mxd-scramble">
                                Home
                              </TextScramble>
                            </Link>
                          </span>
                          <span>
                            <Link href="/lab">
                              <TextScramble className="mxd-scramble">
                                Lab
                              </TextScramble>
                            </Link>
                          </span>
                          <span className="current-item">{article.title}</span>
                        </div>
                      </div>
                    </CommonLoadFade>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-article-area">
            <div className="mxd-article-container mxd-grid-item">
              <div className="mxd-article loading-wrap">
                <div className="mxd-article__headline">
                  <CommonLoadItem index={0}>
                    <div className="mxd-article__tags loading-item">
                      {article.tags.map((tag, index) => (
                        <span key={tag}>
                          <TextScramble
                            className={`tag tag-m meta-tag mxd-scramble ${
                              index < article.tags.length - 1 ? "comma-tag" : ""
                            }`}
                          >
                            {tag}
                          </TextScramble>
                        </span>
                      ))}
                    </div>
                  </CommonLoadItem>
                  <div className="mxd-article__title">
                    <CommonAnimatedText
                      as="h2"
                      className="small loading-split"
                      animation="splitLinesLoad"
                    >
                      {article.title}
                    </CommonAnimatedText>
                  </div>
                  <CommonLoadItem index={1}>
                    <div className="mxd-article__meta loading-item">
                      <div className="mxd-article__data">
                        <span className="tag tag-m meta-tag slash-tag">
                          {article.date}
                        </span>
                        <span className="tag tag-m meta-tag">{article.readTime}</span>
                      </div>
                    </div>
                  </CommonLoadItem>
                </div>

                <CommonLoadItem index={2}>
                  <div className="mxd-article__thumb loading-item">
                    <Image
                      alt={article.imageAlt}
                      src={article.image}
                      width={article.imageWidth}
                      height={article.imageHeight}
                    />
                  </div>
                </CommonLoadItem>

                <div className="mxd-article__content">
                  <div className="mxd-article__block">
                    <p className="mxd-article__excerpt">
                      {article.excerptLead}
                      <span>{article.excerptAccent}</span>
                    </p>
                  </div>

                  <div className="mxd-article__block block-table-of-contents">
                    <p className="table-of-contents__title">
                      / Table of contents:
                    </p>
                    <ul className="table-of-contents__nav">
                      {article.sections.map((section) => (
                        <li key={section.id}>
                          <SmoothAnchorLink targetId={section.id}>
                            {section.title}
                          </SmoothAnchorLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {article.sections.map((section, index) => (
                    <div id={section.id} className="mxd-article__block" key={section.id}>
                      <h3>{section.title}</h3>
                      {section.body.map((paragraph) => (
                        <p className="mxd-article__normal" key={paragraph}>
                          {paragraph}
                        </p>
                      ))}
                      {index === 0 ? (
                        <div className="mxd-article__block block-quote">
                          <blockquote>
                            <p className="quote__text">
                              {article.quote.lead}
                              <span>{article.quote.accent}</span>
                            </p>
                            <p className="quote__cite">
                              <cite>{article.quote.cite}</cite>
                            </p>
                          </blockquote>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mxd-article-navigation">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-6 mxd-article-navigation__navitem left">
                      <Link
                        className="btn btn-line-icon btn-line-icon-small btn-line-medium slide-left"
                        href={`/lab/article/${previous.slug}`}
                        aria-label="Previous Article"
                      >
                        <i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 18 18"
                          >
                            <path d="M7.2,18v-3.6h3.6v3.6h-3.6ZM3.6,7.2H0v3.6h3.6v3.6h3.6v-3.6h10.8v-3.6H7.2v-3.6h-3.6s0,3.6,0,3.6ZM7.2,3.6h3.6V0h-3.6v3.6Z" />
                          </svg>
                        </i>
                        <TextScramble className="btn-caption mxd-scramble">
                          Prev
                        </TextScramble>
                      </Link>
                      <Link
                        className="mxd-article-navigation__link"
                        href={`/lab/article/${previous.slug}`}
                      >
                        <span>{previous.title}</span>
                      </Link>
                    </div>
                    <div className="col-6 mxd-article-navigation__navitem right">
                      <Link
                        className="btn btn-line-icon btn-line-icon-small btn-line-medium slide-right"
                        href={`/lab/article/${next.slug}`}
                        aria-label="Next Article"
                      >
                        <TextScramble className="btn-caption mxd-scramble">
                          Next
                        </TextScramble>
                        <i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 18 18"
                          >
                            <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                          </svg>
                        </i>
                      </Link>
                      <Link
                        className="mxd-article-navigation__link"
                        href={`/lab/article/${next.slug}`}
                      >
                        <span>{next.title}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurSection>
    </CommonLoadAnimation>
  );
}
