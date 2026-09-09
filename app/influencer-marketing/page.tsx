import type { Metadata } from "next";
import Link from "next/link";
import { ApproachIcon, ChannelIcon } from "@/components/im-icons";
import { FaqSection } from "@/components/faq-section";
import { InfluencerDirectory } from "@/components/influencer-directory";
import { ProcessSection } from "@/components/process-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StoriesSlider } from "@/components/stories-slider";
import {
  imApproach,
  imChannels,
  imClientLogos,
  imFaqs,
  imRelatedServices,
  imStories,
  imTestimonials,
  imTiers
} from "@/lib/influencer-page-data";
import { getServiceBySlug } from "@/lib/site-data";

const service = getServiceBySlug("influencer-marketing")!;

export const metadata: Metadata = {
  title: "Influencer Marketing Agency in Dubai, UAE | Mystic PR",
  description:
    "Mystic PR is a Dubai-based influencer marketing agency connecting brands with nano to celebrity influencers across the UAE. Strategy, execution, and reporting included.",
  alternates: { canonical: `https://mysticpr.com${service.href}` },
  openGraph: {
    title: "Influencer Marketing Agency in Dubai | Mystic PR",
    description:
      "Cut through the noise with the right influencers for your brand - vetted talent, data-led strategy, and measurable results across the UAE.",
    url: `https://mysticpr.com${service.href}`,
    siteName: "Mystic PR",
    type: "website",
    images: [
      {
        url: "https://mysticpr.com/wp-content/uploads/2024/11/img-51-copyright.jpg",
        alt: "Mystic PR influencer marketing campaign"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Agency in Dubai | Mystic PR",
    description:
      "Cut through the noise with the right influencers for your brand - vetted talent, data-led strategy, and measurable results across the UAE.",
    images: ["https://mysticpr.com/wp-content/uploads/2024/11/img-51-copyright.jpg"]
  }
};

export default function InfluencerMarketingPage() {
  const logoTrack = [...imClientLogos, ...imClientLogos];
  const tierSteps = imTiers.map((tier, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: tier.title,
    description: `${tier.followers} - ${tier.description}`
  }));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Influencer Marketing Agency in Dubai, UAE",
    provider: {
      "@type": "Organization",
      name: "Mystic PR",
      url: "https://mysticpr.com"
    },
    areaServed: ["Dubai", "UAE", "GCC"],
    description:
      "Dubai-based influencer marketing agency connecting brands with nano to celebrity influencers across the UAE through strategy, execution, and reporting.",
    serviceType: "Influencer Marketing",
    url: `https://mysticpr.com${service.href}`
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: imFaqs.map((item) => ({
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
      <SiteHeader theme="light" activeHref="/services" />
      <main className="mpr-im">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <section className="mpr-im-hero bg-white">
          <div className="container mpr-im-hero__grid">
            <div className="mpr-im-hero__copy">
              <span className="mpr-kicker">
                INFLUENCER MARKETING AGENCY IN DUBAI
              </span>
              <h1>Influencer Marketing That Makes Your Brand the Talk of the Town</h1>
              <p>
                Cut through the noise with influencers who don&apos;t just talk -
                they make your brand the center of attention. Mystic PR is a
                leading influencer marketing agency in Dubai, connecting UAE
                brands with the right voices.
              </p>
              <div className="mpr-im-hero__actions">
                <a href="#register-form" className="mpr-im-btn mpr-im-btn--solid">
                  Register Yourself
                </a>
                <a href="#hire-form" className="mpr-im-btn mpr-im-btn--ghost">
                  Hire an Influencer
                </a>
              </div>
            </div>

            <div className="mpr-im-hero__media">
              <video
                src="https://mysticpr.com/wp-content/uploads/2024/11/Web-Project.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Influencer marketing showreel"
              />
            </div>
          </div>
        </section>

        <section className="mpr-im-logos" aria-label="Client logos">
          <div className="container">
            <p className="mpr-im-logos__label">
              Trusted by 20+ Brands Across the UAE and GCC
            </p>
          </div>
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

        <section className="mpr-intro section bg-white mpr-im-intro">
          <div className="container">
            <span className="mpr-kicker">WHAT MAKES INFLUENCER MARKETING WORK</span>
            <div className="mpr-intro__grid mpr-im-intro__grid">
              <p className="mpr-intro__lead">
                Reach means nothing if the audience doesn&apos;t care.
              </p>
              <p className="mpr-intro__body">
                We build influencer campaigns around relevance - matching your
                brand to creators whose followers already trust their
                recommendations, so the content converts instead of just getting
                seen.
              </p>
            </div>
          </div>
        </section>

        <ProcessSection
          title="Influencer Tiers We Work With"
          steps={tierSteps}
        />

        <section className="mpr-im-approach section" id="approach">
          <div className="mpr-im-approach__orb mpr-im-approach__orb--a" aria-hidden="true" />
          <div className="mpr-im-approach__orb mpr-im-approach__orb--b" aria-hidden="true" />
          <div className="container">
            <div className="mpr-im-approach__head">
              <span className="mpr-kicker mpr-kicker--light">OUR APPROACH</span>
              <h2>Our Approach</h2>
              <p>
                Strategy, creator fit, delivery, and reporting built around
                measurable UAE campaign outcomes.
              </p>
            </div>
            <div className="mpr-im-approach__grid">
              {imApproach.map((step, index) => (
                <article key={step.title} className="mpr-im-approach__card">
                  <span className="mpr-im-approach__step" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="mpr-im-approach__icon">
                    <ApproachIcon name={step.icon} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mpr-im-why section bg-white">
          <div className="mpr-im-why__watermark" aria-hidden="true">
            <div className="mpr-im-why__watermark-track">
              <span>Building Brands Through Powerful Narratives</span>
              <span>Building Brands Through Powerful Narratives</span>
              <span>Building Brands Through Powerful Narratives</span>
              <span>Building Brands Through Powerful Narratives</span>
            </div>
          </div>
          <div className="container mpr-im-why__grid">
            <div className="mpr-im-why__copy">
              <span className="mpr-kicker">WHY INFLUENCER MARKETING WITH US</span>
              <h2>Why Influencer Marketing With Us</h2>
              <p>
                As a top influencer marketing agency in Dubai, we know
                influencer marketing is about relevance, not just reach. Our
                vetted network spans nano to celebrity talent across the UAE,
                backed by regional market expertise most agencies don&apos;t have -
                so every partnership feels native to the audience it&apos;s
                reaching, not like an ad.
              </p>
            </div>
            <div className="mpr-im-why__media">
              <img
                src="https://mysticpr.com/wp-content/uploads/2024/11/img-51-copyright.jpg"
                alt="Influencer marketing campaign visual"
              />
            </div>
          </div>
        </section>

        <StoriesSlider stories={[...imStories]} />

        <section className="mpr-im-channels section bg-white">
          <div className="container">
            <div className="mpr-im-section-head">
              <span className="mpr-kicker">CHANNELS</span>
            </div>
            <h2>Influencer Marketing Channels</h2>
            <p className="mpr-im-channels__copy">
              We run influencer campaigns across every platform your audience
              actually uses - Instagram, TikTok, YouTube, Snapchat, Facebook,
              LinkedIn, and X - matching the channel to the campaign objective
              rather than defaulting to one platform.
            </p>
            <div className="mpr-im-channels__row">
              {imChannels.map((channel) => (
                <div key={channel} className="mpr-im-channels__item">
                  <ChannelIcon name={channel} />
                  <span>{channel}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <InfluencerDirectory />

        <section className="mpr-im-testimonials section bg-white">
          <div className="container">
            <div className="mpr-im-section-head">
              <span className="mpr-kicker">TESTIMONIALS</span>
              <h2 className="mpr-section-title">What Clients Say</h2>
            </div>
            <div className="mpr-im-testimonials__grid">
              {imTestimonials.map((item, index) => (
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

        <FaqSection faqs={[...imFaqs]} />

        <section className="mpr-svc-related section bg-white">
          <div className="container">
            <div className="mpr-im-section-head">
              <span className="mpr-kicker">RELATED SERVICES</span>
              <h2 className="mpr-section-title">Related Services</h2>
            </div>
            <p className="mpr-im-related__copy">
              Influencer marketing works best as part of a full brand strategy.
              Explore our related services below.
            </p>
            <div className="mpr-svc-related__grid">
              {imRelatedServices.map((item) => (
                <Link key={item.href} href={item.href} className="mpr-svc-related__card">
                  <span>Service</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mpr-im-forms section" id="forms">
          <div className="mpr-im-approach__orb mpr-im-approach__orb--a" aria-hidden="true" />
          <div className="mpr-im-approach__orb mpr-im-approach__orb--b" aria-hidden="true" />
          <div className="container">
            <div className="mpr-im-forms__intro">
              <span>CONTACT US</span>
              <h2>Unlock the Power of Influence</h2>
              <p>We don’t just tell your story, we create the buzz that makes people listen.</p>
            </div>

            <div className="mpr-im-forms__grid">
              <form className="mpr-im-form" action="#" method="post" id="register-form">
                <div className="mpr-im-form__head">
                  <span>01</span>
                  <h3>Influencer Registration</h3>
                  <p>Join our creator community and get discovered by brands.</p>
                </div>
                <div className="mpr-im-form__fields">
                  <label>
                    <span>Full name</span>
                    <input type="text" name="name" placeholder="Your name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder="you@email.com" required />
                  </label>
                  <div className="mpr-im-form__row">
                    <label>
                      <span>Category</span>
                      <input type="text" name="category" placeholder="Mega / Macro / Micro" />
                    </label>
                    <label>
                      <span>Platform</span>
                      <input type="text" name="platform" placeholder="Instagram / TikTok" />
                    </label>
                  </div>
                  <label>
                    <span>Instagram URL</span>
                    <input type="url" name="instagram" placeholder="https://instagram.com/..." />
                  </label>
                  <label className="mpr-im-form__check">
                    <input type="checkbox" name="terms" required />
                    <span>I agree to the terms and conditions</span>
                  </label>
                </div>
                <button type="submit">Submit registration</button>
              </form>

              <form className="mpr-im-form" action="#" method="post" id="hire-form">
                <div className="mpr-im-form__head">
                  <span>02</span>
                  <h3>Hire An Influencer</h3>
                  <p>Tell us your brief and we’ll match the right creators.</p>
                </div>
                <div className="mpr-im-form__fields">
                  <label>
                    <span>Brand / Company</span>
                    <input type="text" name="brand" placeholder="Brand name" required />
                  </label>
                  <label>
                    <span>Work email</span>
                    <input type="email" name="email" placeholder="hello@brand.com" required />
                  </label>
                  <div className="mpr-im-form__row">
                    <label>
                      <span>Budget</span>
                      <input type="text" name="budget" placeholder="Campaign budget" />
                    </label>
                    <label>
                      <span>Goal</span>
                      <input type="text" name="goal" placeholder="Awareness / Sales" />
                    </label>
                  </div>
                  <label>
                    <span>Brief</span>
                    <textarea name="message" rows={4} placeholder="Tell us about your campaign" />
                  </label>
                </div>
                <button type="submit">Send brief</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
