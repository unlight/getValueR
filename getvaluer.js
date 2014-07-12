"use strict";
var isNullOrUndefined = require("util").isNullOrUndefined;
if (typeof isNullOrUndefined === "undefined") {
	isNullOrUndefined = function(arg) {
		return arg == null;
	};
}

/**
 * Return the value from an array or an object.
 * @param  {string} key           The key or property name of the value (can be a string consisting of dot notation that will be used to recursivly traverse the collection).
 * @param  {mixed} collection     The array or object to search.
 * @param  {mixed} result         The value to return if the key does not exist.
 * @return {mixed}                The value from the array or object.
 */
function getValueR(key, collection, result) {
	if (typeof result === "undefined") {
		result = false;
	}
	if (isNullOrUndefined(collection)) {
		return result;
	}
	var path = key.split(".");
	var value = collection;
	for (var i = 0, length = path.length; i < length; i++) {
		var subkey = path[i];
		if (typeof value[subkey] !== "undefined") {
			value = value[subkey];
		} else {
			return result;
		}
	}
	return value;
}

module.exports = getValueR;