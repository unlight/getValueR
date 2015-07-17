getValueR
---------
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
