getValueR
---------

[![Greenkeeper badge](https://badges.greenkeeper.io/unlight/getValueR.svg)](https://greenkeeper.io/)
Returns the value from an array or an object.
```js
getValueR(key, collection, result)
{string} key           The key or property name of the value (can be a string consisting of dot notation that will be used to recursivly traverse the collection).
{mixed} collection     The array or object to search.
{mixed} result         The value to return if the key does not exist.
```
Example
-------
```js
var getValueR = require("getValueR");
var object = {
	a: {
		b: {
			c: 1,
			d: [1,2,3],
			e: false
		}
	}
};
getValueR("a.b.c", object); // 1
getValueR("a.b.e", object); // false
getValueR("a.b.notExists", object, null); // null
// Arrays
var array = [["a", "b", "c"], ["A"], ["X"]];
getValueR("0.0", array); // "a"
getValueR("1.0", array); // "A"
```

SIMILAR PROJECTS
----------------
https://github.com/sindresorhus/dot-prop  
http://davidwalsh.name/nested-objects  
https://github.com/zewish/oget  
https://www.npmjs.com/package/lodash.get  

BENCHMARK
---------
```cmd
getvaluer (this module) x 3,251,662 ops/sec ±3.58% (78 runs sampled)
sindresorhus/dot-prop x 3,438,099 ops/sec ±2.16% (92 runs sampled)
objectifier (davidwalsh) x 1,452,507 ops/sec ±0.60% (98 runs sampled)
'getvaluer (this module)' is etalon
'sindresorhus/dot-prop' at 1.06x faster
'objectifier (davidwalsh)' at 2.24x slower
```
`dot-prop` is a little bit faster, but it does not allow to pass default value.