# eslint-config-foxsports
Web developer javascript standards for Kayo & Fox Sports

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-config-foxsports`:

```
$ npm install eslint-config-foxsports --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-foxsports` globally.

## Usage

Add `foxsports` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "extends": [
        "foxsports"
    ]
}
```
