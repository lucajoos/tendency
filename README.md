# tendency v1.2.1

Conditional string generation.

[![npm](https://img.shields.io/npm/v/tendency)](https://www.npmjs.com/package/tendency)
[![npm](https://img.shields.io/npm/dm/tendency)](https://www.npmjs.com/package/tendency)

```javascript
import tendency, { not } from 'tendency/lib/esm';

tendency(true, 'a', 'b', [ false, not.every('c') ]);
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
## Members

<dl>
<dt><a href="#not">not</a></dt>
<dd><p>Provides inversions of all given functions.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#tendency">tendency(...parameters)</a> ⇒ <code>string</code></dt>
<dd><p>Transforms specified parameters into joined string based on conditions.
If no conditions are given, the given environment is both <code>true</code> and <code>false</code>.</p>
<p>If no flags are given, the flag returned from <code>every()</code> is assumed.
Thus all conditions of the current environment must be <code>true</code>.</p>
</dd>
<dt><a href="#any">any(...parameters)</a> ⇒ <code>Flag</code></dt>
<dd><p>Appends parameters independently of the conditions.
These parameters are always appended.</p>
</dd>
<dt><a href="#every">every(...parameters)</a> ⇒ <code>Array.&lt;Parameter&gt;</code></dt>
<dd><p>Appends parameters if all conditions are <code>true</code>.
This always refers to the current environment.</p>
</dd>
<dt><a href="#group">group(...parameters)</a> ⇒ <code>Array.&lt;Parameter&gt;</code></dt>
<dd><p>Groups parameters into independent environment.
All previously set conditions will be reset as a result.
Alternatively, parameters can be moved into a separate array.</p>
</dd>
<dt><a href="#match">match(count, ...parameters)</a> ⇒ <code>Flag</code></dt>
<dd><p>Appends parameters if the given <code>count</code> of conditions are <code>true</code>.</p>
</dd>
<dt><a href="#max">max(count, ...parameters)</a> ⇒ <code>Flag</code></dt>
<dd><p>Appends parameters if the given maximum <code>count</code> of <code>true</code> conditions is not exceeded.
Parameters are also appended if <code>count</code> is exactly equal to the number of conditions.</p>
</dd>
<dt><a href="#min">min(count, ...parameters)</a> ⇒ <code>Flag</code></dt>
<dd><p>Appends the parameters if the given minimum <code>count</code> of <code>true</code> conditions is met.
Parameters are also appended if <code>count</code> is exactly equal to the number of conditions.</p>
</dd>
<dt><a href="#some">some(...parameters)</a> ⇒ <code>Flag</code></dt>
<dd><p>Appends parameters if at least one condition is <code>true</code>.
This always refers to the current environment.</p>
</dd>
</dl>

<a name="not"></a>

## not
Provides inversions of all given functions.

**Kind**: global variable  

* [not](#not)
    * [.every(...parameters)](#not.every) ⇒ <code>Array.&lt;Parameter&gt;</code>
    * [.match(count, ...parameters)](#not.match) ⇒ <code>Flag</code>
    * [.max(count, ...parameters)](#not.max) ⇒ <code>Flag</code>
    * [.min(count, ...parameters)](#not.min) ⇒ <code>Flag</code>
    * [.some(...parameters)](#not.some) ⇒ <code>Flag</code>

<a name="not.every"></a>

### not.every(...parameters) ⇒ <code>Array.&lt;Parameter&gt;</code>
Appends parameters if all conditions are `false`.
This always refers to the current environment.
Inversion of the function every().

**Kind**: static method of [<code>not</code>](#not)  
**Returns**: <code>Array.&lt;Parameter&gt;</code> - - Specified parameters  

| Param | Type | Description |
| --- | --- | --- |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(false, false, true, not.every('a', 'b'))
// returns: ''

tendency(false, false, not.every('a', 'b'))
// returns: 'a b'
```
<a name="not.match"></a>

### not.match(count, ...parameters) ⇒ <code>Flag</code>
Appends parameters if the given count of conditions are `false`.
Inversion of the function match().

**Kind**: static method of [<code>not</code>](#not)  
**Returns**: <code>Flag</code> - - Corresponding flag  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | Exact number of invalid conditions |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(true, false, not.match(2, 'a', 'b'))
// returns: ''

tendency(false, false, not.match(2, 'a', 'b'))
// returns: 'a b'
```
<a name="not.max"></a>

### not.max(count, ...parameters) ⇒ <code>Flag</code>
Appends parameters if the given maximum `count` of `false` conditions is not exceeded.
Parameters are also appended if `count` is exactly equal to the number of conditions.
Inversion of the function max().

**Kind**: static method of [<code>not</code>](#not)  
**Returns**: <code>Flag</code> - - Corresponding flag  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | Maximum number of `false` conditions |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(not.max(1, 'a', 'b'))
// returns: 'a b'

tendency(false, not.max(1, 'a', 'b'))
// returns: 'a b'

tendency(false, false, not.max(1, 'a', 'b'))
// returns: ''
```
<a name="not.min"></a>

### not.min(count, ...parameters) ⇒ <code>Flag</code>
Appends the parameters if the given minimum `count` of `false` conditions is met.
Parameters are also appended if `count` is exactly equal to the number of conditions.
Inversion of the function min().

**Kind**: static method of [<code>not</code>](#not)  
**Returns**: <code>Flag</code> - - Corresponding flag  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | Minimum number of `false` conditions |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(not.min(1, 'a', 'b'))
// returns: ''

tendency(false, not.min(1, 'a', 'b'))
// returns: 'a b'

tendency(false, false, not.min(1, 'a', 'b'))
// returns: 'a b'
```
<a name="not.some"></a>

### not.some(...parameters) ⇒ <code>Flag</code>
Appends parameters if at least one condition is `false`.
This always refers to the current environment.
Inversion of the function some().

**Kind**: static method of [<code>not</code>](#not)  
**Returns**: <code>Flag</code> - - Corresponding flag  

| Param | Type | Description |
| --- | --- | --- |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(not.some('a', 'b'))
// returns: ''

tendency(false, not.some('a', 'b'))
// returns: 'a b'

tendency(true, false, not.some('a', 'b'))
// returns: 'a b'
```
<a name="tendency"></a>

## tendency(...parameters) ⇒ <code>string</code>
Transforms specified parameters into joined string based on conditions.
If no conditions are given, the given environment is both `true` and `false`.

If no flags are given, the flag returned from `every()` is assumed.
Thus all conditions of the current environment must be `true`.

**Kind**: global function  
**Returns**: <code>string</code> - - Generated string  

| Param | Type | Description |
| --- | --- | --- |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(true, 'a', 'b')
// returns: 'a b'
```
<a name="any"></a>

## any(...parameters) ⇒ <code>Flag</code>
Appends parameters independently of the conditions.
These parameters are always appended.

**Kind**: global function  
**Returns**: <code>Flag</code> - - Corresponding flag  

| Param | Type | Description |
| --- | --- | --- |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(true, any('a', 'b'))
// returns: 'a b'

tendency(false, any('a', 'b'))
// returns: ''

tendency(true, false, any('a', 'b'))
// returns: 'a b'
```
<a name="every"></a>

## every(...parameters) ⇒ <code>Array.&lt;Parameter&gt;</code>
Appends parameters if all conditions are `true`.
This always refers to the current environment.

**Kind**: global function  
**Returns**: <code>Array.&lt;Parameter&gt;</code> - - Specified parameters  

| Param | Type | Description |
| --- | --- | --- |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(true, false, every('a', 'b'))
// returns: ''

tendency(true, true, every('a', 'b'))
// returns: 'a b'
```
<a name="group"></a>

## group(...parameters) ⇒ <code>Array.&lt;Parameter&gt;</code>
Groups parameters into independent environment.
All previously set conditions will be reset as a result.
Alternatively, parameters can be moved into a separate array.

**Kind**: global function  
**Returns**: <code>Array.&lt;Parameter&gt;</code> - - Specified parameters  

| Param | Type | Description |
| --- | --- | --- |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(true, group(false, 'a', 'b'))
// returns: ''

tendency(false, group(true, 'a', 'b'))
// returns: ''

tendency(true, group('a', 'b'))
// returns: 'a b'

tendency(true, group(true, 'a', 'b'))
// returns: 'a b'


// Alternatively:
tendency(true, [false, 'a', 'b'])
// returns: ''
```
<a name="match"></a>

## match(count, ...parameters) ⇒ <code>Flag</code>
Appends parameters if the given `count` of conditions are `true`.

**Kind**: global function  
**Returns**: <code>Flag</code> - - Corresponding flag  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | Exact number of `true` conditions |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(true, false, match(2, 'a', 'b'))
// returns: ''

tendency(true, true, match(2, 'a', 'b'))
// returns: 'a b'
```
<a name="max"></a>

## max(count, ...parameters) ⇒ <code>Flag</code>
Appends parameters if the given maximum `count` of `true` conditions is not exceeded.
Parameters are also appended if `count` is exactly equal to the number of conditions.

**Kind**: global function  
**Returns**: <code>Flag</code> - - Corresponding flag  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | Maximum number of `true` conditions |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(max(1, 'a', 'b'))
// returns: 'a b'

tendency(true, max(1, 'a', 'b'))
// returns: 'a b'

tendency(true, true, max(1, 'a', 'b'))
// returns: ''
```
<a name="min"></a>

## min(count, ...parameters) ⇒ <code>Flag</code>
Appends the parameters if the given minimum `count` of `true` conditions is met.
Parameters are also appended if `count` is exactly equal to the number of conditions.

**Kind**: global function  
**Returns**: <code>Flag</code> - - Corresponding flag  

| Param | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | Minimum number of `true` conditions |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(min(1, 'a', 'b'))
// returns: ''

tendency(true, min(1, 'a', 'b'))
// returns: 'a b'

tendency(true, true, min(1, 'a', 'b'))
// returns: 'a b'
```
<a name="some"></a>

## some(...parameters) ⇒ <code>Flag</code>
Appends parameters if at least one condition is `true`.
This always refers to the current environment.

**Kind**: global function  
**Returns**: <code>Flag</code> - - Corresponding flag  

| Param | Type | Description |
| --- | --- | --- |
| ...parameters | <code>Parameter</code> | Multiple parameters |

**Example**  
```js
tendency(some('a', 'b'))
// returns: ''

tendency(true, some('a', 'b'))
// returns: 'a b'

tendency(true, false, some('a', 'b'))
// returns: 'a b'
```
