import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blogs/blog-article/BlogArticle";
import MoreOnTopic from "@/components/blogs/blog-article/MoreOnTopic";
import {
  getAdjacentLabArticles,
  getLabArticle,
  getRelatedLabArticles,
  labArticles,
} from "@/data/labArticles";

export function generateStaticParams() {
  return labArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getLabArticle(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Lab - Gibson Hall`,
    description: `${article.excerptLead} ${article.excerptAccent}`,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getLabArticle(slug);
  if (!article) notFound();

  const { previous, next } = getAdjacentLabArticles(slug);
  const relatedArticles = getRelatedLabArticles(slug);

  return (
    <div className="mxd-page-content inner-page-content lab-article-page">
      <BlogArticle article={article} previous={previous} next={next} />
      <MoreOnTopic articles={relatedArticles} />
    </div>
  );
}
