module.exports = {
    rules: {
        /**
         * STYLISTIC ISSUES
         *
         * These rules relate to style guidelines, and are therefore quite subjective
         */
        'array-bracket-newline': 'off',                                                           // enforce line breaks after opening and before closing array brackets
        'array-bracket-spacing': 'error',                                                         // enforce consistent spacing inside array brackets
        'array-element-newline': 'off',                                                           // enforce line breaks between array elements
        'block-spacing': 'error',                                                                 // enforce consistent spacing inside single-line blocks
        'brace-style': ['error', '1tbs', {allowSingleLine: true}],                                // enforce consistent brace style for blocks
        'camelcase': ['error', {                                                                  // enforce camelcase naming convention
            properties: 'never',
            ignoreDestructuring: true,
            allow: ['^UNSAFE_'],
        }],
        'capitalized-comments': 'off',                                                            // enforce or disallow capitalization of the first letter of a comment
        'comma-dangle': ['error', 'always-multiline'],                                            // require or disallow trailing commas
        'comma-spacing': 'error',                                                                 // enforce consistent spacing before and after commas
        'comma-style': 'error',                                                                   // enforce consistent comma style
        'computed-property-spacing': 'error',                                                     // enforce consistent spacing inside computed property brackets
        'consistent-this': ['error', 'self'],                                                     // enforce consistent naming when capturing the current execution context
        'eol-last': 'error',                                                                      // require or disallow newline at the end of files
        'func-call-spacing': 'error',                                                             // require or disallow spacing between function identifiers and their invocations
        'func-name-matching': 'off',                                                              // require function names to match the name of the variable or property to which they are assigned
        'func-names': ['error', 'as-needed'],                                                     // require or disallow named function expressions
        'func-style': 'off',                                                                      // enforce the consistent use of either function declarations or expressions
        'function-paren-newline': ['error', 'consistent'],                                        // enforce consistent line breaks inside function parentheses
        'id-blacklist': 'off',                                                                    // disallow specified identifiers
        'id-length': 'off',                                                                       // enforce minimum and maximum identifier lengths
        'id-match': 'off',                                                                        // require identifiers to match a specified regular expression
        'implicit-arrow-linebreak': 'error',                                                      // enforce the location of arrow function bodies
        'indent': ['error', 4, {SwitchCase: 1, flatTernaryExpressions: true}],                    // enforce consistent indentation
        'jsx-quotes': 'error',                                                                    // enforce the consistent use of either double or single quotes in JSX attributes
        'key-spacing': ['error', {                                                                // enforce consistent spacing between keys and values in object literal properties
            singleLine: {
                afterColon: true,
                beforeColon: false,
                mode: 'strict',
            },
            multiLine: {
                afterColon: true,
                beforeColon: false,
                mode: 'minimum',
            },
        }],
        'keyword-spacing': 'error',                                                               // enforce consistent spacing before and after keywords
        'line-comment-position': 'off',                                                           // enforce position of line comments
        'linebreak-style': ['error', 'unix'],                                                     // enforce consistent linebreak style
        'lines-around-comment': ['error', {                                                       // require empty lines around comments
            beforeBlockComment: true,
            allowBlockStart: true,
            allowObjectStart: true,
        }],
        'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],        // require empty lines around comments
        'max-depth': ['error', 3],                                                                // enforce a maximum depth that blocks can be nested
        'max-len': ['error', {                                                                    // enforce a maximum line length
            code: 140,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true,
        }],
        'max-lines': 'off',                                                                       //  enforce a maximum number of lines per file
        'max-nested-callbacks': ['error', {max: 3}],                                              //  enforce a maximum depth that callbacks can be nested
        'max-params': ['error', {max: 5}],                                                        //  enforce a maximum number of parameters in function definitions
        'max-statements': 'off',                                                                  //  enforce a maximum number of statements allowed in function blocks
        'max-statements-per-line': ['error', {max: 1}],                                           //  enforce a maximum number of statements allowed per line
        'multiline-comment-style': 'off',                                                         //  enforce a particular style for multiline comments
        'multiline-ternary': 'off',                                                               //  enforce newlines between operands of ternary expressions
        'new-cap': 'error',                                                                       //  require constructor names to begin with a capital letter
        'new-parens': 'error',                                                                    //  require parentheses when invoking a constructor with no arguments
        'newline-per-chained-call': ['error', {ignoreChainWithDepth: 2}],                         //  require a newline after each call in a method chain
        'no-array-constructor': 'error',                                                          //  disallow Array constructors
        'no-bitwise': 'error',                                                                    //  disallow bitwise operators
        'no-continue': 'off',                                                                     //  disallow continue statements
        'no-inline-comments': 'off',                                                              //  disallow inline comments after code
        'no-lonely-if': 'error',                                                                  //  disallow if statements as the only statement in else blocks
        'no-mixed-operators': 'error',                                                            //  disallow mixed binary operators
        'no-mixed-spaces-and-tabs': 'error',                                                      //  disallow mixed spaces and tabs for indentation
        'no-multi-assign': 'off',                                                                 //  disallow Use of Chained Assignment Expressions
        'no-multiple-empty-lines': ['error', {max: 1}],                                           //  disallow multiple empty lines
        'no-negated-condition': 'error',                                                          //  disallow negated conditions
        'no-nested-ternary': 'error',                                                             //  disallow nested ternary expressions
        'no-new-object': 'error',                                                                 //  disallow Object constructors
        'no-plusplus': 'off',                                                                     //  disallow the unary operators ++ and --
        'no-restricted-syntax': 'off',                                                            //  disallow specified syntax
        'no-tabs': 'error',                                                                       //  disallow all tabs
        'no-ternary': 'off',                                                                      //  disallow ternary operators
        'no-trailing-spaces': 'error',                                                            //  disallow trailing whitespace at the end of lines
        'no-underscore-dangle': 'off',                                                            //  disallow dangling underscores in identifiers
        'no-unneeded-ternary': 'error',                                                           //  disallow ternary operators when simpler alternatives exist
        'no-whitespace-before-property': 'error',                                                 //  disallow whitespace before properties
        'nonblock-statement-body-position': 'off',                                                //  nonblock-statement-body-position
        'object-curly-newline': ['error', {consistent: true}],                                    //  enforce consistent line breaks inside braces
        'object-curly-spacing': 'error',                                                          //  enforce consistent spacing inside braces
        'object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],               //  enforce placing object properties on separate lines
        'one-var': 'off',                                                                         //  enforce variables to be declared either together or separately in functions
        'one-var-declaration-per-line': 'off',                                                    //  require or disallow newlines around variable declarations
        'operator-assignment': 'off',                                                             //  require or disallow assignment operator shorthand where possible
        'operator-linebreak': ['error', 'before'],                                                //  enforce consistent linebreak style for operators
        'padded-blocks': ['error', 'never'],                                                      //  require or disallow padding within blocks
        'padding-line-between-statements': ['error',                                              //  require or disallow padding lines between statements
            {blankLine: 'always', prev: '*', next: 'return'},
            {blankLine: 'any', prev: 'directive', next: 'directive'},
            {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
            {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
            {blankLine: 'always', prev: ['import'], next: '*'},
            {blankLine: 'any', prev: ['import'], next: ['import']}],
        'prefer-object-spread': 'off',                                                            //  Prefer use of an object spread over Object.assign
        'quote-props': ['error', 'consistent-as-needed'],                                         //  require quotes around object literal property names
        'quotes': ['error', 'single'],                                                            //  enforce the consistent use of either backticks, double, or single quotes
        'semi': 'error',                                                                          //  require or disallow semicolons instead of ASI
        'semi-spacing': 'error',                                                                  //  enforce consistent spacing before and after semicolons
        'semi-style': 'error',                                                                    //  enforce location of semicolons
        'sort-keys': 'off',                                                                       //  require object keys to be sorted
        'sort-vars': 'off',                                                                       //  require variables within the same declaration block to be sorted
        'space-before-blocks': 'error',                                                           //  enforce consistent spacing before blocks
        'space-before-function-paren': ['error', {                                                //  enforce consistent spacing before function definition opening parenthesis
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        'space-in-parens': 'error',                                                               //  enforce consistent spacing inside parentheses
        'space-infix-ops': 'error',                                                               //  require spacing around infix operators
        'space-unary-ops': 'error',                                                               //  enforce consistent spacing before or after unary operators
        'spaced-comment': 'error',                                                                //  enforce consistent spacing after the SLASHSLASH or /* in a comment
        'switch-colon-spacing': 'error',                                                          //  enforce spacing around colons of switch statements
        'template-tag-spacing': 'error',                                                          //  require or disallow spacing between template tags and their literals
        'unicode-bom': 'error',                                                                   //  require or disallow the Unicode Byte Order Mark (BOM)
        'wrap-regex': 'off',                                                                      //  require parenthesis around regex literals
    },
};
