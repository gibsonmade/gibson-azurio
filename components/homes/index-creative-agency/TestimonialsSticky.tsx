import BlurSection from "@/components/animations/BlurSection";
import CommonAnimatedText from "@/components/animations/CommonAnimatedText";
import TextScramble from "@/components/animations/TextScramble";
import { siteCopy } from "@/data/siteCopy";

const QUOTE_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 4.4 3.3">
    <path d="M1.1,1.1v2.2H0V1.1h1.1ZM1.1,1.1V0h1.1v1.1h-1.1ZM3.3,1.1v2.2h-1.1V1.1h1.1ZM4.4,0v1.1h-1.1V0h1.1Z" />
  </svg>
);

export default function TestimonialsSticky() {
  const { testimonials } = siteCopy.about;

  return (
    <BlurSection className="mxd-section padding-top-title about-testimonials">
      <div className="mxd-container grid-l-container">
        <div className="mxd-block">
          <div className="mxd-section-title">
            <div className="container-fluid p-0">
              <div className="row g-0 d-flex justify-content-center">
                <div className="col-12 mxd-grid-item">
                  <div className="mxd-section-title__title centered">
                    <CommonAnimatedText as="h2" className="reveal-type" animation="revealType">
                      A few proof points
                      <br />
                      from the work
                    </CommonAnimatedText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mxd-block">
          <div className="about-testimonials__grid">
            {testimonials.map((testimonial) => (
              <article className="mxd-testimonials-card about-testimonials__card" key={testimonial.name}>
                <div className="mxd-testimonials-card__controls">
                  <div className="mxd-testimonials-card__quote">{QUOTE_ICON}</div>
                  <TextScramble className="tag tag-s tag-medium mxd-scramble">
                    {testimonial.context}
                  </TextScramble>
                </div>
                <div className="mxd-testimonials-card__content">
                  <p className="mxd-testimonials-card__descr">
                    {testimonial.quoteLead} <span>{testimonial.quoteAccent}</span>
                  </p>
                </div>
                <div className="mxd-testimonials-card__author">
                  <div className="mxd-testimonials-card__data">
                    <p className="mxd-testimonials-card__name">{testimonial.name}</p>
                    <p className="mxd-testimonials-card__position">
                      <TextScramble className="mxd-scramble">
                        {testimonial.company}
                      </TextScramble>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </BlurSection>
  );
}
