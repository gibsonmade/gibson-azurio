import BlurSection from "@/components/animations/BlurSection";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import { CommonCardBatchAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";
import { workProjects } from "@/data/workProjects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsGridStickyShowcase() {
  return (
    <CommonLoadAnimation>
      <BlurSection className="mxd-section padding-bottom-projects">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <CommonLoadFade index={0}>
              <div className="mxd-projects-grid loading-fade">
                <div className="container-fluid p-0">
                  <div className="row g-0 mxd-projects-grid__gallery">
                    {workProjects.map((project, index) => (
                      <CommonCardBatchAnimated
                        key={project.slug}
                        className={`col-12 col-md-6 ${
                          index % 3 === 1
                            ? "col-xl-7"
                            : "col-xl-4 mxd-project-item-s mxd-project-item-sticky"
                        } mxd-project-item animate-card-2`}
                        as="div"
                        columns={3}
                      >
                        <Link
                          className="mxd-project-item__media active-cursor-permanent"
                          data-cursor-text="View Work"
                          href={`/work/${project.slug}`}
                        >
                          <Image
                            alt={`${project.name} case study preview`}
                            src={project.cursorImage}
                            width={1500}
                            height={1000}
                          />
                          <div className="mxd-cover mxd-cover-06" />
                        </Link>
                        <div className="mxd-project-item__caption">
                          <div className="mxd-project-item__name">
                            <Link
                              className="project-name-s"
                              href={`/work/${project.slug}`}
                            >
                              {project.name}
                            </Link>
                          </div>
                          <div className="mxd-project-item__tags">
                            {project.tags.slice(0, 3).map((tag) => (
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
            </CommonLoadFade>
          </div>
        </div>
      </BlurSection>
    </CommonLoadAnimation>
  );
}
