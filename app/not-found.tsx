import { Metadata } from "next";
import NotFound from "@/components/not-found/NotFound";
import Footer from "@/components/footers/Footer";
export const metadata: Metadata = {
  title: "404 | Gibsooon",
  description: "Page not found on the Gibson Hall portfolio site.",
};
export default function NotFoundPage() {
  return (
    <>
      <NotFound />
      <Footer />
    </>
  );
}
