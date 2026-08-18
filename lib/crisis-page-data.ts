import { prClientLogos } from "@/lib/press-page-data";

export const cmHeroImage =
  "https://mysticpr.com/wp-content/uploads/2024/11/Crisis-Management.jpg";

export const cmClientLogos = prClientLogos;

export const cmServiceSteps = [
  {
    number: "01",
    title: "Emergency Crisis Response",
    description:
      "When the unexpected happens, we act fast. Our expert team provides immediate crisis management to minimize damage, protect your reputation, and maintain stakeholder trust."
  },
  {
    number: "02",
    title: "Media Relations",
    description:
      "We ensure your story gets told the right way. From managing media during high-stakes moments to crafting compelling press releases, we position your organization at the forefront of the narrative, enhancing visibility and control over your public image."
  },
  {
    number: "03",
    title: "Executive Training and Leadership Visibility",
    description:
      "Leaders don't just lead - they communicate. Our media training sharpens your executives' ability to navigate tough conversations and shine in the spotlight, ensuring they become the trusted faces of your organization during critical times."
  },
  {
    number: "04",
    title: "Strategic Communications Planning",
    description:
      "Communication drives success. We create tailored, all-encompassing strategies that align with your goals, making sure you're always speaking clearly, both inside and outside your organization. Whether in a crisis or during daily operations, we make sure your message resonates."
  },
  {
    number: "05",
    title: "Social Media Management",
    description:
      "Stay in control of the conversation. Our social media experts craft targeted campaigns to boost engagement, build trust, and manage your brand's online presence. With us, your social channels become powerful tools to connect with your audience and maintain a consistent message."
  }
];

export const cmApproach = [
  {
    title: "Strategic Planning",
    description:
      "We sit down with you to understand the full scope of the situation and build a plan that fits your needs. No fluff - just practical, thoughtful strategies that have been proven to work.",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Strategic-Planning-2.jpg"
  },
  {
    title: "Clear Communication",
    description:
      "We'll help you deliver the right message, the right way. Whether it's a public statement or media interview prep, we'll make sure you're confident and ready for anything.",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Clear-Communication.jpg"
  },
  {
    title: "Media Management",
    description:
      "We know how to work with the media to shift the story in your favor. Using our connections, we'll make sure your side is heard, helping you manage the narrative and protect your image.",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Media.jpg"
  },
  {
    title: "Long-term Recovery",
    description:
      "When the dust settles, we help you rebuild what's been damaged. From online presence to public trust, we work to repair and restore your reputation, making sure the crisis is truly behind you.",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Recovery.jpg"
  }
] as const;

export const cmChannels = [
  "Facebook",
  "X",
  "YouTube",
  "TikTok",
  "Snapchat",
  "Instagram",
  "LinkedIn"
] as const;

export const cmCaseStudy = {
  kicker: "CASE STUDY",
  title: "[Client/Brand Name] — [Crisis Type] Response",
  image: "https://mysticpr.com/wp-content/uploads/2024/11/Recovery.jpg",
  blocks: [
    {
      label: "Situation",
      copy: "[Brief description of the crisis]"
    },
    {
      label: "Response",
      copy: "[What Mystic PR did — timeline, channels, messaging approach]"
    },
    {
      label: "Result",
      copy: "[Outcome — reputation recovery, sentiment shift, media tone change]"
    }
  ]
} as const;

export const cmTestimonials = [
  {
    quote: "[Client quote about how the crisis was handled]",
    name: "[Name]",
    title: "[Title]",
    company: "[Company]"
  }
] as const;

export const cmFaqs = [
  {
    question: "What is crisis management in PR?",
    answer:
      "Crisis management is the strategy and communications work that protects a brand's reputation during an unexpected event — negative press, a public complaint, or an internal issue that's gone public."
  },
  {
    question: "How fast can you respond to a crisis?",
    answer:
      "Our Emergency Crisis Response team is built to act immediately — messaging, media coordination, and stakeholder communication begin as soon as we're engaged."
  },
  {
    question: "Do you only step in during a crisis, or can you help us prepare in advance?",
    answer:
      "Both — we offer proactive strategic communications planning and executive media training so your team is ready before a crisis happens, not just reacting after."
  },
  {
    question: "What industries do you handle crisis management for?",
    answer:
      "We work across real estate, hospitality, retail, and corporate brands in the UAE, adapting our approach to each industry's specific media and stakeholder landscape."
  },
  {
    question: "Will you handle our social media during a crisis?",
    answer:
      "Yes — our Social Media Management service covers monitoring and response across Facebook, Instagram, TikTok, X, LinkedIn, Snapchat, and YouTube during active crisis situations."
  }
] as const;

export const cmRelatedServices = [
  {
    title: "Media Outreach",
    href: "/press-release-and-media-outreach",
    description:
      "Press release writing and journalist outreach that gets you published."
  },
  {
    title: "Influencer Marketing",
    href: "/influencer-marketing",
    description:
      "Connect your brand with nano to celebrity creators across the UAE."
  },
  {
    title: "Talent Management",
    href: "/talent-management",
    description:
      "End-to-end creator and celebrity partnerships built for long-term brand fit."
  }
] as const;
