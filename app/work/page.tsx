import { Metadata } from "next";
import InnerHeadline from "@/components/projects/works-grid-sticky/InnerHeadline";
import ProjectsGridStickyShowcase from "@/components/projects/works-grid-sticky/ProjectsGridStickyShowcase";
import CTAWithMarquee from "@/components/projects/works-grid-sticky/CTAWithMarquee";
import Footer2 from "@/components/footers/Footer2";
import { siteCopy } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: `Work | ${siteCopy.brand.site}`,
  description: "Selected Gibson Hall case studies and launch-safe project proof.",
};

export default function WorkPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content work-page">
        <InnerHeadline />
        <ProjectsGridStickyShowcase />
        <CTAWithMarquee />
      </div>
      <Footer2 />
    </>
  );
}
