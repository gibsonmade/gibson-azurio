import { Metadata } from "next";
import Footer from "@/components/footers/Footer";
import { siteCopy } from "@/data/siteCopy";

import { AboutImageStrip } from "@/components/other-pages/about-me/AboutVisualBreaks";
import GibsonHero from "@/components/other-pages/about-me/InnerHeadline";
import Resume from "@/components/other-pages/about-me/Resume";

export const metadata: Metadata = {
  title: siteCopy.about.metadataTitle,
  description: siteCopy.about.metadataDescription,
};

export default function AboutPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content">
        <GibsonHero />
        <Resume />
        <AboutImageStrip />
      </div>
      <Footer />
    </>
  );
}
