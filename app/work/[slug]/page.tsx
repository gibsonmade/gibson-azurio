import ProjectDetailsPage from "../../(projects)/project-details/page";
import {
  getWorkProject,
  workProjects,
} from "@/data/workProjects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer2 from "@/components/footers/Footer2";

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

  return (
    <>
      <ProjectDetailsPage project={project} />
      <Footer2 />
    </>
  );
}
