# @jveguo16/is-gitnore

[![NPM version](https://img.shields.io/npm/v/@jveguo16/is-gitignore.svg?style=flat)](https://npmjs.org/package/@jveguo16/is-gitignore)
[![NPM downloads](http://img.shields.io/npm/dm/@jveguo16/is-gitignore.svg?style=flat)](https://npmjs.org/package/@jveguo16/is-gitignore)

判断文件是不是 `.gitignore` 文件中忽略的文件

## Install

```bash
npm install @jveguo16/is-gitignore
# or
yarn add @jveguo16/is-gitignore
```

## Sample

```js
// .gitignore
// [
//   '.DS_Store',        '/node_modules',
//   'npm-debug.log*',   'yarn-debug.log*',
//   'yarn-error.log*',  'test/unit/coverage',
//   'test/e2e/reports', 'selenium-debug.log',
//   '.idea/',           '.vscode/',
//   '.cache',           'coverage',
//   '.eslintcache',     'package-lock.json',
//   'stat/',            'temp/',
//   'dist/'
// ]

const gitIgnore = require("@jveguo16/is-gitignore");

const _ignore = gitIgnore.ignore({ folderPath: 'D:/test' });

// file or folder not exist
const res = _ignore.isIgnore("dist/index1.js"); // false
const res = _ignore.isIgnore("dist1"); // false

// file or folder is exist
const res = _ignore.isIgnore("dist/index.js"); // true
const res = _ignore.isIgnore("dist/"); // true
const res = _ignore.isIgnore("/dist"); // true
```

## LICENSE

MIT
