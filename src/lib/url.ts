const base = import.meta.env.BASE_URL.replace(/\/+$/, "");

/** Prefix site-local URLs without changing external or already-prefixed URLs. */
export function withBase(path: string): string {
  if (
    !path.startsWith("/") ||
    path.startsWith("//") ||
    !base ||
    path === base ||
    path.startsWith(`${base}/`) ||
    path.startsWith(`${base}?`) ||
    path.startsWith(`${base}#`)
  ) {
    return path;
  }

  return `${base}${path}`;
}
