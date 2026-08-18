import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
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
    <>
      <SmoothScroll />
      <SiteHeader theme="light" activeHref="/services" />
      <main className="mpr-svc-index">
        <section className="mpr-svc-index__hero section bg-white">
          <div className="container">
            <span className="mpr-kicker">Services</span>
            <h1 className="mpr-svc-index__title">
              Public relations and brand visibility services built for modern growth.
            </h1>
            <p className="mpr-svc-index__copy">
              From influencer campaigns and talent partnerships to crisis
              communication and media outreach, Mystic PR helps brands create
              buzz that lasts.
            </p>
          </div>
        </section>

        <section className="mpr-svc-index__list section bg-white">
          <div className="container">
            <div className="mpr-svc-index__grid">
              {services.map((service, index) => (
                <article key={service.slug} className="mpr-svc-index__card">
                  <div className="mpr-svc-index__card-media">
                    <img src={service.image} alt={service.title} loading="lazy" />
                  </div>
                  <div className="mpr-svc-index__card-body">
                    <span>0{index + 1}</span>
                    <h2>{service.title}</h2>
                    <p>{service.summary}</p>
                    <Link href={service.href}>Explore service</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
