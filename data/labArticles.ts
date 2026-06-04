export type LabArticleSection = {
  id: string;
  title: string;
  body: string[];
};

export type LabArticle = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerptLead: string;
  excerptAccent: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  quote: {
    lead: string;
    accent: string;
    cite: string;
  };
  sections: LabArticleSection[];
};

export const labArticles: LabArticle[] = [
  {
    slug: "field-notes-on-product-design",
    title: "Field notes on product design",
    date: "04 June, 2026",
    readTime: "4min read",
    tags: ["Product design", "Strategy", "Launch systems"],
    excerptLead:
      "The useful version of a product usually appears after the team stops arguing about screens and starts naming the decisions.",
    excerptAccent:
      "These notes are about turning ambiguous ideas into a path a team can actually build, test, and maintain.",
    image: "/img-temp/uploads/case-study-generated/carmax/carmax-01-hero-divider.jpg",
    imageWidth: 1800,
    imageHeight: 1200,
    imageAlt: "Product design planning workspace for a Gibson Hall lab article",
    quote: {
      lead: "A strong product direction is not more decoration.",
      accent: "It is a clearer agreement about what should happen next.",
      cite: "/ Gibson Hall",
    },
    sections: [
      {
        id: "chapter-01",
        title: "Start with the business moment",
        body: [
          "Before layout, copy, or tooling, I try to name the moment the business is actually in. Sometimes the team needs to launch a new offer. Sometimes they need to simplify a funnel. Sometimes they need to make a founder's rough idea legible enough for other people to believe in it.",
          "That framing matters because the right product work is not always the biggest interface. It is the clearest next version of the system.",
        ],
      },
      {
        id: "chapter-02",
        title: "Design the decision path",
        body: [
          "Most product friction comes from unclear decisions: what should I choose, what happens if I continue, who needs this information, and what will change after I submit it?",
          "The work gets better when those moments are written down and sequenced. From there, screens become a way to support decisions instead of a place to hide them.",
        ],
      },
      {
        id: "chapter-03",
        title: "Make the system maintainable",
        body: [
          "A launch-ready product needs more than a polished first view. It needs patterns, content rules, reusable components, and enough operational clarity for the team to keep improving it after launch.",
          "That is the difference between a nice concept and a working system.",
        ],
      },
    ],
  },
  {
    slug: "frontend-innovations-and-user-journeys",
    title: "Frontend systems that protect the user journey",
    date: "21 May, 2026",
    readTime: "5min read",
    tags: ["Frontend", "UX systems", "Performance"],
    excerptLead:
      "Frontend work carries the customer's trust in small details: loading, hierarchy, forms, motion, and the way a page responds under pressure.",
    excerptAccent:
      "The best interface code protects the journey instead of becoming another thing users have to work around.",
    image: "/img-temp/uploads/case-study-generated/the-home-depot/the-home-depot-02-guided-inputs.jpg",
    imageWidth: 1800,
    imageHeight: 1200,
    imageAlt: "Guided interface components arranged as a frontend systems article image",
    quote: {
      lead: "Good frontend work makes the product feel calm.",
      accent: "The user should feel the clarity, not the implementation.",
      cite: "/ Gibson Hall",
    },
    sections: [
      {
        id: "chapter-01",
        title: "Interface code is product behavior",
        body: [
          "A button that shifts, a form that loses context, or an animation that blocks reading is not just a technical issue. It changes what the product feels like and whether someone trusts the next step.",
          "That is why I think about frontend systems as part of the user journey, not only as the layer that renders design.",
        ],
      },
      {
        id: "chapter-02",
        title: "Patterns reduce decision fatigue",
        body: [
          "Reusable components help teams move faster, but their real value is consistency. The same input logic, error behavior, spacing rhythm, and mobile treatment gives users fewer surprises.",
          "A system does not need to be huge to be useful. It needs to make the next decision easier for the team and the person using the product.",
        ],
      },
      {
        id: "chapter-03",
        title: "Motion should support comprehension",
        body: [
          "Motion can help explain relationships, direct attention, and make a brand feel more alive. It can also slow the page down or hide content from people who need it immediately.",
          "That is why the site now includes still mode. The interface should keep its visual design without requiring anyone to wait through movement.",
        ],
      },
    ],
  },
  {
    slug: "branding-in-creating-digital-experiences",
    title: "Brand systems are product systems",
    date: "08 May, 2026",
    readTime: "4min read",
    tags: ["Brand systems", "Digital products", "Founder launches"],
    excerptLead:
      "A useful brand is not just a logo package. It is a set of decisions that helps a product, website, and team behave consistently.",
    excerptAccent:
      "The strongest brand work gives the digital experience a point of view before the interface starts asking for attention.",
    image: "/img-temp/uploads/case-study-generated/staterra/staterra-02-brand-guidelines.jpg",
    imageWidth: 1800,
    imageHeight: 1200,
    imageAlt: "Brand system materials for a Gibson Hall lab article",
    quote: {
      lead: "Brand decisions should make product decisions easier.",
      accent: "If they only decorate the surface, they are not doing enough work.",
      cite: "/ Gibson Hall",
    },
    sections: [
      {
        id: "chapter-01",
        title: "Identity becomes a working language",
        body: [
          "For founder-led teams, the brand often starts as a feeling. The work is translating that feeling into a language people can use: naming, type, color, tone, interface patterns, and launch materials.",
          "When those pieces connect, the website stops feeling like a separate artifact and starts feeling like the product's first system.",
        ],
      },
      {
        id: "chapter-02",
        title: "Consistency is practical",
        body: [
          "Brand systems are not only for large companies. A small studio, a private platform, or an early product needs enough consistency to make future decisions faster.",
          "That can be a simple set of rules: how buttons behave, how photography is cropped, how headlines sound, and where the brand should feel bold or quiet.",
        ],
      },
      {
        id: "chapter-03",
        title: "The launch should feel inevitable",
        body: [
          "When brand and product strategy are aligned, the launch feels less like a collection of assets and more like a clear point of view entering the world.",
          "That is the goal: make the next version feel obvious once it exists.",
        ],
      },
    ],
  },
  {
    slug: "designing-for-the-future-of-interactive-digital-spaces",
    title: "Designing interactive spaces people can understand",
    date: "24 April, 2026",
    readTime: "5min read",
    tags: ["Interactive maps", "Civic UX", "Discovery"],
    excerptLead:
      "Interactive experiences work best when they help people orient themselves before asking them to explore.",
    excerptAccent:
      "Maps, directories, galleries, and AI workflows all need the same basic care: context first, discovery second, action third.",
    image: "/img-temp/uploads/case-study-generated/mini-murals/mini-murals-02-interactive-map.jpg",
    imageWidth: 1800,
    imageHeight: 1200,
    imageAlt: "Interactive map interface for a Gibson Hall lab article",
    quote: {
      lead: "Discovery is easier when the system gives people a place to stand.",
      accent: "Orientation is part of the interface.",
      cite: "/ Gibson Hall",
    },
    sections: [
      {
        id: "chapter-01",
        title: "Give people a starting point",
        body: [
          "A good interactive space does not assume people know what they want. It gives them useful entry points: neighborhood, role, need, theme, task, or next best action.",
          "That was true for public art discovery, and it is just as true for commerce funnels, healthcare navigation, and founder-led product launches.",
        ],
      },
      {
        id: "chapter-02",
        title: "Make exploration feel bounded",
        body: [
          "Exploration should feel open without becoming vague. Filters, categories, cards, maps, and summaries all help people understand what kind of space they are in.",
          "The trick is giving enough structure to reduce confusion without making the experience feel closed.",
        ],
      },
      {
        id: "chapter-03",
        title: "Connect discovery to action",
        body: [
          "The last step is making sure discovery leads somewhere. That might be booking a class, finding a physician, planning a project, reading a case study, or contacting a team.",
          "Interactive design earns its keep when curiosity can turn into a confident next move.",
        ],
      },
    ],
  },
];

export const featuredLabArticle = labArticles[0];

export function getLabArticle(slug: string) {
  return labArticles.find((article) => article.slug === slug);
}

export function getAdjacentLabArticles(slug: string) {
  const index = labArticles.findIndex((article) => article.slug === slug);
  const safeIndex = index === -1 ? 0 : index;
  return {
    previous: labArticles[(safeIndex - 1 + labArticles.length) % labArticles.length],
    next: labArticles[(safeIndex + 1) % labArticles.length],
  };
}

export function getRelatedLabArticles(slug: string, count = 3) {
  return labArticles.filter((article) => article.slug !== slug).slice(0, count);
}
