/**
 * Truncates a string to a specified maximum length and appends an ellipsis ("...") if the string exceeds that length.
 *
 * @param text - The input string to be truncated.
 * @param maxLength - The maximum allowed length of the string before truncation.
 * @returns The original string if its length is less than or equal to `maxLength`, otherwise a truncated string with an appended ellipsis.
 */
export function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
