# tendency v1.1.1

Conditional string generation.

[![npm](https://img.shields.io/npm/v/tendency)](https://www.npmjs.com/package/tendency)
[![npm](https://img.shields.io/npm/dm/tendency)](https://www.npmjs.com/package/tendency)

```javascript
import tendency, { not } from 'tendency/lib/esm';

tendency(true, 'a', 'b', [ false, not('c') ]);
// returns: 'a b c'
```

## Installation
Install using [NPM](https://npmjs.org) (or yarn):

```
$ npm i -g npm
$ npm i --save tendency
```

As module:

```javascript
import tendency from 'tendency/lib/esm';
```

In Node.js:

```javascript
const tendency = require('tendency/lib/cjs');
```

## Configuration
Passing a [`Config`](src/types/Config.d.ts) object overwrites the current configuration.
Configuration are inherited by underlying groups/arrays by default.

```javascript
tendency({ separator: '-' }, 'a', 'b', 'c');
// returns: 'a-b-c'
```
