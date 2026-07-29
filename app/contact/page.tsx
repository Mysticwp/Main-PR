import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Contact Mystic PR",
  description:
    "Contact Mystic PR in Dubai for influencer marketing, media outreach, talent management, and strategic PR campaign support.",
  alternates: {
    canonical: "https://mysticpr.com/contact"
  }
};

export default function ContactPage() {
  return (
    <SiteShell activeHref="/contact">
      <main className="section">
        <div className="container contact-shell">
          <Reveal>
            <div className="section-intro">
              <span className="eyebrow">Let&apos;s Connect</span>
              <h1>We’d love to hear from you.</h1>
              <p>
                Find us in Churchill Executive Towers, Business Bay, Dubai, or
                reach out directly to start planning your next campaign.
              </p>
              <div className="contact-details">
                <p>Churchill Executive Towers - Business Bay - Dubai - UAE</p>
                <p>
                  <a href="tel:+971558434908">+971 55 843 4908</a>
                </p>
                <p>
                  <a href="mailto:business@mystic-advertising.com">
                    business@mystic-advertising.com
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="contact-form">
              <label>
                Full Name
                <input type="text" name="fullName" placeholder="Your full name" />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" placeholder="+971" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea name="message" rows={6} placeholder="How can we help?" />
              </label>
              <button type="submit" className="button button--primary">
                Let&apos;s Talk
              </button>
            </form>
          </Reveal>
        </div>
      </main>
    </SiteShell>
  );
}
