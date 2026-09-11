"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type StorySlide = {
  title: string;
  image: string;
  metric: string;
  metricLabel: string;
  outcome: string;
  href?: string;
};

export function StoriesSlider({
  stories,
  kicker = "CASE RESULTS",
  title = "Our Success Stories",
  glow = false
}: {
  stories: StorySlide[];
  kicker?: string;
  title?: string;
  glow?: boolean;
}) {
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
    <section className={`mpr-stories section${glow ? " mpr-stories--glow" : ""}`}>
      {glow ? (
        <>
          <div className="mpr-im-approach__orb mpr-im-approach__orb--a" aria-hidden="true" />
          <div className="mpr-im-approach__orb mpr-im-approach__orb--b" aria-hidden="true" />
        </>
      ) : null}
      <div className="container">
        <div className="mpr-stories__top">
          <div className="mpr-section-head mpr-section-head--light">
            <span className="mpr-kicker mpr-kicker--light">{kicker}</span>
            <h2 className="mpr-section-title mpr-section-title--light">
              {title}
            </h2>
          </div>
          {stories.length > 1 ? (
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
          ) : null}
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
                  {story.href ? (
                    <Link href={story.href} className="mpr-stories__link">
                      View case study →
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        {stories.length > 1 ? (
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
        ) : null}
      </div>
    </section>
  );
}
