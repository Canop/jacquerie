

// Argument supported types:
// - DOM element(s): they're just wrapped
// - function: it's called when the DOM is ready
// - selector: it's passed to querySelectorAll
let $ = window.$ = window.jQuary = function(arg, con){
	if (typeof arg === "function") {
		if (document.readyState !== "loading") arg();
		else document.addEventListener("DOMContentLoaded", arg);
		return;
	}
	return new $.fn.init(arg, con);
}

$.fn = $.prototype = {

	constructor: $,

	lenght: 0,

	eq: function(i){
		return $(i<this.length ? this[i] : null);
	},

	get: function(i){
		return i==+i ? this[i] : [].slice.call(this);
	},


}
