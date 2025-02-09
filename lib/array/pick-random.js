import { shuffleArray } from './shuffle-array.js';

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
export function pickRandom(array, count = 1) {
	if (count > array.length) {
		throw new Error(`[pickRandom] Cannot pick more random entries than there are in the array`);
	}
	return shuffleArray(array).slice(0, count);
}
