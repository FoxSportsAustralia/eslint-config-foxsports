module.exports = {
    rules: {
        /**
         * POSSIBLE ERRORS
         *
         * These rules relate to possible syntax or logic errors in JavaScript code:
         */
        'for-direction': 'off',                                                  // enforce “for” loop update clause moving the counter in the right direction
        'getter-return': 'error',                                                // enforce return statements in getters
        'no-async-promise-executor': 'error',                                    // disallow using an async function as a Promise executor
        'no-await-in-loop': 'off',                                               // disallow await inside of loops
        'no-compare-neg-zero': 'error',                                          // disallow comparing against -0
        'no-cond-assign': 'error',                                               // disallow assignment operators in conditional expressions
        'no-console': ['error', {allow: ['warn', 'error']}],                     // disallow the use of console
        'no-constant-condition': 'error',                                        // disallow constant expressions in conditions
        'no-control-regex': 'error',                                             // disallow control characters in regular expressions
        'no-debugger': 'error',                                                  // disallow the use of debugger
        'no-dupe-args': 'error',                                                 // disallow duplicate arguments in function definitions
        'no-dupe-keys': 'error',                                                 // disallow duplicate keys in object literals
        'no-duplicate-case': 'error',                                            // disallow duplicate case labels
        'no-empty': 'error',                                                     // disallow empty block statements
        'no-empty-character-class': 'error',                                     // disallow empty character classes in regular expressions
        'no-ex-assign': 'error',                                                 // disallow reassigning exceptions in catch clauses
        'no-extra-boolean-cast': 'error',                                        // disallow unnecessary boolean casts
        'no-extra-parens': 'off',                                                // disallow unnecessary parentheses
        'no-extra-semi': 'error',                                                // disallow unnecessary semicolons
        'no-func-assign': 'error',                                               // disallow reassigning function declarations
        'no-inner-declarations': 'error',                                        // disallow variable or function declarations in nested blocks
        'no-invalid-regexp': 'error',                                            // disallow invalid regular expression strings in RegExp constructors
        'no-irregular-whitespace': 'error',                                      // disallow irregular whitespace outside of strings and comments
        'no-obj-calls': 'error',                                                 // disallow calling global object properties as functions
        'no-prototype-builtins': 'off',                                          // disallow calling some Object.prototype methods directly on objects
        'no-regex-spaces': 'error',                                              // disallow multiple spaces in regular expressions
        'no-sparse-arrays': 'error',                                             // disallow sparse arrays
        'no-template-curly-in-string': 'error',                                  // disallow template literal placeholder syntax in regular strings
        'no-unexpected-multiline': 'error',                                      // disallow confusing multiline expressions
        'no-unreachable': 'error',                                               // disallow unreachable code after return, throw, continue, and break statements
        'no-unsafe-finally': 'error',                                            // disallow control flow statements in finally blocks
        'no-unsafe-negation': 'error',                                           // disallow negating the left operand of relational operators
        'require-atomic-updates': 'error',                                       // disallow negating the left operand of relational operators
        'use-isnan': 'error',                                                    // require calls to isNaN() when checking for NaN
        'valid-typeof': 'error',                                                 // enforce comparing typeof expressions against valid strings
    },
};
