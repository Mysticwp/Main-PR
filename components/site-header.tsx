import Link from "next/link";
import { services } from "@/lib/site-data";

type SiteHeaderProps = {
  theme?: "dark" | "light";
  activeHref?: string;
};

const logoByTheme = {
  dark: "https://mysticpr.com/wp-content/uploads/2024/10/PR.png",
  light: "https://mysticpr.com/wp-content/uploads/2024/11/PR-1.png"
} as const;

export function SiteHeader({
  theme = "dark",
  activeHref
}: SiteHeaderProps) {
  return (
    <header className={`mpr-header mpr-header--${theme}`}>
      <div className="mpr-nav container">
        <Link href="/" className="mpr-logo" aria-label="Mystic PR home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoByTheme[theme]} alt="Mystic PR" />
        </Link>
        <nav className="mpr-menu" aria-label="Primary">
          <Link href="/" className={activeHref === "/" ? "is-active" : undefined}>
            Home
          </Link>
          <Link
            href="/about"
            className={activeHref === "/about" ? "is-active" : undefined}
          >
            About
          </Link>
          <div className="mpr-menu__dropdown">
            <Link
              href="/services"
              className={activeHref === "/services" ? "is-active" : undefined}
            >
              Services
              <span className="mpr-menu__caret" aria-hidden="true" />
            </Link>
            <div className="mpr-menu__panel">
              {services.map((service) => (
                <Link key={service.slug} href={service.href}>
                  {service.slug === "press-release-media-outreach"
                    ? "Media Outreach"
                    : service.title}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/blogs"
            className={activeHref === "/blogs" ? "is-active" : undefined}
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className={activeHref === "/contact" ? "is-active" : undefined}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
