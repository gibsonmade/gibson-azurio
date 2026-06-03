import { Metadata } from "next";
import InnerHeadline from "@/components/projects/works-grid-sticky/InnerHeadline";
import ProjectsGridStickyShowcase from "@/components/projects/works-grid-sticky/ProjectsGridStickyShowcase";
import CTAWithMarquee from "@/components/projects/works-grid-sticky/CTAWithMarquee";
import { siteCopy } from "@/data/siteCopy";
export const metadata: Metadata = {
  title: `Work | ${siteCopy.brand.site}`,
  description: "Selected Gibson Hall case studies and launch-safe project proof.",
};
export default function WorksGridStickyPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <InnerHeadline />
        <ProjectsGridStickyShowcase />
        <CTAWithMarquee />
      </div>
    </>
  );
}
