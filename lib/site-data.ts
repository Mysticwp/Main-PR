export const siteUrl = "https://mysticpr.com";

export const navigation = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceOffering = {
  number: string;
  title: string;
  description: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  href: string;
  image: string;
  summary: string;
  body: readonly [string, string];
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroCopy: string;
  approachTitle: string;
  approachIntro?: string;
  approachSteps: ServiceStep[];
  offeringsTitle?: string;
  offerings?: ServiceOffering[];
  highlightTitle?: string;
  highlightCopy?: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaCopy: string;
};

export const services: ServicePage[] = [
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    href: "/influencer-marketing",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Influencer-Marketing.jpg",
    summary:
      "Dubai's leading influencer marketing agency — cut through the noise with creators who make your brand the center of attention through strategy, creativity, and analytics.",
    body: [
      "As a leading influencer marketing agency, our approach blends strategy, creativity, and analytics to deliver campaigns that truly connect and perform.",
      "As a top influencer agency in Dubai, we know that influencer marketing is more than just reach. It is about relevance, credibility, and meaningful audience alignment."
    ],
    seoTitle: "Influencer Marketing Agency In Dubai",
    seoDescription:
      "Mystic PR delivers strategic influencer marketing campaigns in Dubai with creator partnerships, campaign planning, and measurable brand impact.",
    heroTitle: "Create Buzz with Influencers Who Know What Works",
    heroCopy:
      "Cut through the noise with influencers who don’t just talk—they make your brand the center of attention alongside the influencer marketing agency Dubai.",
    approachTitle: "Our Approach",
    approachIntro:
      "As a leading influencer marketing agency, our approach blends strategy, creativity, and analytics to deliver campaigns that truly connect and perform.",
    approachSteps: [
      {
        title: "Discovery",
        description:
          "We start by getting to know your brand inside out. Through thorough research, we uncover what makes you stand out and define your ideal audience—because understanding your business is key to creating the right buzz."
      },
      {
        title: "Strategic Planning",
        description:
          "Next, we craft a custom strategy and handpick influencers who not only vibe with your brand but also align with your target demographic."
      },
      {
        title: "Execution",
        description:
          "Our team manages the entire campaign process, ensuring influencers deliver creative, high-quality content that resonates with your audience and supports your objectives."
      },
      {
        title: "Insightful Reporting",
        description:
          "After the campaign concludes, we provide clear, detailed reports that highlight key metrics, from engagement to conversions, showcasing measurable results."
      }
    ],
    highlightTitle: "Why Influencer Marketing?",
    highlightCopy:
      "As a top influencer agency in Dubai, we know that influencer marketing is more than just reach—it’s about relevance. Tap into communities that care about your brand and watch your impact grow.",
    ctaEyebrow: "CONTACT US",
    ctaTitle: "Unlock the Power of Influence",
    ctaCopy:
      "We don’t just tell your story, we create the buzz that makes people listen."
  },
  {
    slug: "crisis-management",
    title: "Crisis Management",
    href: "/crisis-management",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Crisis-Management.jpg",
    summary:
      "Protect your reputation with expert crisis communication in Dubai — timely message control, stakeholder coordination, and rapid-response planning.",
    body: [
      "When reputations are at risk, speed and clarity matter. We help brands respond with authority, consistency, and carefully managed public communication.",
      "From message frameworks to media handling and recovery planning, our crisis communication support is designed to protect confidence and restore momentum."
    ],
    seoTitle: "Crisis Management & PR Agency in Dubai | Mystic PR",
    seoDescription:
      "Mystic PR provides proactive crisis management and communications for UAE brands — emergency response, media management, and reputation recovery.",
    heroTitle: "The Secret to Stability in a World of Surprises",
    heroCopy:
      "In the face of uncertainty, we provide the clarity and direction your brand needs to navigate through crises, ensuring your reputation remains intact and stronger than ever.",
    approachTitle: "Our Approach to Handling Crisis",
    approachSteps: [
      {
        title: "Strategic Planning",
        description:
          "We sit down with you to understand the full scope of the situation and build a plan that fits your needs. No fluff—just practical, thoughtful strategies that have been proven to work."
      },
      {
        title: "Clear Communication",
        description:
          "We’ll help you deliver the right message, the right way. Whether it’s a public statement or media interview prep, we’ll make sure you’re confident and ready for anything."
      },
      {
        title: "Media Management",
        description:
          "We know how to work with the media to shift the story in your favor. Using our connections, we’ll make sure your side is heard, helping you manage the narrative and protect your image."
      },
      {
        title: "Long-term Recovery",
        description:
          "When the dust settles, we help you rebuild what’s been damaged. From online presence to public trust, we work to repair and restore your reputation."
      }
    ],
    offeringsTitle: "OUR PR & CRISIS Communication Services",
    offerings: [
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
          "We ensure your story gets told the right way. From managing media during high-stakes moments to crafting compelling press releases, we position your organization at the forefront of the narrative."
      },
      {
        number: "03",
        title: "Executive Training and Leadership Visibility",
        description:
          "Our media training sharpens your executives’ ability to navigate tough conversations and shine in the spotlight during critical times."
      },
      {
        number: "04",
        title: "Strategic Communications Planning",
        description:
          "We create tailored strategies that align with your goals, making sure you’re always speaking clearly—both inside and outside your organization."
      },
      {
        number: "05",
        title: "Social Media Management",
        description:
          "Our social media experts craft targeted campaigns to boost engagement, build trust, and keep your brand’s online presence consistent and controlled."
      }
    ],
    ctaEyebrow: "CONTACT US",
    ctaTitle: "When It Matters Most, We're Ready",
    ctaCopy:
      "Don't wait for a crisis to find the right team. Reach out today."
  },
  {
    slug: "talent-management",
    title: "Talent Management",
    href: "/talent-management",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Talent-Management.jpg",
    summary:
      "UAE talent management built for fit, growth, and long-term brand value — connecting you with exceptional talent across the region.",
    body: [
      "At the core of every iconic brand is extraordinary talent. Our talent management services in Dubai connect you with industry-leading professionals who bring vision, creativity, and expertise.",
      "As a trusted talent agency in Dubai, we specialize in sourcing, developing, and managing artists, influencers, and professionals to help them reach their full potential."
    ],
    seoTitle: "Talent Management Agency in Dubai | Mystic PR",
    seoDescription:
      "Mystic PR is a talent management agency in Dubai sourcing and managing male, female, and child talent for brand campaigns across the UAE.",
    heroTitle: "Building Legendary Brands With Exceptional Talent",
    heroCopy:
      "At the core of every iconic brand is extraordinary talent. Our talent management services in Dubai connect you with industry-leading professionals who bring vision, creativity, and expertise, transforming brands into lasting impact.",
    approachTitle: "Connecting Leading Talents With Iconic Brands",
    approachIntro:
      "We source, develop, and manage talent that fits your brand’s voice, audience, and long-term ambitions.",
    approachSteps: [
      {
        title: "Talent Discovery",
        description:
          "We identify creators, professionals, and personalities who match your brand values and campaign goals."
      },
      {
        title: "Brand Alignment",
        description:
          "Every introduction is intentional—built around audience fit, creative strength, and commercial potential."
      },
      {
        title: "Campaign Coordination",
        description:
          "From brief to delivery, we manage collaboration so talent partnerships stay seamless and on-brand."
      },
      {
        title: "Growth Partnership",
        description:
          "We nurture long-term relationships that help both talent and brands build lasting visibility and value."
      }
    ],
    offeringsTitle: "Talent Categories We Work With",
    offerings: [
      {
        number: "01",
        title: "Child Talent",
        description:
          "Carefully selected young talent for family, lifestyle, and brand campaigns that need authenticity and warmth."
      },
      {
        number: "02",
        title: "Female Talent",
        description:
          "Creators and personalities who bring strong presence, storytelling, and audience trust to brand collaborations."
      },
      {
        number: "03",
        title: "Male Talent",
        description:
          "Professionals and influencers who elevate campaigns across lifestyle, business, sport, and entertainment."
      },
      {
        number: "04",
        title: "Specialized Creators",
        description:
          "Niche voices for beauty, food, tech, fashion, and more—matched precisely to your brief."
      }
    ],
    ctaEyebrow: "CONTACT US",
    ctaTitle: "Partner with us to discover exceptional talent today",
    ctaCopy:
      "With our network and experience, we deliver exceptional talent that perfectly aligns with your brand’s vision."
  },
  {
    slug: "press-release-media-outreach",
    title: "Press Release & Media Outreach",
    href: "/press-release-and-media-outreach",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Press-Release.jpg",
    summary:
      "Amplify your announcements with press release distribution in the UAE — strategic outreach and stories built for earned media visibility.",
    body: [
      "We craft media-ready narratives and distribute them through targeted outreach that helps your brand gain meaningful coverage.",
      "Every release is designed to strengthen credibility, support launches, and increase visibility across relevant publications and audiences."
    ],
    seoTitle: "Press Release Distribution And Media Outreach Dubai",
    seoDescription:
      "Press release writing, distribution, and media outreach services in Dubai to help brands gain coverage and visibility.",
    heroTitle: "Making Your Brand The News",
    heroCopy:
      "We craft media-ready stories and place them where they matter—building credibility, visibility, and momentum for your brand across the right publications.",
    approachTitle: "Media Moves That Matter",
    approachSteps: [
      {
        title: "Align on Your Goals",
        description:
          "We dive in to understand your brand’s specific needs, whether it’s boosting brand awareness, securing media coverage, or driving engagement."
      },
      {
        title: "Strategize for Maximum Impact",
        description:
          "We craft a precise PR plan that aligns with your brand’s objectives, targeting the right channels to amplify your story."
      },
      {
        title: "Deliver Powerful Messaging",
        description:
          "We focus on clear, impactful messaging that cuts through the noise, ensuring your brand’s voice resonates and drives conversations."
      }
    ],
    offeringsTitle: "What You Get",
    offerings: [
      {
        number: "01",
        title: "Press Release Writing",
        description:
          "Clear, newsworthy narratives shaped for journalists, editors, and digital platforms."
      },
      {
        number: "02",
        title: "Targeted Media Outreach",
        description:
          "Strategic distribution to the outlets and contacts most likely to cover your story."
      },
      {
        number: "03",
        title: "Launch Amplification",
        description:
          "Support for product launches, openings, and announcements that need earned visibility."
      },
      {
        number: "04",
        title: "Coverage Follow-through",
        description:
          "Tracking, reporting, and momentum-building so placements turn into lasting brand value."
      }
    ],
    highlightTitle: "Trusted platforms sharing our latest stories with the world.",
    highlightCopy:
      "From regional publications to digital platforms, we help brands earn coverage that strengthens reputation and reach.",
    ctaEyebrow: "CONTACT US",
    ctaTitle: "Start the conversation",
    ctaCopy: "Take the first step towards powerful media collaborations today."
  },
  {
    slug: "celebrity-management",
    title: "Celebrity Management",
    href: "/celebrity-management",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Celebrity-Management.jpg",
    summary:
      "Create memorable public moments with celebrity management in Dubai — partnerships, event appearances, and strategic brand alignment.",
    body: [
      "Celebrity collaborations can elevate awareness quickly when they are structured with the right strategic fit and execution plan.",
      "We support sourcing, coordination, and campaign alignment so each partnership strengthens visibility and brand perception."
    ],
    seoTitle: "Celebrity Management Services In Dubai",
    seoDescription:
      "Mystic PR provides celebrity management services in Dubai for campaigns, appearances, collaborations, and high-visibility brand moments.",
    heroTitle: "Turn Star Power Into Brand Momentum",
    heroCopy:
      "We connect brands with the right celebrity partners—crafting appearances, collaborations, and campaign moments that feel authentic, elevated, and impossible to ignore.",
    approachTitle: "How We Build Celebrity Partnerships",
    approachIntro:
      "Every collaboration is designed for cultural fit, audience impact, and polished execution from first brief to final placement.",
    approachSteps: [
      {
        title: "Casting & Fit",
        description:
          "We identify celebrities whose image, audience, and public presence align with your brand story and campaign ambition."
      },
      {
        title: "Deal & Creative Framing",
        description:
          "We shape the partnership concept, messaging, and deliverables so the collaboration feels premium and purposeful."
      },
      {
        title: "On-ground Coordination",
        description:
          "From schedules to media moments, we manage logistics so appearances and activations run with confidence."
      },
      {
        title: "Amplification",
        description:
          "We extend the moment across PR, social, and media channels so the buzz lasts beyond the event itself."
      }
    ],
    offeringsTitle: "Celebrity Management Services",
    offerings: [
      {
        number: "01",
        title: "Brand Endorsements",
        description:
          "Strategic celebrity associations that elevate perception and create high-impact brand association."
      },
      {
        number: "02",
        title: "Event Appearances",
        description:
          "Red-carpet moments, launches, and private events staged for maximum visibility and guest experience."
      },
      {
        number: "03",
        title: "Campaign Collaborations",
        description:
          "Integrated celebrity campaigns across content, PR, and influencer ecosystems."
      },
      {
        number: "04",
        title: "Reputation Alignment",
        description:
          "Careful vetting and briefing so every partnership protects—and strengthens—your brand reputation."
      }
    ],
    highlightTitle: "High-visibility moments, carefully crafted",
    highlightCopy:
      "From regional launches to international talent partnerships, we turn celebrity presence into lasting brand conversation.",
    ctaEyebrow: "CONTACT US",
    ctaTitle: "Let’s create a moment people remember",
    ctaCopy:
      "Tell us your campaign goals—we’ll match the right star power and make the story travel."
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceByHref(href: string) {
  return services.find((service) => service.href === href);
}

export const team = [
  {
    name: "Abdullah Gadit",
    role: "CEO & Founder",
    bio: "Leads Mystic PR’s vision across strategy, partnerships, and high-stakes brand storytelling for regional and international clients.",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/abdullah-1-scaled.jpg"
  },
  {
    name: "Fahad Tariq",
    role: "Strategic Operations Head",
    bio: "Owns campaign operations, delivery quality, and cross-team coordination so every brief moves from insight to measurable execution.",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Fahad-2048x2048-1.jpg"
  },
  {
    name: "Saad Bin Farrukh",
    role: "Account Director",
    bio: "Builds long-term client relationships and steers account strategy across media outreach, talent, and reputation programs.",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Saad-2048x2048-1.jpg"
  },
  {
    name: "Uswah Khan",
    role: "PR Manager",
    bio: "Crafts narratives, manages media relationships, and turns announcements into coverage that strengthens brand credibility.",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Uswa-1.jpg"
  }
];

export const aboutValues = [
  {
    title: "Visionary",
    description:
      "We see beyond today’s trends, crafting strategies that set the pace for tomorrow."
  },
  {
    title: "Engagement",
    description:
      "Building authentic connections between brands and audiences that resonate."
  },
  {
    title: "Innovation",
    description:
      "We don’t just follow the playbook—we write it, with creative solutions that break through the noise."
  },
  {
    title: "Clarity",
    description:
      "We shape narratives that cut through complexity and get to the heart of your message."
  },
  {
    title: "Impact",
    description:
      "Every word counts. We craft campaigns that don’t just make noise—they make a difference."
  },
  {
    title: "Collaboration",
    description:
      "Your success is our success. We believe in working together, building stronger stories as a team."
  }
];

export const aboutTeam = [
  {
    name: "Abdullah Gadit",
    role: "CEO & Founder",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/abdullah-1-scaled.jpg"
  },
  {
    name: "Uswah Khan",
    role: "PR Manager",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Uswa-1.jpg"
  },
  {
    name: "Afzal Amin",
    role: "Production Head",
    image: "https://mysticpr.com/wp-content/uploads/2026/07/Afzal-Amin.webp"
  },
  {
    name: "Anshruta Parihar",
    role: "Account Director",
    image: "https://mysticpr.com/wp-content/uploads/2026/07/Anshruta-Parihar.webp"
  },
  {
    name: "Fahad Tariq",
    role: "Strategic Operations Head",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Fahad-2048x2048-1.jpg"
  },
  {
    name: "Rabecca",
    role: "Executive Secretary to the CEO",
    image: "https://mysticpr.com/wp-content/uploads/2026/07/Rabecca.webp"
  },
  {
    name: "Saad Bin Farrukh",
    role: "Account Director",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Saad-2048x2048-1.jpg"
  },
  {
    name: "Fabiha Kazim",
    role: "Social Media Executive",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Fabiha-2048x2048-1.jpg"
  },
  {
    name: "Wajiha Khan",
    role: "Marketing Manager",
    image: "https://mysticpr.com/wp-content/uploads/2026/07/Wajiha-Khan.webp"
  },
  {
    name: "Mariam Nazeer",
    role: "Content Manager",
    image: "https://mysticpr.com/wp-content/uploads/2026/07/Marium-Nazeer.webp"
  },
  {
    name: "Daniyal Rais",
    role: "Video Editor and Animator",
    image: "https://mysticpr.com/wp-content/uploads/2026/07/Daniyal-Rais.webp"
  }
];

export const successStories = [
  {
    title: "ZIMAYA Properties",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-01.jpg",
    metric: "4.8M+",
    metricLabel: "Campaign reach",
    outcome: "Elevated a major property launch with influencer-led storytelling and national media pickup."
  },
  {
    title: "Hania Amir x Mystic",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-03.jpg",
    metric: "2.1M+",
    metricLabel: "Social impressions",
    outcome: "Delivered a high-visibility celebrity collaboration that expanded brand awareness across GCC audiences."
  },
  {
    title: "HMB Homes",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-07.jpg",
    metric: "+160%",
    metricLabel: "Earned mentions",
    outcome: "Positioned the brand through talent partnerships and press outreach that drove sustained conversation."
  },
  {
    title: "Iman Developers",
    image: "https://mysticpr.com/wp-content/uploads/2024/11/Mystic-post-1920x1080-15.jpg",
    metric: "35+",
    metricLabel: "Media placements",
    outcome: "Secured strategic coverage and influencer amplification around key development milestones."
  }
];

export const featuredIn = [
  {
    name: "Gulf News",
    note: "Regional news",
    headline: "How Dubai brands are turning earned media into lasting trust.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Arabian Business",
    note: "Business media",
    headline: "Strategic PR moves shaping the region’s most talked-about launches.",
    image:
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Khaleej Times",
    note: "National press",
    headline: "Influencer-led storytelling that cuts through the noise in the UAE.",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Forbes",
    note: "Business features",
    headline: "Reputation, reach, and the new rules of brand visibility.",
    image:
      "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "The National",
    note: "UAE media",
    headline: "From crisis clarity to campaign buzz: PR that earns attention.",
    image:
      "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Campaign Middle East",
    note: "Industry press",
    headline: "Creative partnerships driving culture-defining brand moments.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
  }
];

export const faqs = [
  {
    question: "What does a PR agency in Dubai typically handle?",
    answer:
      "A Dubai PR agency manages reputation, media relations, press releases, influencer collaborations, crisis communication, and long-term brand storytelling across regional and international channels."
  },
  {
    question: "How is Mystic PR different from a traditional advertising agency?",
    answer:
      "Advertising buys attention through paid media; PR earns it. Mystic PR builds credibility through journalist relationships, influencer partnerships, and strategic storytelling — coverage that carries third-party trust an ad can't replicate. As part of the Mystic Advertising group, we can also plug PR into a wider paid and creative campaign when needed."
  },
  {
    question: "Which brands benefit most from influencer marketing in the UAE?",
    answer:
      "Real estate developers, hospitality and F&B brands, beauty and retail businesses, and consumer launches see the strongest results from UAE influencer marketing, where audiences respond heavily to creator-led recommendations across Instagram and TikTok. We match brands with creators based on audience fit, not just follower count."
  },
  {
    question: "Can you support crisis communication at short notice?",
    answer:
      "Yes. Our crisis management team can be activated within hours to build a response strategy, prepare holding statements, coordinate with stakeholders, and manage media inquiries during time-sensitive situations."
  },
  {
    question: "Do you write and distribute press releases in the UAE?",
    answer:
      "Yes. We write, localize, and distribute press releases to UAE and GCC media outlets, targeting outlets and journalists relevant to your industry rather than mass-blasting low-quality distribution lists."
  },
  {
    question: "How do we get started with Mystic PR?",
    answer:
      "Reach out through our contact page or call +971 58 175 9326. We'll schedule a discovery call to understand your goals, then propose a tailored PR strategy and timeline."
  }
];

export const processSteps = [
  {
    number: "01",
    title: "PR Strategy & Campaign Planning",
    description:
      "We begin by understanding your business, target audience, and marketing goals. Our team develops a customized PR strategy with key messaging, media opportunities, and campaign objectives to maximize brand awareness across Dubai, the UAE, and international markets."
  },
  {
    number: "02",
    title: "Media Outreach & Strategic Coordination",
    description:
      "Using our extensive network of journalists, editors, publishers, and media partners, we pitch your story to the most relevant publications. We secure high-value media coverage that builds credibility, trust, and online visibility."
  },
  {
    number: "03",
    title: "Media Channel & Influencer Selection",
    description:
      "Every campaign is matched with the right mix of news outlets, online publications, industry blogs, digital platforms, and trusted influencers (KOLs). This targeted approach helps your brand reach the right audience and strengthen its authority."
  },
  {
    number: "04",
    title: "Content Creation & Press Distribution",
    description:
      "Our PR specialists create SEO-friendly press releases, executive interviews, thought leadership articles, media kits, and brand stories designed for both readers and search engines. Every piece reflects your brand voice while increasing discoverability online."
  },
  {
    number: "05",
    title: "Performance Reporting & Reputation Growth",
    description:
      "We measure campaign success through media placements, brand mentions, website traffic, backlinks, audience engagement, and share of voice. Detailed reports provide actionable insights to continuously improve your PR performance and ROI."
  }
];

export const stories = ["ZIMAYA Properties", "HMB Homes", "Iman Developers", "Podcasters"];
