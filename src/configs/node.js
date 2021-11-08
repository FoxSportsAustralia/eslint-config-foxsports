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
    extends: [
        '../rules/index.js',
        '../plugin/compat--node.js',
        '../plugin/filenames.js',
        '../plugin/import--node.js',
        '../plugin/jsdoc.js',
        '../plugin/node.js',
        '../plugin/react-hooks.js',
    ],
};
