/**
 * @function pickRandom
 * @description Pick some random entries from the given array
 * @category array
 * @license MIT
 *
 * @template T
 * @param {T[]} array The array to pick from.
 * @param {number} [count=1] How many random entries to pick. Must be bigger than array.length.
 * @returns {T[]} A new array with "count" random entries.
 */
export function pickRandom<T>(array: T[], count?: number): T[];
