/* --------------------
 * @overlook/util-find-parent module
 * Tests
 * ESM export
 * ------------------*/

// Modules
import findParent, * as namedExports from '@overlook/util-find-parent/es';

// Imports
import itExports from './exports.js';

// Tests

describe('ESM export', () => {
	it('default export is defined', () => {
		expect(findParent).not.toBeUndefined();
	});

	describe('default export has properties', () => {
		itExports(findParent);
	});

	describe('named exports', () => {
		itExports(namedExports);
	});
});
