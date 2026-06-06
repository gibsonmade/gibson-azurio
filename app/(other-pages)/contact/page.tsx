import { Metadata } from "next";
import InnerHeadline from "@/components/contact/InnerHeadline";
import { siteCopy } from "@/data/siteCopy";
export const metadata: Metadata = {
  title: siteCopy.contact.metadataTitle,
  description: siteCopy.contact.metadataDescription,
};
export default function ContactPage() {
  return (
    <>
      <div className="mxd-page-content inner-page-content contact-page">
        <InnerHeadline />
      </div>
    </>
  );
}
