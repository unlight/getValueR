var tape = require("tape");
var lib = require("..");
var basename = require("path").basename;


tape(basename(__filename), function(t) {
	var object = [["a", "b", "c"], ["A"], ["X"]];
	t.equal(lib("0.0", object), "a");
	t.equal(lib("1.0", object), "A");
	t.equal(lib("-1.0", object, false), false);
	t.end();
});