# Linting & Formatting

## Background

If you haven’t already I suggest you set up your development environment (Atom, Sublime, vim, emacs…) with a **linting** plugin, and configure it to use the airbnb-base javascript style. This is a very helpful step to prepare you for contributing to large shared codebases.

This has a lot of benefits. It helps you to write good javascript with uniform style. It helps you to catch syntactical errors in your code right away. And the IDE plugins allow you to see the linting errors (or warnings) right in the code (linters can also be run from the command line, and print out a list of errors — then you need to go back to your code and find the error).

To get interactive linting you’ll install some plugins for your IDE, and I recommend you set up the actual linting configuration on a project-by-project basis. Each project will have a `.eslintrc` file that defines what style you want to use, and any specific rules you want to check for or ignore.

I also recommend you set up a **formatter** to, as you might have guessed, help you format your code. `prettier-atom` is an excellent plugin that obeys your `.eslintrc` config.


## Guides

This is a good guide for getting linting setup in Atom: http://www.acuriousanimal.com/2016/08/14/configuring-atom-with-eslint.html

This guide for VSCode looks pretty good (note: you do not need babel-eslint unless you're transpiling ES7 or jsx. using flow is optional): https://hackernoon.com/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213


## Justin's setup

When I start a new project I do the following:
1. Install the eslint npm packages using the OSX install command that airbnb recommends here: https://www.npmjs.com/package/eslint-config-airbnb-base
2. Optionally install a plugin for mocha support using `npm install --save-dev eslint-plugin-mocha`
3. Copy in my generic `.eslintrc` file (see below)

Here's my setup:
- atom
  - Facebook's Nuclide IDE/package https://nuclide.io/
    - You may be interested to know that a "nuclide" is "a distinct kind of atom or nucleus characterized by a specific number of protons and neutrons."
  - *(if you don't use nuclide you'll need to install the `linter` package https://atom.io/packages/linter)*
  - linter-eslint package https://atom.io/packages/linter-eslint
  - prettier-atom (formatter) package https://atom.io/packages/prettier-atom
- npm packages (installed locally via the airbnb install script here: https://www.npmjs.com/package/eslint-config-airbnb-base)
  - "eslint"
  - "eslint-config-airbnb-base" which gives you the airbnb javascript style guide eslint rules
  - "eslint-plugin-import"
  - "eslint-plugin-mocha" (install this one manually)
- `.eslintrc` configuration file (see below)

**.eslintrc**
```json
{
  "extends": "airbnb-base",
  "plugins": [
    "mocha"
  ],
  "rules": {
    "mocha/no-exclusive-tests": "error",
    "max-len": [2, 80],
    "semi": [1, "never"]
  }
}
```
