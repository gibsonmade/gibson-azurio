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
  serviceDetails: string[];
  constraints: string[];
  constraintDetails: string[];
  collaborationContext: string;
  storyAngle: string;
  challenge: string;
  approach: string;
  outcome: string;
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
  nextProject = cover,
) => ({
  cover,
  hero,
  gallery: gallery.length > 0 ? gallery : [cover],
  nextProject,
});

const generatedProjectImages = (folder: string, files: string[]) => {
  const paths = files.map((file) => `/images/projects/${folder}/${file}`);
  const [hero, ...gallery] = paths;
  return projectImages(hero, gallery, hero, gallery[gallery.length - 1] ?? hero);
};

const generatedProjectAssetSets = {
  theHomeDepot: generatedProjectImages("the-home-depot", [
    "the-home-depot-01-hero-divider.jpg",
    "the-home-depot-02-guided-inputs.jpg",
    "the-home-depot-03-mobile-funnel.jpg",
    "the-home-depot-04-omnichannel.jpg",
    "the-home-depot-05-system-patterns.jpg",
    "the-home-depot-06-outcome.jpg",
  ]),
  carmax: generatedProjectImages("carmax", [
    "carmax-01-hero-divider.jpg",
    "carmax-02-form-funnel.jpg",
    "carmax-03-offer-comprehension.jpg",
    "carmax-04-testing-and-research.jpg",
    "carmax-05-ai-assisted-design.jpg",
    "carmax-06-next-step.jpg",
  ]),
  miniMurals: generatedProjectImages("mini-murals", [
    "mini-murals-01-hero-divider.jpg",
    "mini-murals-02-interactive-map.jpg",
    "mini-murals-03-artist-detail.jpg",
    "mini-murals-04-neighborhood-discovery.jpg",
    "mini-murals-05-brand-materials.jpg",
    "mini-murals-06-outcome.jpg",
  ]),
  chiStLukes: generatedProjectImages("chi-st-lukes", [
    "chi-st-lukes-01-hero-divider.jpg",
    "chi-st-lukes-02-responsive-care-access.jpg",
    "chi-st-lukes-03-persona.jpg",
    "chi-st-lukes-04-location-finding.jpg",
    "chi-st-lukes-05-style-guide.jpg",
    "chi-st-lukes-06-outcome.jpg",
  ]),
  ritual: generatedProjectImages("ritual", [
    "ritual-01-hero-divider.jpg",
    "ritual-02-brand-presence.jpg",
    "ritual-03-class-detail.jpg",
    "ritual-04-mobile-booking.jpg",
    "ritual-05-launch-kit.jpg",
    "ritual-06-outcome.jpg",
  ]),
  straterra: generatedProjectImages("staterra", [
    "staterra-01-hero-divider.jpg",
    "staterra-02-brand-guidelines.jpg",
    "staterra-03-lead-generation.jpg",
    "staterra-04-private-platform.jpg",
    "staterra-05-advising.jpg",
    "staterra-06-outcome.jpg",
  ]),
  wiabAi: generatedProjectImages("wiab-ai", [
    "wiab-ai-01-hero-divider.jpg",
    "wiab-ai-02-agent-workflow.jpg",
    "wiab-ai-03-human-in-control.jpg",
    "wiab-ai-04-systems-strategy.jpg",
    "wiab-ai-05-product-interface.jpg",
    "wiab-ai-06-outcome.jpg",
  ]),
  cactusClub: generatedProjectImages("cactus-club", [
    "cactus-club-01-hero-divider.jpg",
    "cactus-club-02-discovery.jpg",
    "cactus-club-03-mobile-planning.jpg",
    "cactus-club-04-local-voice.jpg",
    "cactus-club-05-venue-detail.jpg",
    "cactus-club-06-outcome.jpg",
  ]),
  academy: generatedProjectImages("academy-sports-outdoors", [
    "academy-01-hero-divider.jpg",
    "academy-02-mobile-first.jpg",
    "academy-03-store-pickup.jpg",
    "academy-04-outdoor-planning.jpg",
    "academy-05-omnichannel-system.jpg",
    "academy-06-outcome.jpg",
  ]),
};

