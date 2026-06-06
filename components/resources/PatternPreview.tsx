import ContactCtaIcon from "@/components/common/ContactCtaIcon";
import type { ResourcePattern } from "@/data/resourcePatterns";

type PatternPreviewProps = {
  pattern: ResourcePattern;
};

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden>
      <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
    </svg>
  );
}

export default function PatternPreview({ pattern }: PatternPreviewProps) {
  switch (pattern.previewType) {
    case "hero":
      return (
        <div className="pattern-demo pattern-demo--hero">
          <span className="tag tag-s tag-medium">home hero</span>
          <h3>
            Gibson
            <small>brings ideas to life</small>
          </h3>
          <p>Design, tech, and a little magic.</p>
        </div>
      );
    case "headline":
      return (
        <div className="pattern-demo pattern-demo--headline">
          <span className="tag tag-s tag-medium">internal</span>
          <h3>About Gibson</h3>
          <p>Systems-minded creative work across product, UX, brand, and AI.</p>
        </div>
      );
    case "buttons":
      return (
        <div className="pattern-demo pattern-demo--row">
          <span className="btn btn-default-icon-small btn-default-accent slide-right">
            <span className="btn-caption">Say hi!</span>
            <i className="btn-icon">
              <ContactCtaIcon />
            </i>
          </span>
          <span className="btn btn-line-icon slide-right">
            <span className="btn-caption">View work</span>
            <i className="btn-icon">
              <PlusIcon />
            </i>
          </span>
        </div>
      );
    case "tags":
      return (
        <div className="pattern-demo pattern-demo--row">
          {["Product UX", "AI workflows", "Launch", "internal"].map((tag) => (
            <span className="tag tag-s tag-medium" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      );
    case "project-card":
      return (
        <div className="pattern-demo pattern-demo--project">
          <img src="/images/projects/the-home-depot/home-depot-ux.jpg" alt="Project card preview" />
          <div>
            <span className="tag tag-s tag-medium">case study</span>
            <h3>The Home Depot</h3>
            <p>Project-shopping UX systems and reusable digital patterns.</p>
          </div>
        </div>
      );
    case "work-list":
      return (
        <div className="pattern-demo pattern-demo--list">
          {["The Home Depot", "CarMax", "Mini Murals"].map((item, index) => (
            <div className="pattern-demo-list-row" key={item}>
              <span>/ 0{index + 1}</span>
              <strong>{item}</strong>
              <em>View</em>
            </div>
          ))}
        </div>
      );
    case "split-list":
      return (
        <div className="pattern-demo pattern-demo--split">
          <strong>Challenge</strong>
          <p>Turn a complex service moment into a clear path people can use.</p>
          <strong>Approach</strong>
          <p>Map the system, simplify decisions, and align the launch surface.</p>
        </div>
      );
    case "image-grid":
      return (
        <div className="pattern-demo pattern-demo--image-grid">
          <img src="/images/projects/staterra/staterra-stationery.jpg" alt="" />
          <img src="/images/projects/mini-murals/mini-murals-website.png" alt="" />
          <img src="/images/projects/carmax/carmax-cars.jpg" alt="" />
        </div>
      );
    case "service-stack":
      return (
        <div className="pattern-demo pattern-demo--stack">
          {["Shape the system", "Design the experience", "Build the launch"].map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      );
    case "stats":
      return (
        <div className="pattern-demo pattern-demo--stats">
          <div>
            <strong>250+</strong>
            <span>murals</span>
          </div>
          <div>
            <strong>40+</strong>
            <span>artists</span>
          </div>
          <div>
            <strong>10k+</strong>
            <span>launch fit</span>
          </div>
        </div>
      );
    case "blog-card":
      return (
        <div className="pattern-demo pattern-demo--blog">
          <img src="/images/projects/wiab-ai/wiab-robot.jpg" alt="Blog card preview" />
          <span className="meta-date">02 February, 2026</span>
          <h3>Frontend innovations and user journeys</h3>
          <div className="resource-card-tags">
            <span className="tag tag-s tag-medium">UI/UX</span>
            <span className="tag tag-s tag-medium">Insights</span>
          </div>
        </div>
      );
    case "form":
      return (
        <div className="pattern-demo pattern-demo--form">
          <input placeholder="Your name*" aria-label="Your name" />
          <input placeholder="Email*" aria-label="Email" />
          <textarea placeholder="A few words about your project*" aria-label="Message" />
        </div>
      );
    case "cta":
      return (
        <div className="pattern-demo pattern-demo--cta">
          <span>Strategy / Brand / UX / AI Systems / Launch /</span>
          <strong>Bring the messy idea.</strong>
        </div>
      );
    case "navigation":
      return (
        <div className="pattern-demo pattern-demo--nav">
          {["Home", "Work", "About", "Lab", "Contact"].map((item, index) => (
            <div className="pattern-demo-list-row" key={item}>
              <span>/ 0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      );
    case "theme":
      return (
        <div className="pattern-demo pattern-demo--row">
          <span className="btn mxd-color-switcher permanent">
            <span className="switcher-text">Day</span>
            <span className="switcher-icon">
              <i className="ph-bold ph-sun" />
            </span>
          </span>
          <span className="btn mxd-color-switcher">
            <span className="switcher-text">Night</span>
            <span className="switcher-icon night">
              <i className="ph-bold ph-moon" />
            </span>
          </span>
        </div>
      );
    default:
      return null;
  }
}
