import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blogs/blog-article/BlogArticle";
import MoreOnTopic from "@/components/blogs/blog-article/MoreOnTopic";

const KNOWN_SLUGS = [
  "field-notes-on-product-design",
  "frontend-innovations-and-user-journeys",
  "branding-in-creating-digital-experiences",
  "designing-for-the-future-of-interactive-digital-spaces",
];

export function generateStaticParams() {
  return KNOWN_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${title} | Lab — Gibson Hall`,
    description: "Field notes on product design, AI workflows, and launch systems from Gibson Hall.",
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!KNOWN_SLUGS.includes(slug)) notFound();

  return (
    <div className="mxd-page-content inner-page-content lab-article-page">
      <BlogArticle />
      <MoreOnTopic />
    </div>
  );
}
