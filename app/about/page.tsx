import type { Metadata } from "next";
import { AboutBuzzRing } from "@/components/about-buzz-ring";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { aboutTeam, aboutValues } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Mystic PR - Our Vision & Expertise",
  description:
    "Learn about Mystic PR, a Dubai-based communications agency focused on strategic storytelling, media relations, influencer campaigns, and reputation growth.",
  alternates: {
    canonical: "https://mysticpr.com/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <SmoothScroll />
      <SiteHeader theme="light" activeHref="/about" />
      <main className="mpr-about">
        <section className="mpr-about-hero section bg-white">
          <div className="container mpr-about-hero__grid">
            <div className="mpr-about-hero__copy-wrap">
              <span className="mpr-kicker">About</span>
              <h1 className="mpr-about-hero__title">The Story Behind Our Vision</h1>
              <p className="mpr-about-hero__copy">
                Backed by deep expertise in influencer-led storytelling, strategic
                media relations and integrated digital campaigns, Mystic PR
                delivers engaging, measurable work that shapes culture, protects
                reputations, influences audiences and helps businesses grow. From
                regional launches to international media placements, our campaigns
                cut through the noise to drive meaningful change, which is why
                brands across the UAE and beyond trust Mystic PR to tell their most
                important stories.
              </p>
            </div>

            <AboutBuzzRing />
          </div>
        </section>

        <section className="mpr-values section bg-white">
          <div className="container">
            <h2 className="mpr-section-title">OUR VALUES</h2>
            <div className="mpr-values-list">
              {aboutValues.map((value) => (
                <article key={value.title} className="mpr-values-row">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mpr-about-team section">
          <div className="container">
            <h2 className="mpr-section-title mpr-section-title--light mpr-about-team__title">
              Meet The Team
            </h2>
            <div className="mpr-about-team__grid">
              {aboutTeam.map((member) => (
                <article key={member.name} className="mpr-about-team__card">
                  <div className="mpr-about-team__photo">
                    <img src={member.image} alt={member.name} loading="lazy" />
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
