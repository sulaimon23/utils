// a pragmatic email shape, not the full rfc 5322 grammar
const EMAIL_PATTERN: RegExp = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

/**
 * Checks that a value looks like an email address, ie something@something.tld
 * Surrounding whitespace is ignored
 */
export default (value: string): boolean => EMAIL_PATTERN.test(String(value ?? '').trim());
