/**
 * Turns any text into a url/file friendly slug
 * Diacritics are decomposed then dropped, every other non alphanumeric run becomes a single dash
 *
 * "  Héllo, Wörld! " => "hello-world"
 */
export default (text) => String(text ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
