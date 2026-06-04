import { workProjects } from "@/data/workProjects";

export type CreditLink = {
  label: string;
  href: string;
};

export type CreditSection = {
  title: string;
  body: string;
  items?: string[];
  itemLinks?: CreditLink[];
  links?: CreditLink[];
};

export const clientCreditItems = workProjects.map(
  (project) =>
    `${project.client} — referenced in the ${project.name} case study for portfolio, editorial, and work-history context.`,
);

export const openSourceCreditLinks: CreditLink[] = [
  { label: "Next.js", href: "https://nextjs.org/" },
  { label: "React", href: "https://react.dev/" },
  { label: "GSAP", href: "https://gsap.com/" },
  { label: "Lenis", href: "https://lenis.darkroom.engineering/" },
  { label: "Bootstrap", href: "https://getbootstrap.com/" },
  { label: "Swiper", href: "https://swiperjs.com/" },
  { label: "Typed.js", href: "https://github.com/mattboldt/typed.js/" },
  { label: "Split Type", href: "https://github.com/lukePeavey/SplitType/" },
  { label: "Ukiyo.js", href: "https://github.com/yitengjun/ukiyo-js/" },
  { label: "Matter.js", href: "https://brm.io/matter-js/" },
  { label: "Phosphor Icons", href: "https://phosphoricons.com/" },
  {
    label: "Paper Design shaders",
    href: "https://www.npmjs.com/package/@paper-design/shaders-react",
  },
  { label: "Geist", href: "https://vercel.com/font" },
  { label: "JetBrains Mono", href: "https://www.jetbrains.com/lp/mono/" },
];

export const creditsSections: CreditSection[] = [
  {
    title: "Site ownership",
    body:
      "This site is designed, directed, and maintained by Gibson Hall / Gibsooon. Original page structure, interface direction, custom copy edits, and implementation are owned by Gibson Hall unless noted otherwise.",
  },
  {
    title: "Client work and trademarks",
    body:
      "Client names, company names, product names, logos, and trademarks remain the property of their respective owners. Case studies are shown as portfolio references and do not imply current affiliation, endorsement, sponsorship, or approval.",
    items: clientCreditItems,
  },
  {
    title: "Project images and screenshots",
    body:
      "Images on project pages include Gibson-owned project documentation, public-safe portfolio assets, screenshots, client or project references, and AI-generated supporting visuals. They are used to describe work history, design process, and project outcomes.",
  },
  {
    title: "AI-assisted material",
    body:
      "Some visual assets, draft language, image concepts, and production support were created or assisted with AI tools, then selected, edited, and integrated by Gibson Hall. AI-generated material is used as supporting portfolio presentation unless a section identifies a real client, product, or screenshot.",
  },
  {
    title: "Open-source software and libraries",
    body:
      "This site is built with open-source and third-party development libraries. Each package remains governed by its own license and copyright terms.",
    itemLinks: openSourceCreditLinks,
    links: [
      {
        label: "NPM package registry",
        href: "https://www.npmjs.com/",
      },
    ],
  },
  {
    title: "Fonts, icons, and interface assets",
    body:
      "The site uses Geist and JetBrains Mono font families through the app build, plus icon and interaction libraries credited in the open-source section. Custom Gibson portrait marks, 8-bit icons, and brand graphics are Gibson-owned unless otherwise noted.",
  },
  {
    title: "Corrections and removal requests",
    body:
      "If you believe an asset, trademark, image, or reference is incorrectly credited, should be updated, or should be removed, email gibhall@gmail.com with the page URL and the item in question.",
    links: [
      {
        label: "Email Gibson",
        href: "mailto:gibhall@gmail.com",
      },
    ],
  },
];
