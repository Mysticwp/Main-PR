"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export function ProcessSection({ steps }: { steps: ProcessStep[] }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.querySelectorAll(".mpr-process-row").forEach((row) => {
        row.classList.add("is-visible");
      });
      return;
    }

    const rows = section.querySelectorAll<HTMLElement>(".mpr-process-row");
    const line = section.querySelector<HTMLElement>(".mpr-process-line__fill");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector(".mpr-process-heading"),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%"
          }
        }
      );

      rows.forEach((row, index) => {
        gsap.fromTo(
          row,
          { opacity: 0, x: -36 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              onEnter: () => row.classList.add("is-visible"),
              onEnterBack: () => row.classList.add("is-active"),
              onLeave: () => row.classList.remove("is-active"),
              onLeaveBack: () => row.classList.remove("is-active")
            }
          }
        );
      });

      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section.querySelector(".mpr-process-list"),
              start: "top 70%",
              end: "bottom 35%",
              scrub: true
            }
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mpr-process section bg-white">
      <div className="container">
        <div className="mpr-process-heading">
          <span className="mpr-kicker">How we work</span>
          <h2 className="mpr-section-title">Our Process</h2>
        </div>

        <div className="mpr-process-track">
          <div className="mpr-process-line" aria-hidden="true">
            <span className="mpr-process-line__fill" />
          </div>

          <div className="mpr-process-list">
            {steps.map((step) => (
              <article key={step.number} className="mpr-process-row">
                <span className="mpr-process-row__num">{step.number}</span>
                <div className="mpr-process-row__body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <span className="mpr-process-row__index" aria-hidden="true">
                  {step.number}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
