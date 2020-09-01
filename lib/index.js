/* --------------------
 * @overlook/util-find-parent module
 * Entry point
 * ------------------*/

'use strict';

// Exports

module.exports = {
	findParent,
	findParentOrSelf
};

function findParent(route, fn) {
	const {parent} = route;
	if (!parent) return null;
	return findParentOrSelf(parent, fn);
}

function findParentOrSelf(route, fn) {
	do {
		if (fn(route)) break;
		route = route.parent;
	} while (route);

	return route || null;
}
