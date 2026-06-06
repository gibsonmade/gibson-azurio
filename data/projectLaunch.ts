export type LaunchTaskStatus = "pass" | "fail" | "blocked" | "watch" | "next";

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
  eyebrow: "Launch QA",
  title: "Gibsooon.com Launch Checklist",
  summary:
    "A launch-critical checklist for shipping Gibsooon on Vercel today, focused on routes, assets, copy, contact, deployment, and avoidable risk.",
  currentStep: {
    label: "Current status",
    title: "Ready for final Vercel configuration",
    detail:
      "The site builds on Next.js App Router and the launch fixes are scoped to copy, links, form behavior, metadata, and deployment instructions. The contact form still depends on the Web3Forms key being set in Vercel.",
  },
  stats: [
    { value: "16.2.3", label: "Next.js App Router" },
    { value: "0", label: "missing literal public assets" },
    { value: "1", label: "Vercel env var required" },
  ],
  phases: [
    {
      title: "Must fix before launch",
      description:
        "Launch blockers and launch-sensitive tasks that need to be complete before pointing traffic at www.gibsooon.com.",
      tasks: [
        {
          title: "Production build",
          detail:
            "Run npm run build before deploy. Last audit build passed on Next.js 16.2.3 and prerendered the App Router routes.",
          status: "pass",
        },
        {
          title: "Vercel deployment configuration",
          detail:
            "Use the Next.js preset, npm install, npm run build, default output directory, and do not set EXPORT or BASE_PATH.",
          status: "pass",
        },
        {
          title: "Contact form provider",
          detail:
            "Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel. Without it, the form shows a public email fallback instead of pretending to send.",
          status: "blocked",
        },
        {
          title: "Copy and case studies",
          detail:
            "Proofread visible launch copy and tighten the eight priority case studies without adding unsupported metrics.",
          status: "pass",
        },
        {
          title: "Public navigation",
          detail:
            "Keep Home, About, Work, Lab, Contact, Credits, and real project/article routes public. Keep internal inventory and launch pages out of prominent public navigation.",
          status: "pass",
        },
      ],
    },
    {
      title: "Can fix after launch",
      description:
        "Useful improvements that should not delay today's launch.",
      tasks: [
        {
          title: "Image folder cleanup",
          detail:
            "Move assets from /images to a cleaner /images structure later. Current root-relative public paths load.",
          status: "next",
        },
        {
          title: "Image format optimization",
          detail:
            "Convert large PNG/JPG assets to WebP or AVIF after launch where visual quality allows.",
          status: "next",
        },
        {
          title: "Automated route crawler",
          detail:
            "Add a repeatable npm smoke test for route status, redirects, metadata, and image existence.",
          status: "next",
        },
        {
          title: "Server-side email route",
          detail:
            "Consider replacing client-side Web3Forms with a Vercel API route and email provider after launch.",
          status: "next",
        },
      ],
    },
    {
      title: "Risky changes to avoid today",
      description:
        "Changes that could create avoidable launch regressions.",
      tasks: [
        {
          title: "Router or export changes",
          detail:
            "Do not switch router strategy, enable static export, add basePath, or add assetPrefix for Vercel.",
          status: "watch",
        },
        {
          title: "Broad asset migration",
          detail:
            "Do not rename or move the entire image tree today unless a concrete broken asset appears.",
          status: "watch",
        },
        {
          title: "Visual redesign",
          detail:
            "Do not redesign layouts, nav behavior, animation systems, or the overall visual direction during final launch prep.",
          status: "watch",
        },
        {
          title: "Unsupported claims",
          detail:
            "Do not add new metrics, confidential details, or client claims that are not already supported by the current copy.",
          status: "watch",
        },
      ],
    },
    {
      title: "Final QA status",
      description:
        "Pass/fail status for the final verification sweep.",
      tasks: [
        {
          title: "Routes",
          detail:
            "Verify /, /about, /work, every case study, /lab, every lab article, /contact, /credits, /project-launch, and custom 404.",
          status: "pass",
        },
        {
          title: "Legacy redirects",
          detail:
            "Verify /blog-article redirects to /lab, /works-default redirects to /work, and /services redirects to /.",
          status: "pass",
        },
        {
          title: "Assets and icons",
          detail:
            "Confirm public assets, favicon, icon.png, apple-icon.png, and OG image resolve in the production build.",
          status: "pass",
        },
        {
          title: "Contact form",
          detail:
            "Pass only after the Vercel Web3Forms key is configured and a real submission is tested from production.",
          status: "blocked",
        },
        {
          title: "Responsive visual QA",
          detail:
            "Check desktop, tablet, mobile, dark mode, light mode, menu states, scroll behavior, and contact form states before DNS cutover.",
          status: "next",
        },
      ],
    },
  ],
};
