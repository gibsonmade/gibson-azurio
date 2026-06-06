import { Metadata } from "next";
import Footer from "@/components/footers/Footer";
import { siteCopy } from "@/data/siteCopy";

import { AboutImageStrip } from "@/components/about/AboutVisualBreaks";
import GibsonHero from "@/components/about/InnerHeadline";
import Resume from "@/components/about/Resume";

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
