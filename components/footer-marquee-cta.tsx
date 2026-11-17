"use client";

import Link from "next/link";
import { useRef } from "react";

export function FooterMarqueeCta() {
  const cursorRef = useRef<HTMLSpanElement | null>(null);

  return (
    <Link
      href="/contact"
      className="mpr-marquee mpr-marquee--footer mpr-marquee--cta bg-white"
      aria-label="Get in touch"
      onMouseMove={(event) => {
        const cursor = cursorRef.current;
        if (!cursor) return;
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
      }}
    >
      <div className="mpr-marquee__track scroll-slower reverse">
        <span>Turning Brand Stories into Mystical Journeys</span>
        <span>Turning Brand Stories into Mystical Journeys</span>
        <span>Turning Brand Stories into Mystical Journeys</span>
      </div>
      <span ref={cursorRef} className="mpr-marquee__cursor" aria-hidden="true">
        Get in touch
      </span>
    </Link>
  );
}
