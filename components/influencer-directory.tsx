"use client";

import { useMemo, useState } from "react";
import { imInfluencerTabs } from "@/lib/influencer-page-data";

export function InfluencerDirectory() {
  const [activeId, setActiveId] = useState(imInfluencerTabs[0].id);
  const activeTab =
    imInfluencerTabs.find((tab) => tab.id === activeId) ?? imInfluencerTabs[0];

  const track = useMemo(() => {
    const list = activeTab.influencers;
    return [...list, ...list];
  }, [activeTab]);

  return (
    <section className="mpr-im-influencers section bg-white" id="influencers">
      <div className="container">
        <h2 className="mpr-im-influencers__title">Influencers</h2>
        <div className="mpr-im-tabs" role="tablist" aria-label="Influencer categories">
          {imInfluencerTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={tab.id === activeId}
              className={`mpr-im-tab${tab.id === activeId ? " is-active" : ""}`}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mpr-im-carousel" role="tabpanel">
        <div key={activeId} className="mpr-im-carousel__track">
          {track.map((person, index) => (
            <article
              key={`${activeId}-${person.image}-${index}`}
              className="mpr-im-card"
            >
              <div className="mpr-im-card__media">
                <img src={person.image} alt="" loading="lazy" />
              </div>
              <p>{person.followers}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
