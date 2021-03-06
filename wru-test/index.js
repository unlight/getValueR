var fs = require("fs");
var wru = require("wru");
var extname = require("path").extname;
var pathJoin = require("path").join;

fs.readdir(__dirname, function(err, files) {
	if (err) throw err;

	var testCollection = [];
	for (var i = files.length - 1; i >= 0; i--) {
		var file = files[i];
		if (file === "index.js") continue;
		if (file[0] === "~") continue;
		if (extname(file) !== ".js") continue;
		var test = require(__dirname + "/" + file);
		testCollection = testCollection.concat(test);
	}

	wru.test(testCollection);
});