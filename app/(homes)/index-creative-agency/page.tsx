import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";
import Hero from "@/components/homes/index-creative-agency/Hero";
import ParallaxDividerVideo from "@/components/homes/index-creative-agency/ParallaxDividerVideo";
import About from "@/components/homes/index-creative-agency/About";
import ProjectsGrid from "@/components/homes/index-creative-agency/ProjectsGrid";
import ServicesStack from "@/components/homes/index-creative-agency/ServicesStack";
import CTAWithMarquee from "@/components/homes/index-creative-agency/CTAWithMarquee";
import { siteCopy } from "@/data/siteCopy";
export const metadata: Metadata = {
  title: siteCopy.seo.title,
  description: siteCopy.seo.description,
};
export default function IndexCreativeAgencyPage() {
  return (
    <>
      <>
        <Hero />
        <ParallaxDividerVideo />
        <About />
        <ProjectsGrid />
        <ServicesStack />
        <CTAWithMarquee />
      </>
      <Footer2 />
    </>
  );
}
