export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  location: string;
  image: string;
  coverSecondary: string;
  gallery: string[];
  metric: string;
  metricLabel: string;
  metrics: CaseStudyMetric[];
  outcome: string;
  summary: string;
  challenge: string;
  approach: string[];
  results: string[];
  services: string[];
  quote: string;
  quoteBy: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "zimaya-properties",
    title: "ZIMAYA Properties",
    client: "ZIMAYA Properties",
    industry: "Real Estate",
    year: "2024",
    location: "Dubai, UAE",
    image:
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-01.jpg",
    coverSecondary:
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-06.jpg",
    gallery: [
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-01.jpg",
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-06.jpg",
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-09.jpg",
      "https://mysticpr.com/wp-content/uploads/2025/10/5.jpg",
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-02.jpg"
    ],
    metric: "4.8M+",
    metricLabel: "Campaign reach",
    metrics: [
      { value: "4.8M+", label: "Campaign reach" },
      { value: "20+", label: "Media placements" },
      { value: "72h", label: "Peak share of voice" }
    ],
    outcome:
      "Elevated a major property launch with influencer-led storytelling and national media pickup.",
    summary:
      "A full-funnel PR and influencer campaign that turned a Dubai property launch into a region-wide conversation — pairing earned media with creator-led storytelling.",
    challenge:
      "ZIMAYA needed standout visibility for a competitive Dubai launch window, where dozens of projects compete for the same press attention and buyer awareness.",
    approach: [
      "Built a launch narrative around lifestyle, location, and investment confidence — not just unit specs.",
      "Matched nano-to-macro creators with audiences already searching Dubai property content.",
      "Pitched exclusive angles to national and business press ahead of the public reveal.",
      "Synced media day coverage with influencer content drops for peak share-of-voice."
    ],
    results: [
      "4.8M+ combined campaign reach across press and social",
      "National and regional media placements around launch week",
      "Sustained conversation beyond the first 72 hours of coverage"
    ],
    services: [
      "Influencer Marketing",
      "Press Release & Media Outreach",
      "Talent Management"
    ],
    quote:
      "The launch didn’t feel like another property announcement — it felt like a cultural moment people wanted to talk about.",
    quoteBy: "Campaign highlight · ZIMAYA"
  },
  {
    slug: "hania-amir-x-mystic",
    title: "Hania Amir x Mystic",
    client: "Hania Amir Collaboration",
    industry: "Celebrity & Lifestyle",
    year: "2024",
    location: "GCC",
    image:
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-03.jpg",
    coverSecondary:
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-10.jpg",
    gallery: [
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-03.jpg",
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-10.jpg",
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-05.jpg",
      "https://mysticpr.com/wp-content/uploads/2025/10/3.jpg",
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-04.jpg"
    ],
    metric: "2.1M+",
    metricLabel: "Social impressions",
    metrics: [
      { value: "2.1M+", label: "Social impressions" },
      { value: "3", label: "Core markets activated" },
      { value: "1", label: "Signature campaign drop" }
    ],
    outcome:
      "Delivered a high-visibility celebrity collaboration that expanded brand awareness across GCC audiences.",
    summary:
      "A high-impact celebrity partnership engineered for cultural relevance across the GCC — measured in impressions, conversation, and brand lift.",
    challenge:
      "The brief required a celebrity collaboration that felt authentic to regional audiences while still delivering measurable brand visibility in a short campaign window.",
    approach: [
      "Defined brand-fit criteria and shortlisted talent against audience overlap and tone.",
      "Crafted content guidelines that protected celebrity voice while hitting campaign messages.",
      "Coordinated release timing across Instagram, press notes, and partner channels.",
      "Monitored sentiment and engagement to amplify the strongest content moments."
    ],
    results: [
      "2.1M+ social impressions during the campaign window",
      "Strong engagement from GCC lifestyle audiences",
      "Elevated brand association through celebrity storytelling"
    ],
    services: ["Celebrity Management", "Influencer Marketing", "Media Outreach"],
    quote:
      "When the talent, timing, and message lock in together, the campaign stops looking like marketing and starts looking like culture.",
    quoteBy: "Campaign highlight · Celebrity partnership"
  },
  {
    slug: "hmb-homes",
    title: "HMB Homes",
    client: "HMB Homes",
    industry: "Real Estate",
    year: "2024",
    location: "Dubai, UAE",
    image:
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-07.jpg",
    coverSecondary:
      "https://mysticpr.com/wp-content/uploads/2025/01/hmb-final.png",
    gallery: [
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-07.jpg",
      "https://mysticpr.com/wp-content/uploads/2025/01/hmb-final.png",
      "https://mysticpr.com/wp-content/uploads/2025/01/HMB.jpg",
      "https://mysticpr.com/wp-content/uploads/2025/10/4.jpg",
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-04.jpg"
    ],
    metric: "+160%",
    metricLabel: "Earned mentions",
    metrics: [
      { value: "+160%", label: "Earned mentions" },
      { value: "Multi-wave", label: "Outreach cadence" },
      { value: "Talent-led", label: "Brand positioning" }
    ],
    outcome:
      "Positioned the brand through talent partnerships and press outreach that drove sustained conversation.",
    summary:
      "Talent-led positioning and press outreach that increased earned mentions and put HMB Homes into continuous market conversation.",
    challenge:
      "HMB Homes needed stronger brand recall in a crowded property market without relying solely on paid media bursts.",
    approach: [
      "Mapped priority journalists and lifestyle creators covering Dubai living.",
      "Developed talent partnerships that showcased homes as lived experiences.",
      "Ran sequenced outreach waves instead of a single press blast.",
      "Reported on mention quality, not just volume, to refine the next wave."
    ],
    results: [
      "+160% lift in earned mentions versus the prior period",
      "Improved brand presence across regional lifestyle coverage",
      "Reusable content and relationship assets for ongoing PR"
    ],
    services: ["Talent Management", "Media Outreach", "Influencer Marketing"],
    quote:
      "Consistency beat one-off noise — every wave made the brand feel more present in the market.",
    quoteBy: "Campaign highlight · HMB Homes"
  },
  {
    slug: "iman-developers",
    title: "Iman Developers",
    client: "Iman Developers",
    industry: "Real Estate Development",
    year: "2024",
    location: "UAE",
    image:
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-15.jpg",
    coverSecondary:
      "https://mysticpr.com/wp-content/uploads/2025/01/Imaan.jpg",
    gallery: [
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-15.jpg",
      "https://mysticpr.com/wp-content/uploads/2025/01/Imaan.jpg",
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-02.jpg",
      "https://mysticpr.com/wp-content/uploads/2025/10/1.jpg",
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-09.jpg"
    ],
    metric: "35+",
    metricLabel: "Media placements",
    metrics: [
      { value: "35+", label: "Media placements" },
      { value: "Milestone", label: "Announcement cadence" },
      { value: "Dual-track", label: "Press + influencers" }
    ],
    outcome:
      "Secured strategic coverage and influencer amplification around key development milestones.",
    summary:
      "Milestone-driven PR that secured strategic coverage and influencer amplification around key development moments for Iman Developers.",
    challenge:
      "Development milestones risk getting lost as routine announcements unless framed with a clear news angle and distribution plan.",
    approach: [
      "Turned each milestone into a distinct media story with a clear hook.",
      "Targeted business, construction, and lifestyle outlets in parallel.",
      "Amplified placements through creator content timed to announcement days.",
      "Built a coverage calendar so momentum carried across the launch cycle."
    ],
    results: [
      "35+ media placements around key milestones",
      "Stronger share of voice versus competing announcements",
      "Consistent visibility across press and social channels"
    ],
    services: ["Press Release & Media Outreach", "Influencer Marketing"],
    quote:
      "Every milestone got a story worth covering — not just another press release to ignore.",
    quoteBy: "Campaign highlight · Iman Developers"
  }
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export function getCaseStudySlugs() {
  return caseStudies.map((item) => item.slug);
}

/** Slim shape used by the homepage StoriesSlider */
export const successStories = caseStudies.map((item) => ({
  title: item.title,
  image: item.image,
  metric: item.metric,
  metricLabel: item.metricLabel,
  outcome: item.outcome,
  href: `/case-studies/${item.slug}`
}));

export const menaMediaLogos = [
  {
    name: "Gulfbuzz",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/1.png"
  },
  {
    name: "Gulf News",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/2.png"
  },
  {
    name: "Al Bayan",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/3.png"
  },
  {
    name: "Al Watan",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/4.png"
  },
  {
    name: "The UAE News",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/5.png"
  },
  {
    name: "Khaleej Times",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/6.png"
  },
  {
    name: "Travels Dubai",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/7.png"
  },
  {
    name: "Trending Business",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/8.png"
  },
  {
    name: "Construction Week",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/9.png"
  },
  {
    name: "Time Out",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/10.png"
  },
  {
    name: "Arabian Business",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/11.png"
  },
  {
    name: "Gulf Business",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/12.png"
  }
] as const;
