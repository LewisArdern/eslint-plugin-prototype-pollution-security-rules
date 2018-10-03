# Prototype Pollution Security Rules For ESLint

These rules are to supplement the security issues documented by Oliver Arteau at https://github.com/HoLyVieR/prototype-pollution-nsec18 some of the issues have not been resolved by the maintainers.

## NPM 

The main reason for these rules, is because  npm audit does not report that certain libraries have known problems:

![NPM](https://i.imgur.com/iis0Eea.jpg)

## ESLint

These rules will atleast tell you if vulnerable features are being utilized

![ESLint](https://i.imgur.com/9pQfG0C.jpg)


# Usage

If you want to scan this against your code bases, you can through the following:

* Install the rule locally or globally such as  `npm install eslint-plugin-prototype-pollution-security-rules`
* Add the rule to your `.eslintrc`
    * Inside plugins add `detect-prototype-pollution`
    * Inside rules add `"detect-prototype-pollution/detect-merge": 1` 
    * (full list below)

Example:

![ESLint Config](https://i.imgur.com/5n5tKjr.jpg)

## Rules

Current rules are:
* detect-merge - [link](https://www.npmjs.com/package/merge-recursive) and [link](https://www.npmjs.com/package/merge)
* detect-merge-objects -  [link](https://www.npmjs.com/package/merge-objects)
* detect-merge-options -  [link](https://www.npmjs.com/package/merge-options)
* detect-deep-extend-  [link](https://www.npmjs.com/package/deep-extend)