/**
 * v37.0.3
 *
 * https://www.npmjs.com/package/eslint-plugin-jsdoc
 */
module.exports = {
    plugins: ['jsdoc'],
    rules: {
        'jsdoc/check-access': 'off',                                    // Checks that @access tags use one of the following values: 'package', 'private', 'protected', 'public'.
        'jsdoc/check-alignment': 'error',                               // Reports invalid alignment of JSDoc block asterisks.
        'jsdoc/check-examples': 'off',                                  // Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
        'jsdoc/check-indentation': 'off',                               // Reports invalid padding inside JSDoc block.
        'jsdoc/check-line-alignment': 'off',                            // Reports invalid alignment of JSDoc block lines.
        'jsdoc/check-param-names': 'off',                               // Ensures that parameter names in JSDoc match those in the function declaration.
        'jsdoc/check-property-names': 'error',                          // Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
        'jsdoc/check-syntax': 'error',                                  // Reports against Google Closure Compiler syntax.
        'jsdoc/check-tag-names': ['error', {definedTags: ['TODO']}],    // Reports invalid block tag names.
        'jsdoc/check-types': 'off',                                     // Reports invalid types.
        'jsdoc/check-values': 'off',                                    // Checks the values for a handful of tags: @version, @since, @license, @author, @variation
        'jsdoc/empty-tags': 'off',                                      // Expects certain tags to be empty of any content - see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-empty-tags
        'jsdoc/implements-on-classes': 'off',                           // Reports an issue with any non-constructor function using @implements.
        'jsdoc/match-description': 'off',                               // Enforces a regular expression pattern on descriptions.
        'jsdoc/match-name': 'off',                                      // Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
        'jsdoc/multiline-blocks': 'off',                                // Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
        'jsdoc/newline-after-description': 'error',                     // Enforces a consistent padding of the block description.
        'jsdoc/no-bad-blocks': ['error', {ignore: ['TODO']}],           // Checks for multi-line-style comments appear to be intended as jsblocks but fail to meet the criteria of a jsblock
        'jsdoc/no-defaults': 'off',                                     // Reports defaults being used on the relevant portion of @param or @default
        'jsdoc/no-missing-syntax': 'off',                               // This rule lets you report if certain always expected comment structures are missing.
        'jsdoc/no-multi-asterisks': 'off',                              // Prevents use of multiple asterisks at the beginning of lines.
        'jsdoc/no-restricted-syntax': 'off',                            // Reports when certain comment structures are present - see https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-restricted-syntax
        'jsdoc/no-types': 'off',                                        // Reports types being used on @param or @returns - intended to prevent the indication of types on tags where the type information would be redundant with TypeScript
        'jsdoc/no-undefined-types': 'off',                              // Checks that types in jsdoc comments are defined. This can be used to check unimported types.
        'jsdoc/require-asterisk-prefix': 'error',                       // Requires that each JSDoc line starts with an *
        'jsdoc/require-description-complete-sentence': 'off',           // Requires that block description and tag description are written in complete sentences
        'jsdoc/require-description': 'off',                             // Require description text
        'jsdoc/require-example': 'off',                                 // Requires a code example
        'jsdoc/require-file-overview': 'off',                           // Checks that all files have a @file, @fileoverview, @overview tag, duplicate file overview tags within a give file will be reported
        'jsdoc/require-hyphen-before-param-description': 'off',         // Requires a hyphen before the @param description.
        'jsdoc/require-jsdoc': 'off',                                   // Checks for the presence of jsdoc comments, on class declarations as well as functions.
        'jsdoc/require-param-description': 'error',                     // Requires that @param tag has description value.
        'jsdoc/require-param-name': 'error',                            // Requires that all function parameters have name.
        'jsdoc/require-param-type': 'error',                            // Requires that @param tag has type value
        'jsdoc/require-param': 'error',                                 // Requires that all function parameters are documented.
        'jsdoc/require-property': 'error',                              // Requires that all @typedef and @namespace tags have @property when their type is a plain object, Object, or PlainObject.
        'jsdoc/require-property-description': 'error',                  // Requires that each @property tag has a description value.
        'jsdoc/require-property-name': 'error',                         // Requires that all function @property tags have names.
        'jsdoc/require-property-type': 'error',                         // Requires that each @property tag has a type value.
        'jsdoc/require-returns-check': 'error',                         // Checks if the return expression exists in function body and in the comment.
        'jsdoc/require-returns-description': 'error',                   // Requires that @returns tag has description value.
        'jsdoc/require-returns-type': 'error',                          // Requires that @returns tag has type value.
        'jsdoc/require-returns': 'error',                               // Requires returns are documented.
        'jsdoc/require-throws': 'off',                                  // Requires that throw statements are documented.
        'jsdoc/require-yields': 'off',                                  // Requires that yields are documented.
        'jsdoc/require-yields-check': 'off',                            // Ensures that if a @yields is present that a yield is present in the function body
        'jsdoc/tag-lines': 'off',                                       // Enforces lines (or no lines) between tags.
        'jsdoc/valid-types': 'off',                                     // Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
    },
};
