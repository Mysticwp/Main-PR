import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";

export function TalentCategoryPage({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <SmoothScroll />
      <SiteHeader theme="light" activeHref="/services" />
      <main className="mpr-svc">
        <section className="mpr-svc-hero section bg-white">
          <div className="container">
            <span className="mpr-kicker">TALENT ROSTER</span>
            <h1 className="mpr-svc-hero__title">{title}</h1>
            <p className="mpr-svc-hero__text">{description}</p>
            <div className="mpr-im-hero__actions">
              <Link href="/talent-management#hire-form" className="mpr-im-btn mpr-im-btn--solid">
                Hire Talent
              </Link>
              <Link href="/talent-management#register-form" className="mpr-im-btn mpr-im-btn--ghost">
                Register Yourself
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
