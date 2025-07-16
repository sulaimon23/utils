/**
 * Gets the initials of a name, capped at max characters
 * Use case is in avatar placeholders
 *
 * "taiwo sulaimon" => "TS"
 */
export default (name: string, max: number = 2): string =>
    String(name ?? '')
        .split(/\s+/)
        .filter((token: string) => !!token.trim())
        .slice(0, max)
        .map((token: string) => token.charAt(0).toUpperCase())
        .join('');
