/**
 * Import Syntax Rules (v2.17.2)
 *
 * https://github.com/benmosher/eslint-plugin-import
 */
module.exports = {
    plugins: ['import'],
    rules: {
        /* IMPORT: Static analysis */
        'import/no-unresolved': ['error', {commonjs: true}],                    // Ensure imports point to a file/module that can be resolved
        'import/named': 'off',                                                  // Ensure named imports correspond to a named export in the remote file -- TODO: enable once all our code migrated to es6 modules
        'import/default': 'error',                                              // Ensure a default export is present, given a default import
        'import/namespace': 'error',                                            // Ensure imported namespaces contain dereferenced properties as they are dereferenced
        'import/no-restricted-paths': 'error',                                  // Restrict which files can be imported in a given folder
        'import/no-absolute-path': 'error',                                     // Forbid import of modules using absolute paths calls with expressions
        'import/no-dynamic-require': 'error',                                   // Forbid require() calls with expressions
        'import/no-internal-modules': 'off',                                    // Prevent importing the submodules of other modules
        'import/no-webpack-loader-syntax': 'off',                               // Forbid Webpack loader syntax in imports
        'import/no-self-import': 'off',                                         // Forbid a module from importing itself
        'import/no-cycle': 'off',                                               // Ensures that there is no resolvable path back to this module via its dependencies.
        'import/no-useless-path-segments': ['error', {noUselessIndex: true}],   // Use this rule to prevent unnecessary path segments in import and require statements
        'import/no-relative-parent-imports': 'off',                             // Use this rule to prevent imports to folders in relative parent paths
        'import/no-unused-modules': ['error', {missingExports: true}],          // Report modules without exports, or exports without matching import in another module

        /* IMPORT: Helpful warnings */
        'import/export': 'error',                                          // Report any invalid exports, i.e. re-export of the same name
        'import/no-named-as-default': 'error',                             // Report use of exported name as identifier of default export
        'import/no-named-as-default-member': 'error',                      // Report use of exported name as property of default export
        'import/no-deprecated': 'error',                                   // Report imported names marked with @deprecated documentation tag
        'import/no-extraneous-dependencies': 'error',                      // Forbid the use of extraneous packages
        'import/no-mutable-exports': 'error',                              // Forbid the use of mutable exports with var or let

        /* IMPORT: Module systems */
        'import/unambiguous': 'error',                                     // Report potentially ambiguous parse goal (script vs. module)
        'import/no-commonjs': 'off',                                       // Report CommonJS require calls and module.exports or exports.*
        'import/no-amd': 'error',                                          // Report AMD require and define calls
        'import/no-nodejs-modules': 'off',                                 // No Node.js builtin modules.

        /* IMPORT: Style guide */
        'import/first': 'error',                                           // Ensure all imports appear before other statements
        'import/exports-last': 'off',                                      // Ensure all exports appear after other statements
        'import/no-duplicates': 'error',                                   // Report repeated import of the same module in multiple places
        'import/no-namespace': 'error',                                    // Report namespace imports
        'import/extensions': ['error', {js: 'never', json: 'always'}],     // Ensure consistent use of file extension within the import path
        'import/order': ['error', {groups: [                               // Enforce a convention in module import order
            'builtin',
            'external',
            'parent',
            'sibling',
            'index',
            'internal',
        ]}],
        'import/newline-after-import': 'error',                                 // Enforce a newline after import statements
        'import/prefer-default-export': 'error',                                // Prefer a default export if module exports a single name
        'import/max-dependencies': 'off',                                       // Limit the maximum number of dependencies a module can have
        'import/no-unassigned-import': 'error',                                 // Forbid unassigned imports
        'import/no-named-default': 'error',                                     // Forbid named default exports
        'import/no-default-export': 'off',                                      // Prohibit default exports. Mostly an inverse of prefer-default-export.
        'import/no-named-export': 'off',                                        // Prohibit named exports. Mostly an inverse of no-default-export.
        'import/no-anonymous-default-export': ['error', {allowObject: true}],   // Forbid anonymous values as default exports
        'import/group-exports': 'off',                                          // Reports when named exports are not grouped together in a single export declaration or when multiple assignments to CommonJS module.exports or exports object are present in a single file
        'import/dynamic-import-chunkname': 'off',                               // This rule reports any dynamic imports without a webpackChunkName specified in a leading block comment in the proper format.
    },
};
