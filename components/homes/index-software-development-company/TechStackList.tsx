import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import { CommonScrollAnimated } from "@/components/animations/CommonScrollAnimated";
import TextScramble from "@/components/animations/TextScramble";

type Capability = { icon: string; name: string };

const CRAFT: Capability[] = [
  { icon: "ph-compass", name: "UX/UI Design" },
  { icon: "ph-paint-bucket", name: "Brand Systems" },
  { icon: "ph-pen-nib", name: "Logo Design" },
  { icon: "ph-pencil-simple", name: "Graphic Design" },
  { icon: "ph-film-strip", name: "Animation" },
  { icon: "ph-path", name: "Illustration" },
  { icon: "ph-frame-corners", name: "Figma" },
];

const BUILD: Capability[] = [
  { icon: "ph-code", name: "Web Development" },
  { icon: "ph-device-mobile", name: "iOS Apps" },
  { icon: "ph-globe", name: "WordPress" },
  { icon: "ph-stack", name: "CMS" },
  { icon: "ph-robot", name: "AI Automation" },
  { icon: "ph-magnifying-glass", name: "SEO" },
  { icon: "ph-map-pin", name: "GEO" },
];

const THINK: Capability[] = [
  { icon: "ph-briefcase", name: "Business Development" },
  { icon: "ph-megaphone", name: "Marketing Strategy" },
  { icon: "ph-clipboard-text", name: "Business Planning" },
  { icon: "ph-chart-bar", name: "Market Research" },
  { icon: "ph-users", name: "User Research" },
  { icon: "ph-chat-circle", name: "ChatGPT" },
  { icon: "ph-terminal-window", name: "VS Code" },
];

function CapabilityItem({ icon, name }: Capability) {
  return (
    <div className="mxd-tech-stack__item">
      <CommonScrollAnimated className="mxd-tech-stack__divider divider-top anim-uni-clip-in" as="div" animation="clipIn" />
      <div className="mxd-tech-stack__logo">
        <i className={`ph ${icon}`} style={{ fontSize: "36px" }} />
      </div>
      <CommonScrollAnimated className="mxd-tech-stack__name anim-uni-slide-down" as="div" animation="slideDownLine">
        <p>{name}</p>
      </CommonScrollAnimated>
      <CommonScrollAnimated className="mxd-tech-stack__divider divider-bottom anim-uni-clip-in" as="div" animation="clipIn" />
    </div>
  );
}

export default function TechStackList() {
  return (
    <>
      <BlurSection className="mxd-section padding-top-number padding-bottom-default">
        <div className="mxd-container grid-l-container">
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid-desktop">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-4 mxd-grid-item">
                    <div className="mxd-section-title__data top-number">
                      <CommonScrollAnimated className="mxd-section-title__number anim-uni-in-up" as="div" animation="inUp">
                        <TextScramble className="title-number mxd-scramble">/04</TextScramble>
                      </CommonScrollAnimated>
                    </div>
                  </div>
                  <div className="col-12 col-xl-8 mxd-grid-item">
                    <div className="mxd-section-title__title">
                      <CommonAnimatedText as="h2" className="mxd-split-lines" animation="splitLines">
                        Help where<br />you need it
                      </CommonAnimatedText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-4 mxd-aside-descr mxd-grid-item">
                  <CommonAnimatedText as="p" className="t-bold t-large t-aside mxd-split-lines" animation="splitLines">
                    20+ years of providing
                    <span>design + tech services</span>
                  </CommonAnimatedText>
                </div>
                <div className="col-12 col-xl-8">
                  <div className="container-fluid p-0">
                    <div className="row g-0 mxd-tech-stack">
                      <div className="col-12 col-md-4 mxd-grid-item">
                        <div className="mxd-tech-stack__column">
                          {CRAFT.map((c) => <CapabilityItem key={c.name} {...c} />)}
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mxd-grid-item">
                        <div className="mxd-tech-stack__column">
                          {BUILD.map((c) => <CapabilityItem key={c.name} {...c} />)}
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mxd-grid-item">
                        <div className="mxd-tech-stack__column">
                          {THINK.map((c) => <CapabilityItem key={c.name} {...c} />)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurSection>
    </>
  );
}