export const workProjects: WorkProject[] = [
  {
    slug: "the-home-depot",
    name: "The Home Depot",
    status: "flagship",
    eyebrow: "Enterprise retail",
    title: "Project shopping",
    titleAccent: "with more confidence",
    summary:
      "Gibson helped lead UX work for guided project-shopping patterns across HomeDepot.com, turning complex home-improvement decisions into clearer digital paths.",
    client: "The Home Depot",
    industry: "Enterprise retail / home improvement",
    date: "2017-2021",
    projectType: "Enterprise UX systems and omnichannel e-commerce",
    role: "Senior Manager, UX Design",
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
    serviceDetails: [
      "Reframed project shopping around planning behavior, confidence, and next-step clarity.",
      "Led designers through reusable patterns for calculators, configurators, mobile flows, and product journeys.",
      "Used research and testing to make complex inputs easier to understand before cart, pickup, or delivery.",
    ],
    constraints: [
      "Massive product catalog",
      "Highly variable home improvement projects",
      "Mobile considerations",
      "Design system consistency",
      "Omnichannel pickup and delivery behavior",
    ],
    constraintDetails: [
      "Project patterns had to work across a massive catalog with many categories, product types, and fulfillment paths.",
      "Home projects vary by home, budget, material, measurement, and confidence level, so flows needed to guide without pretending every customer was the same.",
      "Mobile experiences had to keep dense project inputs understandable while customers researched, measured, and shopped in different contexts.",
      "Layouts and interaction patterns needed to stay aligned with the broader Home Depot design system.",
      "Pickup, delivery, and store behavior had to stay clear as customers moved from planning into purchase.",
    ],
    collaborationContext:
      "Internal Home Depot role leading product designers and UX researchers in partnership with developers, business owners, analysts, and product teams.",
    storyAngle:
      "Helping a massive retailer support complete projects, not just isolated product searches.",
    challenge:
      "HomeDepot.com had to support highly customizable home-improvement projects inside a massive retail catalog. Customers needed more than a product grid; they needed guided inputs, material decisions, and clear paths to pickup or delivery.",
    approach:
      "Gibson helped lead designers and researchers creating reusable, validated project-shopping patterns for calculators, configurators, mobile flows, input types, and design-system-aligned layouts.",
    outcome:
      "The work helped teams move project experiences from product-by-product browsing toward guided material selection and more consistent reusable patterns across the Home Depot digital ecosystem.",
    cursorImage: generatedProjectAssetSets.theHomeDepot.cover,
    images: generatedProjectAssetSets.theHomeDepot,
  },
  {
    slug: "carmax",
    name: "CarMax",
    status: "flagship",
    eyebrow: "Automotive retail",
    title: "A clearer way",
    titleAccent: "to sell your car",
    summary:
      "Gibson helps lead product design for CarMax's sell-your-car journey, a high-traffic funnel that receives over one million visitors each month.",
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
    serviceDetails: [
      "Designed clearer moments across a high-traffic sell-your-car journey.",
      "Aligned the funnel around customer confidence, offer comprehension, and a more obvious next step.",
      "Used testing to shape decisions in a journey with real customer and business stakes.",
    ],
    constraints: [
      "20+ question form funnel",
      "High-stakes customer decision",
      "Complex offer logic",
      "Online and in-store next steps",
      "Business-critical supply journey",
    ],
    constraintDetails: [
      "The funnel needed to collect enough vehicle information without making the experience feel exhausting or unclear.",
      "Customers needed confidence because selling a car involves money, timing, transportation, and trust.",
      "Offer comprehension depended on making complex logic feel simple once customers reached a result.",
      "The next step had to make sense whether a customer continued online or finished in store.",
      "The experience supported an important supply path, so changes needed to balance customer clarity with business needs.",
    ],
    collaborationContext:
      "Direct CarMax role working cross-functionally with developers, financial analysts, product managers, and business partners.",
    storyAngle:
      "Simplifying a high-traffic, high-stakes customer decision through product design, testing, and practical empathy.",
    challenge:
      "Selling a car online is a high-stakes decision with a long form flow, complex offer comprehension, and online or in-store next steps. The journey has to feel calm enough for customers to finish.",
    approach:
      "Gibson helps lead design for the sell-your-car journey, including landing page testing, a 20+ question funnel, offer delivery, next-step clarity, and AI-assisted design and research practices.",
    outcome:
      "The work supports a high-traffic funnel receiving over one million monthly visitors and helps customers move from sell intent to an understandable offer and a clearer next step.",
    cursorImage: generatedProjectAssetSets.carmax.cover,
    images: generatedProjectAssetSets.carmax,
  },
  {
    slug: "mini-murals",
    name: "Mini Murals",
    status: "flagship",
    eyebrow: "Civic art",
    title: "Public art",
    titleAccent: "made discoverable",
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
    serviceDetails: [
      "Created a recognizable identity for a public-art initiative spread across Houston.",
      "Built a digital home where murals, artists, themes, and neighborhoods could be explored together.",
      "Made location-based discovery a core part of the experience through interactive mapping.",
    ],
    constraints: [
      "Distributed public artwork",
      "Neighborhood discovery",
      "Artist and theme browsing",
      "Civic partner coordination",
      "Early-stage operational needs",
    ],
    constraintDetails: [
      "The artwork lived across Houston, so the digital layer needed to show what existed and where to find it.",
      "Discovery had to work by neighborhood, not only by artwork title or artist name.",
      "The experience needed to support multiple ways into the collection, including artists, themes, locations, and public context.",
      "City, district, artist, and community relationships shaped how information needed to be organized and represented.",
      "The platform had to support a growing initiative while the operational systems around it were still maturing.",
    ],
    collaborationContext:
      "Worked with the CEO, COO, City of Houston, artists, districts, and community partners.",
    storyAngle:
      "Bringing civic creativity online by making hundreds of public artworks easier to find.",
    challenge:
      "Mini Murals created public art across Houston, but the distributed nature of the work made discovery, storytelling, and organization difficult without a strong digital layer.",
    approach:
      "Gibson helped as CTO across the logo, website, WordPress updates, interactive mural maps, neighborhood/artist/theme browsing, campaigns, marketing materials, and operational systems.",
    outcome:
      "The project made 250+ murals by 40+ artists easier to discover and helped bring public art into Houston neighborhoods, art districts, and areas with limited public-art access.",
    cursorImage: generatedProjectAssetSets.miniMurals.cover,
    images: generatedProjectAssetSets.miniMurals,
  },
  {
    slug: "chi-st-lukes",
    name: "CHI St. Luke's",
    status: "flagship",
    eyebrow: "Healthcare",
    title: "Healthcare access",
    titleAccent: "with less friction",
    summary:
      "Gibson led creative direction for a community-centered hospital platform that brought scattered microsites into one easier-to-use digital experience.",
    client: "CHI St. Luke's",
    industry: "Healthcare",
    date: "Agency project",
    projectType: "Hospital group website redesign and launch",
    role: "Creative Director",
    urlLabel: "stlukeshealth.org",
    tags: ["Healthcare", "Responsive UX", "Community access"],
    services: [
      "Creative direction",
      "Project timeline",
      "UI design leadership",
      "Technology development leadership",
      "Stakeholder interviews",
      "Responsive website strategy",
      "Launch strategy",
    ],
    serviceDetails: [
      "Kept the project moving across creative, technical, stakeholder, and launch needs.",
      "Led interface decisions around community access, service discovery, and maintainable content.",
      "Guided the build direction so the site could support a large healthcare organization across devices.",
    ],
    constraints: [
      "Outdated website ecosystem",
      "Disconnected microsites",
      "Community information access",
      "Physician and staff approval",
      "HIPAA-conscious delivery",
      "Maintainable updates for locations, physicians, services, and articles",
    ],
    constraintDetails: [
      "The existing web presence needed a clearer structure that could support a large hospital group.",
      "Separate microsites made it harder for visitors to know where to go for care, services, and organizational information.",
      "The experience had to serve real community needs, not just internal department structures.",
      "Physician and staff input mattered because the site needed to reflect care delivery accurately.",
      "The project needed careful healthcare delivery practices while keeping the interface approachable.",
      "Internal teams needed a site they could keep current as location, physician, service, and article content changed.",
    ],
    collaborationContext:
      "Agency-of-record project for a hospital group, with Gibson serving as Creative Director and coordinating community, staff, physician, design, technology, and launch needs.",
    storyAngle:
      "Turning a fragmented hospital web presence into one community-centered place for care information.",
    challenge:
      "The hospital group had an outdated web ecosystem made up of disconnected microsites. Community members needed one reliable place to find locations, services, care information, physician details, articles, and organizational information.",
    approach:
      "Gibson led UI design, technology direction, timeline, budget alignment, and launch strategy. The team interviewed community members and staff to clarify what the experience needed to support, then shaped a responsive, SEO-minded, HIPAA-conscious platform the organization could maintain over time.",
    outcome:
      "The work consolidated a fragmented digital presence into a responsive hospital website designed around community needs, physician review, easier information discovery, and maintainable updates for locations, physicians, services, and articles.",
    cursorImage: generatedProjectAssetSets.chiStLukes.cover,
    images: generatedProjectAssetSets.chiStLukes,
  },
  {
    slug: "ritual",
    name: "Ritual",
    status: "flagship",
    eyebrow: "Fitness",
    title: "A boutique studio",
    titleAccent: "with a real ritual",
    summary:
      "Gibson helped a Houston Pilates and sauna studio translate a name, location, and founder vision into a brand identity, signage direction, and responsive website.",
    client: "Ritual",
    industry: "Boutique fitness / wellness",
    date: "Studio launch",
    projectType: "Brand identity, digital design, and website launch",
    role: "Brand and digital design partner",
    urlLabel: "ritual.co",
    tags: ["Brand identity", "Website", "Booking"],
    services: [
      "Brand discovery",
      "Logo exploration",
      "Visual identity",
      "Color direction",
      "Signage-ready brand design",
      "Responsive website design",
      "Booking and payment platform integration",
    ],
    serviceDetails: [
      "Translated the owners' desired studio feeling into concrete brand directions.",
      "Explored and refined logo options that could work across signage, marketing, and digital touchpoints.",
      "Connected the physical studio presence with a responsive website and booking path.",
    ],
    constraints: [
      "Brick-and-mortar build in progress",
      "Founder vision not yet visualized",
      "Signage and interior color decisions tied to brand direction",
      "Need to connect website visitors to booking and payment",
    ],
    constraintDetails: [
      "The brand work needed to move quickly enough to inform physical studio decisions before the buildout was complete.",
      "The owners had a clear feeling in mind, but needed visual options they could evaluate, choose from, and refine.",
      "Logo, color, signage, and web decisions had to work together as one studio identity.",
      "The website needed to move visitors from curiosity into class information, booking, and payment without friction.",
    ],
    collaborationContext:
      "Worked directly with the studio owners to translate their name, location, and vision into tangible brand options and a launch-ready website.",
    storyAngle:
      "Helping a wellness studio move from a feeling in the owners' heads to a brand people could recognize, visit, and book.",
    challenge:
      "The owners had a name, location, and strong sense of what Ritual should feel like, but needed help turning that idea into a visual identity that could guide signage, color decisions, marketing materials, and the website.",
    approach:
      "Gibson worked with the owners to understand the desired feeling, sketched identity directions, refined logo options, and presented choices they could react to and iterate from. Once the selected direction became the core mark, Gibson designed the responsive website and connected it to the studio's booking and payment platform.",
    outcome:
      "The selected identity shaped Ritual's main sign, marketing materials, and website presence, giving the studio a cohesive brand foundation and a clear digital path for the community to learn about the practice and book.",
    cursorImage: generatedProjectAssetSets.ritual.cover,
    images: generatedProjectAssetSets.ritual,
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
    serviceDetails: [
      "Helped turn an early commercial-property concept into a name and positioning system.",
      "Defined the brand logic needed to make the public site and private platform feel connected.",
      "Created guidelines that could support web, product, lead generation, and future advising.",
    ],
    constraints: [
      "Raw founder concept",
      "Private member-only platform",
      "Confidential property data",
      "Need for public credibility and lead generation",
    ],
    constraintDetails: [
      "The early idea needed to become a named, understandable product before the website and platform could carry it.",
      "The product experience had to support a private audience while still giving the public brand enough credibility.",
      "Sensitive property information needed to be protected while still communicating the platform's value.",
      "The public website needed to earn trust and create a path toward qualified inquiry.",
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
    cursorImage: generatedProjectAssetSets.straterra.cover,
    images: generatedProjectAssetSets.straterra,
  },
  {
    slug: "wiab-ai",
    name: "WIAB AI",
    status: "flagship",
    eyebrow: "AI systems",
    title: "AI workflow",
    titleAccent: "that stays human",
    summary:
      "Gibson created a private internal marketing-in-a-box platform that turns early website ideas into responsive, brand-aware starting points in minutes.",
    client: "WIAB AI",
    industry: "Artificial intelligence",
    date: "Internal platform",
    projectType: "Private AI workflow platform and website generation system",
    role: "Founder, product designer, and developer",
    urlLabel: "wiab.ai",
    tags: ["AI workflow", "Product systems", "Website generation"],
    services: [
      "AI workflow design",
      "UX best-practice skills",
      "Design-system guidance",
      "Frontend development",
      "Starter systems",
      "Quality checks",
      "Internal tooling",
    ],
    serviceDetails: [
      "Designed the internal workflow that moves from early prompt to usable website starting point.",
      "Built skill guidance around UX checks, content structure, layout quality, and launch readiness.",
      "Added design-system guardrails so generated outputs feel more intentional, brand-aware, and reviewable.",
    ],
    constraints: [
      "Private internal tool",
      "Need for stronger first-pass website concepts",
      "Brand consistency across generated outputs",
      "Readable and performant code",
      "Human review before launch",
      "Screenshots allowed publicly",
    ],
    constraintDetails: [
      "The platform is an internal Gibson workflow, so the public story needs to focus on capability without exposing private tooling details.",
      "The system had to create a more useful first version than a loose concept or generic first pass.",
      "Generated outputs needed guardrails around color, typography, spacing, brand fit, and design-system consistency.",
      "The code needed to stay organized enough for real project work, not just visual demos.",
      "AI output still needed Gibson's judgment before anything moved toward a client-ready launch.",
      "Screenshots can communicate the system without making the private workflow itself public.",
    ],
    collaborationContext:
      "Self-directed internal product built from Gibson's UX, design, development, and AI workflow experience and used at the start of website projects.",
    storyAngle:
      "Compressing the slow first phase of a website project into a stronger starting point without shrinking the client's ambition.",
    challenge:
      "Website projects often spend days or weeks gathering direction, exploring copy, testing imagery, selecting colors, choosing fonts, and shaping early layouts before a useful first version exists.",
    approach:
      "Gibson built WIAB AI as a private marketing-in-a-box platform with AI skills, starter frameworks, parameters, and checks that guide UX quality, brand cohesion, responsive design, readable code, and fast-loading frontend structure.",
    outcome:
      "The internal workflow gives Gibson and clients a stronger V1 preview in minutes, creating a better foundation for focused V2 launch work instead of spending the early project window on a thin MVP.",
    cursorImage: generatedProjectAssetSets.wiabAi.cover,
    images: generatedProjectAssetSets.wiabAi,
  },
  {
    slug: "cactus-club",
    name: "Cactus Club",
    status: "flagship",
    eyebrow: "Hospitality",
    title: "Local discovery",
    titleAccent: "with a social pulse",
    summary:
      "Gibson was hired as CPO to help shape an Austin community platform from founder vision into a brand, responsive website, and iOS product direction.",
    client: "Cactus Club",
    industry: "Community / local discovery",
    date: "Founder-led launch",
    projectType: "Brand, responsive website, and iOS app product direction",
    role: "Chief Product Officer",
    urlLabel: "cactusclub.com",
    tags: ["Product strategy", "Community", "iOS app"],
    services: [
      "Product strategy",
      "Founder vision planning",
      "Community interviews",
      "Brand exploration",
      "Logo concepts",
      "Responsive website design",
      "iOS app design",
    ],
    serviceDetails: [
      "Helped shape the founder's vision into a product direction people could understand and use.",
      "Turned early strategy into a clearer plan for the brand, website, and app experience.",
      "Used community input to keep the product centered on Austin discovery with other people.",
    ],
    constraints: [
      "Early founder vision",
      "Community-first positioning",
      "Austin local discovery",
      "Web experience live while iOS app continues development",
      "Need for clear product direction before buildout",
    ],
    constraintDetails: [
      "The founder's idea needed enough product shape to become something people could understand and use.",
      "The experience had to center community, not just lists of places or activities.",
      "Austin discovery needed to feel local, social, and useful for people looking to explore with others.",
      "The web experience needed to stand on its own while the iOS product continued moving through development.",
      "Brand, website, and app decisions needed a shared product direction before deeper buildout.",
    ],
    collaborationContext:
      "Worked directly with the founder as CPO to clarify the vision, interview community members, shape brand options, and guide web and app experience design.",
    storyAngle:
      "Helping a community-first Austin idea become a real product experience for exploring the city together.",
    challenge:
      "Cactus Club needed to turn a founder's idea into a product and brand direction that could help people explore Austin with community instead of navigating the city alone.",
    approach:
      "Gibson worked with the founder on product vision, interviewed community members, drafted brand plans, created logo and branding options, designed a responsive website, and shaped the iOS app experience now in development.",
    outcome:
      "The web experience is live and the iOS app is in development, giving the community a clearer way to discover and experience Austin with other people.",
    cursorImage: generatedProjectAssetSets.cactusClub.cover,
    images: generatedProjectAssetSets.cactusClub,
  },
  {
    slug: "academy-sports-outdoors",
    name: "Academy Sports + Outdoors",
    status: "flagship",
    eyebrow: "Retail",
    title: "Retail research",
    titleAccent: "for real-world shopping",
    summary:
      "As Senior UX Researcher, Gibson helped product and design teams understand Academy's website, store experience, and omnichannel retail journeys.",
    client: "Academy Sports + Outdoors",
    industry: "Sporting goods retail",
    date: "2015-2017",
    projectType: "UX research, retail strategy, and omnichannel experience design",
    role: "Senior UX Researcher",
    urlLabel: "academy.com",
    tags: ["UX research", "Omnichannel", "Retail commerce"],
    services: [
      "UX research",
      "Strategic analysis",
      "Product team discovery",
      "Validated concept support",
      "BOPIS research",
      "Navigation strategy",
      "Checkout UX",
      "Account experience research",
    ],
    serviceDetails: [
      "Ran research that helped teams understand digital and store-connected customer needs.",
      "Translated findings into strategic direction for product, merchandising, and experience teams.",
      "Supported discovery around opportunities that could improve key retail journeys.",
    ],
    constraints: [
      "Large retail product catalog",
      "10k+ products to organize into meaningful navigation",
      "Store and digital journey overlap",
      "BOPIS and omnichannel service layers",
      "Checkout and account experience friction",
    ],
    constraintDetails: [
      "Research had to support decisions across a large sporting goods catalog with many shopping intents.",
      "Navigation needed to help customers browse a broad product set without making the structure feel overwhelming.",
      "Customers moved between website and store behavior, so research had to account for both environments.",
      "Pickup and omnichannel service layers needed to feel understandable as part of the shopping journey.",
      "Checkout, account, OAuth, and sign-on work needed to reduce friction in practical customer moments.",
    ],
    collaborationContext:
      "Internal role working with product teams and UI designers to identify customer opportunities, validate concepts through UX research, and support digital retail decision-making.",
    storyAngle:
      "Learning how large-scale retail experiences connect website, store, merchandising, checkout, account, and pickup journeys.",
    challenge:
      "Academy's customers moved between digital and store experiences, while product, navigation, checkout, account, and BOPIS journeys all needed research-backed clarity to support retail-scale decision making.",
    approach:
      "As Senior UX Researcher, Gibson provided strategic research and analysis for the website, store experience, and omnichannel connection layers. He worked with product teams to identify customer opportunities and with UI designers to shape concepts validated through UX research.",
    outcome:
      "The work supported Academy's digital sales efforts and improved the team's understanding of BOPIS, navigation for 10k+ products, checkout forms and layouts, account experience, OAuth, and social sign-on.",
    cursorImage: generatedProjectAssetSets.academy.cover,
    images: generatedProjectAssetSets.academy,
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
