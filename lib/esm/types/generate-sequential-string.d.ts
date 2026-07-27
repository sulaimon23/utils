/**
 * This method helps to generate serial strings from a base 10 number (serial number)
 * e.g 1 - 22222, 2 - 22223, 2 - 22224 ..., using the charset provided
 * This is useful when you want constant lenght, serial string sequences for IDs without collisions
 *
 * @param serialNumber The running serial number
 * @param outputLength The length of generated string sequence
 * @param charset The character set used to generate the string sequence
 */
declare const _default: (serialNumber: number, outputLength?: number, charset?: string) => string;
export default _default;
//# sourceMappingURL=generate-sequential-string.d.ts.map