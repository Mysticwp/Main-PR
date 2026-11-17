"use client";

import { pressPublications } from "@/lib/press-media-data";

export function FeaturedCarousel() {
  const items = [...pressPublications, ...pressPublications];

  return (
    <section className="mpr-featured section">
      <div className="container">
        <div className="mpr-featured__head">
          <div className="mpr-section-head mpr-section-head--light">
            <span className="mpr-kicker mpr-kicker--light">PRESS &amp; MEDIA</span>
            <h2 className="mpr-section-title mpr-section-title--light">
              Our Best Client Publications
            </h2>
          </div>
          <p className="mpr-featured__aside">
            Recent coverage secured for client launches across regional and
            international press.
          </p>
        </div>
      </div>

      <div className="mpr-paper-rail">
        <div className="mpr-paper-track scroll">
          {items.map((item, index) => (
            <a
              key={`${item.href}-${index}`}
              className="mpr-press-shot"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${item.name} coverage`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={`${item.name} publication`} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
