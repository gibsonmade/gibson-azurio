import dynamic from "next/dynamic";
import { Metadata } from "next";
import InnerHeadline from "@/components/works/InnerHeadline";
import Footer from "@/components/footers/Footer";
import { siteCopy } from "@/data/siteCopy";

const ProjectsGridStickyShowcase = dynamic(() => import("@/components/works/ProjectsGridStickyShowcase"));
const CTAWithMarquee = dynamic(() => import("@/components/works/CTAWithMarquee"));

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
      <Footer />
    </>
  );
}
