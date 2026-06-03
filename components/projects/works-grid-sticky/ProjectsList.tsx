"use client";

import PinnedSection from "@/components/animations/PinnedSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import Link from "next/link";
import TextScramble from "@/components/animations/TextScramble";
import { workProjects } from "@/data/workProjects";

export default function ProjectsList() {
  return (
    <PinnedSection
      blurSection
      className="mxd-section padding-top-title padding-bottom-default"
    >
      <PinnedSection.Inner>
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title pre-caption">
                      <CommonAnimatedText
                        as="h2"
                        className="mxd-split-lines"
                        animation="splitLines"
                      >
                        Work
                        <br />
                        archive
                      </CommonAnimatedText>
                    </div>
                  </div>
                  <div className="col-12 col-xl-3 mxd-grid-item">
                    <div className="mxd-section-title__data top-caption">
                      <div className="mxd-section-title__caption">
                        <CommonAnimatedText
                          as="p"
                          className="t-bold t-large mxd-split-lines"
                          animation="splitLines"
                        >
                          Selected collaborations across retail, healthcare,
                          hospitality, AI, and culture.
                          <span>Built to move from story to shipped experience.</span>
                        </CommonAnimatedText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-block">
            <div className="mxd-projects-list no-margin-bottom">
              {workProjects.map((project) => (
                <Link
                  key={project.slug}
                  className="mxd-projects-list__item active-cursor-image active-cursor-permanent"
                  data-cursor-image={project.cursorImage}
                  data-cursor-text="View Work"
                  href={`/work/${project.slug}`}
                >
                  <div className="mxd-projects-list__divider top" />
                  <div className="container-fluid px-0 mxd-projects-list__inner">
                    <div className="row gx-0">
                      <div className="col-12 col-xl-2 mxd-grid-padding">
                        <div className="mxd-projects-list__niche">
                          <TextScramble className="meta-niche mxd-scramble">
                            {project.eyebrow}
                          </TextScramble>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6 mxd-grid-padding">
                        <div className="mxd-projects-list__title">
                          <h3>
                            {project.title} <span>{project.titleAccent}</span>
                          </h3>
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-padding">
                        <div className="mxd-projects-list__meta">
                          {project.tags.map((tag) => (
                            <TextScramble
                              key={tag}
                              className="meta-tag mxd-scramble"
                            >
                              {tag}
                            </TextScramble>
                          ))}
                        </div>
                      </div>
                      <div className="col-6 col-md-6 col-xl-2 mxd-grid-padding">
                        <div className="mxd-projects-list__date">
                          <TextScramble className="meta-date mxd-scramble">
                            {project.date}
                          </TextScramble>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-list__divider bottom" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <PinnedSection.Trigger />
      </PinnedSection.Inner>
    </PinnedSection>
  );
}
