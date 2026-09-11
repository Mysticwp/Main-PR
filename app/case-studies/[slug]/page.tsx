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

  return (
    <>
      <SmoothScroll />
      <SiteHeader theme="dark" activeHref="/" />
      <main className="mpr-cs">
        <section className="mpr-cs-hero">
          <div className="mpr-cs-hero__media" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={study.image} alt="" />
            <div className="mpr-cs-hero__veil" />
          </div>
          <div className="container mpr-cs-hero__grid">
            <div className="mpr-cs-hero__copy">
              <Link href="/#stories" className="mpr-cs-back">
                ← All case studies
              </Link>
              <span className="mpr-kicker mpr-kicker--light">{study.industry}</span>
              <h1>{study.title}</h1>
              <p>{study.summary}</p>
              <div className="mpr-cs-hero__meta">
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
            <div className="mpr-cs-hero__stat">
              <strong>{study.metric}</strong>
              <span>{study.metricLabel}</span>
            </div>
          </div>
        </section>

        <section className="mpr-cs-body section bg-white">
          <div className="container mpr-cs-body__grid">
            <article>
              <span className="mpr-kicker">THE CHALLENGE</span>
              <h2>What we were solving</h2>
              <p>{study.challenge}</p>
            </article>
            <article>
              <span className="mpr-kicker">THE OUTCOME</span>
              <h2>What changed</h2>
              <p>{study.outcome}</p>
            </article>
          </div>
        </section>

        <section className="mpr-cs-approach section">
          <div className="container">
            <div className="mpr-cs-approach__head">
              <span className="mpr-kicker mpr-kicker--light">OUR APPROACH</span>
              <h2>How we delivered it</h2>
            </div>
            <ol className="mpr-cs-approach__list">
              {study.approach.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mpr-cs-results section bg-white">
          <div className="container mpr-cs-results__grid">
            <div>
              <span className="mpr-kicker">RESULTS</span>
              <h2>Impact that moved the brand</h2>
            </div>
            <ul className="mpr-cs-results__list">
              {study.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="container mpr-cs-services">
            <span className="mpr-kicker">SERVICES USED</span>
            <div className="mpr-cs-services__row">
              {study.services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="mpr-cs-related section bg-white">
          <div className="container">
            <div className="mpr-section-head mpr-section-head--row">
              <div>
                <span className="mpr-kicker">MORE WORK</span>
                <h2 className="mpr-section-title">Related case studies</h2>
              </div>
              <Link href="/contact" className="mpr-im-btn mpr-im-btn--solid">
                Start a project
              </Link>
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
                  <div>
                    <strong>{item.title}</strong>
                    <span>
                      {item.metric} · {item.metricLabel}
                    </span>
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
