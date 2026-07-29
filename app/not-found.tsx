import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="section">
        <div className="container section-intro">
          <span className="eyebrow">404</span>
          <h1>Page not found.</h1>
          <p>The page you requested could not be found. Return to the homepage to continue exploring Mystic PR.</p>
          <div>
            <Link className="button button--primary" href="/">
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
