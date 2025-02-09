/**
 * @function shuffleArray Randomize array in-place
 * @category array
 * @description
 *
 * ### Speed and Efficiency
 *
 * Time complexity is O(N log N), same as quick sort.
 * Space complexity is O(N).
 * This is not as efficient as a Fischer Yates shuffle but, in my opinion,
 * the code is significantly shorter and more functional.
 * If you have a large array you should certainly use Fischer Yates.
 * If you have a small array with a few hundred items, you might do this.
 *
 * @see https://stackoverflow.com/a/46545530/722162
 * @license CC-BY-SA-4.0 by superluminary, mojoaxel
 *
 * @template T
 * @param {T[]} array an un-shuffled array
 * @returns {T[]} a new shuffled array
 */
export function shuffleArray<T>(array: T[]): T[];
