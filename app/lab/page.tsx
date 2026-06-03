export { metadata } from "../(blogs)/blog-creative/page";
import BlogCreativePage from "../(blogs)/blog-creative/page";
import LabResourceCards from "@/components/resources/LabResourceCards";

export default function LabPage() {
  return (
    <>
      <BlogCreativePage />
      <LabResourceCards />
    </>
  );
}
