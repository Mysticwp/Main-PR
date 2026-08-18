import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ProcessSection } from "@/components/process-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StoriesSlider } from "@/components/stories-slider";
import {
  prBrandLogos,
  prClientLogos,
  prFaqs,
  prHeroImage,
  prMediaLogos,
  prProcessSteps,
  prRelatedServices,
  prStories,
  prTestimonials
} from "@/lib/press-page-data";
import { getServiceBySlug } from "@/lib/site-data";

const service = getServiceBySlug("press-release-media-outreach")!;

export const metadata: Metadata = {
  title: "Press Release & Media Outreach Agency Dubai | Mystic PR",
  description:
    "Mystic PR secures press coverage across 20+ UAE and regional publications through expert press release writing and media outreach. Get your brand in the news.",
  alternates: { canonical: `https://mysticpr.com${service.href}` },
  openGraph: {
    title: "Press Release & Media Outreach Services | Mystic PR",
    description:
      "From press release writing to journalist outreach - Mystic PR gets UAE brands published across leading regional media.",
    url: `https://mysticpr.com${service.href}`,
    siteName: "Mystic PR",
    type: "website",
    images: [
      {
        url: prHeroImage,
        alt: "Mystic PR press release and media outreach"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Press Release & Media Outreach Services | Mystic PR",
    description:
      "From press release writing to journalist outreach - Mystic PR gets UAE brands published across leading regional media.",
    images: [prHeroImage]
  }
};

export default function PressReleaseMediaOutreachPage() {
  const logoTrack = [...prClientLogos, ...prClientLogos];
  const marqueeText = "Turning Brand Stories into Mystical Journeys";
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Press Release & Media Outreach Agency Dubai",
    provider: {
      "@type": "Organization",
      name: "Mystic PR",
      url: "https://mysticpr.com"
    },
    areaServed: ["Dubai", "UAE"],
    description:
      "Mystic PR secures press coverage across 20+ UAE and regional publications through expert press release writing and media outreach.",
    serviceType: "Press Release and Media Outreach",
    url: `https://mysticpr.com${service.href}`
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: prFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <SmoothScroll />
      <SiteHeader theme="dark" activeHref="/services" />
      <main className="mpr-pr">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <section className="mpr-pr-hero">
          <div className="container mpr-pr-hero__grid">
            <div className="mpr-pr-hero__copy">
              <span className="mpr-kicker mpr-kicker--light">
                PRESS RELEASE &amp; MEDIA OUTREACH AGENCY IN DUBAI
              </span>
              <h1>Making Your Brand the News</h1>
              <p>
                We turn your brand&apos;s milestones into stories the media
                wants to run - through press releases and media outreach that
                get you published across the UAE&apos;s leading platforms.
              </p>
              <a href="#press-contact" className="mpr-pr-hero__cta">
                Get Media Coverage
              </a>
            </div>
            <div className="mpr-pr-hero__media">
              <img src={prHeroImage} alt="Press release and media outreach in Dubai" />
            </div>
          </div>
        </section>

        <section className="mpr-im-logos" aria-label="Client logos">
          <div className="mpr-im-logos__track">
            {logoTrack.map((logo, index) => (
              <img
                key={`${logo.image}-${index}`}
                src={logo.image}
                alt={`${logo.name} - Mystic PR client`}
                loading="lazy"
              />
            ))}
          </div>
        </section>

        <section className="mpr-pr-brands section">
          <div className="container">
            <h2 className="mpr-section-title mpr-pr-brands__title">
              Brands We&apos;ve Worked With
            </h2>
            <div className="mpr-pr-brands__grid">
              {prBrandLogos.map((logo) => (
                <div key={logo.image} className="mpr-pr-brands__cell">
                  <img
                    src={logo.image}
                    alt={`${logo.name} - Mystic PR client`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProcessSection
          kicker="How we work"
          title="Media Moves That Matter"
          steps={prProcessSteps}
        />

        <section className="mpr-marquee mpr-pr-marquee bg-white" aria-hidden="true">
          <div className="mpr-marquee__track scroll-slower">
            {Array.from({ length: 6 }, (_, index) => (
              <span key={index}>{marqueeText}</span>
            ))}
          </div>
        </section>

        <section className="mpr-pr-media section">
          <div className="mpr-im-approach__orb mpr-im-approach__orb--a" aria-hidden="true" />
          <div className="mpr-im-approach__orb mpr-im-approach__orb--b" aria-hidden="true" />
          <div className="container">
            <span className="mpr-kicker mpr-kicker--light">MEDIA NETWORK</span>
            <p className="mpr-pr-media__intro">
              We&apos;ve placed brand stories with 10+ leading UAE and regional
              publications, including Al Bayan, Al Watan, and The UAE News.
            </p>
            <h2 className="mpr-section-title mpr-section-title--light mpr-pr-media__title">
              Our Valued Media Collaborators
            </h2>
            <div className="mpr-pr-media__grid">
              {prMediaLogos.map((logo) => (
                <div key={logo.image} className="mpr-pr-media__cell">
                  <img
                    src={logo.image}
                    alt={`${logo.name} - Mystic PR media collaborator`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <StoriesSlider
          kicker="CASE STUDY"
          title="Belle Reve Launch"
          glow
          stories={[...prStories]}
        />

        <section className="mpr-im-why section bg-white">
          <div className="mpr-im-why__watermark" aria-hidden="true">
            <div className="mpr-im-why__watermark-track">
              <span>Turning Brand Stories into Mystical Journeys</span>
              <span>Turning Brand Stories into Mystical Journeys</span>
              <span>Turning Brand Stories into Mystical Journeys</span>
              <span>Turning Brand Stories into Mystical Journeys</span>
            </div>
          </div>
          <div className="container mpr-im-why__grid">
            <div className="mpr-im-why__copy">
              <span className="mpr-kicker">WHY MEDIA OUTREACH WITH US</span>
              <h2>Why Media Outreach With Us</h2>
              <p>
                Getting published isn&apos;t the same as getting read. We pitch
                stories with real news value to journalists who already cover
                your industry - so coverage lands with the audiences that
                matter, not just anywhere with a byline.
              </p>
            </div>
            <div className="mpr-im-why__media">
              <img
                src="https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-06.jpg"
                alt="Media outreach campaign visual"
              />
            </div>
          </div>
        </section>

        <section className="mpr-im-testimonials section bg-white">
          <div className="container">
            <div className="mpr-im-section-head">
              <span className="mpr-kicker">TESTIMONIALS</span>
              <h2 className="mpr-section-title">What Clients Say</h2>
            </div>
            <div className="mpr-im-testimonials__grid">
              {prTestimonials.map((item, index) => (
                <article key={index} className="mpr-im-testimonial">
                  <p className="mpr-im-testimonial__quote">{item.quote}</p>
                  <strong>{item.name}</strong>
                  <span>
                    {item.title}, {item.company}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FaqSection faqs={[...prFaqs]} />

        <section className="mpr-svc-related section bg-white">
          <div className="container">
            <div className="mpr-im-section-head">
              <span className="mpr-kicker">RELATED SERVICES</span>
              <h2 className="mpr-section-title">Related Services</h2>
            </div>
            <p className="mpr-im-related__copy">
              Media coverage works best alongside a full PR strategy. Explore
              our related services below.
            </p>
            <div className="mpr-svc-related__grid">
              {prRelatedServices.map((item) => (
                <Link key={item.href} href={item.href} className="mpr-svc-related__card">
                  <span>Service</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mpr-pr-contact section bg-white" id="press-contact">
          <div className="container mpr-contact-grid">
            <div>
              <span className="mpr-kicker">CONTACT US</span>
              <h2 className="mpr-contact-title">Start the conversation</h2>
              <p className="mpr-contact-copy">
                Take the first step towards powerful media collaborations today.
              </p>
            </div>
            <form className="mpr-form mpr-pr-form" action="#" method="post">
              <div className="mpr-form__row">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <input type="tel" name="phone" placeholder="Phone" required />
              <textarea name="message" rows={4} placeholder="Message" required />
              <button type="submit">Get Your Coverage Plan</button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
