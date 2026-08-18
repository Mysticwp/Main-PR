import type { Metadata } from "next";
import Link from "next/link";
import { ChannelIcon } from "@/components/im-icons";
import { FaqSection } from "@/components/faq-section";
import { ProcessSection } from "@/components/process-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import {
  cmApproach,
  cmCaseStudy,
  cmChannels,
  cmClientLogos,
  cmFaqs,
  cmHeroImage,
  cmRelatedServices,
  cmServiceSteps,
  cmTestimonials
} from "@/lib/crisis-page-data";
import { getServiceBySlug } from "@/lib/site-data";

const service = getServiceBySlug("crisis-management")!;
const pageUrl = `https://mysticpr.com${service.href}`;
const metaTitle = "Crisis Management & PR Agency in Dubai | Mystic PR";
const metaDescription =
  "Mystic PR provides proactive crisis management and communications for UAE brands — emergency response, media management, and reputation recovery.";
const ogTitle = "Crisis Management by Mystic PR";
const ogDescription =
  "When the unexpected happens, we protect your reputation with fast, strategic crisis communications — built for UAE brands.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: pageUrl,
    siteName: "Mystic PR",
    type: "website",
    images: [
      {
        url: cmHeroImage,
        alt: "Crisis management and reputation protection"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [cmHeroImage]
  }
};

export default function CrisisManagementPage() {
  const logoTrack = [...cmClientLogos, ...cmClientLogos];
  const marqueeText = "Building Brands Through Powerful Narratives";
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: metaTitle,
    provider: {
      "@type": "Organization",
      name: "Mystic PR",
      url: "https://mysticpr.com"
    },
    areaServed: ["Dubai", "UAE"],
    description: metaDescription,
    serviceType: "Crisis Management",
    url: pageUrl
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cmFaqs.map((item) => ({
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

        <section className="mpr-pr-hero mpr-cm-hero">
          <div className="container mpr-pr-hero__grid">
            <div className="mpr-pr-hero__copy">
              <span className="mpr-kicker mpr-kicker--light">
                CRISIS MANAGEMENT & PR AGENCY IN DUBAI
              </span>
              <h1>The Secret to Stability in a World of Surprises</h1>
              <p>
                In the face of uncertainty, we provide the clarity and direction
                your brand needs to navigate through crises, ensuring your
                reputation remains intact and stronger than ever.
              </p>
              <a href="#crisis-contact" className="mpr-pr-hero__cta">
                Talk to a Crisis Expert
              </a>
            </div>
            <div className="mpr-pr-hero__media">
              <img
                src={cmHeroImage}
                alt="Crisis communication stopping reputational risk"
              />
            </div>
          </div>
        </section>

        <section className="mpr-im-logos" aria-label="Brands we've worked with">
          <div className="container">
            <p className="mpr-im-logos__label">Brands We&apos;ve Worked With</p>
          </div>
          <div className="mpr-im-logos__track">
            {logoTrack.map((logo, index) => (
              <img
                key={`${logo.image}-${index}`}
                src={logo.image}
                alt={`${logo.name} logo - Mystic PR client`}
                loading="lazy"
              />
            ))}
          </div>
        </section>

        <ProcessSection
          kicker=""
          title="Our PR & Crisis Communication Services"
          steps={cmServiceSteps}
        />

        <section className="mpr-marquee bg-white" aria-hidden="true">
          <div className="mpr-marquee__track scroll-slower">
            {Array.from({ length: 6 }, (_, index) => (
              <span key={index}>{marqueeText}</span>
            ))}
          </div>
        </section>

        <section className="mpr-cm-approach section">
          <div className="container">
            <div className="mpr-im-section-head mpr-im-section-head--light">
              <span className="mpr-kicker">OUR APPROACH</span>
              <h2 className="mpr-section-title">Our Approach to Handling Crisis</h2>
            </div>
            <div className="mpr-cm-approach__grid">
              {cmApproach.map((item) => (
                <article key={item.title} className="mpr-cm-card">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="mpr-cm-card__shade" />
                  <div className="mpr-cm-card__body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mpr-im-channels section bg-white">
          <div className="container">
            <h2>Crisis Communications Across All Channels</h2>
            <p className="mpr-im-channels__copy">
              Crises don&apos;t stay on one channel — we monitor and respond
              across every platform your audience is watching.
            </p>
            <div className="mpr-im-channels__row">
              {cmChannels.map((channel) => (
                <div key={channel} className="mpr-im-channels__item">
                  <ChannelIcon name={channel} />
                  <span>{channel}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mpr-cm-case section">
          <div className="mpr-im-approach__orb mpr-im-approach__orb--a" aria-hidden="true" />
          <div className="mpr-im-approach__orb mpr-im-approach__orb--b" aria-hidden="true" />
          <div className="container mpr-cm-case__grid">
            <div className="mpr-cm-case__media">
              <img
                src={cmCaseStudy.image}
                alt="Crisis reputation recovery"
                loading="lazy"
              />
            </div>
            <div className="mpr-cm-case__copy">
              <span className="mpr-kicker mpr-kicker--light">{cmCaseStudy.kicker}</span>
              <h2>{cmCaseStudy.title}</h2>
              <div className="mpr-cm-case__blocks">
                {cmCaseStudy.blocks.map((block) => (
                  <article key={block.label}>
                    <h3>{block.label}</h3>
                    <p>{block.copy}</p>
                  </article>
                ))}
              </div>
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
              {cmTestimonials.map((item, index) => (
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

        <FaqSection
          faqs={[...cmFaqs]}
          intro="Answers on response time, preparation, industries, and how we protect your reputation when it matters most."
        />

        <section className="mpr-svc-related mpr-cm-related section bg-white">
          <div className="container">
            <div className="mpr-im-section-head">
              <span className="mpr-kicker">RELATED SERVICES</span>
              <h2 className="mpr-section-title">Related Services</h2>
            </div>
            <p className="mpr-im-related__copy">
              Crisis management works best as part of a full reputation
              strategy. Explore our related services:{" "}
              <Link href="/press-release-and-media-outreach">Media Outreach</Link>
              ,{" "}
              <Link href="/influencer-marketing">Influencer Marketing</Link>,{" "}
              <Link href="/talent-management">Talent Management</Link>.
            </p>
            <div className="mpr-svc-related__grid">
              {cmRelatedServices.map((item) => (
                <Link key={item.href} href={item.href} className="mpr-svc-related__card">
                  <span>Service</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mpr-im-forms section" id="crisis-contact">
          <div className="mpr-im-approach__orb mpr-im-approach__orb--a" aria-hidden="true" />
          <div className="mpr-im-approach__orb mpr-im-approach__orb--b" aria-hidden="true" />
          <div className="container mpr-cm-contact">
            <div className="mpr-im-forms__intro">
              <span>CONTACT US</span>
              <h2>When It Matters Most, We&apos;re Ready</h2>
              <p>Don&apos;t wait for a crisis to find the right team. Reach out today.</p>
            </div>
            <form className="mpr-im-form mpr-cm-form" action="#" method="post">
              <div className="mpr-im-form__row">
                <label>
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" name="email" placeholder="Email" required />
                </label>
              </div>
              <label>
                <span>Subject</span>
                <input type="text" name="subject" placeholder="Subject" />
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="Phone" />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows={4} placeholder="Message" required />
              </label>
              <button type="submit">Get Crisis-Ready</button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
