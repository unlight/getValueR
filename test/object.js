var tape = require("tape");
var lib = require("..");
var basename = require("path").basename;


tape(basename(__filename), function(t) {
	var object = {
		a: {
			b: {
				c: 1,
				d: [1,2,3],
				e: false
			}
		}
	};
	t.equal(lib("a.b.c", object), 1);
	t.equal(lib("a.b.e", object), false);
	t.equal(lib("a.b.notExists", object, null), null);
	t.equal(lib("notExists", object, false), false);
	t.equal(lib("notExists", null), false);
	t.end();
});
