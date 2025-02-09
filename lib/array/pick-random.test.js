import { describe, expect, test } from 'vitest';

import { pickRandom } from './pick-random.js';

describe('pickRandom', () => {
	test('return single entry by default', () => {
		const array = [1, 2, 3, 4, 5];
		const r = pickRandom(array);
		expect(array).to.contain(r[0]);
	});

	test('return multiple entries', () => {
		const array = [1, 2, 3, 4, 5];
		const r = pickRandom(array, 2);
		expect(r).to.have.length(2);
		expect(array).to.contain(r[0]);
		expect(array).to.contain(r[1]);
	});

	test('error: count bigger than array.length', () => {
		const array = [1, 2, 3, 4, 5];
		expect(() => {
			const r = pickRandom(array, 100);
		}).to.throw();
	});
});
