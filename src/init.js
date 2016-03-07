
// differences with jQuery:
// $() is the same as $(document.body)

// $ constructor
$.fn.init = function(elements){
	if (!elements) {
		elements = [document.body];
	} else if (typeof elements === "string") {
		if (/^<[\S\s]+>$/.test(elements)) {
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
	}
	var length = this.length = elements.length;
	for (var i=0; i<length; i++) {
		this[i] = elements[i];
	}
}
$.fn.init.prototype = $.fn;
