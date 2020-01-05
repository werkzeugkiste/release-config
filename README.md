# @werkzeugkiste/release-config <img src="https://raw.githubusercontent.com/werkzeugkiste/release-config/master/semantic-release.svg?sanitize=true" height="40" align="right">

This is the shared [`semantic-release`](https://semantic-release.gitbook.io/) config for all things [@werkzeugkiste](https://www.github.com/werkzeugkiste) related. It includes a `semantic-release` config for libraries and a [`commitlint`](https://commitlint.js.org/) config that works well together with the `semantic-release` config. It also has `semantic-release` and `commitlint` as direct dependencies so it does not need to be installed separately.

With this `semantic-release` config you get the following features out of the box:

- version number detection for releases based on commit messsages
- version number is written back to package.json
- publishing of new release versions to npm
- creation of tags incl. release notes on GitHub for every new release
- generation of a CHANGELOG.md file containing all changes since last release
- rejection of commits that are not according to the commit message convention (optional)

The `semantic-release` and `commitlint` configs are basically based on the Angular config/preset but extended with some additional features and custom commit types.

## Installation

```sh
# installation using yarn
yarn add --dev @werkzeugkiste/release-config
```

```sh
# installation using npm
npm install --develop @werkzeugkiste/release-config
```

## Usage

If you want to use this config as base in any of your projects, you need to create a `relase.config.js` file in your project folder that re-exports the `semantic-release` config from `@werkzeugkiste/relase-config`.

You can do that by creating a file named `release.config.js` in your project's root folder with the following content:

```js
module.exports = require('@werkzeugkiste/release-config/release.config.js');
```

Optionally, you can also use the corresponding [`commitlint`](https://commitlint.js.org/) config so that commits are only allowed if they are valid `semantic-release` style commits. That means they must have a commit message starting with a _type_ (e.g. `fix:`, `feat:`, `chore:`, ...) followed by an optional scope (e.g. `fix(core):`, `feat(api)`, ...) and a subject (i.e. the actual commit header). Types and scopes are case sensitive and must be all lowercase. Your commit may contain additional description in the commit message body. Have a look at the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) for more info. You can find the full commit type/release rules config in [`release.config.js`](./release.config.js).

In order to use the `commitlint` config (and I'd strongly recommend you to do so!) create a file named `.commitlintrc.js` in your project's root folder with the following content:

```js
module.exports = require('@werkzeugkiste/release-config/.commitlintrc.js');
```

Afterwards you need to install and configure [`husky`](https://github.com/typicode/husky) so that git hooks are run whenever something git related happens. Your `.huskyrc` should be updated to look like this:

```js
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    // your other hooks:
    // [...]
  }
}
```

## CI/CD integration

`semantic-release` only makes sense if you integrate it into your CD/CI process. Check out the official docs on [CI configuration](https://semantic-release.gitbook.io/semantic-release/usage/ci-configuration) and the [CI recipes](https://semantic-release.gitbook.io/semantic-release/recipes/recipes#ci-configurations) to learn more about how you can use it with the CI tool of your choice.

Since this config is using the GitHub and npm plugins, you must set a `GH_TOKEN` and an `NPM_TOKEN` environment variable in your CI environment as described on the docs page.
