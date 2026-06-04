import type { Metadata } from "next";
import Link from "next/link";
import ResourcePageHeader from "@/components/resources/ResourcePageHeader";
import PatternPreview from "@/components/resources/PatternPreview";
import { resourcePatternCategories, resourcePatterns } from "@/data/resourcePatterns";

export const metadata: Metadata = {
  title: "UI Patterns | Gibson Lab",
  description: "Internal reference for the reusable UI patterns in Gibson Azurio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PatternsPage() {
  return (
    <>
      <ResourcePageHeader
        title="UI Patterns"
        description="A reference shelf for the sections, components, and class groups already available in this theme build."
        countLabel={`${resourcePatterns.length} patterns`}
      />
      <section className="mxd-section bg-color-base padding-bottom resource-section">
        <div className="mxd-container grid-l-container">
          {resourcePatternCategories.map((category) => {
            const categoryPatterns = resourcePatterns.filter(
              (pattern) => pattern.category === category,
            );

            return (
              <div className="resource-pattern-group" key={category}>
                <div className="resource-pattern-group__heading">
                  <h2>{category}</h2>
                  <span className="tag tag-s tag-medium">
                    {categoryPatterns.length} available
                  </span>
                </div>
                <div className="resource-pattern-grid">
                  {categoryPatterns.map((pattern) => (
                    <article className="resource-pattern-card" key={pattern.title}>
                      <PatternPreview pattern={pattern} />
                      <div className="resource-card-tags">
                        {pattern.tags.map((tag) => (
                          <span className="tag tag-s tag-medium" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3>{pattern.title}</h3>
                      <p>{pattern.description}</p>
                      <div className="resource-class-list">
                        {pattern.classNames.map((className) => (
                          <code key={className}>{className}</code>
                        ))}
                      </div>
                      <div className="resource-card-footer">
                        <span>{pattern.source}</span>
                        <Link href={pattern.referenceRoute}>View route</Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
