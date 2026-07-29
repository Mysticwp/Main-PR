"use client";

import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mpr-faq section bg-white" aria-labelledby="faq-heading">
      <div className="container mpr-faq__grid">
        <div className="mpr-faq__intro">
          <span className="mpr-kicker">FAQ</span>
          <h2 id="faq-heading" className="mpr-section-title">
            Frequently Asked Questions
          </h2>
          <p>
            Straight answers on services, timelines, and how Mystic PR helps
            companies earn visibility with confidence.
          </p>
        </div>

        <div className="mpr-faq__list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className={`mpr-faq__item${isOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="mpr-faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="mpr-faq__answer" hidden={!isOpen}>
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
