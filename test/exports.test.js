/* --------------------
 * @overlook/util-find-parent module
 * Tests
 * CJS export
 * ------------------*/

'use strict';

// Modules
const utils = require('@overlook/util-find-parent');

// Imports
const itExports = require('./exports.js');

// Tests

describe('CJS export', () => {
	it('is object', () => {
		expect(utils).toBeObject();
	});

	describe('has properties', () => {
		itExports(utils);
	});
});
