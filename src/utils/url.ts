// Prepend the configured `base` path to an internal URL.
// Use this for every internal link so the site works under /blog/.
export function url(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. "/blog/"
  const clean = path.startsWith('/') ? path.slice(1) : path;
  // Ensure exactly one slash between base and clean.
  const joined = base.endsWith('/') ? base + clean : base + '/' + clean;
  return joined || '/';
}
