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
