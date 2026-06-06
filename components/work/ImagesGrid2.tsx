import UkiyoParallax from "@/components/animations/UkiyoParallax";
import BlurSection from "@/components/animations/BlurSection";
import Image from "next/image";
import type { WorkProject } from "@/data/workProjects";

type ImagesGrid2Props = {
  project?: WorkProject;
};

const fallbackImages = [
  "/images/projects/staterra/staterra-building.jpg",
  "/images/projects/wiab-ai/wiab-robot.jpg",
  "/images/projects/cactus-club/cactus-club-city.jpg",
];

function projectGallery(project?: WorkProject) {
  const gallery = project?.images.gallery ?? fallbackImages;
  return [
    gallery[3] ?? gallery[0] ?? project?.images.cover ?? fallbackImages[0],
    gallery[4] ?? gallery[1] ?? project?.images.cover ?? fallbackImages[1],
    gallery[5] ?? gallery[2] ?? gallery[0] ?? project?.images.cover ?? fallbackImages[2],
  ];
}

export default function ImagesGrid2({ project }: ImagesGrid2Props) {
  const [image1, image2, image3] = projectGallery(project);
  const alt = project ? `${project.name} case study image` : "Gibson Hall project image";

  return (
    <>
      <BlurSection className="mxd-section">
        <div className="mxd-container grid-l-container">
          {/* Block - Images Grid Start */}
          <div className="mxd-block">
            <div className="mxd-images-grid">
              <div className="container-fluid p-0">
                <div className="row g-0 mxd-images-grid__gallery">
                  <div className="col-12 col-xl-6 mxd-grid-item mxd-images-grid__item">
                    <div className="mxd-images-grid__inner">
                      <UkiyoParallax
                        className="parallax-img-small"
                        scale={1.2}
                        speed={1.5}
                        externalRAF={false}
                      >
                        <Image
                          alt={alt}
                          src={image1}
                          width={2000}
                          height={1333}
                        />
                      </UkiyoParallax>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item mxd-images-grid__item">
                    <div className="mxd-images-grid__inner">
                      <Image
                        alt={alt}
                        src={image2}
                        width={1500}
                        height={2000}
                      />
                    </div>
                  </div>
                </div>
                <div className="row g-0 mxd-images-grid__gallery">
                  <div className="col-12 mxd-grid-item mxd-images-grid__item wide">
                    <div className="mxd-images-grid__inner">
                      <UkiyoParallax
                        className="parallax-img-small"
                        scale={1.2}
                        speed={1.5}
                        externalRAF={false}
                      >
                        <Image
                          alt={alt}
                          src={image3}
                          width={2000}
                          height={1333}
                        />
                      </UkiyoParallax>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block - Images Grid End */}
        </div>
      </BlurSection>
    </>
  );
}
