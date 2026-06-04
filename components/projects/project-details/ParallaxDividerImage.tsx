import UkiyoParallax from "@/components/animations/UkiyoParallax";
import BlurSection from "@/components/animations/BlurSection";
import CommonLoadAnimation, {
  CommonLoadFade,
} from "@/components/animations/CommonLoadAnimation";
import Image from "next/image";
import type { WorkProject } from "@/data/workProjects";

type ParallaxDividerImageProps = {
  project?: WorkProject;
};

export default function ParallaxDividerImage({ project }: ParallaxDividerImageProps) {
  const src = project?.images.hero ?? "/img-temp/uploads/case-study/wiab/gibson-robot.jpg";
  const alt = project ? `${project.name} case study hero image` : "Gibson Hall project image";

  return (
    <CommonLoadAnimation>
      <>
        <BlurSection className="mxd-section">
          <CommonLoadFade index={0}>
            <div className="mxd-container fullwidth-container loading-fade">
              <div className="mxd-divider">
                <UkiyoParallax
                  className="mxd-divider__image divider-image-11 parallax-img"
                  scale={1.4}
                  speed={1.5}
                  externalRAF={false}
                >
                  <Image alt={alt} src={src} width={2000} height={1333} />
                </UkiyoParallax>
              </div>
            </div>
          </CommonLoadFade>
        </BlurSection>
      </>
    </CommonLoadAnimation>
  );
}
