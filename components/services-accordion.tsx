"use client";

import { useState } from "react";

export type ServiceItem = {
  title: string;
  href: string;
  image: string;
  summary?: string;
};

export function ServicesAccordion({ services }: { services: ServiceItem[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeIndex = hoveredIndex ?? 0;

  return (
    <section
      className="service-section"
      aria-label="Services"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {services.map((service, index) => {
        const isActive = index === activeIndex;

        return (
          <article
            key={service.title}
            className={`service-column${isActive ? " is-expanded" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
          >
            <div className="service-img">
              <img src={service.image} alt={service.title} loading="lazy" />
            </div>
            <div className="service-text">
              <h2>{service.title}</h2>
              {service.summary ? <p>{service.summary}</p> : null}
              <a href={service.href}>Read more &gt;</a>
            </div>
          </article>
        );
      })}
    </section>
  );
}
