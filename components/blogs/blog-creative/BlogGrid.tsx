import BlurSection from "@/components/animations/BlurSection";
import Link from "next/link";
import Image from "next/image";
import { CommonCardBatchAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import { labArticles } from "@/data/labArticles";

export default function BlogGrid() {
  return (
    <BlurSection id="posts" className="mxd-section bg-color-base padding-bottom-tag-m">
      <div className="mxd-container grid-l-container">
        <div className="mxd-posts-area">
          <div className="mxd-posts-container fullwidth-posts-container">
            <div className="mxd-posts-grid">
              <div className="container-fluid p-0">
                <div className="row g-0 mxd-posts-grid__row">
                  {labArticles.map((article) => (
                    <CommonCardBatchAnimated
                      key={article.slug}
                      className="col-12 col-md-6 col-xl-4 mxd-grid-item mxd-posts-grid__item animate-card-3"
                      as="div"
                      columns={3}
                    >
                      <article className="mxd-post post-simple-alt">
                        <div className="post-simple-alt__date">
                          <span className="meta-date">{article.date}</span>
                        </div>
                        <Link
                          className="post-simple-alt__media active-cursor-permanent"
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
                        <div className="post-simple-alt__caption">
                          <div className="post-simple-alt__title">
                            <h3>
                              <Link href={`/lab/article/${article.slug}`}>
                                {article.title}
                              </Link>
                            </h3>
                          </div>
                          <div className="post-simple-alt__tags">
                            {article.tags.slice(0, 3).map((tag) => (
                              <span className="tag tag-s tag-medium" key={tag}>
                                <TextScramble className="mxd-scramble">
                                  {tag}
                                </TextScramble>
                              </span>
                            ))}
                          </div>
                        </div>
                      </article>
                    </CommonCardBatchAnimated>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlurSection>
  );
}
