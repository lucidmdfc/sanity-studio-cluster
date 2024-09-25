/**
 * Slugifies a given text string, converting it into a URL-friendly format.
 *
 * @param text The input text to be slugified.
 * @returns The slugified text.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase() // Convert to lowercase for consistency
    .normalize('NFD') // Normalize to decompose characters with accents into their base characters and combining marks
    .replace(/[\u0300-\u036f]/g, '') // Remove combining marks, which represent accents
    .replace(/\s+/g, '-') // Replace any whitespace (spaces, tabs, newlines) with a single hyphen
    .replace(/[^a-z0-9\-أ-ي]/g, '') // Garder les lettres arabes et les caractères valides
    .replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
    .trim() // Remove leading and trailing whitespace or hyphens
    .replace(/^-+|-+$/g, '') // Ensure no leading or trailing hyphens
}
