// https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser
module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: false,
        // babelOptions: {
        //     configFile: 'path/to/config.js',
        // },
    },
};
