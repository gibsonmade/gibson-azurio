import type { ProjectShowcaseItem, ProjectStackItem } from "@/types/project";

const commonTags = ["Design", "Illustrations", "Packaging", "marketing"];
const showcaseCommonTags = ["Design", "Illustrations", "Packaging", "Marketing"];

export const brandingStudioProjects: ProjectStackItem[] = [
  {
    title: "NFT project branding",
    imageSrc: "/img-temp/works/showcase-stack/pr03.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 1920,
    imageHeight: 1180,
    tags: commonTags,
  },
  {
    title: "Interactive app concept",
    imageSrc: "/img-temp/works/showcase-stack/pr02.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 2200,
    imageHeight: 1240,
    tags: commonTags,
  },
  {
    title: "Editorial illustrations set",
    imageSrc: "/img-temp/works/showcase-stack/pr01.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 1920,
    imageHeight: 1180,
    tags: commonTags,
  },
  {
    title: "Creative studio template",
    imageSrc: "/img-temp/works/showcase-stack/pr04.webp",
    imageAlt: "Project Preview Image",
    imageWidth: 1920,
    imageHeight: 1180,
    coverClassName: "cover-darken",
    tags: commonTags,
  },
];

export const digitalDesignerProjectsShowcase: ProjectShowcaseItem[] = [
  {
    titleLines: ["Editorial", "illustrations set"],
    bgImageSrc: "/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg",
    cardImageSrc: "/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg",
    cardImageAlt: "Editorial illustrations project preview",
    cursorText: "View Work",
    href: "/project-details",
    tags: showcaseCommonTags,
  },
  {
    titleLines: ["Interactive", "concept"],
    bgImageSrc: "/img-temp/uploads/case-study/carmax/gibson-cars.jpg",
    cardImageSrc: "/img-temp/uploads/case-study/carmax/gibson-cars.jpg",
    cardImageAlt: "Interactive concept project preview",
    cursorText: "Behance",
    href: "/project-details",
    tags: ["UI/UX", "Development", "Brand", "Web App"],
  },
  {
    titleLines: ["Creative", "studio template"],
    bgImageSrc: "/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - HD.png",
    cardImageSrc: "/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - HD.png",
    cardImageAlt: "Creative studio template project preview",
    cursorText: "View Work",
    href: "/project-details",
    tags: showcaseCommonTags,
  },
];
