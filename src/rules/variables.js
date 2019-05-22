module.exports = {
    rules: {
        /**
         * VARIABLES
         *
         * These rules relate to variable declarations
         */
        'init-declarations': 'off',                              // require or disallow initialization in variable declarations
        'no-delete-var': 'error',                                // disallow deleting variables
        'no-label-var': 'error',                                 // disallow labels that share a name with a variable
        'no-catch-shadow': 'off',                                // disallow Shadowing of Variables Inside of catch
        'no-restricted-globals': 'off',                          // disallow specified global variables
        'no-shadow': 'off',                                      // disallow variable declarations from shadowing variables declared in the outer scope
        'no-shadow-restricted-names': 'error',                   // disallow identifiers from shadowing restricted names
        'no-undef': 'error',                                     // disallow the use of undeclared variables unless mentioned in /*global */ comments
        'no-undef-init': 'error',                                // disallow initializing variables to undefined
        'no-undefined': 'off',                                   // disallow the use of undefined as an identifier
        'no-unused-vars': ['error', {ignoreRestSiblings: true}], // disallow unused variables
        'no-use-before-define': ['error', {functions: false}],   // disallow the use of variables before they are defined
    },
};
