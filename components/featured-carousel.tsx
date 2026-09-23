"use client";

export type FeaturedOutlet = {
  name: string;
  note: string;
  image: string;
  headline?: string;
  href?: string;
};

export function FeaturedCarousel({ outlets }: { outlets: FeaturedOutlet[] }) {
  const items = [...outlets, ...outlets];

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
          {items.map((outlet, index) => {
            const inner = (
              <>
                <div className="mpr-paper-card__topline">
                  <span className="mpr-paper-card__tag">{outlet.note}</span>
                </div>
                <div className="mpr-paper-card__frame">
                  <div className="mpr-paper-card__media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={outlet.image}
                      alt={`${outlet.name} coverage`}
                      loading="lazy"
                    />
                  </div>
                  <div className="mpr-paper-card__glow" />
                </div>
                <div className="mpr-paper-card__body">
                  <strong className="mpr-paper-card__brand">{outlet.name}</strong>
                  <p className="mpr-paper-card__headline">
                    {outlet.headline ??
                      `${outlet.name} coverage of Mystic PR campaigns and brand storytelling.`}
                  </p>
                  <div className="mpr-paper-card__meta">
                    <span className="mpr-paper-card__date">
                      {outlet.href ? "Read coverage →" : "Featured editorial"}
                    </span>
                    <span className="mpr-paper-card__line" />
                  </div>
                </div>
              </>
            );

            if (outlet.href) {
              return (
                <a
                  key={`${outlet.name}-${outlet.headline}-${index}`}
                  className="mpr-paper-card"
                  href={outlet.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              );
            }

            return (
              <article
                key={`${outlet.name}-${outlet.headline}-${index}`}
                className="mpr-paper-card"
              >
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
