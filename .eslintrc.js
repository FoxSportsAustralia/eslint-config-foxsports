module.exports = {
    root: true,
    extends: [
        './src/configs/node.js',
    ],
    rules: {
        'import/no-unused-modules': 'off', // eslint modules is going to do all our importing
        'import/unambiguous': 'off', // eslint modules is going to do all our importing
    },
}
