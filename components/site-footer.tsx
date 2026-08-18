import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mpr-footer">
      <div className="container mpr-footer__grid">
        <div>
          <h4>MAKE YOUR BRAND THE TALK OF THE TOWN WITH STRATEGIC PR</h4>
        </div>
        <div>
          <h5>ADDRESS</h5>
          <p>
            4303-A Finest business center Aspin tower 104 Sheikh zayed Road Dubai
          </p>
          <div className="mpr-footer__social">
            <a
              href="https://www.facebook.com/share/1EZ7C6peKv/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/mysticpr.ae"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm5.2-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1zM12 9.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h5>SAY HELLO</h5>
          <p>+971 58 175 9326</p>
          <p>
            <a href="mailto:hello@mysticpr.com">hello@mysticpr.com</a>
          </p>
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
          © 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
