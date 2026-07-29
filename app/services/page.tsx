import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "PR Services In Dubai",
  description:
    "Explore Mystic PR services including influencer marketing, crisis management, talent management, celebrity management, and media outreach in Dubai.",
  alternates: {
    canonical: "https://mysticpr.com/services"
  }
};

export default function ServicesPage() {
  return (
    <SiteShell activeHref="/services">
      <main className="section">
        <div className="container">
          <Reveal>
            <div className="section-intro">
              <span className="eyebrow">Services</span>
              <h1>Public relations and brand visibility services built for modern growth.</h1>
            </div>
          </Reveal>
          <div className="card-grid">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.05}>
                <article className="service-card">
                  <p className="service-card__index">0{index + 1}</p>
                  <h2>{service.title}</h2>
                  <p>{service.summary}</p>
                  <Link href={`/services/${service.slug}`}>Read more</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
