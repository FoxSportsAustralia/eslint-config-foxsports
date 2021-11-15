/**
 * React Hooks Rules (v4.2.0)
 *
 * https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
 *
 */
module.exports = {
    plugins: ['react-hooks'],
    rules: {
        /**
         * https://reactjs.org/docs/hooks-faq.html#what-exactly-do-the-lint-rules-enforce
         * In particular, this rule enforces that:
         *  - Calls to hooks are either inside a PascalCase function (assumed to be a component) or
         *    another useSomething function (assumed to be a custom hook).
         *  - Hooks are called in the same order on every render.
         */
        'react-hooks/rules-of-hooks': 'error',      // Checks rules of hooks
        'react-hooks/exhaustive-deps': 'error',     // Checks effects dependencies
    },
};
