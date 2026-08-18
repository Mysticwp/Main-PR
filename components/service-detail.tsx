import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import type { ServicePage } from "@/lib/site-data";
import { services } from "@/lib/site-data";

type ServiceDetailProps = {
  service: ServicePage;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 4);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: "Mystic PR",
      url: "https://mysticpr.com"
    },
    areaServed: "Dubai",
    description: service.seoDescription,
    image: service.image,
    url: `https://mysticpr.com${service.href}`
  };

  return (
    <>
      <SmoothScroll />
      <SiteHeader theme="light" activeHref="/services" />
      <main className="mpr-svc">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <section className="mpr-svc-hero section bg-white">
          <div className="container mpr-svc-hero__grid">
            <div className="mpr-svc-hero__copy">
              <span className="mpr-kicker">{service.title}</span>
              <h1 className="mpr-svc-hero__title">{service.heroTitle}</h1>
              <p className="mpr-svc-hero__text">{service.heroCopy}</p>
              <Link href="/contact" className="mpr-svc-hero__cta">
                Talk to us
              </Link>
            </div>
            <div className="mpr-svc-hero__media">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        </section>

        <section className="mpr-svc-approach section bg-white">
          <div className="container">
            <div className="mpr-svc-approach__head">
              <h2 className="mpr-section-title">{service.approachTitle}</h2>
              {service.approachIntro ? (
                <p className="mpr-svc-approach__intro">{service.approachIntro}</p>
              ) : null}
            </div>
            <div className="mpr-svc-steps">
              {service.approachSteps.map((step, index) => (
                <article key={step.title} className="mpr-svc-step">
                  <span className="mpr-svc-step__num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {service.offerings?.length ? (
          <section className="mpr-svc-offerings section">
            <div className="container">
              <h2 className="mpr-section-title mpr-section-title--light">
                {service.offeringsTitle}
              </h2>
              <div className="mpr-svc-offerings__grid">
                {service.offerings.map((item) => (
                  <article key={item.title} className="mpr-svc-offering">
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {service.highlightTitle ? (
          <section className="mpr-svc-highlight section bg-white">
            <div className="container mpr-svc-highlight__inner">
              <h2 className="mpr-section-title">{service.highlightTitle}</h2>
              {service.highlightCopy ? <p>{service.highlightCopy}</p> : null}
            </div>
          </section>
        ) : null}

        <section className="mpr-svc-cta section">
          <div className="container mpr-svc-cta__inner">
            <span className="mpr-kicker mpr-kicker--light">{service.ctaEyebrow}</span>
            <h2>{service.ctaTitle}</h2>
            <p>{service.ctaCopy}</p>
            <Link href="/contact" className="mpr-svc-cta__btn">
              Get in touch
            </Link>
          </div>
        </section>

        <section className="mpr-svc-related section bg-white">
          <div className="container">
            <h2 className="mpr-section-title">More Services</h2>
            <div className="mpr-svc-related__grid">
              {related.map((item) => (
                <Link key={item.slug} href={item.href} className="mpr-svc-related__card">
                  <span>Service</span>
                  <strong>{item.title}</strong>
                  <p>{item.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
