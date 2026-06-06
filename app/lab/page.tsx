import dynamic from "next/dynamic";
import { Metadata } from "next";
import InnerHeadlineArticle from "@/components/lab/InnerHeadlineArticle";
import { siteCopy } from "@/data/siteCopy";

const BlogGrid = dynamic(() => import("@/components/lab/BlogGrid"));
const CTA = dynamic(() => import("@/components/lab/CTA"));

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
