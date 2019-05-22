module.exports = {
    rules: {
        /**
         * BEST PRACTICES
         *
         * These rules relate to better ways of doing things to help you avoid problems:
         */
        'accessor-pairs': 'off',                                                    // enforce getter and setter pairs in objects
        'array-callback-return': 'error',                                           // enforce return statements in callbacks of array methods
        'block-scoped-var': 'error',                                                // enforce the use of variables within the scope they are defined
        'class-methods-use-this': 'off',                                            // enforce that class methods utilize this
        'complexity': 'off',                                                        // enforce a maximum cyclomatic complexity allowed in a program
        'consistent-return': 'off',                                                 // require return statements to either always or never specify values
        'curly': 'error',                                                           // enforce consistent brace style for all control statements
        'default-case': 'error',                                                    // require default cases in switch statements
        'dot-location': ['error', 'property'],                                      // enforce consistent newlines before and after dots
        'dot-notation': ['error', {allowPattern: '[-_]'}],                          // enforce dot notation whenever possible
        'eqeqeq': ['error', 'smart'],                                               // require the use of === and !==
        'guard-for-in': 'off',                                                      // require for-in loops to include an if statement
        'no-alert': 'error',                                                        // disallow the use of alert, confirm, and prompt
        'no-caller': 'error',                                                       // disallow the use of arguments.caller or arguments.callee
        'no-case-declarations': 'error',                                            // disallow lexical declarations in case clauses
        'no-div-regex': 'off',                                                      // disallow division operators explicitly at the beginning of regular expressions
        'no-else-return': 'off',                                                    // disallow else blocks after return statements in if statements
        'no-empty-function': 'error',                                               // disallow empty functions
        'no-empty-pattern': 'error',                                                // disallow empty destructuring patterns
        'no-eq-null': 'error',                                                      // disallow null comparisons without type-checking operators
        'no-eval': 'error',                                                         // disallow the use of eval()
        'no-extend-native': 'error',                                                // disallow extending native types
        'no-extra-bind': 'error',                                                   // disallow unnecessary calls to .bind()
        'no-extra-label': 'off',                                                    // disallow unnecessary labels
        'no-fallthrough': 'off',                                                    // disallow fallthrough of case statements
        'no-floating-decimal': 'error',                                             // disallow leading or trailing decimal points in numeric literals
        'no-global-assign': 'error',                                                // disallow assignments to native objects or read-only global variables
        'no-implicit-coercion': ['error', {allow: ['!!']}],                         // disallow shorthand type conversions
        'no-implicit-globals': 'off',                                               // disallow variable and function declarations in the global scope
        'no-implied-eval': 'error',                                                 // disallow the use of eval()-like methods
        'no-invalid-this': 'off',                                                   // disallow this keywords outside of classes or class-like objects
        'no-iterator': 'off',                                                       // disallow the use of the __iterator__ property
        'no-labels': 'error',                                                       // disallow labeled statements
        'no-lone-blocks': 'error',                                                  // disallow unnecessary nested blocks
        'no-loop-func': 'off',                                                      // disallow function declarations and expressions inside loop statements
        'no-magic-numbers': 'off',                                                  // disallow magic numbers
        'no-multi-spaces': ['error', {ignoreEOLComments: true}],                    // disallow multiple spaces
        'no-multi-str': 'error',                                                    // disallow multiline strings
        'no-new': 'off',                                                            // disallow new For Side Effects
        'no-new-func': 'error',                                                     // disallow new operators with the Function object
        'no-new-wrappers': 'error',                                                 // disallow new operators with the String, Number, and Boolean objects
        'no-octal': 'error',                                                        // disallow octal literals
        'no-octal-escape': 'error',                                                 // disallow octal escape sequences in string literals
        'no-param-reassign': 'error',                                               // disallow reassigning function parameters
        'no-proto': 'error',                                                        // disallow the use of the __proto__ property
        'no-redeclare': 'error',                                                    // disallow variable redeclaration
        'no-restricted-properties': 'off',                                          // disallow certain properties on certain objects
        'no-return-assign': 'error',                                                // disallow assignment operators in return statements
        'no-return-await': 'off',                                                   // disallow unnecessary return await
        'no-script-url': 'error',                                                   // disallow javascript: urls
        'no-self-assign': 'error',                                                  // disallow assignments where both sides are exactly the same
        'no-self-compare': 'error',                                                 // disallow comparisons where both sides are exactly the same
        'no-sequences': 'error',                                                    // disallow comma operators
        'no-throw-literal': 'off',                                                  // disallow throwing literals as exceptions
        'no-unmodified-loop-condition': 'off',                                      // disallow unmodified loop conditions
        'no-unused-expressions': 'error',                                           // disallow unused expressions
        'no-unused-labels': 'error',                                                // disallow unused labels
        'no-useless-call': 'error',                                                 // disallow unnecessary calls to .call() and .apply()
        'no-useless-catch': 'error',                                                // disallow unnecessary catch clauses
        'no-useless-concat': 'error',                                               // disallow unnecessary concatenation of literals or template literals
        'no-useless-escape': 'off',                                                 // disallow unnecessary escape characters
        'no-useless-return': 'off',                                                 // disallow redundant return statements
        'no-void': 'off',                                                           // disallow void operators
        'no-warning-comments': 'warn',                                              // disallow specified warning terms in comments
        'no-with': 'error',                                                         // disallow with statements
        'prefer-promise-reject-errors': 'off',                                      // require using Error objects as Promise rejection reasons
        'radix': ['error', 'as-needed'],                                            // enforce the consistent use of the radix argument when using parseInt()
        'require-await': 'off',                                                     // disallow async functions which have no await expression
        'require-unicode-regexp': 'off',                                            // disallow async functions which have no await expression
        'vars-on-top': 'error',                                                     // require var declarations be placed at the top of their containing scope
        'wrap-iife': 'error',                                                       // require parentheses around immediate function invocations
        'yoda': 'error',                                                            // require or disallow “Yoda” conditions
    },
};
