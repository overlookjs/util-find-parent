/* --------------------
 * @overlook/util-find-parent module
 * Tests
 * Test function to ensure all exports present
 * ------------------*/

/* eslint-disable jest/no-export */

'use strict';

// Exports

module.exports = function itExports(findParent) {
	describe('methods', () => {
		it.each([
			'findParent',
			'findParentOrSelf'
		])('%s', (key) => {
			expect(findParent[key]).toBeFunction();
		});
	});
};
