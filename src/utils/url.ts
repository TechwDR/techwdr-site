/** Prefixes an internal path with the configured base. External, mailto and #hash links are unchanged. */
export function url(path: string): string {
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}

/** Absolute URL (including the site origin) for canonical and Open Graph usage. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  return new URL(url(path), site).toString();
}
