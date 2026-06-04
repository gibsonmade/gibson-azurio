export type DigitalDesignerProjectShowcaseItem = {
  titleLines: [string, string];
  bgImageSrc: string;
  cardImageSrc: string;
  cardImageAlt: string;
  cursorText: string;
  href: string;
  tags: string[];
};

export const digitalDesignerProjectsShowcase: DigitalDesignerProjectShowcaseItem[] = [
  {
    titleLines: ["Editorial", "illustrations set"],
    bgImageSrc: "/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg",
    cardImageSrc: "/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg",
    cardImageAlt: "Editorial illustrations project preview",
    cursorText: "View Work",
    href: "/project-details",
    tags: ["Design", "Illustrations", "Packaging", "Marketing"],
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
    tags: ["Design", "Illustrations", "Packaging", "Marketing"],
  },
];
