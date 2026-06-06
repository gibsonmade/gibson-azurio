import {
  getNextWorkProject,
  getWorkProject,
  workProjects,
} from "@/data/workProjects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/footers/Footer";
import InnerHeadline from "@/components/work/InnerHeadline";
import ParallaxDividerImage from "@/components/work/ParallaxDividerImage";
import WorkOverview from "@/components/work/WorkOverview";
import ImagesGrid from "@/components/work/ImagesGrid";
import WorkChallenge from "@/components/work/WorkChallenge";
import ImagesGrid2 from "@/components/work/ImagesGrid2";
import WorkSolution from "@/components/work/WorkSolution";
import ParallaxDividerImage2 from "@/components/work/ParallaxDividerImage2";
import NextProjectLink from "@/components/work/NextProjectLink";
import CTAWithMarquee from "@/components/work/CTAWithMarquee";

type WorkProjectRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return workProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkProjectRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) return {};

  return {
    title: `${project.name} | Gibsooon Work`,
    description: project.summary,
  };
}

export default async function WorkProjectPage({ params }: WorkProjectRouteProps) {
  const { slug } = await params;
  const project = getWorkProject(slug);
  if (!project) notFound();
  const nextProject = getNextWorkProject(project.slug);

  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline project={project} />
        <ParallaxDividerImage project={project} />
        <WorkOverview project={project} />
        <ImagesGrid project={project} />
        <WorkChallenge project={project} />
        <ImagesGrid2 project={project} />
        <WorkSolution project={project} />
        <ParallaxDividerImage2 project={project} />
        <NextProjectLink project={nextProject} />
        <CTAWithMarquee />
      </div>
      <Footer />
    </>
  );
}
