import Footer from "@/components/footers/Footer";
import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ParallaxDividerVideo from "@/components/home/ParallaxDividerVideo";
import About from "@/components/home/About";
import ProjectsMarquee from "@/components/home/ProjectsMarquee";
import ServicesDescriptionStack from "@/components/services/ServicesDescriptionStack";
import CTAWithMarquee from "@/components/home/CTAWithMarquee";
import { siteCopy } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: siteCopy.seo.title,
  description: siteCopy.seo.description,
};

export default function Home() {
  return (
    <>
      <Hero />
      <ParallaxDividerVideo />
      <About />
      <ProjectsMarquee />
      <div className="home-services-section">
        <ServicesDescriptionStack />
      </div>
      <CTAWithMarquee />
      <Footer />
    </>
  );
}
