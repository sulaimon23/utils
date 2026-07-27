/**
 * Gets the initials of a name, capped at max characters
 * Use case is in avatar placeholders
 *
 * "taiwo sulaimon" => "TS"
 */
export default (name, max = 2) => String(name ?? '')
    .split(/\s+/)
    .filter((token) => !!token.trim())
    .slice(0, max)
    .map((token) => token.charAt(0).toUpperCase())
    .join('');
