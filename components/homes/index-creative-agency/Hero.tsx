import TextScramble from "@/components/animations/TextScramble";
import { CommonLoadItem } from "@/components/animations/CommonLoadAnimation";
import SmoothAnchorLink from "@/components/common/SmoothAnchorLink";
import CommonCursorTrailTransparent, {
  CommonCursorTrailContent,
  CommonCursorTrailImage,
  CommonCursorTrailWrapper,
} from "@/components/animations/CommonCursorTrailTransparent";
import HeroGridParallax from "./HeroGridParallax";
import HeroTypewriterWord from "./HeroTypewriterWord";
import { siteCopy } from "@/data/siteCopy";
export default function Hero() {
  const { hero } = siteCopy.home;

  return (
    <>
      <CommonCursorTrailTransparent
          as="div"
          className="mxd-section mxd-hero-section no-padding-desktop mxd-hero-special cursor-trail-transparent loading-wrap"
        >
          <HeroGridParallax />
          {/* Effect - Cursor Trail Transparent Start */}
          <CommonCursorTrailWrapper className="mxd-trail-transparent-wrapper">
            <CommonCursorTrailContent className="mxd-trail-transparent-content">
              <CommonCursorTrailImage
                index={0}
                className="mxd-trail-transparent-image"
                alt="The Home Depot project image"
                src="/img-temp/uploads/case-study/homedepot/ux+portfolio+-+home+depot.jpg"
                width={1333}
                height={2000}
              />
              <CommonCursorTrailImage
                index={1}
                className="mxd-trail-transparent-image"
                alt="CarMax project image"
                src="/img-temp/uploads/case-study/carmax/gibson-cars.jpg"
                width={1123}
                height={2000}
              />
              <CommonCursorTrailImage
                index={2}
                className="mxd-trail-transparent-image"
                alt="Mini Murals project image"
                src="/img-temp/uploads/case-study/minimurals/MiniMural Houston Website - HD.png"
                width={1333}
                height={2000}
              />
              <CommonCursorTrailImage
                index={3}
                className="mxd-trail-transparent-image"
                alt="Straterra project image"
                src="/img-temp/uploads/case-study/staterra/Stationery1.jpg"
                width={2997}
                height={2000}
              />
              <CommonCursorTrailImage
                index={4}
                className="mxd-trail-transparent-image"
                alt="WIAB AI project image"
                src="/img-temp/uploads/case-study/wiab/gibson-robot.jpg"
                width={3000}
                height={2000}
              />
              <CommonCursorTrailImage
                index={5}
                className="mxd-trail-transparent-image"
                alt="CHI St. Luke's project image"
                src="/img-temp/uploads/case-study/chistlukes/CHI St Lukes Cover Image.png"
                width={1127}
                height={2000}
              />
              <CommonCursorTrailImage
                index={6}
                className="mxd-trail-transparent-image"
                alt="Ritual project image"
                src="/img-temp/uploads/case-study/ritual/gibson-tulum.jpg"
                width={1500}
                height={2000}
              />
              <CommonCursorTrailImage
                index={7}
                className="mxd-trail-transparent-image"
                alt="Cactus Club project image"
                src="/img-temp/uploads/case-study/cactus-club/gibson-cactus.jpg"
                width={1500}
                height={2000}
              />
              <CommonCursorTrailImage
                index={8}
                className="mxd-trail-transparent-image"
                alt="Academy Sports project image"
                src="/img-temp/uploads/case-study/academy/gibson-sports.jpg"
                width={1333}
                height={2000}
              />
            </CommonCursorTrailContent>
          </CommonCursorTrailWrapper>
          {/* Effect - Cursor Trail Transparent End */}
          <div className="mxd-hero-05">
            <div className="mxd-hero-05__wrap">
              {/* top group */}
              <div className="mxd-hero-05__top">
                <div className="mxd-hero-05__headline">
                  <h1>
                    <span
                      className="mxd-hero-05__title-main"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      Gibson Hall
                    </span>
                    <small className="mxd-hero-05__subtitle">
                      <span className="mxd-hero-05__subtitle-part">
                        brings
                      </span>
                      <HeroTypewriterWord />
                      <span className="mxd-hero-05__subtitle-part">
                        to life
                      </span>
                    </small>
                  </h1>
                </div>
              </div>
              {/* bottom group */}
              <div className="mxd-hero-05__bottom">
                <div className="mxd-hero-05__dataline">
                  <CommonLoadItem index={0}>
                    <div className="hero-05-dataline__socials loading-item">
                      <ul className="mxd-socials-line">
                        <li>
                          <a
                            className="mxd-socials-line__link"
                            href={hero.socialHref}
                            target="_blank"
                          >
                            <TextScramble className="mxd-scramble">
                              {siteCopy.brand.instagram}
                            </TextScramble>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </CommonLoadItem>
                  <CommonLoadItem index={1}>
                    <p className="hero-05-dataline__caption loading-item">
                      <span className="magic-phrase">
                        <span className="magic-sparkle magic-sparkle--1" aria-hidden="true">✦</span>
                        <span className="magic-sparkle magic-sparkle--2" aria-hidden="true">✦</span>
                        <span className="magic-sparkle magic-sparkle--3" aria-hidden="true">✦</span>
                        <span className="magic-sparkle magic-sparkle--4" aria-hidden="true">✦</span>
                        <span className="magic-sparkle magic-sparkle--5" aria-hidden="true">✧</span>
                        <span className="magic-sparkle magic-sparkle--6" aria-hidden="true">✧</span>
                        Design, tech &amp; some magic.
                      </span>
                    </p>
                  </CommonLoadItem>
                  <CommonLoadItem index={2}>
                    <div className="hero-05-dataline__controls loading-item">
                      <SmoothAnchorLink
                        className="btn btn-line-icon btn-line-icon-small btn-line-default slide-down"
                        targetId="about"
                      >
                        <TextScramble className="btn-caption mxd-scramble">
                          {hero.scrollLabel}
                        </TextScramble>
                        <i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 18 18"
                          >
                            <path d="M18,10.8h-3.6v-3.6h3.6v3.6ZM7.2,14.4v3.6h3.6v-3.6h3.6v-3.6h-3.6V0h-3.6v10.8h-3.6v3.6s3.6,0,3.6,0ZM3.6,10.8v-3.6H0v3.6h3.6Z" />
                          </svg>
                        </i>
                      </SmoothAnchorLink>
                    </div>
                  </CommonLoadItem>
                </div>
              </div>
            </div>
          </div>
        </CommonCursorTrailTransparent>
      </>
  );
}
