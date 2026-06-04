import Footer2 from "@/components/footers/Footer2";
import { creditsSections } from "@/data/credits";
import { siteCopy } from "@/data/siteCopy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Credits | ${siteCopy.brand.site}`,
  description:
    "Credits, source notes, client trademark notices, AI-assisted material notes, and correction contact for the Gibson Hall portfolio.",
};

export default function CreditsPage() {
  return (
    <>
      <main className="credits-page">
        <section className="credits-hero">
          <p className="credits-eyebrow">/ Credits & usage</p>
          <h1>Sources, rights, and thanks.</h1>
          <p>
            A plain-English record of what powers this site, what belongs to
            Gibson, what belongs to clients and creators, and how to request a
            correction.
          </p>
        </section>

        <section className="credits-list" aria-label="Credits and usage notes">
          {creditsSections.map((section) => (
            <article className="credits-card" key={section.title}>
              <div className="credits-card__heading">
                <h2>{section.title}</h2>
              </div>
              <div className="credits-card__body">
                <p>{section.body}</p>
                {section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.itemLinks ? (
                  <ul>
                    {section.itemLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.links ? (
                  <div className="credits-card__links">
                    {section.links.map((link) => (
                      <a
                        href={link.href}
                        key={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer2 />
    </>
  );
}
