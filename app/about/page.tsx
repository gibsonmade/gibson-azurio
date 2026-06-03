import { Metadata } from "next";
import Footer2 from "@/components/footers/Footer2";
import { siteCopy } from "@/data/siteCopy";

import Process from "@/components/other-pages/about-us/Process";
import GibsonHero from "@/components/other-pages/about-me/InnerHeadline";
import Resume from "@/components/other-pages/about-me/Resume";
import TechStackList from "@/components/homes/index-software-development-company/TechStackList";
import TestimonialsSticky from "@/components/homes/index-creative-agency/TestimonialsSticky";

export const metadata: Metadata = {
  title: siteCopy.about.metadataTitle,
  description: siteCopy.about.metadataDescription,
};

export default function AboutPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <GibsonHero />
        <Process />
        <Resume />
        <TechStackList />
        <TestimonialsSticky />
      </div>
      <Footer2 />
    </>
  );
}
