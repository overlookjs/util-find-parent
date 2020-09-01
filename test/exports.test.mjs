/* --------------------
 * @overlook/util-find-parent module
 * Tests
 * ESM export
 * ------------------*/

// Modules
import * as namedExports from '@overlook/util-find-parent/es';

// Imports
import itExports from './exports.js';

// Tests

describe('ESM export', () => {
	describe('named exports', () => {
		itExports(namedExports);
	});
});
