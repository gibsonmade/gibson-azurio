export const siteCopy = {
  brand: {
    person: "Gibson Hall",
    site: "Gibsooon",
    email: "hello@gibsooon.com",
    instagram: "@gibsooon",
    headlineRole: "Product strategy / UX / brand / AI",
  },
  seo: {
    title: "Gibson Hall | Digital Product, Brand, UX, and AI Systems",
    description:
      "Gibson Hall helps founder-led teams and enterprise partners turn complex ideas into launch-ready brands, websites, products, and AI-enabled systems.",
  },
  home: {
    hero: {
      headline: "Gibson",
      small: "brings ideas to life",
      caption: "Design, tech & some magic.",
      socialHref: "https://www.instagram.com/",
      scrollLabel: "Scroll to explore",
    },
    about: {
      button: "About me",
      href: "/about",
      cursor: "Learn more",
      lead:
        "Gibson works at the intersection of human-centered design & technology.",
      accent:
        "He loves turning ideas into experiences people love using.",
    },
    servicesMarquee: [
      "Strategy/",
      "Brand/",
      "UX/",
      "AI Systems/",
      "Launch/",
    ],
    services: [
      {
        key: "strategy",
        leftTags: ["Product strategy", "UX strategy", "Offer design", "Research"],
        rightTags: ["Roadmaps", "Workshops", "Discovery", "Positioning"],
        titleLines: ["Shape", "the system"],
      },
      {
        key: "design",
        leftTags: ["Brand systems", "Websites", "Product UX", "Content"],
        rightTags: ["Visual language", "Figma", "Design systems", "Motion"],
        titleLines: ["Design", "the experience"],
      },
      {
        key: "build",
        leftTags: ["Next.js", "CMS", "Inquiry flows", "Launch support"],
        rightTags: ["Automation", "AI workflows", "Performance", "Iteration"],
        titleLines: ["Build", "the launch"],
      },
      {
        key: "consulting",
        leftTags: ["AI consulting", "Product audits", "Digital strategy"],
        rightTags: ["Founder support", "Team rituals", "Decision systems"],
        titleLines: ["Guide", "what's next"],
      },
    ],
    cta: {
      button: "Say hi!",
      href: "/contact",
      cursor: "Contact Gibson",
      headline: "Bring the messy idea. Gibson can help turn it into a working system.",
      tags: [
        "Strategy",
        "Brand systems",
        "Product UX",
        "AI workflows",
        "Websites",
        "Launch support",
        "Research",
        "Content",
        "Motion",
        "Consulting",
      ],
    },
  },
  about: {
    metadataTitle: "About Gibson Hall | Gibsooon",
    metadataDescription:
      "About Gibson Hall, a systems-minded creative working across product strategy, UX leadership, brand systems, AI workflows, and launch execution.",
    typedRoles: ["Product strategist", "UX leader", "AI systems designer"],
    introLead:
      "Hey, I am Gibson Hall. I work between product strategy, UX leadership, brand systems, digital product design, AI workflows, and launch execution.",
    introAccent:
      "The through-line is turning complex ideas into usable systems: civic art into interactive maps, retail catalogs into guided project tools, car-selling flows into clearer decisions, and founder concepts into launch-ready brands and products.",
    tags: [
      "Product strategy",
      "UX leadership",
      "Brand systems",
      "AI workflows",
      "Launch execution",
      "Digital products",
    ],
    workHistory: [
      {
        years: "2012-2016",
        company: "Mini Murals",
        role: "CTO for a Houston public-art project with 250+ murals by 40+ artists.",
      },
      {
        years: "2017-2021",
        company: "The Home Depot",
        role: "Senior Manager of UX Design leading product designers and UX researchers.",
      },
      {
        years: "2021-2026",
        company: "CarMax",
        role: "Manager of Product Design for the sell-your-car supply journey.",
      },
      {
        years: "2025-2026",
        company: "Straterra",
        role: "Freelance strategy, brand, UX/UI, and digital product partner.",
      },
    ],
    toolStack: [
      "Figma",
      "VS Code",
      "Codex",
      "Claude",
      "ChatGPT",
      "Google Gemini",
      "Lottie",
      "MCP servers",
    ],
    personalArtifacts: [
      "Dog Easter egg",
      "Drone archive",
      "AI workflow",
      "Bookshelf draft",
    ],
    cta: {
      button: "Talk through a project",
      headline: "Tell Gibson what needs to become real.",
    },
  },
    contact: {
    metadataTitle: "Contact Gibson Hall | Gibsooon",
    metadataDescription:
      "Contact Gibson Hall about founder-led digital transformation, product strategy, websites, AI systems, and launch projects.",
    eyebrow: "Contact",
    headline: "Now booking for Q3",
    lead:
      "I take on a small amount of clients to ensure I can bring dedication to each project.",
    accent: "",
    nextStepTitle: "What happens next",
    nextStep:
      "The answers should make the business moment, scope, budget, and timeline clear enough to decide whether a discovery call makes sense. Short answers are fine. Specific answers are better.",
    email: "gibhall@gmail.com",
  },
  lab: {
    title: "Lab | Gibsooon",
    description:
      "Notes, resources, and field experiments from Gibson Hall across product design, AI workflows, launch systems, and digital strategy.",
  },
} as const;

export type SiteCopy = typeof siteCopy;
