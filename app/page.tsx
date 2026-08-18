import type { Metadata } from "next";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { FeaturedCarousel } from "@/components/featured-carousel";
import { ProcessSection } from "@/components/process-section";
import { ServicesAccordion } from "@/components/services-accordion";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StoriesSlider } from "@/components/stories-slider";
import { getLatestPosts } from "@/lib/blog";
import {
  faqs,
  featuredIn,
  processSteps,
  services,
  successStories,
  team
} from "@/lib/site-data";

const heroColumns = [
  [
    "https://mysticpr.com/wp-content/uploads/2025/10/5.jpg",
    "https://mysticpr.com/wp-content/uploads/2025/10/3.jpg",
    "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-03.jpg",
    "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-01.jpg",
    "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-06.jpg",
    "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-09.jpg"
  ],
  [
    "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-15.jpg",
    "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-02.jpg",
    "https://mysticpr.com/wp-content/uploads/2025/10/1.jpg",
    "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-07.jpg",
    "https://mysticpr.com/wp-content/uploads/2025/10/4.jpg",
    "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-04.jpg"
  ],
  [
    "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-03.jpg",
    "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-10.jpg",
    "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-07.jpg",
    "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-01.jpg",
    "https://mysticpr.com/wp-content/uploads/2025/10/4.jpg",
    "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-05.jpg"
  ]
];

const clientLogos = [
  "https://mysticpr.com/wp-content/uploads/2024/11/Logos-Resize-BW-21.png",
  "https://mysticpr.com/wp-content/uploads/2024/11/Logos-Resize-BW-17.png",
  "https://mysticpr.com/wp-content/uploads/2024/11/Logos-Resize-BW-15.png",
  "https://mysticpr.com/wp-content/uploads/2024/11/Logos-Resize-BW-14.png",
  "https://mysticpr.com/wp-content/uploads/2024/11/Logos-Resize-BW-13.png",
  "https://mysticpr.com/wp-content/uploads/2024/11/Logos-Resize-BW-12.png"
];

const homeTitle = "PR Agency Dubai | Influencer Marketing & Media Relations";
const homeDescription =
  "Strategic PR agency in Dubai delivering influencer marketing, media outreach, press release distribution and crisis communication for UAE brands since 2011.";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: "https://mysticpr.com" },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "https://mysticpr.com",
    siteName: "Mystic PR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription
  }
};

