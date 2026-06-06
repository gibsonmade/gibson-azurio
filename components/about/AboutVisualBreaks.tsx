import BlurSection from "@/components/animations/BlurSection";
import UkiyoParallax from "@/components/animations/UkiyoParallax";
import Image from "next/image";

const proofImages = [
  {
    src: "/logos/gibson-logo-nav.jpg",
    alt: "Gibson Hall working from a laptop on a balcony",
    label: "Gibson Hall",
  },
  {
    src: "/images/projects/the-home-depot/the-home-depot-02-guided-inputs.jpg",
    alt: "The Home Depot guided project-shopping interface concept",
    label: "Enterprise retail UX",
  },
  {
    src: "/images/projects/mini-murals/mini-murals-02-interactive-map.jpg",
    alt: "Mini Murals interactive map interface concept",
    label: "Civic art discovery",
  },
  {
    src: "/images/projects/staterra/staterra-02-brand-guidelines.jpg",
    alt: "Straterra brand system and guideline concept",
    label: "Founder-led launch systems",
  },
];

export function AboutWorkDivider() {
  return (
    <BlurSection className="mxd-section about-work-divider-section">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-divider about-work-divider">
          <UkiyoParallax
            className="mxd-divider__image about-work-divider__image parallax-img"
            scale={1.3}
            speed={1.4}
            externalRAF={false}
          >
            <Image
              alt="CarMax sell-your-car product funnel interface concept"
              src="/images/projects/carmax/carmax-01-hero-divider.jpg"
              width={1536}
              height={1024}
            />
          </UkiyoParallax>
          <div className="about-work-divider__caption">
            <span>Product strategy</span>
            <span>UX systems</span>
            <span>Launch-ready interfaces</span>
          </div>
        </div>
      </div>
    </BlurSection>
  );
}

export function AboutImageStrip() {
  return (
    <BlurSection className="mxd-section about-proof-strip-section">
      <div className="mxd-container grid-l-container">
        <div className="mxd-block">
          <div className="about-proof-strip">
            {proofImages.map((image) => (
              <figure className="about-proof-strip__item" key={image.src}>
                <div className="about-proof-strip__image">
                  <Image
                    alt={image.alt}
                    src={image.src}
                    width={1536}
                    height={1024}
                  />
                </div>
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </BlurSection>
  );
}
