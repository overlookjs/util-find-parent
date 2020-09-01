/* --------------------
 * @overlook/util-find-parent module
 * Tests
 * ------------------*/

'use strict';

// Modules
const Route = require('@overlook/route'),
	{findParent, findParentOrSelf} = require('@overlook/util-find-parent');

// Init
require('./support/index.js');

// Tests

let root, child1, child2;
beforeEach(() => {
	root = new Route();

	child1 = new Route({name: 'child1'});
	root.attachChild(child1);

	child2 = new Route({name: 'child2'});
	child1.attachChild(child2);
});

describe('findParent()', () => {
	it('is a function', () => {
		expect(findParent).toBeFunction();
	});

	it('returns `null` for root route', () => {
		expect(findParent(root, () => true)).toBeNull();
	});

	it('returns root from 1st level child if matched', () => {
		expect(findParent(child1, () => true)).toBe(root);
	});

	it('returns `null` from 1st level child if not matched', () => {
		expect(findParent(child1, () => false)).toBeNull();
	});

	it('returns parent from 2nd level child if matched', () => {
		expect(findParent(child2, () => true)).toBe(child1);
	});

	it('returns root from 2nd level child if matched', () => {
		expect(findParent(child2, ({name}) => !name)).toBe(root);
	});

	it('returns `null` from 2nd level child if not matched', () => {
		expect(findParent(child2, () => false)).toBeNull();
	});
});

describe('findParentOrSelf()', () => {
	it('is a function', () => {
		expect(findParentOrSelf).toBeFunction();
	});

	it('returns self for root route if matched', () => {
		expect(findParentOrSelf(root, () => true)).toBe(root);
	});

	it('returns `null` for root route if not matched', () => {
		expect(findParentOrSelf(root, () => false)).toBeNull();
	});

	it('returns self from 1st level child if matched', () => {
		expect(findParentOrSelf(child1, () => true)).toBe(child1);
	});

	it('returns root from 1st level child if matched', () => {
		expect(findParentOrSelf(child1, ({name}) => !name)).toBe(root);
	});

	it('returns `null` from 1st level child if not matched', () => {
		expect(findParentOrSelf(child1, () => false)).toBeNull();
	});

	it('returns self from 2nd level child if matched', () => {
		expect(findParentOrSelf(child2, () => true)).toBe(child2);
	});

	it('returns parent from 2nd level child if matched', () => {
		expect(findParentOrSelf(child2, ({name}) => name === 'child1')).toBe(child1);
	});

	it('returns root from 2nd level child if matched', () => {
		expect(findParentOrSelf(child2, ({name}) => !name)).toBe(root);
	});

	it('returns `null` from 2nd level child if not matched', () => {
		expect(findParentOrSelf(child2, () => false)).toBeNull();
	});
});
