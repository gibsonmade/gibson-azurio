import UkiyoParallax from "@/components/animations/UkiyoParallax";
import BlurSection from "@/components/animations/BlurSection";
import Image from "next/image";
import type { WorkProject } from "@/data/workProjects";

type ParallaxDividerImage2Props = {
  project?: WorkProject;
};

export default function ParallaxDividerImage2({ project }: ParallaxDividerImage2Props) {
  const gallery = project?.images.gallery ?? ["/img-temp/uploads/case-study/staterra/Stationery1.jpg"];
  const src = gallery[gallery.length - 1] ?? gallery[0];
  const alt = project ? `${project.name} case study detail image` : "Gibson Hall project image";

  return (
    <>
      <BlurSection className="mxd-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <UkiyoParallax
              className="mxd-divider__image divider-image-14 parallax-img"
              scale={1.4}
              speed={1.5}
              externalRAF={false}
            >
              <Image alt={alt} src={src} width={2000} height={1333} />
            </UkiyoParallax>
          </div>
        </div>
      </BlurSection>
    </>
  );
}
