
// $ constructor

var	notASelectorRegex = /</; // a better regex would be welcome

$.parseHTML = function(html){
	let wrapper = document.implementation.createHTMLDocument();
	wrapper.body.innerHTML = html;
	return wrapper.body.children;
}

// Current implementation choke on basic text (neither HTML nor selector)
// A solution would be to catch the exception and handle it as HTML
// but a try/catch is costly
$.fn.init = function(elements, con){
	if (typeof elements === "string" && notASelectorRegex.test(elements)) {
		elements = $.parseHTML(elements);
	} else if (elements===window) {
		elements = [window];
	} else {
		elements = $.queryAll(con || document, elements);
	}
	var length = this.length = elements.length;
	for (var i=0; i<length; i++) {
		this[i] = elements[i];
	}
}
$.fn.init.prototype = $.fn;
