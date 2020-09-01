/* --------------------
 * @overlook/util-find-parent module
 * Tests
 * CJS export
 * ------------------*/

'use strict';

// Modules
const findParent = require('@overlook/util-find-parent');

// Imports
const itExports = require('./exports.js');

// Tests

describe('CJS export', () => {
	it('is defined', () => {
		expect(findParent).not.toBeUndefined();
	});

	describe('has properties', () => {
		itExports(findParent);
	});
});
