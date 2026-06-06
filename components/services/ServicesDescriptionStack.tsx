"use client";

import Image from "next/image";
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
  descr: string;
};

const CARDS: Card[] = [
  {
    subtitle: "01 / How I help",
    title: "Enterprise Teams",
    tagCols: [
      ["UX strategy", "Product design", "Customer journeys", "Service design"],
      ["AI workflows", "Digital experiences", "Stakeholder alignment", "Complex products"],
    ],
    image: "/images/projects/carmax/carmax-05-ai-assisted-design.jpg",
    descrClass: "t-large t-bold services-card__descr",
    descr:
      "Complex products, multiple stakeholders, and ambitious business goals. UX strategy, product design, customer journeys, service design, AI workflows, and digital experiences.",
  },
  {
    subtitle: "02 / How I help",
    title: "Founders & Startups",
    tagCols: [
      ["Brand strategy", "Websites", "MVPs", "AI products"],
      ["Launch support", "Product direction", "Offer design", "Figma"],
    ],
    image: "/images/projects/staterra/staterra-03-lead-generation.jpg",
    descrClass: "t-bold t-large services-card__descr",
    descr:
      "From idea to launch. Brand strategy, websites, MVPs, AI products, and launch support designed to help you move faster with confidence.",
  },
  {
    subtitle: "03 / How I help",
    title: "Business Owners",
    tagCols: [
      ["Modern websites", "Digital systems", "Automation", "Practical design"],
      ["Local discovery", "Operations", "Content systems", "Growth support"],
    ],
    image: "/images/projects/cactus-club/cactus-club-03-mobile-planning.jpg",
    descrClass: "t-bold t-large services-card__descr",
    descr:
      "Technology should help your business grow, not slow it down. Modern websites, digital systems, automation, and practical design support.",
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
                <ServicesStackSlot part="subtitle" index={index}>
                  <div className="services-card__subtitle">
                    <Tag>{card.subtitle}</Tag>
                  </div>
                </ServicesStackSlot>
                <div className="services-card__title">
                  <ServicesStackSlot part="title" index={index}>
                    <div className="services-card__title-text">
                      {card.title}
                    </div>
                  </ServicesStackSlot>
                </div>
                <ServicesStackSlot part="descr" index={index}>
                  <div className={card.descrClass}>{card.descr}</div>
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
