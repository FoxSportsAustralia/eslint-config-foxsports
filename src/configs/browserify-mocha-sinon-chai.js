module.exports = {
    env: { // https://eslint.org/docs/user-guide/configuring#specifying-environments
        browser: true,
        commonjs: true,
        es6: true,
        mocha: true,
    },
    globals: {
        it: true,
        sinon: true,
    },
    extends: [
        './src/parser/babel-eslint.js',
        './src/rules/index.js',
        './src/plugin/compat--browserify.js',
        './src/plugin/filenames.js',
        './src/plugin/import--browserify.js',
        './src/plugin/jsdoc.js',
        './src/plugin/jsx-a11y.js',
        './src/plugin/react.js',
        './src/plugin/node.js',
        './src/plugin/react-hooks.js',
        './src/plugin/codecept.js',
    ],
    rules: {
        'max-nested-callbacks':     'off',      // our tests are deep like our love
        'newline-per-chained-call': 'off',      // keep our tests a bit more compact
        'no-invalid-this':          'off',      // the context of `this` inside mocha functions is fine. Go away.
        'no-unused-expressions':    'off',      // allows expect(true).to.be.true;
        'no-restricted-properties': ['error', { // disallow certain properties on certain objects
            object: 'describe',
            property: 'only',
        }, {
            object: 'context',
            property: 'only',
        }, {
            object: 'it',
            property: 'only',
        }, {
            object: 'describe',
            property: 'skip',
        }, {
            object: 'context',
            property: 'skip',
        }, {
            object: 'it',
            property: 'skip',
        }],
        'object-curly-spacing': 'off',        // ignore object spacing, again typically JSON has spaces. We do not. But it's okay!
        'quote-props':          'off',        // ignore quotes on props, fairly common for JSON responses in tests ok!
        'import/default':       'off',        // Its a test... don't need to export
        'import/no-commonjs':   'off',        // Dynamic imports valid in tests
        'import/no-namespace':  'off',        // We need this for stubbing imports. Yes... that will break when we move off babel. Sorry future dev!
    },
};
