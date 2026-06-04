export type WorkProjectStatus = "flagship" | "coming-soon";

export type WorkProject = {
  slug: string;
  name: string;
  status: WorkProjectStatus;
  eyebrow: string;
  title: string;
  titleAccent: string;
  summary: string;
  client: string;
  industry: string;
  date: string;
  projectType: string;
  role: string;
  urlLabel: string;
  tags: string[];
  services: string[];
  constraints: string[];
  collaborationContext: string;
  storyAngle: string;
  challenge: string;
  approach: string;
  outcome: string;
  reviewStatus: string;
  cursorImage: string;
  images: {
    cover: string;
    hero: string;
    gallery: string[];
    nextProject: string;
  };
};

const projectImages = (
  cover: string,
  gallery: string[] = [cover],
  hero = gallery[0] ?? cover,
) => ({
  cover,
  hero,
  gallery: gallery.length > 0 ? gallery : [cover],
  nextProject: cover,
});

const comingSoonDetail = (name: string, summary: string) => ({
  challenge:
    "This story is still being prepared for publication, so the public page stays intentionally concise until the full case study is approved.",
  approach:
    "Gibson's role and contribution will be expanded once the publishable details, visuals, and outcomes are ready.",
  outcome: summary,
  collaborationContext: "Details are being held for Gibson review before publication.",
  constraints: ["Public-safe phrasing", "Approved visuals", "Verified outcomes"],
  storyAngle: `${name} proof point in Gibson's broader digital transformation portfolio.`,
  reviewStatus: "Needs Gibson review before full publication.",
});

