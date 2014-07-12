getValueR
---------
Returns the value from an array or an object.

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