import dynamic from "next/dynamic";
import Footer from "@/components/footers/Footer";
import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import { siteCopy } from "@/data/siteCopy";

const ParallaxDividerVideo = dynamic(() => import("@/components/home/ParallaxDividerVideo"));
const About = dynamic(() => import("@/components/home/About"));
const ProjectsMarquee = dynamic(() => import("@/components/home/ProjectsMarquee"));
const ServicesDescriptionStack = dynamic(() => import("@/components/services/ServicesDescriptionStack"));
const CTAWithMarquee = dynamic(() => import("@/components/home/CTAWithMarquee"));

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
