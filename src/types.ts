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
