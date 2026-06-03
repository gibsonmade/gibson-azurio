import type { Metadata } from "next";
import ResourcePageHeader from "@/components/resources/ResourcePageHeader";
import {
  getPhosphorIconInventory,
  getSvgIconInventory,
} from "@/lib/resourceInventory";

const TOTAL_ICON_LIMIT = 150;
const SVG_ICON_LIMIT = 100;
const PHOSPHOR_ICON_LIMIT = TOTAL_ICON_LIMIT - SVG_ICON_LIMIT;

export const metadata: Metadata = {
  title: "Icons | Gibson Lab",
  description: "Internal icon inventory for Gibson Azurio public assets and theme icon fonts.",
};

export default async function IconsPage() {
  const [svgIcons, phosphorIcons] = await Promise.all([
    getSvgIconInventory(SVG_ICON_LIMIT),
    getPhosphorIconInventory(PHOSPHOR_ICON_LIMIT),
  ]);

  return (
    <>
      <ResourcePageHeader
        title="Icons"
        description="SVG marks and a capped set of Phosphor icon font classes that are already available in the theme."
        countLabel={`${svgIcons.length + phosphorIcons.length} of ${TOTAL_ICON_LIMIT} shown`}
      />
      <section className="mxd-section bg-color-base padding-bottom resource-section">
        <div className="mxd-container grid-l-container">
          <div className="resource-pattern-group">
            <div className="resource-pattern-group__heading">
              <h2>SVG Assets</h2>
              <span className="tag tag-s tag-medium">up to {SVG_ICON_LIMIT}</span>
            </div>
            <div className="resource-icon-grid">
              {svgIcons.map((icon) => (
                <article className="resource-icon-card" key={icon.src}>
                  <div className="resource-icon-card__preview">
                    <img loading="lazy" src={icon.src} alt={icon.name} />
                  </div>
                  <h3>{icon.name}</h3>
                  <code>{icon.src}</code>
                </article>
              ))}
            </div>
          </div>

          <div className="resource-pattern-group">
            <div className="resource-pattern-group__heading">
              <h2>Phosphor Classes</h2>
              <span className="tag tag-s tag-medium">up to {PHOSPHOR_ICON_LIMIT}</span>
            </div>
            <div className="resource-icon-grid">
              {phosphorIcons.map((icon) => (
                <article className="resource-icon-card" key={icon.className}>
                  <div className="resource-icon-card__preview resource-icon-card__preview--font">
                    <i className={icon.className} aria-hidden />
                  </div>
                  <h3>{icon.name}</h3>
                  <code>{icon.className}</code>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
