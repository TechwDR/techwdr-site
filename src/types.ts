export type IconName = 'linkedin' | 'x' | 'youtube';

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  icon: IconName;
  cta: string;
}

export interface SiteConfig {
  name: string;
  brand: string;
  jobTitle: string;
  description: string;
  lang: string;
  locale: string;
  copyright: string;
  social: SocialLink[];
  seo: {
    titleSeparator: string;
    defaultTitle: string;
    ogImage: string;
    ogImageAlt: string;
    twitterHandle?: string;
    themeColor: string;
  };
}

export interface Short {
  /** YouTube video id, e.g. "ay4dvk5JJHc" from youtube.com/shorts/ay4dvk5JJHc */
  id: string;
  title: string;
  /** Upload date from YouTube (ISO 8601). */
  date: string;
  description: string;
}

export interface FeedPost {
  title: string;
  /** Calendar date of the live post (YYYY-MM-DD, Arizona). */
  date: string;
  platform: 'LinkedIn' | 'X';
  href: string;
  /** Optional excerpt from the posted log. Omitted when the log has only a title. */
  blurb?: string;
}
