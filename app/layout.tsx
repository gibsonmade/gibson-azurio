import "@/styles/template.css";
import { Geist, JetBrains_Mono } from "next/font/google";
import Header1 from "@/components/headers/Header1";
import TemplateRuntimeProvider from "@/components/common/TemplateRuntimeProvider";
import MenuRuntimeShell from "@/components/headers/MenuRuntimeShell";
import { Metadata } from "next";
import Script from "next/script";
import { siteCopy } from "@/data/siteCopy";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: siteCopy.seo.title,
  description: siteCopy.seo.description,
};

const motionInitScript = `
(function() {
  try {
    var params = new URLSearchParams(window.location.search);
    var forced = params.get('motion');
    var stored = localStorage.getItem('template.motion');
    var reduced = forced === 'reduced' || forced === 'still' || (forced !== 'full' && (stored === 'reduced' || (!stored && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)));
    document.documentElement.setAttribute('data-motion', reduced ? 'reduced' : 'full');
  } catch (error) {
    document.documentElement.setAttribute('data-motion', 'full');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialTheme = "dark" as const;

  return (
    <html
      lang="en"
      className="no-touch"
      color-scheme={initialTheme}
      data-motion="full"
      suppressHydrationWarning
    >
      <body
        className={`${geist.variable} ${jetbrainsMono.variable} app-font-vars`}
      >
        <Script
          id="motion-preference-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: motionInitScript,
          }}
        />
        <TemplateRuntimeProvider>
          <Header1 initialTheme={initialTheme} />
          <MenuRuntimeShell />
          {children}
        </TemplateRuntimeProvider>
      </body>
    </html>
  );
}
