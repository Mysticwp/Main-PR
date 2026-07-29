import { siteUrl } from "@/lib/site-data";

export type BlogPost = {
  title: string;
  slug: string;
  href: string;
  date: string;
  excerpt: string;
  image?: string;
};

type WpPost = {
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string }>;
  };
};

const fallbackPosts: BlogPost[] = [
  {
    title: "The Ethics of AI in PR: Navigating Transparency in Automated Press Releases",
    slug: "ethics-of-ai-in-pr-transparency-automated-press-releases",
    href: "https://mysticpr.com/ethics-of-ai-in-pr-transparency-automated-press-releases/",
    date: "2026-07-27",
    excerpt:
      "As generative tools move into full-release production, transparency has become the defining ethical line for PR teams in 2026."
  },
  {
    title: "Voice Search PR: Optimizing Your Brand’s Narrative for Smart Assistants",
    slug: "voice-search-pr-optimizing-brand-narrative-smart-assistants",
    href: "https://mysticpr.com/voice-search-pr-optimizing-brand-narrative-smart-assistants/",
    date: "2026-07-21",
    excerpt:
      "How brands in the UAE can structure narratives that surface clearly when audiences ask smart assistants for recommendations."
  },
  {
    title: "Press Release Distribution in the UAE: What Actually Works in 2026",
    slug: "press-release-distribution-uae-what-works-2026",
    href: "https://mysticpr.com/press-release-distribution-uae-what-works-2026/",
    date: "2026-06-30",
    excerpt:
      "A practical look at distribution channels, timing, and media targeting that still earn coverage across the UAE."
  }
];

function stripHtml(value: string) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "’")
    .replace(/&#8211;/g, "–")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value));
}

export async function getLatestPosts(limit = 3): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `${siteUrl}/wp-json/wp/v2/posts?per_page=${limit}&_embed=1`,
      {
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      return fallbackPosts.slice(0, limit);
    }

    const posts = (await response.json()) as WpPost[];

    return posts.map((post) => ({
      title: stripHtml(post.title.rendered),
      slug: post.slug,
      href: post.link,
      date: formatDate(post.date),
      excerpt: stripHtml(post.excerpt.rendered).slice(0, 160),
      image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
    }));
  } catch {
    return fallbackPosts.slice(0, limit).map((post) => ({
      ...post,
      date: formatDate(post.date)
    }));
  }
}
