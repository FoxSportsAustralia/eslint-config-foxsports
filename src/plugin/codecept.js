/**
 * ESLint rules for codeceptjs (v1.3.0)
 *
 * https://github.com/poenneby/eslint-plugin-codeceptjs
 *
 */
module.exports = {
    plugins: ['codeceptjs'],
    rules: {
        'codeceptjs/no-actor-in-scenario': 'off',
        'codeceptjs/no-exclusive-tests': 'error',
        'codeceptjs/no-skipped-tests': 'error',
        'codeceptjs/no-pause-in-scenario': 'error',
    },
};
