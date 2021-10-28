/**
 * Filename Rules (v1.3.2)
 *
 * https://github.com/selaux/eslint-plugin-filenames
 *
 * Not overly strict, but ensure you're always lower case, and kebab.
 */
 module.exports = {
    plugins: ['filenames'],
    rules: {
        'filenames/match-regex':    ['error', '^[a-z0-9-]+$'],  // A rule to enforce a certain file naming convention using a regular expression.
        'filenames/match-exported': 'off',                      // Match the file name against the default exported value in the module. Files that dont have a default export will be ignored. The exports of index.js are matched against their parent directory.
        'filenames/no-index':       'off',                      // Don't allow index.js files
    },
};
