import "@/styles/template.css";
import { Geist, JetBrains_Mono } from "next/font/google";
import Header1 from "@/components/headers/Header1";
import TemplateRuntimeProvider from "@/components/common/TemplateRuntimeProvider";
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
  metadataBase: new URL("https://gibsooon.com"),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: siteCopy.seo.title,
    description: siteCopy.seo.description,
    images: [{ url: "/img-temp/uploads/gibson-logo-1.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteCopy.seo.title,
    description: siteCopy.seo.description,
    images: ["/img-temp/uploads/gibson-logo-1.png"],
  },
};

// Runs synchronously before React hydrates so the loader never shows the wrong theme.
const themeInitScript = `
(function() {
  try {
    var t = localStorage.getItem('template.theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('color-scheme', t);
    }
  } catch (e) {}
})();
`;

const motionInitScript = `
(function() {
  try {
    var params = new URLSearchParams(window.location.search);
    var forced = params.get('motion');
    var stored = localStorage.getItem('template.motion');
    var reduced = forced === 'reduced' || forced === 'still' || (forced !== 'full' && stored !== 'full');
    document.documentElement.setAttribute('data-motion', reduced ? 'reduced' : 'full');
  } catch (error) {
    document.documentElement.setAttribute('data-motion', 'reduced');
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
      data-motion="reduced"
      suppressHydrationWarning
    >
      <body
        className={`${geist.variable} ${jetbrainsMono.variable} app-font-vars`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <Script
          id="motion-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: motionInitScript }}
        />
        <TemplateRuntimeProvider>
          <Header1 initialTheme={initialTheme} />
          {children}
        </TemplateRuntimeProvider>
      </body>
    </html>
  );
}
