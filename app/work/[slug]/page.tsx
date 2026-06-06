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
import SplitList from "@/components/work/SplitList";
import ImagesGrid from "@/components/work/ImagesGrid";
import SplitList2 from "@/components/work/SplitList2";
import ImagesGrid2 from "@/components/work/ImagesGrid2";
import SplitList3 from "@/components/work/SplitList3";
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
        <SplitList project={project} />
        <ImagesGrid project={project} />
        <SplitList2 project={project} />
        <ImagesGrid2 project={project} />
        <SplitList3 project={project} />
        <ParallaxDividerImage2 project={project} />
        <NextProjectLink project={nextProject} />
        <CTAWithMarquee />
      </div>
      <Footer />
    </>
  );
}
