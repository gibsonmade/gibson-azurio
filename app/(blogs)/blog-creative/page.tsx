import { Metadata } from "next";
import InnerHeadlineArticle from "@/components/blogs/blog-creative/InnerHeadlineArticle";
import BlogGrid from "@/components/blogs/blog-creative/BlogGrid";
import CTA from "@/components/blogs/blog-creative/CTA";
import { siteCopy } from "@/data/siteCopy";
export const metadata: Metadata = {
  title: siteCopy.lab.title,
  description: siteCopy.lab.description,
};
export default function BlogCreativePage() {
  return (
    <>
      <>
        <InnerHeadlineArticle />
        <BlogGrid />
        <CTA />
      </>
    </>
  );
}
