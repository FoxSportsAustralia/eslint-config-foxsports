/**
 * v11.1.0
 * Additional ESLint rules for Node.js
 *
 * https://github.com/mysticatea/eslint-plugin-node
 */
 module.exports = {
    plugins: ['node'],
    rules: {
        // Possible Errors
        'node/handle-callback-err': 'error',                         // require error handling in callbacks
        'node/no-callback-literal': 'error',                         // ensure Node.js-style error-first callback pattern is followed
        'node/no-exports-assign': 'error',                           // disallow the assignment to exports
        'node/no-extraneous-import': 'error',                        // disallow import declarations which import extraneous modules
        'node/no-extraneous-require': 'error',                       // disallow require() expressions which import extraneous modules
        'node/no-missing-import': 'error',                           // disallow import declarations which import non-existing modules
        'node/no-missing-require': 'error',                          // disallow require() expressions which import non-existing modules
        'node/no-new-require': 'error',                              // disallow new operators with calls to require
        'node/no-path-concat': 'error',                              // disallow string concatenation with __dirname and __filename
        'node/no-process-exit': 'error',                             // disallow the use of process.exit()
        'node/no-unpublished-bin': 'error',                          // disallow bin files that npm ignores
        'node/no-unpublished-import': 'error',                       // disallow import declarations which import private modules
        'node/no-unpublished-require': 'error',                      // disallow require() expressions which import private modules
        'node/no-unsupported-features/es-builtins': 'error',         // disallow unsupported ECMAScript built-ins on the specified version
        'node/no-unsupported-features/es-syntax': 'error',           // disallow unsupported ECMAScript syntax on the specified version
        'node/no-unsupported-features/node-builtins': 'error',       // disallow unsupported Node.js built-in APIs on the specified version
        'node/process-exit-as-throw': 'off',                         // make process.exit() expressions the same code path as throw
        'node/shebang': 'error',                                     // suggest correct usage of shebang

        // Best Practices
        'node/no-deprecated-api': 'error',                           // disallow deprecated APIs

        // Stylistic Issues
        'node/callback-return': 'off',                               // require return statements after callbacks
        'node/exports-style': ['error', 'module.exports'],           // enforce either module.exports or exports
        'node/file-extension-in-import': ['error', 'never'],         // enforce the style of file extensions in import/export declarations
        'node/global-require': 'error',                              // require require() calls to be placed at top-level module scope
        'node/no-mixed-requires': 'error',                           // disallow require calls to be mixed with regular variable declarations
        'node/no-process-env': 'off',                                // disallow the use of process.env
        'node/no-restricted-import': 'off',                          // disallow specified modules when loaded by import declarations
        'node/no-restricted-require': 'off',                         // disallow specified modules when loaded by require
        'node/no-sync': 'off',                                       // disallow synchronous methods
        'node/prefer-global/buffer': ['error', 'always'],            // enforce either Buffer or require("buffer").Buffer
        'node/prefer-global/console': ['error', 'always'],           // enforce either console or require("console")
        'node/prefer-global/process': ['error', 'always'],           // enforce either process or require("process")
        'node/prefer-global/text-decoder': ['error', 'always'],      // enforce either text-decoder or require("util").TextDecoder
        'node/prefer-global/text-encoder': ['error', 'always'],      // enforce either text-encoder or require("util").TextEncoder
        'node/prefer-global/url-search-params': ['error', 'always'], // enforce either URLSearchParams or require("url").URLSearchParams
        'node/prefer-global/url': ['error', 'always'],               // enforce either URL or require("url").URL
        'node/prefer-promises/dns': 'error',                         // disallow callback API in favor of promise API
        'node/prefer-promises/fs': 'error',                          // disallow callback API in favor of promise API
    },
};
