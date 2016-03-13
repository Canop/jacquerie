"use strict";

let	gulp = require("gulp"),
	concat = require("gulp-concat"),
	del = require("del"),
	rename = require("gulp-rename"),
	gutil = require("gulp-util"),
	eslint = require('gulp-eslint'),
	gulpif = require("gulp-if"),
	wrap = require("gulp-wrap"),
	uglify = require("gulp-uglify");


let mode = {
	watch: false,
};

gulp.task("build", ()=> 
	gulp.src(["src/*.js"])
	.pipe(eslint({
		"parserOptions": {
			"ecmaVersion": 6,
		},
		"env": {
			"browser": true,
		},
		"extends": "eslint:recommended",
		"globals": {
			$: true,
			WeakMap: true, Map: true, Set: true, WeakSet: true,
		},
		"rules": {
			"no-unused-vars": [ 2, {"vars": "all", "args": "none"} ],
			"comma-dangle": [ 2, "only-multiline" ],
			"dot-location": [ 2, "property"	],
			"no-extra-label": [ 2 ],
			"indent": [ 2, "tab" ],
			"brace-style": [ 2, "1tbs" ],
			"linebreak-style": [ 2, "unix" ],
			"no-eval": 2,
			"no-caller": 2,
			"no-extra-bind": 2,
			"no-extra-label": 2,
			"no-console": 0,
			"no-extra-semi": 2,
			"quotes": 0,
			"comma-spacing": [ 2, {"before": false, "after": true} ],
			"comma-style": 2,
			"no-trailing-spaces": [ 2, { "skipBlankLines": true } ],
			"no-restricted-syntax": [ 2, "WithStatement" ],
			"keyword-spacing": 2,
			"new-cap": 0,
			"no-throw-literal": 2,
			"no-useless-call": 2,
			"no-void": 2,
			"max-depth": [ 2, 5], 
			"no-unneeded-ternary": 2,
			"operator-assignment": [ 2, "always" ],
			"space-before-function-paren": [ 2, "never" ],
			"space-before-blocks": [2, { "functions": "never", "keywords": "always", classes: "never" }],
			"no-lonely-if": 0,
			"no-fallthrough": 0,
		}
	}))
	.pipe(eslint.format())
	.pipe(gulpif(!mode.watch, eslint.failAfterError()))
	.pipe(concat("jacquerie.concat.js"))
	.pipe(wrap('(function(){\n"use strict";\n<%= contents %>\n})();'))
	.pipe(uglify({})) // uglify doesn't work with ES6 features yet
	.on("error", function(err){
		let c = gutil.colors;
		gutil.log(c.red("Error: "+err.message));
		gutil.log("@ "+c.blue(err.fileName)+":"+c.blue(err.lineNumber));
		if (mode.watch) this.emit('end');
	})
	.pipe(rename("jacquerie.min.js"))
	.pipe(gulp.dest("build"))
);

gulp.task("clean", () => del("build/*"));

gulp.task("set-watch-mode", ()=>{
	mode.watch = true;
});

gulp.task("watch", ["set-watch-mode", "build"], ()=>{
	gulp.watch(["src/*.js"], ["build"]);
});

gulp.task("deploy-miaou", ["build"], ()=>
	gulp.src("build/jacquerie.min.js")
	.pipe(gulp.dest("../miaou/static"))
	.pipe(gulp.dest("../miaou/src/rsc"))
);

gulp.task("watch-miaou", ["set-watch-mode", "build", "deploy-miaou"], ()=>{
	gulp.watch(["src/*.js"], ["deploy-miaou"]);
});

gulp.task("default", ["build"]);
