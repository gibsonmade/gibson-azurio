import Footer2 from "@/components/footers/Footer2";

export default function LabLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer2 />
    </>
  );
}
