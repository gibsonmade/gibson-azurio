import type { Metadata } from "next";
import ResourcePageHeader from "@/components/resources/ResourcePageHeader";
import { getGroupedImageInventory } from "@/lib/resourceInventory";

export const metadata: Metadata = {
  title: "Images | Gibson Lab",
  description: "Internal image inventory for Gibson Azurio public assets.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ImagesPage() {
  const imageGroups = await getGroupedImageInventory();
  const totalAssets = imageGroups.reduce((total, group) => total + group.assets.length, 0);

  return (
    <>
      <ResourcePageHeader
        title="Images"
        description="A visual index of public image assets available to this app."
        countLabel={`${totalAssets} assets`}
      />
      <section className="mxd-section bg-color-base padding-bottom resource-section">
        <div className="mxd-container grid-l-container">
          <div className="resource-image-index">
            {imageGroups.map((group) => (
              <a className="tag tag-s tag-medium" href={`#${group.key}`} key={group.key}>
                {group.label} / {group.assets.length}
              </a>
            ))}
          </div>
          {imageGroups.map((group) => (
            <div className="resource-pattern-group" id={group.key} key={group.key}>
              <div className="resource-pattern-group__heading">
                <h2>{group.label}</h2>
                <span className="tag tag-s tag-medium">{group.assets.length} assets</span>
              </div>
              <div className="resource-asset-grid">
                {group.assets.map((image) => (
                  <article className="resource-asset-card" key={image.src}>
                    <div className="resource-asset-card__preview resource-asset-card__preview--image">
                      <img loading="lazy" src={image.src} alt={image.name} />
                    </div>
                    <div className="resource-asset-card__body">
                      <div className="resource-card-tags">
                        <span className="tag tag-s tag-medium">{image.extension}</span>
                        <span className="tag tag-s tag-medium">{image.folder}</span>
                      </div>
                      <h3>{image.name}</h3>
                      <code>{image.src}</code>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
