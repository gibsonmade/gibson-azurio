import { Metadata } from "next";
import InnerHeadline from "@/components/projects/project-details/InnerHeadline";
import ParallaxDividerImage from "@/components/projects/project-details/ParallaxDividerImage";
import SplitList from "@/components/projects/project-details/SplitList";
import ImagesGrid from "@/components/projects/project-details/ImagesGrid";
import SplitList2 from "@/components/projects/project-details/SplitList2";
import ImagesGrid2 from "@/components/projects/project-details/ImagesGrid2";
import SplitList3 from "@/components/projects/project-details/SplitList3";
import ParallaxDividerImage2 from "@/components/projects/project-details/ParallaxDividerImage2";
import ClientSFeedback from "@/components/projects/project-details/ClientSFeedback";
import NextProjectLink from "@/components/projects/project-details/NextProjectLink";
import CTAWithMarquee from "@/components/projects/project-details/CTAWithMarquee";
import { getNextWorkProject, workProjects, type WorkProject } from "@/data/workProjects";
import { siteCopy } from "@/data/siteCopy";
export const metadata: Metadata = {
  title: `Project Details | ${siteCopy.brand.site}`,
  description: siteCopy.seo.description,
};
type ProjectDetailsPageProps = {
  project?: WorkProject;
};

export default function ProjectDetailsPage({ project = workProjects[0] }: ProjectDetailsPageProps) {
  const nextProject = getNextWorkProject(project.slug);

  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline project={project} />
        <ParallaxDividerImage />
        <SplitList project={project} />
        <ImagesGrid />
        <SplitList2 project={project} />
        <ImagesGrid2 />
        <SplitList3 project={project} />
        <ParallaxDividerImage2 />
        <ClientSFeedback />
        <NextProjectLink project={nextProject} />
        <CTAWithMarquee />
      </div>
    </>
  );
}
