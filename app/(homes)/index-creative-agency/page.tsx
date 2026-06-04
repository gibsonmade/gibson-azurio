import Footer2 from "@/components/footers/Footer2";
import { Metadata } from "next";
import Hero from "@/components/homes/index-creative-agency/Hero";
import ParallaxDividerVideo from "@/components/homes/index-creative-agency/ParallaxDividerVideo";
import About from "@/components/homes/index-creative-agency/About";
import ProjectsMarquee from "@/components/homes/index-creative-agency/ProjectsMarquee";
import ServicesDescriptionStack from "@/components/other-pages/services/ServicesDescriptionStack";
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
        <ProjectsMarquee />
        <div className="home-services-section">
          <ServicesDescriptionStack />
        </div>
        <CTAWithMarquee />
      </>
      <Footer2 />
    </>
  );
}
