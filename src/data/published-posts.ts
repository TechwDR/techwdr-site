import type { FeedPost, GroupedPost } from '../types';

// Live LinkedIn and X posts with a public URL, taken from posted-log.md.
// Newest first; same-day items are ordered by the logged time, later posts first.
// `group` marks an X and LinkedIn item that are the same post.
// Eight older titles are Proof-passed from site-posts-copy-2026-10-21.md (#14).
// Newer titles are candidate public wording from each post's live text, pending Proof.
export const publishedPosts: FeedPost[] = [
  {
    title: "You don't get a seat at the table. You earn it.",
    date: '2026-11-12',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2120960576864088182',
    group: 'echoes-2026-11-12',
  },
  {
    title: "You don't get a seat at the table. You earn it.",
    date: '2026-11-12',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7526724751981981697',
    group: 'echoes-2026-11-12',
  },
  {
    title: "October 29. About 11 hours. A tampered copy of Anthropic's Claude Code extension sat in Cursor's marketplace.",
    date: '2026-11-11',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7526295936659099648',
    group: 'cursor-psa-2026-11-11',
  },
  {
    title: "A tampered Claude Code extension sat in Cursor's marketplace for 11 hours on October 29 and tried to plant an SSH backdoor.",
    date: '2026-11-11',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2120527219160191244',
    group: 'cursor-psa-2026-11-11',
  },
  {
    title: '74% of tech leaders in a new Workato survey expect to be held accountable when an AI agent breaks policy or exposes data.',
    date: '2026-11-10',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:ugcPost:7525932146671386624',
  },
  {
    title: "Nov 5 I'm on the CIO Panel at #4CIOUSA",
    date: '2026-11-03',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2117630913219645586',
    group: '4cio-panel-2026-11-03',
  },
  {
    title: "On Thursday, Nov 5, I'll be on the CIO Panel at 4CIO USA 2026 in Punta Cana.",
    date: '2026-11-03',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:share:7523392058229940225',
    group: '4cio-panel-2026-11-03',
  },
  {
    title: "October's supply chain hits",
    date: '2026-10-22',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2113364017636868294',
  },
  {
    title: 'Does every agent in your test environment have a named owner?',
    date: '2026-10-21',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2112995544943763812',
  },
  {
    title: 'Every connector is a new door',
    date: '2026-10-16',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7516899653494185984/',
    blurb: "The riskiest part of an AI assistant is rarely the model. It's the inbox and drive you connect it to.",
  },
  {
    title: 'My bot crew needs a break',
    date: '2026-10-15',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2110867886369648694',
    blurb: "A lighter moment: my bots started handing me work I'd already finished.",
  },
  {
    title: 'Treat connected content as untrusted',
    date: '2026-10-15',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2110865997255122958',
    blurb: 'Reading is access to approve. Sending and deleting need a person. Which connectors can your AI write through?',
  },
  {
    title: 'Speed to report beats click rate',
    date: '2026-10-15',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2110721527406530759',
    blurb: "AI made phishing emails look perfect. In diligence, I'd ask how fast someone reported it, not how many clicked.",
  },
  {
    title: 'Starting @TechwDR on X',
    date: '2026-10-14',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2110607190880932207',
    blurb: 'Day one on X: free takes on AI, AI dev at scale, entrepreneurship, private equity, and tech and people leadership.',
  },
  {
    title: 'Every AI agent that can act is an identity',
    date: '2026-10-14',
    platform: 'X',
    href: 'https://x.com/TechwDR/status/2110383401647620200',
    blurb: 'Each one needs a named owner, a written scope and a tested off switch. Ownership is the cheapest. Start there.',
  },
  {
    title: 'Agents are identities (carousel)',
    date: '2026-10-14',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7516144035762204674/',
    blurb: 'Give every acting agent what a person with that access gets: an owner, a scope and an off switch someone tested.',
  },
  {
    title: 'Brief first, then prompt',
    date: '2026-09-29',
    platform: 'LinkedIn',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7510704442900602880/',
    blurb: 'I used AI the lazy way for a long time. A three-line brief (goal, constraints, done-when) fixed most of it.',
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

function groupKey(post: FeedPost): string {
  return post.group ?? `${post.date}::${post.title}`;
}

export function groupPosts(posts: FeedPost[]): GroupedPost[] {
  const groups = new Map<string, GroupedPost>();
  const order: string[] = [];
  for (const post of posts) {
    const key = groupKey(post);
    let group = groups.get(key);
    if (!group) {
      group = { title: post.title, date: post.date, blurb: post.blurb, links: [] };
      groups.set(key, group);
      order.push(key);
    }
    // Prefer the LinkedIn title and blurb when a cross-post has both.
    if (post.platform === 'LinkedIn') {
      group.title = post.title;
      if (post.blurb) group.blurb = post.blurb;
    }
    if (!group.links.some((link) => link.platform === post.platform)) {
      group.links.push({ platform: post.platform, href: post.href });
    }
  }
  for (const group of groups.values()) {
    group.links.sort((a, b) => Number(b.platform === 'LinkedIn') - Number(a.platform === 'LinkedIn'));
  }
  return order.map((key) => groups.get(key)!);
}

/** LinkedIn when present, otherwise X. */
export function primaryHref(post: GroupedPost): string {
  return post.links.find((link) => link.platform === 'LinkedIn')?.href ?? post.links[0]?.href ?? '';
}

export function primaryPlatform(post: GroupedPost): 'LinkedIn' | 'X' {
  return post.links.find((link) => link.platform === 'LinkedIn')?.platform ?? post.links[0]?.platform ?? 'X';
}

export function platformsLabel(post: GroupedPost): string {
  return post.links.map((link) => link.platform).join(' · ');
}

// The 30-day window is computed at build time because the site is static.
// If that window has fewer than 4 posts, fall back to the latest 6.
export function postsInLastDays(days: number, now = new Date()): GroupedPost[] {
  const today = calendarDateInArizona(now);
  const cutoff = addCalendarDays(today, -days);
  const recent = groupPosts(publishedPosts.filter((post) => post.date >= cutoff));
  if (recent.length < 4) {
    return groupPosts(publishedPosts).slice(0, 6);
  }
  return recent;
}

export function latestPosts(count: number): GroupedPost[] {
  return groupPosts(publishedPosts).slice(0, count);
}
