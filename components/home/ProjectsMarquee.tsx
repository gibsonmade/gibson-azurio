import Image from "next/image";
import Link from "next/link";
import BlurSection from "@/components/animations/BlurSection";
import { workProjects } from "@/data/workProjects";

const marqueeProjects = [...workProjects, ...workProjects];

export default function ProjectsMarquee() {
  return (
    <BlurSection className="mxd-section home-project-marquee-section padding-top-title padding-bottom-projects">
      <div className="mxd-container fullwidth-container">
        <div className="home-project-marquee" aria-label="Selected project covers">
          <div className="home-project-marquee__track">
            {marqueeProjects.map((project, index) => (
              <Link
                className="home-project-marquee__item active-cursor-permanent"
                data-cursor-text="View Work"
                href={`/work/${project.slug}`}
                key={`${project.slug}-${index}`}
              >
                <span className="home-project-marquee__name">
                  {project.name}
                </span>
                <span className="home-project-marquee__cover">
                  <Image
                    alt={`${project.name} case study cover`}
                    src={project.images.cover}
                    width={900}
                    height={600}
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </BlurSection>
  );
}
