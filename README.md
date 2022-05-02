# tendency v1.0.3

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
## Functions

<dl>
<dt><a href="#tendency">tendency(...parameters)</a> ⇒ <code>string</code></dt>
<dd><p>Transforms specified parameters into joined string based on conditions.</p>
</dd>
<dt><a href="#any">any(...parameters)</a> ⇒ <code>Flag</code></dt>
<dd><p>Appends parameters independently of the conditions.</p>
</dd>
<dt><a href="#every">every(...parameters)</a> ⇒ <code>Array.&lt;Parameter&gt;</code></dt>
<dd><p>Appends parameters if all conditions are true.</p>
</dd>
<dt><a href="#group">group(...parameters)</a> ⇒ <code>Array.&lt;Parameter&gt;</code></dt>
<dd><p>Groups parameters into independent environment.</p>
</dd>
<dt><a href="#match">match(count, ...parameters)</a> ⇒ <code>Flag</code></dt>
<dd><p>Appends parameters if the given count of conditions are true.</p>
</dd>
<dt><a href="#max">max(count, ...parameters)</a> ⇒ <code>Flag</code></dt>
<dd><p>Appends parameters if the given maximum number of valid conditions is not exceeded.</p>
</dd>
<dt><a href="#min">min(count, ...parameters)</a> ⇒ <code>Flag</code></dt>
<dd><p>Appends parameters if the minimum number of valid conditions are true.</p>
</dd>
<dt><a href="#some">some(...parameters)</a> ⇒ <code>Flag</code></dt>
<dd><p>Appends parameters if at least one condition is valid.</p>
</dd>
</dl>

<a name="tendency"></a>

## tendency(...parameters) ⇒ <code>string</code>
Transforms specified parameters into joined string based on conditions.

**Kind**: global function  
**Returns**: <code>string</code> - - Converted result  

| Param | Type | Description |
| --- | --- | --- |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(true, 'a', 'b')
```
<a name="any"></a>

## any(...parameters) ⇒ <code>Flag</code>
Appends parameters independently of the conditions.

**Kind**: global function  
**Returns**: <code>Flag</code> - - Corresponding Flag  

| Param | Type | Description |
| --- | --- | --- |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
any('a', 'b')
```
<a name="every"></a>

## every(...parameters) ⇒ <code>Array.&lt;Parameter&gt;</code>
Appends parameters if all conditions are true.

**Kind**: global function  
**Returns**: <code>Array.&lt;Parameter&gt;</code> - - Specified parameters  

| Param | Type | Description |
| --- | --- | --- |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
every('a', 'b')
```
<a name="group"></a>

## group(...parameters) ⇒ <code>Array.&lt;Parameter&gt;</code>
Groups parameters into independent environment.

**Kind**: global function  
**Returns**: <code>Array.&lt;Parameter&gt;</code> - - Specified parameters  

| Param | Type | Description |
| --- | --- | --- |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
group('a', 'b')
```
<a name="match"></a>

## match(count, ...parameters) ⇒ <code>Flag</code>
Appends parameters if the given count of conditions are true.

**Kind**: global function  
**Returns**: <code>Flag</code> - - Corresponding Flag  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | Exact number of valid conditions |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
match(1, 'a', 'b')
```
<a name="max"></a>

## max(count, ...parameters) ⇒ <code>Flag</code>
Appends parameters if the given maximum number of valid conditions is not exceeded.

**Kind**: global function  
**Returns**: <code>Flag</code> - - Corresponding Flag  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | Maximum number of valid conditions |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
max(1, 'a', 'b')
```
<a name="min"></a>

## min(count, ...parameters) ⇒ <code>Flag</code>
Appends parameters if the minimum number of valid conditions are true.

**Kind**: global function  
**Returns**: <code>Flag</code> - - Corresponding Flag  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | Minimum number of valid conditions |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
min(1, 'a', 'b')
```
<a name="some"></a>

## some(...parameters) ⇒ <code>Flag</code>
Appends parameters if at least one condition is valid.

**Kind**: global function  
**Returns**: <code>Flag</code> - - Corresponding Flag  

| Param | Type | Description |
| --- | --- | --- |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
some('a', 'b')
```
