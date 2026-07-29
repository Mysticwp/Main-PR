import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mpr-footer bg-white">
      <div className="container mpr-footer__grid">
        <div>
          <h4>MAKE YOUR BRAND THE TALK OF THE TOWN WITH STRATEGIC PR</h4>
        </div>
        <div>
          <h5>ADDRESS</h5>
          <p>
            4303-A Finest business center Aspin tower 104 Sheikh zayed Road Dubai
          </p>
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
  );
}
