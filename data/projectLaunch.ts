export type TaskStatus = "done" | "in-progress" | "todo" | "blocked";
export type TaskOwner = "AI" | "Human" | "Both";

export interface Task {
  id: number;
  title: string;
  owner: TaskOwner;
  tool: string;
  status: TaskStatus;
  notes?: string;
}

export interface Section {
  number: number;
  title: string;
  tasks: Task[];
}

export const projectSections: Section[] = [
  {
    number: 1,
    title: "Project Setup + Launch Control",
    tasks: [
      { id: 1, title: "Project Launch page", owner: "AI", tool: "Claude Code", status: "done", notes: "Internal checklist page created with all stages, owners, status, and notes." },
      { id: 2, title: "Nav link placement", owner: "AI", tool: "Claude Code", status: "done", notes: "Project Launch added to nav footer bar before 'Digital Systems' text." },
      { id: 3, title: "Repo setup", owner: "AI", tool: "GitHub CLI", status: "done", notes: "Private repo at github.com/gibsonmade/gibson-azurio. Initial commit pushed." },
      { id: 4, title: "Static export setup", owner: "AI", tool: "Claude Code", status: "done", notes: "EXPORT=true env flag enables output:'export' mode. npm run build:export for GitHub Pages build. Turbopack root warning fixed." },
      { id: 5, title: "MVP tracking rules", owner: "Both", tool: "This page", status: "done", notes: "Project Launch page is the source of truth. AI keeps statuses updated; Human supplies feedback/assets." },
    ],
  },
  {
    number: 2,
    title: "Brand Assets",
    tasks: [
      { id: 6, title: "8-bit logo of Gibson", owner: "Both", tool: "Codex image gen / Human reference photos", status: "todo", notes: "Human provides face reference photos first. AI generates pixel portrait mark." },
      { id: 7, title: "Favicon update", owner: "AI", tool: "Claude Code + ImageMagick", status: "todo", notes: "Convert chosen logo mark into favicon sizes (16, 32, 180, 192px). Replace /public/favicon.ico and apple-touch-icon." },
      { id: 8, title: "Liquid metal 'G' hero asset", owner: "AI", tool: "Codex image gen", status: "todo", notes: "Generate metallic G graphic. Use Liquid.paper.design as optional paid fallback if generation output needs refinement." },
      { id: 9, title: "Nav portrait image", owner: "Both", tool: "Codex image gen / Human reference", status: "todo", notes: "Human provides portrait references. AI generates polished menu sidebar image." },
      { id: 10, title: "Visual style guide pass", owner: "AI", tool: "Claude Code", status: "todo", notes: "Define rules for glass surfaces, blue depth, metallic accent, pixel portrait, personal iconography so assets feel cohesive." },
    ],
  },
  {
    number: 3,
    title: "Cursor + Personal Graphics",
    tasks: [
      { id: 11, title: "Hero trailing cursor assets", owner: "AI", tool: "Codex image gen", status: "todo", notes: "Replace template cursor graphics with transparent personal assets: hibiscus, Watson, ukulele, spray paint can, iPhone, armadillo, cactus, hippie van, Saturn, coffee, suitcase, cowboy hat." },
      { id: 12, title: "Watson dapper-boy asset", owner: "Both", tool: "Codex image gen / Human Watson photo", status: "todo", notes: "Human provides Watson reference photos. AI generates clean transparent image for cursor." },
      { id: 13, title: "Cursor performance check", owner: "AI", tool: "Browser QA", status: "todo", notes: "Verify images are small (< 80KB), transparent PNG/WebP, smooth at 60fps on desktop. Disable or simplify on mobile." },
      { id: 14, title: "Footer trailing cursor", owner: "AI", tool: "Claude Code", status: "todo", notes: "Reuse header cursor behavior in footer with same personal asset system." },
    ],
  },
  {
    number: 4,
    title: "Homepage",
    tasks: [
      { id: 15, title: "Hero color/depth update", owner: "AI", tool: "Claude Code", status: "todo", notes: "Richer blue depth, glass, stronger visual hierarchy. Preserve sticky design-system frame." },
      { id: 16, title: "Hero glass treatment", owner: "AI", tool: "Claude Code", status: "todo", notes: "Add glass-like surfaces or overlays for better first impression without obscuring content." },
      { id: 17, title: "Replace 'Gibson' hero treatment", owner: "AI", tool: "Claude Code", status: "todo", notes: "Integrate liquid metal G as hero identity element once asset is ready (Task 8)." },
      { id: 18, title: "Homepage slide content", owner: "AI", tool: "Claude Code + Codex image gen", status: "todo", notes: "Rewrite and rebuild 3–4 homepage slides with relevant images and copy." },
      { id: 19, title: "Messy ideas sticky square", owner: "AI", tool: "Claude Code", status: "todo", notes: "'Messy ideas / useful systems' text should live on the square from initial load, not only after scroll reveal." },
      { id: 20, title: "Homepage bottom cleanup", owner: "AI", tool: "Claude Code", status: "todo", notes: "Remove unnecessary lower-page template sections. Keep only portfolio, services, work, and contact content." },
    ],
  },
  {
    number: 5,
    title: "Case Studies",
    tasks: [
      { id: 21, title: "Case study content inventory", owner: "Human", tool: "—", status: "todo", notes: "Confirm which details are public-safe for Home Depot, Mini Murals, CHI St. Luke's, Academy, CarMax, Straterra, WIAB, and Cactus." },
      { id: 22, title: "Case study copywriting", owner: "AI", tool: "Claude Code", status: "todo", notes: "Draft polished copy from existing project data. Keep sensitive enterprise details generalized." },
      { id: 23, title: "Case study image direction", owner: "AI", tool: "Claude Code", status: "todo", notes: "Create prompts and visual briefs for each case study using sprite/mood board direction." },
      { id: 24, title: "Case study hero images", owner: "AI", tool: "Codex image gen", status: "todo", notes: "Generate free-first hero images for each case study. Use existing/local assets where possible." },
      { id: 25, title: "Case study supporting shots", owner: "AI", tool: "Codex image gen", status: "todo", notes: "Generate or compose project detail shots for overview sections, process blocks, and image grids." },
      { id: 26, title: "Case study pages update", owner: "AI", tool: "Claude Code", status: "todo", notes: "Populate each work page with final copy, hero images, supporting shots, metadata, and next-project nav." },
      { id: 27, title: "Case study review pass", owner: "Human", tool: "—", status: "todo", notes: "Review accuracy, confidentiality, and tone before pages are treated as launch-ready." },
    ],
  },
  {
    number: 6,
    title: "About Page",
    tasks: [
      { id: 28, title: "About copy rewrite", owner: "AI", tool: "Claude Code", status: "todo", notes: "Rewrite around product strategy, UX leadership, AI systems, brand, and launch work." },
      { id: 29, title: "Work history update", owner: "AI", tool: "Claude Code", status: "todo", notes: "Refine dates, roles, and descriptions from existing demo content." },
      { id: 30, title: "About graphics update", owner: "AI", tool: "Codex image gen", status: "todo", notes: "Replace template graphics with personal, work-relevant, or generated visuals." },
      { id: 31, title: "'Talk through a project' CTA", owner: "AI", tool: "Claude Code", status: "todo", notes: "Update colors, hover behavior, link target → /contact." },
      { id: 32, title: "About interactions and hovers", owner: "AI", tool: "Browser QA", status: "todo", notes: "Fix hover states so the page feels deliberate on desktop and graceful on touch devices." },
    ],
  },
  {
    number: 7,
    title: "Contact Page",
    tasks: [
      { id: 33, title: "Contact hero polish", owner: "AI", tool: "Claude Code", status: "in-progress", notes: "Current state: headline set to 'Now booking for Q3', badge added, photo/socials removed, email updated." },
      { id: 34, title: "Contact copy update", owner: "AI", tool: "Claude Code", status: "in-progress", notes: "Lead copy updated. Further polish needed for tone and visual direction." },
      { id: 35, title: "Contact form UI", owner: "AI", tool: "Claude Code", status: "todo", notes: "Improve form layout, field labels/placeholders, submit states, and mobile spacing." },
      { id: 36, title: "Contact form behavior", owner: "Both", tool: "Web3Forms", status: "blocked", notes: "Blocked: Human needs to provide Web3Forms access key. AI will wire up submit/success/error states." },
      { id: 37, title: "Email and connect links", owner: "Human", tool: "—", status: "in-progress", notes: "Email updated to gibhall@gmail.com. Human to confirm social/connect links." },
      { id: 38, title: "'What's next' simplification", owner: "AI", tool: "Claude Code", status: "todo", notes: "Simplify next-step section so page is focused on contact, not explanation." },
    ],
  },
  {
    number: 8,
    title: "Footer + Global Navigation",
    tasks: [
      { id: 39, title: "Footer copy update", owner: "AI", tool: "Claude Code", status: "in-progress", notes: "'Available for freelance' badge added. Further copy refinement needed." },
      { id: 40, title: "Footer links/layout", owner: "AI", tool: "Claude Code", status: "todo", notes: "Update navigation, case study links, focus links, and layout density." },
      { id: 41, title: "Footer tablet layout", owner: "AI", tool: "Browser QA", status: "todo", notes: "Fix spacing, wrapping, and image behavior on tablet widths." },
      { id: 42, title: "Footer background images", owner: "AI", tool: "Codex image gen", status: "todo", notes: "Find or generate stronger free-first background images that fit the new visual direction." },
      { id: 43, title: "Mobile nav fix", owner: "AI", tool: "Browser QA", status: "todo", notes: "Repair mobile menu layout, tap targets, scroll behavior, and active-link behavior." },
      { id: 44, title: "iPhone viewing fix", owner: "AI", tool: "Browser QA + Claude Code", status: "todo", notes: "Test and resolve iOS-specific viewport, animation, video, and overflow issues." },
    ],
  },
  {
    number: 9,
    title: "Lab Gate",
    tasks: [
      { id: 45, title: "Static Lab gate", owner: "AI", tool: "Claude Code", status: "todo", notes: "Add lightweight form gate before Lab content that collects contact info and reveals content client-side." },
      { id: 46, title: "Lab gate copy", owner: "AI", tool: "Claude Code", status: "todo", notes: "Frame gate as 'request access / register interest', not fake security." },
      { id: 47, title: "Lab content cleanup", owner: "AI", tool: "Claude Code", status: "todo", notes: "Remove obvious template/blog remnants. Keep Lab focused on resources, patterns, images, icons." },
      { id: 48, title: "Lab form handoff", owner: "Both", tool: "Web3Forms", status: "blocked", notes: "Blocked: depends on Web3Forms access key (same as Task 36)." },
    ],
  },
  {
    number: 10,
    title: "QA + Launch",
    tasks: [
      { id: 49, title: "Desktop QA", owner: "AI", tool: "Browser QA", status: "todo", notes: "Test homepage, work, case studies, about, contact, lab, footer, nav, animations, and forms at desktop." },
      { id: 50, title: "Tablet QA", owner: "AI", tool: "Browser QA", status: "todo", notes: "Test tablet layouts: footer, nav, homepage slides, case study grids, contact form." },
      { id: 51, title: "Mobile QA", owner: "AI", tool: "Browser QA", status: "todo", notes: "Test mobile layout, nav, scroll animations, cursor fallbacks, image cropping, iOS rendering." },
      { id: 52, title: "Accessibility pass", owner: "AI", tool: "Claude Code + axe", status: "todo", notes: "Check alt text, focus states, keyboard nav, form labels, contrast, reduced-motion handling." },
      { id: 53, title: "Build validation", owner: "AI", tool: "npm run build:export", status: "todo", notes: "Run lint/build/static export checks. Fix any launch-blocking issues." },
      { id: 54, title: "GitHub Pages deploy", owner: "AI", tool: "GitHub CLI + gh-pages", status: "todo", notes: "Push repo, configure Pages, publish preview URL, verify all routes and assets load." },
      { id: 55, title: "Preview review", owner: "Both", tool: "Browser + This page", status: "todo", notes: "Human reviews live preview. AI logs opportunities on this page." },
      { id: 56, title: "Final cleanup", owner: "AI", tool: "Claude Code", status: "todo", notes: "Remove or hide internal-only links (Project Launch) before public launch, unless it should remain visible." },
    ],
  },
];

export function getStats() {
  const all = projectSections.flatMap((s) => s.tasks);
  return {
    total: all.length,
    done: all.filter((t) => t.status === "done").length,
    inProgress: all.filter((t) => t.status === "in-progress").length,
    blocked: all.filter((t) => t.status === "blocked").length,
    todo: all.filter((t) => t.status === "todo").length,
  };
}
