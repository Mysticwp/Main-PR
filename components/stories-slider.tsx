"use client";

import { useEffect, useState } from "react";

export type StorySlide = {
  title: string;
  image: string;
  metric: string;
  metricLabel: string;
  outcome: string;
};

export function StoriesSlider({ stories }: { stories: StorySlide[] }) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (nextIndex: number) => {
    if (isAnimating || nextIndex === index) return;
    setIsAnimating(true);
    setIndex(nextIndex);
  };

  const goPrev = () => {
    goTo(index === 0 ? stories.length - 1 : index - 1);
  };

  const goNext = () => {
    goTo(index === stories.length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    if (!isAnimating) return;
    const timer = window.setTimeout(() => setIsAnimating(false), 650);
    return () => window.clearTimeout(timer);
  }, [isAnimating, index]);

  if (!stories.length) return null;

  return (
    <section className="mpr-stories section">
      <div className="container">
        <div className="mpr-stories__top">
          <div className="mpr-section-head mpr-section-head--light">
            <span className="mpr-kicker mpr-kicker--light">CASE RESULTS</span>
            <h2 className="mpr-section-title mpr-section-title--light">
              Our Success Stories
            </h2>
          </div>
          <div className="mpr-stories__nav">
            <button
              type="button"
              className="mpr-stories__arrow"
              onClick={goPrev}
              aria-label="Previous story"
            >
              ‹
            </button>
            <button
              type="button"
              className="mpr-stories__arrow"
              onClick={goNext}
              aria-label="Next story"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mpr-stories__stage">
          {stories.map((story, slideIndex) => {
            const isActive = slideIndex === index;

            return (
              <article
                key={story.title + story.image}
                className={`mpr-stories__slide${isActive ? " is-active" : ""}`}
                aria-hidden={!isActive}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="mpr-stories__image"
                />
                <div className="mpr-stories__overlay" />
                <div className="mpr-stories__content">
                  <p className="mpr-stories__metric">
                    <strong>{story.metric}</strong>
                    <span>{story.metricLabel}</span>
                  </p>
                  <h3>{story.title}</h3>
                  <p>{story.outcome}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mpr-stories__dots" role="tablist" aria-label="Story slides">
          {stories.map((item, dotIndex) => (
            <button
              key={item.title + item.image}
              type="button"
              className={dotIndex === index ? "is-active" : undefined}
              aria-label={`Show ${item.title}`}
              onClick={() => goTo(dotIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
