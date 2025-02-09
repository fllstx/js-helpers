import { describe, expect, test } from 'vitest';

import { shuffleArray } from './shuffle-array.js';

describe('shuffleArray', () => {
	test('array changes', () => {
		const array = [1, 2, 3, 4, 5]
		const shuffled = shuffleArray(array)
		expect(shuffled).not.toEqual(array)
	})
});