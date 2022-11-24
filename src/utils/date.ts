/**
 * Format date to MMM YYYY
 * example: December 1974
 *
 * @param  {string} date
 */
export function formatDate(date?: string) {
  const parsed = date ? new Date(date) : new Date();
  return parsed.toLocaleDateString("en-US", {
    day: "2-digit",
    year: "numeric",
    month: "long",
  });
}
