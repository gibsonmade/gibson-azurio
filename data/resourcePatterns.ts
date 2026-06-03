export type ResourcePattern = {
  title: string;
  category: string;
  previewType:
    | "hero"
    | "headline"
    | "buttons"
    | "tags"
    | "project-card"
    | "work-list"
    | "split-list"
    | "image-grid"
    | "service-stack"
    | "stats"
    | "blog-card"
    | "form"
    | "cta"
    | "navigation"
    | "theme";
  tags: string[];
  description: string;
  classNames: string[];
  source: string;
  referenceRoute: string;
};

export const resourcePatterns: ResourcePattern[] = [
  {
    title: "Creative Agency Hero",
    category: "Hero",
    previewType: "hero",
    tags: ["home", "motion", "internal"],
    description:
      "Large stacked headline treatment with intro copy, split text loading, floating media, and primary CTA slots.",
    classNames: ["mxd-hero-05", "hero-05", "loading-split", "btn", "slide-right"],
    source: "components/homes/index-creative-agency/Hero.tsx",
    referenceRoute: "/",
  },
  {
    title: "Inner Headline",
    category: "Hero",
    previewType: "headline",
    tags: ["page", "headline", "internal"],
    description:
      "Reusable page opener for Work, About, Contact, and Lab style pages with large editorial type and tag metadata.",
    classNames: ["inner-headline", "headline__subtitle", "mxd-split-lines", "tag"],
    source: "components/other-pages/about-me/InnerHeadline.tsx",
    referenceRoute: "/about",
  },
  {
    title: "Button With Icon",
    category: "Actions",
    previewType: "buttons",
    tags: ["cta", "button", "internal"],
    description:
      "Theme button pattern for primary actions with animated caption text and the compact plus/cross glyph slot.",
    classNames: [
      "btn",
      "btn-default-icon",
      "btn-default-accent",
      "btn-line-icon",
      "btn-icon",
      "slide-right",
    ],
    source: "components/other-pages/contact/ContactForm.tsx",
    referenceRoute: "/contact",
  },
  {
    title: "Tags And Meta Chips",
    category: "Labels",
    previewType: "tags",
    tags: ["taxonomy", "metadata", "internal"],
    description:
      "Small pill labels used for post tags, project disciplines, internal resources, and case study metadata.",
    classNames: ["tag", "tag-s", "tag-m", "tag-medium", "meta-date"],
    source: "components/blogs/blog-creative/BlogGrid.tsx",
    referenceRoute: "/lab",
  },
  {
    title: "Project Grid Card",
    category: "Work",
    previewType: "project-card",
    tags: ["portfolio", "image", "internal"],
    description:
      "Visual project tile with image cover, cursor label, title, tags, and case study link behavior.",
    classNames: [
      "mxd-projects-grid",
      "mxd-project-item",
      "mxd-project-item__media",
      "mxd-cover",
      "active-cursor-permanent",
    ],
    source: "components/homes/index-creative-agency/ProjectsGrid.tsx",
    referenceRoute: "/work",
  },
  {
    title: "Sticky Work Showcase",
    category: "Work",
    previewType: "work-list",
    tags: ["portfolio", "sticky", "internal"],
    description:
      "Work index pattern with sticky preview media paired to a scannable list of case study links.",
    classNames: [
      "mxd-projects-sticky",
      "mxd-projects-list",
      "mxd-projects-list__item",
      "mxd-projects-list__media",
    ],
    source: "components/projects/works-grid-sticky/ProjectsGridStickyShowcase.tsx",
    referenceRoute: "/work",
  },
  {
    title: "Case Study Split List",
    category: "Case Study",
    previewType: "split-list",
    tags: ["detail", "content", "internal"],
    description:
      "Two-column content row for challenge, approach, outcome, responsibilities, and supporting detail lists.",
    classNames: ["mxd-block", "mxd-block-split", "mxd-split-lines", "mxd-list"],
    source: "components/projects/project-details/SplitList.tsx",
    referenceRoute: "/work/the-home-depot",
  },
  {
    title: "Image Grid",
    category: "Media",
    previewType: "image-grid",
    tags: ["gallery", "case-study", "internal"],
    description:
      "Responsive image layout used in case studies for product screenshots, brand artifacts, and detail imagery.",
    classNames: ["mxd-images-grid", "mxd-grid-item", "mxd-img-anim", "mxd-cover"],
    source: "components/projects/project-details/ImagesGrid.tsx",
    referenceRoute: "/work/the-home-depot",
  },
  {
    title: "Service Stack",
    category: "Content",
    previewType: "service-stack",
    tags: ["services", "scroll", "internal"],
    description:
      "Stacked service cards with scroll animation for product strategy, UX, brand systems, and AI workflow groups.",
    classNames: [
      "mxd-stack-services",
      "services-card",
      "services-card__title",
      "services-card__descr",
    ],
    source: "components/other-pages/services/ServicesDescriptionStack.tsx",
    referenceRoute: "/",
  },
  {
    title: "Stats Lines",
    category: "Content",
    previewType: "stats",
    tags: ["metrics", "about", "internal"],
    description:
      "Compact numeric proof row merged into the About page intro.",
    classNames: ["about-intro-stats", "about-intro-stats__item", "about-intro-stats__value"],
    source: "components/other-pages/about-me/InnerHeadline.tsx",
    referenceRoute: "/about",
  },
  {
    title: "Creative Blog Card",
    category: "Lab",
    previewType: "blog-card",
    tags: ["editorial", "resource", "internal"],
    description:
      "Lab post card with preview media, date, headline, and multiple tags in the theme's editorial grid.",
    classNames: [
      "mxd-posts-grid",
      "mxd-post",
      "post-simple-alt",
      "post-simple-alt__media",
      "post-simple-alt__tags",
    ],
    source: "components/blogs/blog-creative/BlogGrid.tsx",
    referenceRoute: "/lab",
  },
  {
    title: "Contact Form",
    category: "Forms",
    previewType: "form",
    tags: ["contact", "input", "internal"],
    description:
      "Two-column form layout with animated submit state, success reply, and theme input styles.",
    classNames: ["mxd-form-container", "form", "contact-form", "form__reply", "reply__icon"],
    source: "components/other-pages/contact/ContactForm.tsx",
    referenceRoute: "/contact",
  },
  {
    title: "CTA With Marquee",
    category: "CTA",
    previewType: "cta",
    tags: ["marquee", "conversion", "internal"],
    description:
      "Footer-adjacent CTA block combining a large prompt, moving marquee, and primary contact/action link.",
    classNames: ["mxd-promo", "mxd-promo__caption", "marquee", "marquee-left--gsap"],
    source: "components/homes/index-creative-agency/CTAWithMarquee.tsx",
    referenceRoute: "/",
  },
  {
    title: "Overlay Navigation",
    category: "Navigation",
    previewType: "navigation",
    tags: ["menu", "header", "internal"],
    description:
      "Hamburger-triggered full screen menu with grouped links, current-section highlight, and nested lists.",
    classNames: [
      "mxd-menu",
      "main-menu",
      "main-menu__item",
      "main-menu__toggle",
      "submenu",
    ],
    source: "components/headers/Nav.tsx",
    referenceRoute: "/",
  },
  {
    title: "Theme Switcher",
    category: "Controls",
    previewType: "theme",
    tags: ["theme", "toggle", "internal"],
    description:
      "Header control for light and dark theme switching with icon states and persisted preference.",
    classNames: ["mxd-theme-toggle", "theme-toggle__icon", "ph-bold", "ph-sun", "ph-moon"],
    source: "components/headers/ThemeSwitcher.tsx",
    referenceRoute: "/",
  },
];

export const resourcePatternCategories = Array.from(
  new Set(resourcePatterns.map((pattern) => pattern.category)),
);
