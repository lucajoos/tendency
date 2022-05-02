# tendency v1.0.1

Conditional string generation.

[![npm](https://img.shields.io/npm/v/tendency)](https://www.npmjs.com/package/tendency)
[![npm](https://img.shields.io/npm/dm/tendency)](https://www.npmjs.com/package/tendency)

```javascript
import tendency, { not } from 'src/tendency';

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
import tendency from 'src/tendency';
```

In Node.js:

```javascript
const tendency = require('src/tendency');
```

## Configuration
Passing a [`Config`](./src/types/Config.d.ts) object overwrites the current configuration.
Configuration are inherited by underlying groups/arrays by default.

```javascript
tendency({ separator: '-' }, 'a', 'b', 'c');
// returns: 'a-b-c'
```

## API
[See API reference]('./api.md')