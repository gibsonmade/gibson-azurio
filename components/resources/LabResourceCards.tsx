import Link from "next/link";
import TextScramble from "@/components/animations/TextScramble";

export const labResources = [
  {
    href: "/lab/patterns",
    eyebrow: "Patterns",
    title: "UI Patterns",
    description:
      "Theme sections, components, class groups, and source files already available in the Gibson Azurio build.",
  },
  {
    href: "/lab/images",
    eyebrow: "Images",
    title: "Image Inventory",
    description:
      "A visual reference for available public image assets, including img-temp and theme image folders.",
  },
  {
    href: "/lab/icons",
    eyebrow: "Icons",
    title: "Icon Inventory",
    description:
      "SVG assets plus a capped set of Phosphor icon font classes loaded by the theme.",
  },
];

export default function LabResourceCards() {
  return (
    <section className="mxd-section bg-color-base padding-bottom">
      <div className="mxd-container grid-l-container">
        <div className="resource-section-title">
          <span className="tag tag-s tag-medium">internal</span>
          <h2 className="resource-section-title__heading">Reference resources</h2>
        </div>
        <div className="resource-card-grid">
          {labResources.map((resource) => (
            <Link className="resource-link-card" href={resource.href} key={resource.href}>
              <div className="resource-link-card__top">
                <span className="tag tag-s tag-medium">internal</span>
                <span className="resource-link-card__eyebrow">{resource.eyebrow}</span>
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <span className="btn btn-line-icon slide-right">
                <TextScramble className="btn-caption mxd-scramble">Open</TextScramble>
                <i className="btn-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 18"
                    aria-hidden
                  >
                    <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                  </svg>
                </i>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
