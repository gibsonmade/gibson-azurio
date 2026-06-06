import type { MenuLinkItem } from "@/types/menu";
export type Footer1NavBlock = {
  title: string;
  links: MenuLinkItem[];
};

export type Footer1NavColumn = {
  className: string;
  blocks: Footer1NavBlock[];
};

export const footer1NavColumns: Footer1NavColumn[] = [
  {
    className: "col-12 mxd-grid-item",
    blocks: [
      {
        title: "/ Pages",
        links: [
          { href: "/", label: "Home" },
          { href: "/work", label: "Work" },
          { href: "/about", label: "About" },
          { href: "/lab", label: "Lab" },
          { href: "/contact", label: "Contact" },
        ],
      },
    ],
  },
];

export type Footer1PromoItem = {
  href: string;
  iconSrc: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
  /** Text before the highlighted span */
  textLead: string;
  /** Second line inside `<span>` */
  textSpan: string;
};

export const footer1PromoItems: Footer1PromoItem[] = [
  {
    href: "/work/the-home-depot",
    iconSrc: "/logos/gibson-logo-8bit.png",
    iconAlt: "The Home Depot case study icon",
    iconWidth: 56,
    iconHeight: 56,
    textLead: "Enterprise retail and project-shopping ",
    textSpan: "UX systems",
  },
  {
    href: "/work/carmax",
    iconSrc: "/logos/watson-logo-8bit.png",
    iconAlt: "CarMax case study icon",
    iconWidth: 56,
    iconHeight: 56,
    textLead: "High-traffic automotive retail ",
    textSpan: "product design",
  },
  {
    href: "/work/mini-murals",
    iconSrc: "/logos/gibson-logo-8bit-white.png",
    iconAlt: "Mini Murals case study icon",
    iconWidth: 56,
    iconHeight: 56,
    textLead: "Civic art discovery and maps ",
    textSpan: "digital platform",
  },
];

export type Footer1BackgroundImage = {
  wrapperClass: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const footer1BackgroundImages: Footer1BackgroundImage[] = [
  {
    wrapperClass: "footer-background__img1",
    src: "/images/ui/clouds-01.webp",
    width: 1400,
    height: 469,
    alt: "Gibsooon Footer Background Image",
  },
  {
    wrapperClass: "footer-background__img2",
    src: "/images/ui/clouds-02.webp",
    width: 1200,
    height: 401,
    alt: "Gibsooon Footer Background Image",
  },
];

export const footer1ForegroundImages: Footer1BackgroundImage[] = [
  {
    wrapperClass: "footer-foreground__img1",
    src: "/images/ui/clouds-03.webp",
    width: 1200,
    height: 374,
    alt: "Gibsooon Footer Foreground Image",
  },
];
