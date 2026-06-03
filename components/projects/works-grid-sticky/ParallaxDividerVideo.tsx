import UkiyoParallax from "@/components/animations/UkiyoParallax";
import BlurSection from "@/components/animations/BlurSection";

export default function ParallaxDividerVideo() {
  return (
    <>
      <BlurSection className="mxd-section">
        <div className="mxd-container fullwidth-container">
          <div className="mxd-divider">
            <div className="mxd-divider__video">
              <UkiyoParallax
                className="video parallax-video"
                scale={1.4}
                speed={1.5}
                externalRAF={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/video/1280x720_stone-geometry-banner.webp"
                  alt=""
                  aria-hidden="true"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </UkiyoParallax>
            </div>
          </div>
        </div>
      </BlurSection>
    </>
  );
}
