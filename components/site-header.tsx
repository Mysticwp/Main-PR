import Link from "next/link";

type SiteHeaderProps = {
  theme?: "dark" | "light";
  activeHref?: string;
};

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader({
  theme = "dark",
  activeHref
}: SiteHeaderProps) {
  return (
    <header className={`mpr-header mpr-header--${theme}`}>
      <div className="mpr-nav container">
        <Link href="/" className="mpr-logo" aria-label="Mystic PR home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://mysticpr.com/wp-content/uploads/2024/10/PR.png"
            alt="Mystic PR"
          />
        </Link>
        <nav className="mpr-menu" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={activeHref === link.href ? "is-active" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
