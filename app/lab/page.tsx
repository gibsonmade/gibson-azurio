import { Metadata } from "next";
import InnerHeadlineArticle from "@/components/lab/InnerHeadlineArticle";
import BlogGrid from "@/components/lab/BlogGrid";
import CTA from "@/components/lab/CTA";
import { siteCopy } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: siteCopy.lab.title,
  description: siteCopy.lab.description,
};

export default function LabPage() {
  return (
    <>
      <InnerHeadlineArticle />
      <BlogGrid />
      <CTA />
    </>
  );
}
