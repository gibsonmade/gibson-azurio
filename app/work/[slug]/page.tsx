import dynamic from "next/dynamic";
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

const WorkOverview = dynamic(() => import("@/components/work/WorkOverview"));
const ImagesGrid = dynamic(() => import("@/components/work/ImagesGrid"));
const WorkChallenge = dynamic(() => import("@/components/work/WorkChallenge"));
const ImagesGrid2 = dynamic(() => import("@/components/work/ImagesGrid2"));
const WorkSolution = dynamic(() => import("@/components/work/WorkSolution"));
const ParallaxDividerImage2 = dynamic(() => import("@/components/work/ParallaxDividerImage2"));
const NextProjectLink = dynamic(() => import("@/components/work/NextProjectLink"));
const CTAWithMarquee = dynamic(() => import("@/components/work/CTAWithMarquee"));

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
