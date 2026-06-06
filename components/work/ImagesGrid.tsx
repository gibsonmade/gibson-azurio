import UkiyoParallax from "@/components/animations/UkiyoParallax";
import BlurSection from "@/components/animations/BlurSection";
import Image from "next/image";
import type { WorkProject } from "@/data/workProjects";

type ImagesGridProps = {
  project?: WorkProject;
};

const fallbackImages = [
  "/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg",
  "/img-temp/uploads/case-study/carmax/gibson-cars.jpg",
  "/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - HD.png",
];

function projectGallery(project?: WorkProject) {
  const gallery = project?.images.gallery ?? fallbackImages;
  return [
    gallery[0] ?? project?.images.cover ?? fallbackImages[0],
    gallery[1] ?? project?.images.cover ?? gallery[0] ?? fallbackImages[1],
    gallery[2] ?? gallery[1] ?? project?.images.cover ?? gallery[0] ?? fallbackImages[2],
  ];
}

export default function ImagesGrid({ project }: ImagesGridProps) {
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
                          src={image1}
                          width={2000}
                          height={1333}
                        />
                      </UkiyoParallax>
                    </div>
                  </div>
                </div>
                <div className="row g-0 mxd-images-grid__gallery">
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
