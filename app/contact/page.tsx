import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Contact Mystic PR - Let's Connect",
  description:
    "Contact Mystic PR in Dubai for influencer marketing, media outreach, talent management, and strategic PR campaign support.",
  alternates: {
    canonical: "https://mysticpr.com/contact"
  }
};

export default function ContactPage() {
  return (
    <>
      <SmoothScroll />
      <SiteHeader theme="light" activeHref="/contact" />
      <main className="mpr-contact-page">
        <section className="mpr-contact-hero section bg-white">
          <div className="container">
            <span className="mpr-kicker">WE&apos;D LOVE TO HEAR FROM YOU</span>
            <h1>contact us</h1>
            <div className="mpr-contact-hero__grid">
              <article>
                <h2>Find us Here</h2>
                <p>
                  Churchill, Executive Towers - 3409, 34th Floor - Al A&apos;amal
                  St - Business Bay - Dubai - United Arab Emirates
                </p>
              </article>
              <article>
                <h2>Get In touch</h2>
                <p>
                  <a href="tel:+971558434908">+971 55 843 4908</a>
                  <br />
                  <a href="mailto:business@mystic-advertising.com">
                    business@mystic-advertising.com
                  </a>
                </p>
              </article>
              <article>
                <h2>Training Hours</h2>
                <p>
                  Mon- Fri: 9am- 8pm
                  <br />
                  Saturday: 10am-4pm
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mpr-contact-form-wrap section bg-white">
          <div className="container mpr-contact-form-wrap__grid">
            <div>
              <h2>Take the first step, we will take care of the rest</h2>
              <p>
                Share your brief and we&apos;ll come back with the right PR
                approach for your brand.
              </p>
            </div>
            <form className="mpr-contact-form" action="#" method="post">
              <div className="mpr-contact-form__row">
                <label>
                  <span>Full Name</span>
                  <input type="text" name="name" placeholder="Full Name" required />
                </label>
                <label>
                  <span>Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="* Phone Number"
                    required
                  />
                </label>
              </div>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="* Email Address"
                  required
                />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows={5} placeholder="Message" required />
              </label>
              <button type="submit">LET&apos;S TALK</button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
      <a
        className="mpr-whatsapp"
        href="https://wa.me/971558434908"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
      >
        WhatsApp us
      </a>
    </>
  );
}
