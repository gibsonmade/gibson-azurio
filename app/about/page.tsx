import dynamic from "next/dynamic";
import { Metadata } from "next";
import Footer from "@/components/footers/Footer";
import GibsonHero from "@/components/about/InnerHeadline";
import { siteCopy } from "@/data/siteCopy";

const Resume = dynamic(() => import("@/components/about/Resume"));
const AboutImageStrip = dynamic(() =>
  import("@/components/about/AboutVisualBreaks").then((m) => ({ default: m.AboutImageStrip }))
);

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
