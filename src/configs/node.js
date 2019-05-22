module.exports = {
    env: { // https://eslint.org/docs/user-guide/configuring#specifying-environments
        es6: true,
        node: true,
    },
    globals: {
        after: true,
        afterEach: true,
        before: true,
        beforeEach: true,
        describe: true,
        it: true,
        sinon: true,
    },
    parserOptions: { // even though we plan to use babel-eslint as the parser, eslint currently requires this parserOptions set for some reason
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            impliedStrict: true,
            classes: true,
        },
    },
    extends: [
        '../rules/index.js',
        '../plugin/compat--node.js',
        '../plugin/filenames.js',
        '../plugin/import--node.js',
        '../plugin/jsdoc.js',
    ],
};
