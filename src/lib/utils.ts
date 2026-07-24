/**
 * Converts a string into a URL-friendly slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Returns the current year.
 */
export function currentYear(): number {
  return new Date().getFullYear();
}

/**
 * Truncates text to a specified length.
 */
export function truncate(text: string, length = 120): string {
  if (text.length <= length) return text;

  return `${text.slice(0, length)}...`;
}