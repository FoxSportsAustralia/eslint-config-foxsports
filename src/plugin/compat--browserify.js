const BROWSERSLIST = [
    'last 2 Chrome versions',
    'last 2 ChromeAndroid versions', // android chrome, slightly different from normal chrome apparently
    'last 2 Edge versions',
    'last 2 Firefox versions',
    'last 2 iOS versions', // IOS safari, slightly different from normal chrome apparently
    'last 2 Safari versions',
    'node 10', // hardcoded to LTS version, as there currently isn't a nice query for it in browserslist https://github.com/browserslist/browserslist/issues/350#issuecomment-461593528
    'not dead', // just in case one of these browsers dies (good luck firefox), stop automatically supporting their final version
];

// https://www.npmjs.com/package/eslint-plugin-compat
module.exports = {
    plugins: ['compat'],
    rules: {
        'compat/compat': 'error',
    },
};
