/**
 * v4.8.4
 *
 * https://www.npmjs.com/package/eslint-plugin-jsdoc
 */
module.exports = {
    plugins: ['jsdoc'],
    rules: {
        'jsdoc/require-jsdoc': 'off',                           // Reports invalid alignment of JSDoc block asterisks.
        'jsdoc/check-alignment': 'error',                       // Reports invalid alignment of JSDoc block asterisks.
        'jsdoc/check-examples': 'off',                          // Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
        'jsdoc/check-indentation': 'off',                       // Reports invalid padding inside JSDoc block.
        'jsdoc/check-param-names': 'error',                     // Ensures that parameter names in JSDoc match those in the function declaration
        'jsdoc/check-syntax': 'error',                          // Reports against Google Closure Compiler syntax.
        'jsdoc/check-tag-names': 'error',                       // Reports invalid block tag names.
        'jsdoc/check-types': 'error',                           // Reports invalid types.
        'jsdoc/newline-after-description': 'error',             // Enforces a consistent padding of the block description.
        'jsdoc/no-undefined-types': 'error',                    // Checks that types in jsdoc comments are defined. This can be used to check unimported types.
        'jsdoc/require-description-complete-sentence': 'off',   // Requires that block description and tag description are written in complete sentences
        'jsdoc/require-description': 'off',                     // Require description text
        'jsdoc/require-example': 'off',                         // Requires a code example
        'jsdoc/require-hyphen-before-param-description': 'off', // Requires a hyphen before the @param description.
        'jsdoc/require-param-description': 'error',             // Requires that @param tag has description value.
        'jsdoc/require-param-name': 'error',                    // Requires that all function parameters have name.
        'jsdoc/require-param-type': 'error',                    // Requires that @param tag has type value
        'jsdoc/require-param': 'error',                         // Requires that all function parameters are documented.
        'jsdoc/require-returns-description': 'error',           // Requires that @returns tag has description value.
        'jsdoc/require-returns-type': 'error',                  // Requires that @returns tag has type value
        'jsdoc/require-returns-check': 'error',                 // Checks if the return expression exists in function body and in the comment
        'jsdoc/require-returns': 'error',                       // Requires returns are documented
        'jsdoc/valid-types': 'error',                           // Requires all types to be valid JSDoc or Closure compiler types without syntax errors
    },
};