export const workProjects: WorkProject[] = [
  {
    slug: "the-home-depot",
    name: "The Home Depot",
    status: "flagship",
    eyebrow: "Enterprise retail",
    title: "Selling projects",
    titleAccent: "not just products",
    summary:
      "Gibson helped lead UX work around reusable, validated project-shopping patterns for HomeDepot.com.",
    client: "The Home Depot",
    industry: "Enterprise retail / home improvement",
    date: "2017-2021",
    projectType: "Enterprise UX systems and omnichannel e-commerce",
    role: "Senior Manager of UX Design",
    urlLabel: "homedepot.com",
    tags: ["UX strategy", "Product leadership", "Design systems"],
    services: [
      "UX strategy",
      "Product design leadership",
      "UX research leadership",
      "Design systems",
      "E-commerce",
      "A/B testing",
      "Team management",
    ],
    constraints: [
      "Massive product catalog",
      "Highly variable home improvement projects",
      "Mobile considerations",
      "Design system consistency",
      "Omnichannel pickup and delivery behavior",
    ],
    collaborationContext:
      "Internal Home Depot role leading product designers and UX researchers in partnership with developers, business owners, analysts, and product teams.",
    storyAngle:
      "Helping a massive retailer sell complete projects, not just isolated products.",
    challenge:
      "HomeDepot.com had to support highly customizable home improvement projects inside a massive retail catalog. Customers needed more than individual products; they needed guided inputs, material lists, and omnichannel paths to pickup or delivery.",
    approach:
      "Gibson helped lead UX designers and researchers creating reusable, validated project-shopping patterns for calculators, configurators, mobile flows, input types, and design-system-aligned layouts.",
    outcome:
      "The work helped teams shift project experiences from product-by-product browsing toward guided material selection and more consistent reusable patterns across the Home Depot digital ecosystem.",
    reviewStatus:
      "Needs review for team size, publishable visuals, A/B testing details, and any measurable outcomes.",
    cursorImage: "/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg",
    images: projectImages("/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg", [
      "/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg",
      "/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot (1).jpg",
      "/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot+2.jpg",
      "/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot+3.jpg",
      "/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot+4.jpg",
      "/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot+5.jpg",
      "/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot+6.jpg",
      "/img-temp/uploads/case-study/homedepot/gibson-decks.jpg",
    ]),
  },
  {
    slug: "carmax",
    name: "CarMax",
    status: "flagship",
    eyebrow: "Automotive retail",
    title: "Simplifying",
    titleAccent: "sell-your-car",
    summary:
      "Gibson helps lead product design for CarMax's sell-your-car journey, a high-traffic funnel receiving over one million visitors each month.",
    client: "CarMax",
    industry: "Automotive retail / digital commerce",
    date: "2021-2026",
    projectType: "High-traffic product funnel and AI-driven product design",
    role: "Manager of Product Design",
    urlLabel: "carmax.com",
    tags: ["Product design", "A/B testing", "AI-assisted UX"],
    services: [
      "Product design",
      "UX strategy",
      "A/B testing",
      "Form funnel design",
      "Offer comprehension",
      "AI-assisted design and research",
      "Design systems",
    ],
    constraints: [
      "20+ question form funnel",
      "High-stakes customer decision",
      "Complex offer logic",
      "Online and in-store next steps",
      "Business-critical supply journey",
    ],
    collaborationContext:
      "Direct CarMax role working cross-functionally with developers, financial analysts, product managers, and business partners.",
    storyAngle:
      "Simplifying a high-traffic, high-stakes customer decision through product design, testing, and empathy.",
    challenge:
      "Selling a car online is a high-stakes decision with a long form flow, complex offer comprehension, and online or in-store next steps. The journey needs to feel simple enough for customers to finish.",
    approach:
      "Gibson helps lead design for the sell-your-car journey, including landing page testing, a 20+ question funnel, offer delivery, next-step clarity, and AI-driven design and research practices.",
    outcome:
      "The work supports a high-traffic funnel receiving over one million monthly visitors and helps customers move from sell intent to an understandable offer and clearer next step.",
    reviewStatus:
      "Needs review for exact title phrasing, top-three product experience claim, one-million-plus visitors phrasing, and specific A/B outcomes.",
    cursorImage: "/img-temp/uploads/case-study/carmax/gibson-cars.jpg",
    images: projectImages("/img-temp/uploads/case-study/carmax/gibson-cars.jpg"),
  },
  {
    slug: "mini-murals",
    name: "Mini Murals",
    status: "flagship",
    eyebrow: "Civic art",
    title: "Bringing civic",
    titleAccent: "creativity online",
    summary:
      "Gibson helped turn 250+ Houston public artworks by 40+ artists into a browsable brand, website, and interactive map experience.",
    client: "Mini Murals",
    industry: "Civic art / nonprofit creative initiative",
    date: "2012-2016",
    projectType: "Brand, website, maps, campaigns, and creative operations",
    role: "CTO",
    urlLabel: "minimurals.org",
    tags: ["Brand", "Interactive maps", "Civic storytelling"],
    services: [
      "Logo",
      "Website",
      "Interactive maps",
      "WordPress",
      "Email campaigns",
      "Marketing materials",
      "Operations",
    ],
    constraints: [
      "Distributed public artwork",
      "Neighborhood discovery",
      "Artist and theme browsing",
      "Civic partner coordination",
      "Early-stage operational needs",
    ],
    collaborationContext:
      "Worked with the CEO, COO, City of Houston, artists, districts, and community partners.",
    storyAngle:
      "Bringing civic creativity online by making hundreds of public artworks discoverable.",
    challenge:
      "Mini Murals created public art across Houston, but the distributed nature of the work made discovery, storytelling, and organization difficult without a strong digital layer.",
    approach:
      "Gibson helped as CTO with the logo, website, WordPress updates, interactive mural maps, neighborhood/artist/theme browsing, campaigns, marketing materials, and operational systems.",
    outcome:
      "The project made 250+ murals by 40+ artists easier to discover and helped bring public art into Houston neighborhoods, art districts, and areas with limited public art access.",
    reviewStatus:
      "Needs review for exact award phrasing, official nomination wording, CTO title preference, and final visual assets.",
    cursorImage: "/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - HD.png",
    images: projectImages("/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - HD.png", [
      "/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - HD.png",
      "/img-temp/uploads/case-study/minimurals/minimurals responsive website.png",
      "/img-temp/uploads/case-study/minimurals/miniMurals Houston Web Design -desktop.png",
      "/img-temp/uploads/case-study/minimurals/miniMurals+Houston+Web+Design+-desktop.jpeg",
      "/img-temp/uploads/case-study/minimurals/miniMurals+Houston+Web+Design+-+laptop.jpeg",
      "/img-temp/uploads/case-study/minimurals/miniMurals+Houston+Web+Design+-laptop2.jpeg",
      "/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - Mobile.png",
      "/img-temp/uploads/case-study/minimurals/gibson-mural.jpg",
    ]),
  },
  {
    slug: "chi-st-lukes",
    name: "CHI St. Luke's",
    status: "coming-soon",
    eyebrow: "Healthcare",
    title: "Healthcare",
    titleAccent: "clarity",
    summary:
      "A coming-soon story about simplifying a healthcare web experience for multiple audiences.",
    client: "CHI St. Luke's",
    industry: "Healthcare",
    date: "Coming soon",
    projectType: "Healthcare website experience",
    role: "Digital experience partner",
    urlLabel: "stlukeshealth.org",
    tags: ["Healthcare", "UX", "Access"],
    services: ["UX strategy", "Website design", "Content clarity"],
    ...comingSoonDetail(
      "CHI St. Luke's",
      "A coming-soon story about simplifying a healthcare web experience for multiple audiences."
    ),
    cursorImage: "/img-temp/uploads/case-study/chistlukes/CHI St Lukes Cover Image.png",
    images: projectImages("/img-temp/uploads/case-study/chistlukes/CHI St Lukes Cover Image.png", [
      "/img-temp/uploads/case-study/chistlukes/CHI St Lukes Cover Image.png",
      "/img-temp/uploads/case-study/chistlukes/CHI Responsive.png",
      "/img-temp/uploads/case-study/chistlukes/CHI St Lukes Website Desktop Design.jpg",
      "/img-temp/uploads/case-study/chistlukes/CHI St Lukes Website Laptop Design.jpg",
      "/img-temp/uploads/case-study/chistlukes/CHI St Lukes Website Tablet Design.jpg",
      "/img-temp/uploads/case-study/chistlukes/CHI St Lukes Website Mobile Design.jpg",
      "/img-temp/uploads/case-study/chistlukes/CHI St Lukes Website Style Guide UI.png",
      "/img-temp/uploads/case-study/chistlukes/CHI St Lukes Wireframes and Journey Map.png",
      "/img-temp/uploads/case-study/chistlukes/CHI St Lukes Hospital Personas Doctor.png",
      "/img-temp/uploads/case-study/chistlukes/chi cover photo.jpg",
    ]),
  },
  {
    slug: "ritual",
    name: "Ritual",
    status: "coming-soon",
    eyebrow: "Fitness",
    title: "Boutique",
    titleAccent: "fitness launch",
    summary:
      "A coming-soon story about turning a boutique fitness concept into a polished digital presence.",
    client: "Ritual",
    industry: "Boutique fitness",
    date: "Coming soon",
    projectType: "Brand and web presence",
    role: "Brand and digital partner",
    urlLabel: "ritual.co",
    tags: ["Brand", "Website", "Launch"],
    services: ["Brand direction", "Website design", "Launch support"],
    ...comingSoonDetail(
      "Ritual",
      "A coming-soon story about turning a boutique fitness concept into a polished digital presence."
    ),
    cursorImage: "/img-temp/uploads/case-study/ritual/gibson-tulum.jpg",
    images: projectImages("/img-temp/uploads/case-study/ritual/gibson-tulum.jpg", [
      "/img-temp/uploads/case-study/ritual/gibson-tulum.jpg",
      "/img-temp/uploads/case-study/ritual/gibson-tulum2.jpg",
    ]),
  },
  {
    slug: "staterra",
    name: "Straterra",
    status: "flagship",
    eyebrow: "Commercial real estate",
    title: "From idea",
    titleAccent: "to launch",
    summary:
      "Gibson helped a serial entrepreneur turn a commercial-property platform concept into a launch-ready brand, website, lead-generation flow, and product UX.",
    client: "Straterra",
    industry: "Commercial real estate / investment platform",
    date: "2025-2026",
    projectType: "End-to-end brand, website, lead generation, and product UX",
    role: "Freelance strategy, brand, UX/UI, and digital product partner",
    urlLabel: "straterra.com",
    tags: ["Naming", "Brand strategy", "Product UX"],
    services: [
      "Naming",
      "Brand strategy",
      "Brand guidelines",
      "Art direction",
      "Website design",
      "Lead generation",
      "Platform UX/UI",
      "Advising",
    ],
    constraints: [
      "Raw founder concept",
      "Private member-only platform",
      "Confidential property data",
      "Need for public credibility and lead generation",
    ],
    collaborationContext: "Worked directly with a serial entrepreneur and continues advising.",
    storyAngle:
      "Turning a founder's raw idea into a named brand, credible website, lead-generation engine, and working product UX.",
    challenge:
      "A serial entrepreneur had a commercial-property platform concept that needed naming, brand clarity, website credibility, lead generation, and product UX before it could move toward launch.",
    approach:
      "Gibson helped with concept translation, naming, surveys and reports, brand guidelines, art direction, a B2B SaaS-like website, lead generation, platform UX/UI, and ongoing advising.",
    outcome:
      "The concept became a more launch-ready brand, public website, inquiry funnel, and private platform foundation, with confidential property data kept out of public-facing materials.",
    reviewStatus:
      "Needs review for exact spelling, category language, public-safe screenshots/mockups, and whether 100+ Houston listings can be published.",
    cursorImage: "/img-temp/uploads/case-study/staterra/Stationery1.jpg",
    images: projectImages("/img-temp/uploads/case-study/staterra/Stationery1.jpg", [
      "/img-temp/uploads/case-study/staterra/Stationery1.jpg",
      "/img-temp/uploads/case-study/staterra/gibson-building.jpg",
      "/img-temp/uploads/case-study/staterra/gibson-buildings.jpg",
      "/img-temp/uploads/case-study/staterra/logo Gold.png",
      "/img-temp/uploads/case-study/staterra/logo.png",
      "/img-temp/uploads/case-study/staterra/logo White.png",
    ]),
  },
  {
    slug: "wiab-ai",
    name: "Wiab AI",
    status: "coming-soon",
    eyebrow: "AI systems",
    title: "AI workflow",
    titleAccent: "operations",
    summary:
      "A coming-soon story about practical AI workflows, operator control, and turning agentic systems into usable product experiences.",
    client: "Wiab AI",
    industry: "Artificial intelligence",
    date: "Coming soon",
    projectType: "AI product experience",
    role: "Product and workflow design partner",
    urlLabel: "wiab.ai",
    tags: ["AI", "Product", "Workflow"],
    services: ["AI workflow design", "Product UX", "Systems strategy"],
    ...comingSoonDetail(
      "Wiab AI",
      "A coming-soon story about practical AI workflows, operator control, and usable product experiences."
    ),
    cursorImage: "/img-temp/uploads/case-study/wiab/gibson-robot.jpg",
    images: projectImages("/img-temp/uploads/case-study/wiab/gibson-robot.jpg"),
  },
  {
    slug: "cactus-club",
    name: "Cactus Club",
    status: "coming-soon",
    eyebrow: "Hospitality",
    title: "Hospitality",
    titleAccent: "with a point of view",
    summary:
      "A coming-soon hospitality concept shaped around quick discovery, confident planning, and a distinctive local voice.",
    client: "Cactus Club",
    industry: "Hospitality",
    date: "Coming soon",
    projectType: "Hospitality digital presence",
    role: "Brand and digital strategy partner",
    urlLabel: "cactusclub.com",
    tags: ["Hospitality", "Brand", "Local"],
    services: ["Brand direction", "Website strategy", "Digital presence"],
    ...comingSoonDetail(
      "Cactus Club",
      "A coming-soon hospitality concept shaped around quick discovery, confident planning, and a distinctive local voice."
    ),
    cursorImage: "/img-temp/uploads/case-study/cactus-club/gibson-cactus.jpg",
    images: projectImages("/img-temp/uploads/case-study/cactus-club/gibson-cactus.jpg", [
      "/img-temp/uploads/case-study/cactus-club/gibson-cactus.jpg",
      "/img-temp/uploads/case-study/cactus-club/gibson-cacti.jpg",
    ]),
  },
  {
    slug: "academy-sports-outdoors",
    name: "Academy Sports + Outdoors",
    status: "coming-soon",
    eyebrow: "Retail",
    title: "Mobile-first",
    titleAccent: "omnichannel",
    summary:
      "A coming-soon story about mobile-first omnichannel strategy at retail scale.",
    client: "Academy Sports + Outdoors",
    industry: "Sporting goods retail",
    date: "Coming soon",
    projectType: "Retail experience strategy",
    role: "Digital strategy partner",
    urlLabel: "academy.com",
    tags: ["Retail", "Outdoor", "Commerce"],
    services: ["Mobile strategy", "Omnichannel UX", "Retail planning"],
    ...comingSoonDetail(
      "Academy Sports + Outdoors",
      "A coming-soon story about mobile-first omnichannel strategy at retail scale."
    ),
    cursorImage: "/img-temp/uploads/case-study/academy/gibson-sports.jpg",
    images: projectImages("/img-temp/uploads/case-study/academy/gibson-sports.jpg"),
  },
];

export function getWorkProject(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}

export function getNextWorkProject(slug: string) {
  const index = workProjects.findIndex((project) => project.slug === slug);
  if (index === -1) return workProjects[0];
  return workProjects[(index + 1) % workProjects.length];
}
