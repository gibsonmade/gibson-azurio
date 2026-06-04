"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import TextScramble from "@/components/animations/TextScramble";
import CommonServicesStack, {
  ServicesStackSlot,
} from "@/components/animations/CommonServicesStack";

const IMG_W = 1200;
const IMG_H = 1300;
const IMG_ALT = "Gibson Hall work sample";

type Card = {
  subtitle: string;
  title: string;
  tagCols: [string[], string[]];
  image: string;
  descrClass: string;
  descr: ReactNode;
};

const CARDS: Card[] = [
  {
    subtitle: "01 / Services",
    title: "UX Strategy",
    tagCols: [
      ["Discovery", "User research", "Journey mapping", "Product strategy"],
      ["Offer design", "Roadmaps", "Workshops", "Positioning"],
    ],
    image: "/img-temp/uploads/case-study/staterra/Stationery1.jpg",
    descrClass: "t-large t-bold services-card__descr",
    descr: (
      <>
        Clarity before craft.
        <span>
          I help teams get aligned on what to build and why — through research,
          facilitation, and systems thinking.
        </span>
      </>
    ),
  },
  {
    subtitle: "02 / Services",
    title: "Digital Design",
    tagCols: [
      ["Brand systems", "Logo design", "Websites", "Product UX"],
      ["Figma", "Design systems", "Motion", "Visual identity"],
    ],
    image: "/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - HD.png",
    descrClass: "t-bold t-large services-card__descr",
    descr: (
      <>
        Design that earns trust and guides action.
        <span>
          From brand identity to product interfaces, every pixel has a purpose.
        </span>
      </>
    ),
  },
  {
    subtitle: "03 / Services",
    title: "Technical Expertise",
    tagCols: [
      ["Next.js", "React", "CMS", "WordPress"],
      ["AI workflows", "Automation", "iOS Apps", "Launch support"],
    ],
    image: "/img-temp/uploads/case-study/wiab/gibson-robot.jpg",
    descrClass: "t-bold t-large services-card__descr",
    descr: (
      <>
        Full-stack execution — from concept to deployed product.
        <span>
          Building responsive sites, AI-powered systems, and everything in between.
        </span>
      </>
    ),
  },
];

function Tag({ children }: { children: string }) {
  return (
    <TextScramble className="tag tag-s-mobile mxd-scramble">
      {children}
    </TextScramble>
  );
}

function ServiceCard({ card, index }: { card: Card; index: number }) {
  const [colA, colB] = card.tagCols;
  return (
    <ServicesStackSlot part="card" index={index}>
      <div className="mxd-stack-services__card">
        <ServicesStackSlot part="wrapper" index={index}>
          <div className="services-card__wrapper">
            <div className="services-card__content">
              <div className="services-card__info">
                <div className="services-card__subtitle">
                  <Tag>{card.subtitle}</Tag>
                </div>
                <div className="services-card__title">
                  <ServicesStackSlot part="title" index={index}>
                    <div className="services-card__title-text">
                      {card.title}
                    </div>
                  </ServicesStackSlot>
                </div>
                <ServicesStackSlot part="tags" index={index}>
                  <div className="services-card__tags">
                    <div className="tags-column">
                      {colA.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                    <div className="tags-column">
                      {colB.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </ServicesStackSlot>
              </div>
              <ServicesStackSlot part="descr" index={index}>
                <div className={card.descrClass}>{card.descr}</div>
              </ServicesStackSlot>
            </div>
            <ServicesStackSlot part="image" index={index}>
              <div className="services-card__image">
                <Image
                  src={card.image}
                  width={IMG_W}
                  height={IMG_H}
                  alt={IMG_ALT}
                />
                <div className="services-card__cover" />
              </div>
            </ServicesStackSlot>
          </div>
        </ServicesStackSlot>
      </div>
    </ServicesStackSlot>
  );
}

export default function ServicesDescriptionStack() {
  return (
    <div id="services" className="mxd-section">
      <div className="mxd-container fullwidth-container">
        <div className="mxd-block">
          <CommonServicesStack className="mxd-stack-services">
            {CARDS.map((card, index) => (
              <ServiceCard key={card.subtitle} card={card} index={index} />
            ))}
          </CommonServicesStack>
        </div>
      </div>
    </div>
  );
}
