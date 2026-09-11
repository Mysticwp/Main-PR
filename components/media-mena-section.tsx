import { menaMediaLogos } from "@/lib/case-studies";

export function MediaMenaSection() {
  const track = [...menaMediaLogos, ...menaMediaLogos];

  return (
    <section className="mpr-mena section bg-white" aria-label="MENA media partners">
      <div className="container mpr-mena__layout">
        <div className="mpr-mena__copy">
          <h2>
            What media do{" "}
            <span className="mpr-mena__accent">
              we work with
              <i className="mpr-mena__dot" aria-hidden="true" />
            </span>{" "}
            in the MENA region?
          </h2>
        </div>

        <div className="mpr-mena__rail" aria-hidden="true">
          <div className="mpr-mena__track scroll-slower">
            {track.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="mpr-mena__badge">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.image} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
