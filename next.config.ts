import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index-branding-studio", destination: "/", permanent: false },
      { source: "/index-software-development-company", destination: "/", permanent: false },
      { source: "/index-creative-agency", destination: "/", permanent: false },
      { source: "/index-freelancer-portfolio", destination: "/", permanent: false },
      { source: "/index-design-studio", destination: "/", permanent: false },
      { source: "/index-web-developer", destination: "/", permanent: false },
      { source: "/index-personal-portfolio", destination: "/", permanent: false },
      { source: "/index-digital-agency", destination: "/", permanent: false },
      { source: "/index-web-studio", destination: "/", permanent: false },
      { source: "/index-digital-designer", destination: "/", permanent: false },
      { source: "/works-default", destination: "/work", permanent: false },
      { source: "/works-grid", destination: "/work", permanent: false },
      { source: "/works-grid-sticky", destination: "/work", permanent: false },
      { source: "/project-details", destination: "/work/the-home-depot", permanent: false },
      { source: "/about-me", destination: "/about", permanent: false },
      { source: "/about-us", destination: "/about", permanent: false },
      { source: "/services", destination: "/", permanent: false },
      { source: "/team", destination: "/about", permanent: false },
      { source: "/pricing", destination: "/contact", permanent: false },
      { source: "/faq", destination: "/contact", permanent: false },
      { source: "/blog-standard", destination: "/lab", permanent: false },
      { source: "/blog-creative", destination: "/lab", permanent: false },
      { source: "/blog-article", destination: "/lab", permanent: false },
      { source: "/preview", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
