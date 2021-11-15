// https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser
module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        sourceType: 'module',
        allowImportExportEverywhere: false,
    },
};
