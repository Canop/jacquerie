
$.fn.init = function(elements){
	console.log("instanciating a $.fn.init", elements);
	if (typeof elements === "string") {
		// we assume (for now) that it's a selector
		// TODO: handle HTML strings
		elements = document.querySelectorAll(elements);
	} else if (elements instanceof Element) {
		elements = [elements];
	} else if (Array.isArray(elements)) {
		// we assume it's an array of DOM elements
		// nothing to do here
	}
	var length = this.length = elements.length;
	for (var i=0; i<length; i++) {
		console.log("adding", i);
		this[i] = elements[i];
	}
	console.log("this.data:", this.data);
	console.log("this.get:", this.get);
}
$.fn.init.prototype = $.fn;
