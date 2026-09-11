export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  image: string;
  metric: string;
  metricLabel: string;
  outcome: string;
  summary: string;
  challenge: string;
  approach: string[];
  results: string[];
  services: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "zimaya-properties",
    title: "ZIMAYA Properties",
    client: "ZIMAYA Properties",
    industry: "Real Estate",
    image:
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-01.jpg",
    metric: "4.8M+",
    metricLabel: "Campaign reach",
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
    ]
  },
  {
    slug: "hania-amir-x-mystic",
    title: "Hania Amir x Mystic",
    client: "Hania Amir Collaboration",
    industry: "Celebrity & Lifestyle",
    image:
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-03.jpg",
    metric: "2.1M+",
    metricLabel: "Social impressions",
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
    services: ["Celebrity Management", "Influencer Marketing", "Media Outreach"]
  },
  {
    slug: "hmb-homes",
    title: "HMB Homes",
    client: "HMB Homes",
    industry: "Real Estate",
    image:
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-07.jpg",
    metric: "+160%",
    metricLabel: "Earned mentions",
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
    services: ["Talent Management", "Media Outreach", "Influencer Marketing"]
  },
  {
    slug: "iman-developers",
    title: "Iman Developers",
    client: "Iman Developers",
    industry: "Real Estate Development",
    image:
      "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-15.jpg",
    metric: "35+",
    metricLabel: "Media placements",
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
    services: ["Press Release & Media Outreach", "Influencer Marketing"]
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
