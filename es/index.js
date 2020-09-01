/* --------------------
 * @overlook/util-find-parent module
 * ESM entry point
 * Re-export CJS with named exports
 * ------------------*/

// Exports

import findParentMethods from '../lib/index.js';

export const {
	findParent,
	findParentOrSelf
} = findParentMethods;
