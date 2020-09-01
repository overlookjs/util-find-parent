[![NPM version](https://img.shields.io/npm/v/@overlook/util-find-parent.svg)](https://www.npmjs.com/package/@overlook/util-find-parent)
[![Build Status](https://img.shields.io/travis/overlookjs/util-find-parent/master.svg)](http://travis-ci.org/overlookjs/util-find-parent)
[![Dependency Status](https://img.shields.io/david/overlookjs/util-find-parent.svg)](https://david-dm.org/overlookjs/util-find-parent)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookjs/util-find-parent.svg)](https://david-dm.org/overlookjs/util-find-parent)
[![Greenkeeper badge](https://badges.greenkeeper.io/overlookjs/util-find-parent.svg)](https://greenkeeper.io/)
[![Coverage Status](https://img.shields.io/coveralls/overlookjs/util-find-parent/master.svg)](https://coveralls.io/r/overlookjs/util-find-parent)

# Overlook framework utility to find parent route

Part of the [Overlook framework](https://overlookjs.github.io/).

## Usage

Utility functions for finding a parent route with certain characteristics:

* `findParent( route, fn )`
* `findParentOrSelf( route, fn )`

Traverses down the parentage chain, calling `fn()` with each route encountered until `fn()` returns a truthy value. That route is returned.

If none is found, returns `null`.

`findParent()` does not include original route in search, `findParentOrSelf()` does.

```js
const Route = require('@overlook/route'),
const {
  findParent,
  findParentOrSelf
} = require('@overlook/util-find-parent');

const root = new Route();
const child1 = new Route( { name: 'child1' } );
const child2 = new Route( { name: 'child2' } );
root.attachChild( child1 );
child1.attachChild( child2 );

findParentOrSelf( child2, () => true ) // => child2
findParentOrSelf( child2, route => route !== child2 ) // => child1
findParentOrSelf( child2, route => !route.name ) // => root
findParentOrSelf( child2, () => false ) // => null

findParent( child2, () => true ) // => child1
```

### ESM

ESM version provides named exports.

```js
import { findParent, findParentOrSelf } from '@overlook/util-find-parent';
```

## Versioning

This module follows [semver](https://semver.org/). Breaking changes will only be made in major version updates.

All active NodeJS release lines are supported (v10+ at time of writing). After a release line of NodeJS reaches end of life according to [Node's LTS schedule](https://nodejs.org/en/about/releases/), support for that version of Node may be dropped at any time, and this will not be considered a breaking change. Dropping support for a Node version will be made in a minor version update (e.g. 1.2.0 to 1.3.0). If you are using a Node version which is approaching end of life, pin your dependency of this module to patch updates only using tilde (`~`) e.g. `~1.2.3` to avoid breakages.

## Tests

Use `npm test` to run the tests. Use `npm run cover` to check coverage.

## Changelog

See [changelog.md](https://github.com/overlookjs/util-find-parent/blob/master/changelog.md)

## Issues

If you discover a bug, please raise an issue on Github. https://github.com/overlookjs/util-find-parent/issues

## Contribution

Pull requests are very welcome. Please:

* ensure all tests pass before submitting PR
* add tests for new features
* document new functionality/API additions in README
* do not add an entry to Changelog (Changelog is created when cutting releases)
