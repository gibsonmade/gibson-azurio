import Link from "next/link";

type ResourcePageHeaderProps = {
  title: string;
  description: string;
  countLabel?: string;
};

export default function ResourcePageHeader({
  title,
  description,
  countLabel,
}: ResourcePageHeaderProps) {
  return (
    <section className="mxd-section bg-color-base resource-hero">
      <div className="mxd-container grid-l-container">
        <div className="resource-hero__nav">
          <Link href="/lab" className="tag tag-s tag-medium">
            Lab
          </Link>
          <span className="tag tag-s tag-medium">internal</span>
          {countLabel ? <span className="tag tag-s tag-medium">{countLabel}</span> : null}
        </div>
        <div className="inner-headline">
          <h1 className="inner-headline__title">{title}</h1>
          <p className="resource-hero__description">{description}</p>
        </div>
      </div>
    </section>
  );
}
