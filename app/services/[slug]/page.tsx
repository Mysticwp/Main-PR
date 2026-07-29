import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { services } from "@/lib/site-data";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({
  params
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `https://mysticpr.com/services/${service.slug}`
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

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
    description: service.seoDescription
  };

  return (
    <SiteShell activeHref="/services">
      <main className="section">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="container">
          <Reveal>
            <div className="section-intro">
              <span className="eyebrow">Service</span>
              <h1>{service.title}</h1>
              <p className="hero-copy">{service.summary}</p>
            </div>
          </Reveal>

          <div className="process-list">
            {service.body.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08}>
                <article className="process-card">
                  <span className="process-card__number">0{index + 1}</span>
                  <div>
                    <h2>{index === 0 ? "Why it matters" : "How we approach it"}</h2>
                    <p>{paragraph}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
