module.exports = {
    env: { // https://eslint.org/docs/user-guide/configuring#specifying-environments
        browser: true,
        commonjs: true,
        es6: true, // (this automatically sets the ecmaVersion parser option to 6)
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
    ],
};
