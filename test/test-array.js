var wru = require("wru");
var lib = require("..");
var basename = require("path").basename;

var tests = [];
tests[tests.length] = {
	name: basename(__filename),
	test: function() {
		var object = [["a", "b", "c"], ["A"], ["X"]];
		wru.assert(lib("0.0", object) === "a");
		wru.assert(lib("1.0", object) === "A");
		wru.assert(lib("-1.0", object, false) === false);
	}
};

if (module.parent) {
	module.exports = tests;
} else {
	wru.test(tests);
}