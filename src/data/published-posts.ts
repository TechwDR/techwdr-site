import type { FeedPost } from '../types';

// Live LinkedIn and X posts with a public URL, taken from posted-log.md.
// Titles and excerpts are the logged wording, trimmed. Newest first;
// same-day items are ordered by the logged time, later posts first.
export const publishedPosts: FeedPost[] = [
  {
    title: 'Echoes / seat-at-the-table',
    date: '2026-11-12',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2120960576864088182',
  },
  {
    title: 'Echoes / seat-at-the-table',
    date: '2026-11-12',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7526724751981981697',
  },
  {
    title: 'Cursor marketplace PSA',
    date: '2026-11-11',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7526295936659099648',
  },
  {
    title: 'Cursor marketplace PSA',
    date: '2026-11-11',
    platform: 'X',
    href: 'https://x.com/2109984593315053569/status/2120527219160191244',
  },
  {
    title: 'ep2 native video',
    date: '2026-11-10',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7525932146671386624',
  },
  {
    title: '4CIO USA CIO Panel announcement',
    date: '2026-11-03',
    platform: 'X',
    href: 'https://x.com/2109984593315053569/status/2117630913219645586',
  },
  {
    title: '4CIO USA CIO Panel announcement',
    date: '2026-11-03',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7523392058229940225',
  },
  {
    title: 'SC1 supply-chain post',
    date: '2026-10-22',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2113364017636868294',
  },
  {
    title: 'ep1 native video',
    date: '2026-10-21',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2112995544943763812',
  },
  {
    title: 'connector injection',
    date: '2026-10-16',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7516899653494185984/',
  },
  {
    title: 'bot-crew “already done” post',
    date: '2026-10-15',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2110867886369648694',
  },
  {
    title: 'connector injection',
    date: '2026-10-15',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2110865997255122958',
  },
  {
    title: 'phishing speed-to-report',
    date: '2026-10-15',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2110721527406530759',
  },
  {
    title: 'intro post',
    date: '2026-10-14',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2110607190880932207',
  },
  {
    title: 'agent identity: owner, scope, off switch',
    date: '2026-10-14',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2110383401647620200',
  },
  {
    title: 'agent identities (carousel)',
    date: '2026-10-14',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7516144035762204674/',
  },
  {
    title: 'Arizona IT leaders event thanks',
    date: '2026-10-08',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7513971721931087872/',
  },
  {
    title: "I'll admit it, for a long stretch I used AI the lazy way.",
    date: '2026-09-29',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7510704442900602880/',
  },
];

function calendarDateInArizona(now: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Phoenix',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

function addCalendarDays(isoDate: string, days: number): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day));
  utc.setUTCDate(utc.getUTCDate() + days);
  return utc.toISOString().slice(0, 10);
}

// The 30-day window is computed at build time because the site is static.
export function postsInLastDays(days: number, now = new Date()): FeedPost[] {
  const today = calendarDateInArizona(now);
  const cutoff = addCalendarDays(today, -days);
  return publishedPosts.filter((post) => post.date >= cutoff);
}

export function latestPosts(count: number): FeedPost[] {
  return publishedPosts.slice(0, count);
}
