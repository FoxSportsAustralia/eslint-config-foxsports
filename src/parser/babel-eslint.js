// https://github.com/babel/babel-eslint
// As of the v11.x.x release, babel-eslint now requires Babel as a peer dependency and expects a valid Babel configuration file to exist. This ensures that the same Babel configuration is used during both linting and compilation.
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: false,
        // babelOptions: {
        //     configFile: 'path/to/config.js',
        // },
    },
};