function LogoRibbon({ reverse = false }: { reverse?: boolean }) {
  const half = [...clientLogos, ...clientLogos, ...clientLogos];
  const track = [...half, ...half];

  return (
    <div className={`logo-ribbon scroll${reverse ? " reverse" : ""}`}>
      {track.map((src, index) => (
        <div key={`${src}-${index}`} className="logo-ribbon_holder">
          <img
            src={src}
            alt=""
            className="logo-ribbon_img"
            loading={index < 6 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  const posts = await getLatestPosts(3);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const serviceItems = services.map((service) => ({
    title: service.title,
    href: service.href,
    image: service.image,
    summary: service.summary
  }));

  return (
    <>
      <SmoothScroll />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader theme="dark" activeHref="/" />
      <main className="mpr-home">

        {/* 1. Hero */}
        <section className="home-hero_section">
          <div className="home_wrap">
            <div className="home_wrap-cols">
              {heroColumns.map((column, index) => {
                const direction = index !== 1 ? "reverse" : "";
                return (
                  <div key={index} className="home_wrap-col">
                    {[0, 1].map((stack) => (
                      <div
                        key={`${index}-${stack}`}
                        className={`home_wrap-slides v-scroll ${direction}`}
                      >
                        {column.map((src, imageIndex) => (
                          <div
                            key={`${index}-${stack}-${imageIndex}`}
                            className="home_wrap_slide"
                          >
                            <img
                              src={src}
                              alt=""
                              className="img-cover"
                              loading={stack === 0 && imageIndex < 3 ? "eager" : "lazy"}
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
            <div className="home-gradient_topleft" />
          </div>

          <div className="padding-global">
            <div className="container-wide">
              <div className="home_hero-content">
                <h1 className="home_hero_title">
                  PR Agency in Dubai — Behind the Leading Brands
                </h1>
                <div className="hero-subcontent">
                  <p className="home_hero_desc">
                    Strategic PR agency in Dubai for influencer marketing, media
                    outreach, crisis communication, and reputation management that
                    earns lasting confidence.
                  </p>
                  <Link href="/contact" className="button-cta main-cta">
                    Start a Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Trust bar */}
        <section className="home-logos-wrap home-logos-wrap--dark" aria-label="Client logos">
          <LogoRibbon />
        </section>

        {/* 3. About / intro */}
        <section className="mpr-intro section bg-white">
          <div className="container mpr-intro__grid">
            <div>
              <span className="mpr-kicker">ABOUT MYSTIC PR</span>
              <p className="mpr-intro__lead">
                Since 2011, we’ve delivered impactful communication strategies that
                boost brand visibility.
              </p>
            </div>
            <p className="mpr-intro__body">
              Mystic PR has delivered strategic communication campaigns for real
              estate developers, hospitality brands, and consumer businesses
              across Dubai, Abu Dhabi, and the wider GCC. As part of the Mystic
              Advertising group, we combine media relations, influencer
              marketing, crisis communication, and talent management under one
              roof — helping clients build credibility, control their narrative,
              and stay visible across the region&apos;s fast-moving media
              landscape. Our team has secured coverage in Gulf News, Arabian
              Business, Khaleej Times, The National, and Forbes Middle East, and
              manages campaigns for property launches, celebrity partnerships,
              and brand reputation programs.
            </p>
          </div>
        </section>

        <section className="mpr-marquee bg-white" aria-hidden="true">
          <div className="mpr-marquee__track scroll-slower">
            <span>Building Brands Through Powerful Narratives</span>
            <span>Building Brands Through Powerful Narratives</span>
            <span>Building Brands Through Powerful Narratives</span>
          </div>
        </section>

        {/* 4. Services */}
        <div className="mpr-services-wrap bg-white">
          <div className="container mpr-section-head">
            <span className="mpr-kicker">SERVICES</span>
            <h2 className="mpr-section-title">Our Services</h2>
          </div>
          <ServicesAccordion services={serviceItems} />
        </div>

        {/* 5. Our Process */}
        <ProcessSection
          kicker="HOW WE WORK"
          title="Our PR Process"
          steps={[...processSteps]}
        />

        {/* 6. Success Stories */}
        <StoriesSlider stories={[...successStories]} />

        {/* 7. As Featured In */}
        <FeaturedCarousel outlets={[...featuredIn]} />

        {/* 8. Meet the Team */}
        <section className="mpr-team section">
          <div className="container">
            <div className="mpr-section-head mpr-section-head--center mpr-section-head--light">
              <span className="mpr-kicker mpr-kicker--light">PEOPLE</span>
              <h2 className="mpr-section-title mpr-section-title--light">Meet The Team</h2>
            </div>
            <div className="mpr-team-grid">
              {team.map((member) => (
                <article key={member.name} className="mpr-team-card">
                  <div className="mpr-team-card__media">
                    <img src={member.image} alt={member.name} loading="lazy" />
                    <div className="mpr-team-card__shade" />
                    <div className="mpr-team-card__info">
                      <h3>{member.name}</h3>
                      <p className="mpr-team-card__role">{member.role}</p>
                    </div>
                  </div>
                  <p className="mpr-team-card__bio">{member.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Latest Insights */}
        <section className="mpr-insights section bg-white">
          <div className="container">
            <div className="mpr-section-head mpr-section-head--row">
              <div>
                <span className="mpr-kicker">BLOGS &amp; INSIGHTS</span>
                <h2 className="mpr-section-title">Recent Blog Updates</h2>
              </div>
              <Link href="/blogs" className="mpr-text-link">
                See all blogs &gt;
              </Link>
            </div>
            <div className="mpr-insights__grid">
              {posts.map((post) => (
                <article key={post.slug} className="mpr-insight-card">
                  <a href={post.href} className="mpr-insight-card__media">
                    {post.image ? (
                      <img src={post.image} alt="" loading="lazy" />
                    ) : null}
                  </a>
                  <div className="mpr-insight-card__body">
                    <time dateTime={post.date}>{post.date}</time>
                    <h3>
                      <a href={post.href}>{post.title}</a>
                    </h3>
                    <p>{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <FaqSection
          faqs={[...faqs]}
          intro="Answers on how a Dubai PR agency works, influencer marketing in the UAE, crisis support, and getting started with Mystic PR."
        />

        {/* 11. Contact / CTA */}
        <section id="contact" className="mpr-contact section bg-white">
          <div className="container mpr-contact-grid">
            <div>
              <span className="mpr-kicker">CONTACT US</span>
              <h2 className="mpr-section-title">
                Ready to create a buzz that lasts? Let’s talk!
              </h2>
              <p className="mpr-contact-copy">
                We don’t just tell your story, we create the buzz that makes
                people listen.
              </p>
            </div>

            <form className="mpr-form">
              <div className="mpr-form__row">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <input type="tel" name="phone" placeholder="Contact" />
              <textarea name="message" rows={4} placeholder="Message" required />
              <button type="submit" className="button-cta main-cta">
                GET IN TOUCH
              </button>
            </form>
          </div>
        </section>

        <section className="mpr-marquee mpr-marquee--footer bg-white" aria-hidden="true">
          <div className="mpr-marquee__track scroll-slower reverse">
            <span>Turning Brand Stories into Mystical Journeys</span>
            <span>Turning Brand Stories into Mystical Journeys</span>
            <span>Turning Brand Stories into Mystical Journeys</span>
          </div>
        </section>

        <footer className="mpr-footer bg-white">
          <div className="container mpr-footer__grid">
            <div>
              <h4>MAKE YOUR BRAND THE TALK OF THE TOWN WITH STRATEGIC PR</h4>
            </div>
            <div>
              <h5>ADDRESS</h5>
              <p>4303-A Finest business center Aspin tower 104 Sheikh zayed Road Dubai</p>
            </div>
            <div>
              <h5>SAY HELLO</h5>
              <p>+971 58 175 9326</p>
              <p>PR@mystic-advertising.com</p>
            </div>
          </div>
          <div className="container mpr-footer__bottom">
            <div className="mpr-footer__links">
              <Link href="/">Home</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <p>
              <a href="https://mystic-advertising.com/" target="_blank" rel="noreferrer">
                Mystic Advertising
              </a>{" "}
              © 2026. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
