import type { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'David Rice',
  brand: 'TechwDR',
  jobTitle: 'Technology & People Leader',
  description:
    'David Rice writes for CIOs and tech leaders about AI governance, security and leading people through change.',
  lang: 'en',
  locale: 'en_US',
  copyright: `© ${new Date().getFullYear()} David Rice (TechwDR). Site theme based on ST AI Agency, MIT © 2026 StrivioThemes.`,
  social: [
    { label: 'LinkedIn', handle: 'David Rice', href: 'https://www.linkedin.com/in/dave-rice/', icon: 'linkedin', cta: 'Connect on LinkedIn' },
    { label: 'X', handle: '@Techwdr', href: 'https://x.com/Techwdr', icon: 'x', cta: 'Follow on X' },
    { label: 'YouTube', handle: '@TechwDR', href: 'https://www.youtube.com/@TechwDR', icon: 'youtube', cta: 'Watch on YouTube' },
  ],
  seo: {
    titleSeparator: ' | ',
    defaultTitle: 'David Rice | Technology & People Leader',
    ogImage: '/images/og-image.jpg',
    ogImageAlt: 'David Rice, Technology & People Leader, techwdr.com',
    twitterHandle: '@Techwdr',
    themeColor: '#0F172A',
  },
};
