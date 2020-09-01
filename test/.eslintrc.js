/* --------------------
 * @overlook/util-find-parent module
 * Tests ESLint config
 * ------------------*/

'use strict';

// Exports

module.exports = {
	extends: [
		'@overlookmotel/eslint-config-jest'
	],
	rules: {
		'import/no-unresolved': ['error', {ignore: ['^@overlook/util-find-parent(/|$)']}],
		'node/no-missing-require': ['error', {allowModules: ['@overlook/util-find-parent']}],
		'node/no-missing-import': ['error', {allowModules: ['@overlook/util-find-parent']}]
	},
	overrides: [{
		files: ['*.mjs'],
		parserOptions: {
			sourceType: 'module'
		},
		rules: {
			'node/no-unsupported-features/es-syntax': ['error', {ignores: ['modules']}]
		}
	}]
};
