"use client";

import { useEffect, useRef, useState } from "react";
import { creatorReels } from "@/lib/press-media-data";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function CreatorReelsSection() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [offset, setOffset] = useState(0);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [pausedCarousel, setPausedCarousel] = useState(false);

  const cardStep = () => {
    const viewport = viewportRef.current;
    if (!viewport) return 280;
    const card = viewport.querySelector(".mpr-reel-card") as HTMLElement | null;
    if (!card) return 280;
    const styles = window.getComputedStyle(viewport.querySelector(".mpr-reels__track")!);
    const gap = parseFloat(styles.columnGap || styles.gap || "18");
    return card.getBoundingClientRect().width + gap;
  };

  const maxOffset = () => {
    const viewport = viewportRef.current;
    if (!viewport) return 0;
    const track = viewport.querySelector(".mpr-reels__track") as HTMLElement | null;
    if (!track) return 0;
    return Math.max(0, track.scrollWidth - viewport.clientWidth);
  };

  const goTo = (nextIndex: number) => {
    const total = creatorReels.length;
    const index = ((nextIndex % total) + total) % total;
    const nextOffset = Math.min(index * cardStep(), maxOffset());
    setOffset(nextOffset);
    setActive(index);
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
    setPlaying(true);
  };

  const prev = () => {
    setPausedCarousel(true);
    goTo(active - 1);
  };

  const next = () => {
    setPausedCarousel(true);
    goTo(active + 1);
  };

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    setPausedCarousel(true);
    if (index !== active) {
      goTo(index);
      return;
    }
    if (video.paused) {
      void video.play().catch(() => undefined);
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    const start = window.setTimeout(() => goTo(0), 400);
    return () => window.clearTimeout(start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pausedCarousel) return;
    const id = window.setInterval(() => {
      goTo(active + 1);
    }, 4500);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, pausedCarousel]);

  useEffect(() => {
    const onResize = () => {
      setOffset(Math.min(active * cardStep(), maxOffset()));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section className="mpr-reels section bg-white">
      <div className="container">
        <div className="mpr-reels__head">
          <h2>Real creators, real content, ready to work</h2>
          <p>A sample of creator content produced through Mystic PR.</p>
        </div>
      </div>

      <div className="mpr-reels__carousel">
        <button
          type="button"
          className="mpr-reels__nav mpr-reels__nav--prev"
          aria-label="Previous reels"
          onClick={prev}
        >
          ‹
        </button>

        <div className="mpr-reels__viewport" ref={viewportRef}>
          <div
            className="mpr-reels__track"
            style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
          >
            {creatorReels.map((reel, index) => (
              <article key={reel.src} className="mpr-reel-card">
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={reel.src}
                  playsInline
                  muted
                  preload="metadata"
                  onLoadedMetadata={(event) => {
                    if (index === active) {
                      setDuration(event.currentTarget.duration || 0);
                    }
                  }}
                  onTimeUpdate={(event) => {
                    if (index === active) {
                      setCurrentTime(event.currentTarget.currentTime || 0);
                    }
                  }}
                  onPlay={() => {
                    if (index === active) setPlaying(true);
                  }}
                  onPause={() => {
                    if (index === active) setPlaying(false);
                  }}
                  onEnded={() => {
                    goTo(index + 1);
                  }}
                />
                <button
                  type="button"
                  className="mpr-reel-card__hit"
                  aria-label={
                    playing && active === index ? "Pause reel" : "Play reel"
                  }
                  onClick={() => togglePlay(index)}
                />
                <div className="mpr-reel-card__bar">
                  <button
                    type="button"
                    className="mpr-reel-card__play"
                    aria-label={playing && active === index ? "Pause" : "Play"}
                    onClick={() => togglePlay(index)}
                  >
                    {playing && active === index ? "❚❚" : "▶"}
                  </button>
                  <span>
                    {formatTime(active === index ? currentTime : 0)}
                    {active === index && duration
                      ? ` / ${formatTime(duration)}`
                      : ""}
                  </span>
                  <span className="mpr-reel-card__dots" aria-hidden="true">
                    ···
                  </span>
                  <span
                    className="mpr-reel-card__progress"
                    style={{
                      width:
                        active === index && duration
                          ? `${Math.min(100, (currentTime / duration) * 100)}%`
                          : "0%"
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="mpr-reels__nav mpr-reels__nav--next"
          aria-label="Next reels"
          onClick={next}
        >
          ›
        </button>
      </div>
    </section>
  );
}
