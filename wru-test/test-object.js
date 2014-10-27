var wru = require("wru");
var lib = require("..");
var basename = require("path").basename;

var tests = [];
tests[tests.length] = {
	name: basename(__filename),
	test: function() {
		var object = {
			a: {
				b: {
					c: 1,
					d: [1,2,3],
					e: false
				}
			}
		};
		wru.assert(lib("a.b.c", object) === 1);
		wru.assert(lib("a.b.e", object) === false);
		wru.assert(lib("a.b.notExists", object, null) === null);
		wru.assert(lib("notExists", object, false) === false);
		wru.assert(lib("notExists", null) === false);
	}
};

if (module.parent) {
	module.exports = tests;
} else {
	wru.test(tests);
}