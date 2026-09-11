import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import {
  caseStudies,
  getCaseStudyBySlug,
  getCaseStudySlugs
} from "@/lib/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return {
    title: `${study.title} Case Study | Mystic PR Dubai`,
    description: study.summary,
    alternates: {
      canonical: `https://mysticpr.com/case-studies/${study.slug}`
    },
    openGraph: {
      title: `${study.title} Case Study | Mystic PR`,
      description: study.summary,
      url: `https://mysticpr.com/case-studies/${study.slug}`,
      images: [{ url: study.image }]
    }
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const related = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3);
  const [galleryLead, ...galleryRest] = study.gallery;

  return (
    <>
      <SmoothScroll />
      <SiteHeader theme="dark" activeHref="/" />
      <main className="mpr-cs">
        {/* 1. Cinematic hero */}
        <section className="mpr-cs-hero">
          <div className="mpr-cs-hero__media" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={study.image} alt="" />
            <div className="mpr-cs-hero__veil" />
          </div>
          <div className="container mpr-cs-hero__inner">
            <Link href="/#stories" className="mpr-cs-back">
              ← All case studies
            </Link>
            <div className="mpr-cs-hero__tags">
              <span>{study.industry}</span>
              <span>{study.location}</span>
              <span>{study.year}</span>
            </div>
            <h1>{study.title}</h1>
            <p className="mpr-cs-hero__lede">{study.summary}</p>
            <a href="#story" className="mpr-cs-hero__scroll">
              Explore the story
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        {/* 2. Metric strip */}
        <section className="mpr-cs-metrics" aria-label="Campaign metrics">
          <div className="container mpr-cs-metrics__row">
            {study.metrics.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        {/* 3. Challenge + featured image */}
        <section className="mpr-cs-story section bg-white" id="story">
          <div className="container mpr-cs-story__grid">
            <div className="mpr-cs-story__copy">
              <span className="mpr-kicker">THE BRIEF</span>
              <h2>The challenge we walked into</h2>
              <p>{study.challenge}</p>
              <div className="mpr-cs-story__chips">
                <div>
                  <span>Client</span>
                  <strong>{study.client}</strong>
                </div>
                <div>
                  <span>Industry</span>
                  <strong>{study.industry}</strong>
                </div>
              </div>
            </div>
            <div className="mpr-cs-story__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={study.coverSecondary}
                alt={`${study.title} campaign visual`}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 4. Image gallery */}
        <section className="mpr-cs-gallery" aria-label="Campaign gallery">
          <div className="container">
            <div className="mpr-cs-gallery__head">
              <span className="mpr-kicker mpr-kicker--light">IN THE FRAME</span>
              <h2>Campaign moments</h2>
            </div>
            <div className="mpr-cs-gallery__mosaic">
              <figure className="mpr-cs-gallery__lead">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={galleryLead} alt="" loading="lazy" />
              </figure>
              <div className="mpr-cs-gallery__stack">
                {galleryRest.slice(0, 4).map((src, index) => (
                  <figure
                    key={src}
                    className={`mpr-cs-gallery__tile mpr-cs-gallery__tile--${index + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" loading="lazy" />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Approach */}
        <section className="mpr-cs-approach section bg-white">
          <div className="container">
            <div className="mpr-cs-approach__intro">
              <span className="mpr-kicker">HOW WE WORKED</span>
              <h2>The playbook behind the buzz</h2>
              <p>
                A clear sequence — narrative, talent, media, and timing — so
                every channel amplified the same story.
              </p>
            </div>
            <div className="mpr-cs-approach__grid">
              {study.approach.map((item, index) => (
                <article key={item} className="mpr-cs-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Results + quote */}
        <section className="mpr-cs-impact section">
          <div className="container mpr-cs-impact__grid">
            <div>
              <span className="mpr-kicker mpr-kicker--light">THE IMPACT</span>
              <h2>What the campaign delivered</h2>
              <ul className="mpr-cs-impact__list">
                {study.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mpr-cs-services">
                <span className="mpr-kicker mpr-kicker--light">SERVICES USED</span>
                <div className="mpr-cs-services__row">
                  {study.services.map((service) => (
                    <span key={service}>{service}</span>
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="mpr-cs-quote">
              <p>“{study.quote}”</p>
              <cite>{study.quoteBy}</cite>
              <div className="mpr-cs-quote__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={study.image} alt="" loading="lazy" />
              </div>
            </blockquote>
          </div>
        </section>

        {/* 7. CTA */}
        <section className="mpr-cs-cta section bg-white">
          <div className="container mpr-cs-cta__box">
            <div>
              <span className="mpr-kicker">NEXT BRIEF</span>
              <h2>Want results like this for your brand?</h2>
              <p>
                Tell us what you&apos;re launching. We&apos;ll map the PR, talent,
                and media mix that fits.
              </p>
            </div>
            <Link href="/contact" className="mpr-im-btn mpr-im-btn--solid">
              Start a project
            </Link>
          </div>
        </section>

        {/* 8. Related */}
        <section className="mpr-cs-related section">
          <div className="container">
            <div className="mpr-cs-related__head">
              <span className="mpr-kicker mpr-kicker--light">MORE WORK</span>
              <h2>Continue exploring</h2>
            </div>
            <div className="mpr-cs-related__grid">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/case-studies/${item.slug}`}
                  className="mpr-cs-related__card"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" loading="lazy" />
                  <div className="mpr-cs-related__shade" />
                  <div className="mpr-cs-related__body">
                    <span>
                      {item.metric} · {item.metricLabel}
                    </span>
                    <strong>{item.title}</strong>
                  </div>
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
