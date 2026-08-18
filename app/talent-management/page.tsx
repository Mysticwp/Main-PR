import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { ProcessSection } from "@/components/process-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import {
  tmAgeGroups,
  tmApproach,
  tmCategories,
  tmFaqs,
  tmHeroImage,
  tmHeroVideo,
  tmHireTypes,
  tmRegisterCategories,
  tmRelatedServices,
  tmTestimonials,
  tmWork
} from "@/lib/talent-page-data";
import { getServiceBySlug } from "@/lib/site-data";

const service = getServiceBySlug("talent-management")!;
const pageUrl = `https://mysticpr.com${service.href}`;
const metaTitle = "Talent Management Agency in Dubai | Mystic PR";
const metaDescription =
  "Mystic PR is a talent management agency in Dubai sourcing and managing male, female, and child talent for brand campaigns across the UAE.";
const ogTitle = "Talent Management with Mystic PR";
const ogDescription =
  "Connecting iconic brands with exceptional talent — Mystic PR sources, develops, and manages professionals across the UAE.";

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
    images: [{ url: tmHeroImage, alt: "Mystic PR talent management" }]
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [tmHeroImage]
  }
};

export default function TalentManagementPage() {
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
    serviceType: "Talent Management",
    url: pageUrl
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tmFaqs.map((item) => ({
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
              <span className="mpr-kicker">TALENT MANAGEMENT AGENCY IN DUBAI</span>
              <h1>Building Legendary Brands With Exceptional Talent</h1>
              <p>
                At the core of every iconic brand is extraordinary talent. Our
                talent management services in Dubai connect you with
                industry-leading professionals who bring vision, creativity, and
                expertise, transforming brands into lasting impact. As a trusted
                talent agency in Dubai, we specialize in sourcing, developing,
                and managing artists, influencers, and professionals to help
                them reach their full potential. With years of industry
                expertise, our talent management agency in Dubai customizes
                plans to each client&apos;s goals. Come to us to get the support
                you need.
              </p>
              <div className="mpr-im-hero__actions">
                <a href="#register-form" className="mpr-im-btn mpr-im-btn--solid">
                  Register Yourself
                </a>
                <a href="#hire-form" className="mpr-im-btn mpr-im-btn--ghost">
                  Hire Talent
                </a>
              </div>
            </div>
            <div className="mpr-im-hero__media">
              <video
                src={tmHeroVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Mystic PR talent management showreel"
              />
            </div>
          </div>
        </section>

        <section className="mpr-tm-cats section bg-white">
          <div className="container">
            <div className="mpr-im-section-head">
              <span className="mpr-kicker">TALENT CATEGORIES</span>
              <h2 className="mpr-section-title">
                Connecting Leading Talents With Iconic Brands
              </h2>
            </div>
            <p className="mpr-im-related__copy">
              Browse our talent roster by category, or tell us what your
              campaign needs and we&apos;ll match you directly.
            </p>
            <div className="mpr-tm-cats__grid">
              {tmCategories.map((item) => (
                <Link key={item.href} href={item.href} className="mpr-tm-cat">
                  <img src={item.image} alt={`${item.title} roster`} />
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mpr-im-work mpr-tm-work">
          <div className="container">
            <div className="mpr-im-section-head">
              <span className="mpr-kicker mpr-kicker--light">OUR WORK</span>
              <h2>Our Work</h2>
            </div>
            <p className="mpr-tm-work__intro">
              See our talent in action across recent brand campaigns and
              productions.
            </p>
            <div className="mpr-tm-work__grid">
              {tmWork.map((item) => (
                <article key={item.src} className="mpr-tm-work__item">
                  <div className="mpr-im-work__card">
                    <video
                      className="mpr-im-work__video"
                      src={item.src}
                      poster={item.poster}
                      controls
                      preload="none"
                      playsInline
                      controlsList="nodownload"
                    />
                  </div>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mpr-im-why section bg-white">
          <div className="mpr-im-why__watermark" aria-hidden="true">
            <div className="mpr-im-why__watermark-track">
              <span>Connecting Leading Talents With Iconic Brands</span>
              <span>Connecting Leading Talents With Iconic Brands</span>
              <span>Connecting Leading Talents With Iconic Brands</span>
              <span>Connecting Leading Talents With Iconic Brands</span>
            </div>
          </div>
          <div className="container mpr-im-why__grid">
            <div className="mpr-im-why__copy">
              <span className="mpr-kicker">WHY TALENT MANAGEMENT WITH US</span>
              <h2>Why Talent Management With Us</h2>
              <p>
                Great talent needs the right match, not just the biggest roster.
                We vet every professional we represent for skill, reliability,
                and brand fit — so when you hire through Mystic PR, you&apos;re
                getting talent that shows up ready, not just available.
              </p>
            </div>
            <div className="mpr-im-why__media">
              <img src={tmHeroImage} alt="Mystic PR talent management" />
            </div>
          </div>
        </section>

        <ProcessSection
          kicker="OUR APPROACH"
          title="Our Approach"
          steps={tmApproach}
        />

        <section className="mpr-im-testimonials section bg-white">
          <div className="container">
            <div className="mpr-im-section-head">
              <span className="mpr-kicker">TESTIMONIALS</span>
              <h2 className="mpr-section-title">What Clients Say</h2>
            </div>
            <div className="mpr-im-testimonials__grid">
              {tmTestimonials.map((item, index) => (
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
          faqs={[...tmFaqs]}
          intro="How our Dubai talent roster works — categories, hiring, registration, and child-talent protocols."
        />

        <section className="mpr-svc-related mpr-cm-related section bg-white">
          <div className="container">
            <div className="mpr-im-section-head">
              <span className="mpr-kicker">RELATED SERVICES</span>
              <h2 className="mpr-section-title">Related Services</h2>
            </div>
            <p className="mpr-im-related__copy">
              Talent management works closely with our other services. Explore:{" "}
              <Link href="/influencer-marketing">Influencer Marketing</Link>,{" "}
              <Link href="/press-release-and-media-outreach">Media Outreach</Link>
              , <Link href="/crisis-management">Crisis Management</Link>.
            </p>
            <div className="mpr-svc-related__grid">
              {tmRelatedServices.map((item) => (
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
              <h2>Partner with us to discover exceptional talent today</h2>
              <p>
                With our network and experience, we deliver exceptional talent
                that perfectly aligns with your brand&apos;s vision.
              </p>
            </div>
            <div className="mpr-im-forms__grid">
              <form className="mpr-im-form" action="#" method="post" id="register-form">
                <div className="mpr-im-form__head">
                  <span>01</span>
                  <h3>Talent Registration Form</h3>
                  <p>Join the Mystic PR roster and get considered for brand campaigns.</p>
                </div>
                <div className="mpr-im-form__fields">
                  <label>
                    <span>Name</span>
                    <input type="text" name="name" placeholder="Name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder="Email" required />
                  </label>
                  <div className="mpr-im-form__row">
                    <label>
                      <span>Contact no</span>
                      <input type="tel" name="phone" placeholder="Contact no" required />
                    </label>
                    <label>
                      <span>Location</span>
                      <input type="text" name="location" placeholder="Location" />
                    </label>
                  </div>
                  <label>
                    <span>Social Media Handles</span>
                    <input
                      type="text"
                      name="social"
                      placeholder="Instagram / TikTok / YouTube"
                    />
                  </label>
                  <label>
                    <span>Age</span>
                    <select name="age" defaultValue="" required>
                      <option value="" disabled>
                        Select age group
                      </option>
                      {tmAgeGroups.map((age) => (
                        <option key={age} value={age}>
                          {age}
                        </option>
                      ))}
                    </select>
                  </label>
                  <fieldset className="mpr-tm-checks">
                    <legend>Talent category</legend>
                    {tmRegisterCategories.map((category) => (
                      <label key={category} className="mpr-im-form__check">
                        <input type="checkbox" name="category" value={category} />
                        <span>{category}</span>
                      </label>
                    ))}
                  </fieldset>
                  <label className="mpr-im-form__check">
                    <input type="checkbox" name="terms" required />
                    <span>I agree to the terms and conditions</span>
                  </label>
                </div>
                <button type="submit">Submit</button>
              </form>

              <form className="mpr-im-form" action="#" method="post" id="hire-form">
                <div className="mpr-im-form__head">
                  <span>02</span>
                  <h3>Hire a Talent</h3>
                  <p>Share your brief and we&apos;ll match the right talent from our roster.</p>
                </div>
                <div className="mpr-im-form__fields">
                  <label>
                    <span>Name</span>
                    <input type="text" name="name" placeholder="Name" required />
                  </label>
                  <div className="mpr-im-form__row">
                    <label>
                      <span>Contact no</span>
                      <input type="tel" name="phone" placeholder="Contact no" required />
                    </label>
                    <label>
                      <span>Company Name</span>
                      <input type="text" name="company" placeholder="Company Name" />
                    </label>
                  </div>
                  <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder="Email" required />
                  </label>
                  <div className="mpr-im-form__row">
                    <label>
                      <span>Category</span>
                      <input type="text" name="category" placeholder="Category" />
                    </label>
                    <label>
                      <span>Type</span>
                      <select name="type" defaultValue="" required>
                        <option value="" disabled>
                          Select type
                        </option>
                        {tmHireTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label>
                    <span>Campaign Brief</span>
                    <textarea
                      name="brief"
                      rows={4}
                      placeholder="Campaign Brief"
                      required
                    />
                  </label>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
