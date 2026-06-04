export type LaunchTaskStatus = "done" | "current" | "next";

export type LaunchTask = {
  title: string;
  detail: string;
  status: LaunchTaskStatus;
  promptBefore?: string;
};

export type LaunchPhase = {
  title: string;
  description: string;
  tasks: LaunchTask[];
};

export type ProjectLaunchRoadmap = {
  eyebrow: string;
  title: string;
  summary: string;
  currentStep: {
    label: string;
    title: string;
    detail: string;
  };
  stats: {
    value: string;
    label: string;
  }[];
  phases: LaunchPhase[];
};

export const projectLaunch: ProjectLaunchRoadmap = {
  eyebrow: "Remaining launch roadmap",
  title: "Project Launch",
  summary:
    "A focused roadmap for the brand, design, content, asset, interaction, and QA work left before the Gibson site is launch-ready.",
  currentStep: {
    label: "Current step",
    title: "Brand foundation: logo, header controls, and nav overlay",
    detail:
      "Start with the logo refresh, then align the header and navigation system before deeper page design, imagery, content, and QA passes.",
  },
  stats: [
    { value: "7", label: "remaining work phases" },
    { value: "28", label: "remaining roadmap items" },
    { value: "6", label: "AI prompt checkpoints" },
  ],
  phases: [
    {
      title: "Completed foundation",
      description:
        "Already handled work stays visible as context, but the main roadmap now focuses on what remains.",
      tasks: [
        {
          title: "Core foundation summary",
          detail:
            "Still mode, current color system, route cleanup, Credits page, case study copy cleanup, loading feedback, and initial launch dashboard restoration are complete enough to move into the next brand and page-design pass.",
          status: "done",
        },
      ],
    },
    {
      title: "Brand foundation",
      description:
        "Set the visual and interaction direction that later page, image, and content work should follow.",
      tasks: [
        {
          title: "Redo the logo",
          detail:
            "Create the next Gibson/Gibsooon logo direction and define how the mark, wordmark, and icon should work across header, nav, loader, footer, and social contexts.",
          status: "current",
          promptBefore:
            "Ask for logo direction, references, icon vs wordmark needs, required placements, and whether the final should feel polished, playful, technical, or experimental.",
        },
        {
          title: "Update header controls",
          detail:
            "Refine the Say hi, dark mode, and Move/Still controls so the header feels intentional, balanced, and easy to scan on every viewport.",
          status: "current",
        },
        {
          title: "Add scroll progress indicator",
          detail:
            "Add a subtle scroll progress treatment in the header that works in light mode, dark mode, full motion, and Still mode.",
          status: "next",
        },
        {
          title: "Decide where liquid metal belongs",
          detail:
            "Place one liquid-metal moment where it supports the brand without making the site feel busy or repetitive.",
          status: "next",
          promptBefore:
            "Ask whether liquid metal should live in the hero, a divider, CTA, loader, nav moment, or project/detail accent before designing it.",
        },
      ],
    },
    {
      title: "Navigation and interaction system",
      description:
        "Make global navigation, motion states, hover behavior, and background treatments feel consistent before page-by-page polish.",
      tasks: [
        {
          title: "Full nav overlay pass",
          detail:
            "Review overlay layout, content, states, spacing, click targets, close behavior, mobile behavior, footer data, and active/open sections.",
          status: "next",
        },
        {
          title: "Update hovers everywhere",
          detail:
            "Unify link, card, media, button, project, footer, nav, and resource hover states so each interaction feels deliberate.",
          status: "next",
        },
        {
          title: "Add prettier hovers and gradients",
          detail:
            "Use the brand palette to add more polished hover transitions and gradient moments without adding visual clutter.",
          status: "next",
        },
        {
          title: "Add new background textures",
          detail:
            "Introduce subtle brand-safe texture treatments for sections that need more depth while preserving readability.",
          status: "next",
        },
      ],
    },
    {
      title: "Visual asset generation",
      description:
        "Replace generic visuals with more specific, story-led imagery and page graphics.",
      tasks: [
        {
          title: "Guide case study images",
          detail:
            "Update case study imagery so each visual is more specific to the project, role, and story being told.",
          status: "next",
          promptBefore:
            "Ask for each case study's ideal image/story direction before generating or replacing visuals.",
        },
        {
          title: "Generate homepage service photos",
          detail:
            "Create or select more relevant service visuals for the homepage service cards.",
          status: "next",
        },
        {
          title: "Generate About page photos and graphics",
          detail:
            "Create the right mix of Gibson photos, project proof, and custom graphics so About feels more visual and less text-heavy.",
          status: "next",
          promptBefore:
            "Ask what story the About visuals should tell: founder/operator, designer/developer, AI workflow builder, project strategist, or a mix.",
        },
        {
          title: "Update About page icons",
          detail:
            "Refresh About icons so process, capabilities, and proof moments match the new brand direction.",
          status: "next",
        },
      ],
    },
    {
      title: "Page design passes",
      description:
        "Work page by page after the global brand, navigation, and asset direction is stable.",
      tasks: [
        {
          title: "About page layout pass",
          detail:
            "Reduce text density, add more photos, improve grouping, and make the page feel more like a story than a resume wall.",
          status: "next",
        },
        {
          title: "Contact page styling and info pass",
          detail:
            "Improve the page styling and add more useful contact information without making the page feel crowded.",
          status: "next",
          promptBefore:
            "Ask which contact details should be public: email, location, availability, social links, booking notes, response time, or project intake details.",
        },
        {
          title: "Footer content pass",
          detail:
            "Update footer copy, groupings, links, and calls to action so the ending feels useful and brand-specific.",
          status: "next",
        },
        {
          title: "Work page styling pass",
          detail:
            "Refine the Work page layout, project cards, filters or labels, spacing, and visual rhythm.",
          status: "next",
        },
        {
          title: "Lab page content and styling pass",
          detail:
            "Update Lab hero content, improve Lab styling, and make article topics feel meaningful and Gibson-authored.",
          status: "next",
          promptBefore:
            "Ask for article topics, theses, and public-safe themes before writing or redesigning Lab content.",
        },
      ],
    },
    {
      title: "Content pass",
      description:
        "Review the site language after the visual direction is stable so copy supports the final design.",
      tasks: [
        {
          title: "Go page by page for content",
          detail:
            "Review Home, About, Work, case studies, Lab, article pages, Contact, Footer, Credits, and Project Launch copy in context.",
          status: "next",
        },
        {
          title: "Keep copy public-safe and specific",
          detail:
            "Remove repetition, soften unsupported claims, clarify project context, and keep the strongest proof where it belongs.",
          status: "next",
        },
      ],
    },
    {
      title: "Final QA",
      description:
        "Test the full site across themes and devices after the design and content passes are complete.",
      tasks: [
        {
          title: "Test every page in light mode",
          detail:
            "Check readable contrast, section backgrounds, nav states, hovers, imagery, and forms in light mode.",
          status: "next",
        },
        {
          title: "Test every page in dark mode",
          detail:
            "Check readable contrast, section backgrounds, nav states, hovers, imagery, and forms in dark mode.",
          status: "next",
        },
        {
          title: "Test every page on mobile, tablet, and desktop",
          detail:
            "Review layout, spacing, sticky elements, nav, footer, project pages, Lab, Contact, and visual crops across viewport sizes.",
          status: "next",
        },
        {
          title: "Run build and route smoke test",
          detail:
            "Run the production build, verify canonical routes, and check for console errors or missing assets before saving and deploy.",
          status: "next",
        },
      ],
    },
  ],
};
