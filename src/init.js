
// $ constructor

// differences with jQuery:
// $() is the same as $(document.body)
// There's not the short-circuit optimisations for class and tags
//  because I don't think they're so frequently useful (contrary to #id)

var	idRegex = /^#([\w-]+)$/,
	htmlRegex = /^<[\S\s]+>$/;

$.fn.init = function(elements){
	if (typeof elements === "string") {
		var match = elements.match(idRegex);
		if (match) {
			match = document.getElementById(match[1]);
			elements = match ? [match] : [];
		} else if (htmlRegex.test(elements)) {
			// HTML parsing
			let wrapper = document.implementation.createHTMLDocument();
			wrapper.body.innerHTML = elements;
			elements = wrapper.body.children;
		} else {
			// argument is a selector
			elements = document.querySelectorAll(elements);
		}
	} else if (elements instanceof Node) {
		elements = [elements];
	} else if (!elements) {
		elements = [document.body];
	} // other cases: NodeList, [Node], $
	var length = this.length = elements.length;
	for (var i=0; i<length; i++) {
		this[i] = elements[i];
	}
}
$.fn.init.prototype = $.fn;
