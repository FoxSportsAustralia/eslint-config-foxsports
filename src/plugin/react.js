/**
 * React (v7.26.1)
 *
 * https://github.com/yannickcr/eslint-plugin-react
 */
 module.exports = {
    plugins: ['react'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react/boolean-prop-naming': ['error', {                     // Enforce consistent naming of boolean props
            rule: '^(is|has|can|was|will|should|did|had)[A-Z]([A-Za-z0-9]?)+',
            validateNested: true,
        }],
        'react/button-has-type': 'error',                            // Prevent usage of button elements without an explicit type attribute
        'react/default-props-match-prop-types': ['error', {          // Enforce all defaultProps have a corresponding non-required PropType
            allowRequiredDefaults: true,
        }],
        'react/destructuring-assignment': 'off',                     // Enforce consistent usage of destructuring assignment of props, state, and context
        'react/display-name': 'off',                                 // Prevent missing displayName in a React component definition
        'react/forbid-component-props': 'off',                       // Forbid certain props on Components
        'react/forbid-dom-props': 'off',                             // Forbid certain props on DOM Nodes
        'react/forbid-elements': 'off',                              // Forbid certain elements
        'react/forbid-foreign-prop-types': 'error',                  // Forbid using another component’s prop types unless specifically imported/exported
        'react/forbid-prop-types': ['error', {forbid: ['array']}],   // Forbid certain propTypes
        'react/function-component-definition': 'off',                // Enforce a specific function type for function components
        'react/no-access-state-in-setstate': 'error',                // Prevent using this.state within a this.setState
        'react/no-adjacent-inline-elements': 'off',                  // Prevent adjacent inline elements not separated by whitespace
        'react/no-array-index-key': 'off',                           // Prevent usage of Array index in keys
        'react/no-arrow-function-lifecycle': 'error',                // Prevent usage of arrow functions for lifecycle methods
        'react/no-children-prop': 'off',                             // Prevent passing children as props
        'react/no-danger': 'error',                                  // Prevent usage of dangerous JSX properties
        'react/no-danger-with-children': 'error',                    // Prevent problem with children and props.dangerouslySetInnerHTML
        'react/no-deprecated': 'error',                              // Prevent usage of deprecated methods
        'react/no-did-mount-set-state': 'error',                     // Prevent usage of setState in componentDidMount
        'react/no-did-update-set-state': 'error',                    // Prevent usage of setState in componentDidUpdate
        'react/no-direct-mutation-state': 'error',                   // Prevent direct mutation of this.state
        'react/no-find-dom-node': 'error',                           // Prevent usage of findDOMNode
        'react/no-is-mounted': 'error',                              // Prevent usage of isMounted
        'react/no-multi-comp': 'off',                                // Prevent multiple component definition per file
        'react/no-namespace': 'error',                               // Enforce that namespaces are not used in React elements
        'react/no-redundant-should-component-update': 'error',       // Prevent usage of shouldComponentUpdate when extending React.PureComponent
        'react/no-render-return-value': 'error',                     // Prevent usage of the return value of React.render
        'react/no-set-state': 'off',                                 // Prevent usage of setState
        'react/no-string-refs': 'error',                             // Prevent using string references in ref attribute.
        'react/no-this-in-sfc': 'error',                             // Prevent this from being used in stateless functional components
        'react/no-typos': 'error',                                   // Ensure no casing typos were made declaring static class properties and lifecycle methods
        'react/no-unescaped-entities': 'off',                        // Prevent invalid characters from appearing in markup
        'react/no-unknown-property': 'error',                        // Prevent usage of unknown DOM property (fixable)
        'react/no-unsafe': ['error', {checkAliases: true}],          // Prevent usage of unsafe lifecycle methods
        'react/no-unstable-nested-components': 'error',              // Prevent creating unstable components inside components
        'react/no-unused-class-component-methods': 'error',          // Prevent declaring unused methods of component class
        'react/no-unused-prop-types': 'error',                       // Prevent definitions of unused prop types
        'react/no-unused-state': 'error',                            // Prevent definitions of unused state
        'react/no-will-update-set-state': 'error',                   // Prevent usage of setState in componentWillUpdate
        'react/prefer-es6-class': 'error',                           // Enforce ES5 or ES6 class for React Components
        'react/prefer-exact-props': 'off',                           // Prefer exact proptype definitions
        'react/prefer-read-only-props': 'off',                       // Enforce that props are read-only
        'react/prefer-stateless-function': 'error',                  // Enforce stateless React Components to be written as a pure function
        'react/prop-types': 'error',                                 // Prevent missing props validation in a React component definition
        'react/react-in-jsx-scope': 'error',                         // Prevent missing React when using JSX
        'react/require-default-props': 'off',                        // Enforce a defaultProps definition for every prop that is not a required prop
        'react/require-optimization': 'off',                         // Enforce React components to have a shouldComponentUpdate method
        'react/require-render-return': 'error',                      // Enforce ES5 or ES6 class for returning value in render function
        'react/self-closing-comp': 'error',                          // Prevent extra closing tags for components without children (fixable)
        'react/sort-comp': 'error',                                  // Enforce component methods order
        'react/sort-prop-types': 'off',                              // Enforce propTypes declarations alphabetical sorting
        'react/state-in-constructor': 'off',                         // Enforce state initialization style
        'react/static-property-placement': 'error',                  // Enforces where React component static properties should be positioned
        'react/style-prop-object': 'error',                          // Enforce style prop value being an object
        'react/void-dom-elements-no-children': 'error',              // Prevent void DOM elements (e.g. <img />, <br />) from receiving children (react/void-dom-elements-no-children)

        /**
         * JSX-specific rules
         * https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules
         */
        'react/jsx-boolean-value': ['error', 'always'],                          // Enforce boolean attributes notation in JSX (fixable)
        'react/jsx-child-element-spacing': 'off',                                // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
        'react/jsx-closing-bracket-location': 'error',                           // Validate closing bracket location in JSX (fixable)
        'react/jsx-closing-tag-location': 'error',                               // Enforce the closing tag location for multi-line JSX elements
        'react/jsx-curly-brace-presence': ['error', 'never'],                    // Enforce children don’t have unnecessary curly braces eg <Element prop={'value'}>{'Hello world'}</Element>
        'react/jsx-curly-newline': 'off',                                        // Enforce linebreaks in curly braces in JSX attributes and expressions
        'react/jsx-curly-spacing': ['error', 'never'],                           // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
        'react/jsx-equals-spacing': 'error',                                     // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
        'react/jsx-filename-extension': 'off',                                   // Restrict file extensions that may contain JSX
        'react/jsx-first-prop-new-line': ['error', 'multiline'],                 // Enforce position of the first prop in JSX (fixable)
        'react/jsx-fragments': ['error', 'element'],                             // Enforce shorthand or standard form for React fragments
        'react/jsx-handler-names': 'off',                                        // Enforce event handler naming conventions in JSX
        'react/jsx-indent': 'error',                                             // Validate JSX indentation
        'react/jsx-indent-props': 'error',                                       // Validate props indentation in JSX (fixable)
        'react/jsx-key': 'off',                                                  // Validate JSX has key prop when in array or iterator
        'react/jsx-max-depth': 'off',                                            // Validate JSX maximum depth
        'react/jsx-max-props-per-line': ['error', {maximum: 5}],                 // Limit maximum of props on a single line in JSX
        'react/jsx-newline': 'off',                                              // Require or prevent a new line after jsx elements and expressions
        'react/jsx-no-bind': 'off',                                              // Prevent usage of .bind() and arrow functions in JSX props
        'react/jsx-no-comment-textnodes': 'error',                               // Prevent comments from being inserted as text nodes
        'react/jsx-no-constructed-context-values': 'error',                      // Prevent react contexts from taking non-stable values
        'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}],           // Prevent duplicate props in JSX
        'react/jsx-no-literals': 'off',                                          // Prevent usage of unwrapped JSX strings
        'react/jsx-no-script-url': 'error',                                      // Prevent usage of javascript: URLs
        'react/jsx-no-target-blank': 'error',                                    // Prevent usage of unsafe target='_blank'
        'react/jsx-no-undef': 'error',                                           // Disallow undeclared variables in JSX
        'react/jsx-no-useless-fragment': 'error',                                // Disallow unnecessary fragments
        'react/jsx-one-expression-per-line': 'off',                              // This option limits every line in JSX to one expression each.
        'react/jsx-pascal-case': 'error',                                        // Enforce PascalCase for user-defined JSX components
        'react/jsx-props-no-multi-spaces': 'off',                                // Disallow multiple spaces between inline JSX props
        'react/jsx-props-no-spreading': 'off',                                   // Disallow JSX props spreading
        'react/jsx-sort-default-props': 'off',                                   // Disallow JSX props spreading
        'react/jsx-sort-props': 'off',                                           // Enforce props alphabetical sorting
        'react/jsx-tag-spacing': 'error',                                        // Validate whitespace in and around the JSX opening and closing brackets (fixable)
        'react/jsx-uses-react': 'error',                                         // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-vars': 'error',                                          // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-wrap-multilines': ['error', {                                 // Prevent missing parentheses around multilines JSX (fixable)
            arrow: 'parens-new-line',
            assignment: 'parens-new-line',
            condition: 'parens-new-line',
            declaration: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line',
            return: 'parens-new-line',
        }],
    },
};
