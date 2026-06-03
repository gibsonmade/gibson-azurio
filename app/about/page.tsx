import { Metadata } from "next";
import Footer2 from "@/components/footers/Footer2";
import { siteCopy } from "@/data/siteCopy";

import AboutUsHero from "@/components/other-pages/about-us/InnerHeadline";
import Process from "@/components/other-pages/about-us/Process";
import StatisticsLines from "@/components/other-pages/about-me/StatisticsLines";
import ParallaxDividerImage from "@/components/other-pages/about-me/ParallaxDividerImage";
import GibsonHero from "@/components/other-pages/about-me/InnerHeadline";
import Resume from "@/components/other-pages/about-me/Resume";
import TechStackList from "@/components/homes/index-software-development-company/TechStackList";
import ServicesDescriptionStack from "@/components/other-pages/services/ServicesDescriptionStack";
import TestimonialsSticky from "@/components/homes/index-creative-agency/TestimonialsSticky";

export const metadata: Metadata = {
  title: siteCopy.about.metadataTitle,
  description: siteCopy.about.metadataDescription,
};

export default function AboutPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <AboutUsHero />
        <Process />
        <StatisticsLines />
        <ParallaxDividerImage />
        <GibsonHero />
        <Resume />
        <TechStackList />
        <ServicesDescriptionStack />
        <TestimonialsSticky />
      </div>
      <Footer2 />
    </>
  );
}
