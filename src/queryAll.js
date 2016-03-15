
var	simpleSelectorRegex = /^[\.#]?([\w-]+)$/;

// A general function similar to the standard element.querySelectorAll but
// - faster in simple cases (tag, class, id)
// - accepting nodes, $ collections, arrays
$.queryAll = function(parent, elements){
	if (typeof elements === "string") {
		var match = elements.match(simpleSelectorRegex);
		if (!match) return parent.querySelectorAll(elements);
		// trivial selector
		if (elements[0]==='.') {
			return parent.getElementsByClassName(match[1]);
		} else if (elements[0]==='#')  {
			match = parent.getElementById(match[1]);
			return match ? [match] : [];
		} else {
			return parent.getElementsByTagName(match[1]);
		}
	}
	if (elements instanceof Node) {
		elements = [elements];
	}
	if (!elements || !elements.length) return [];
	// other cases: NodeList, [Node], $, [$]
	var flat = [];
	for (var i=0; i<elements.length; i++) {
		let e = elements[i];
		if (!e) continue;
		if (e.length) { // mainly for when e is an array of $ elements
			for (var j=0; j<e.length; j++) flat.push(e[j]);
		} else {
			flat.push(e);
		}
	}
	if (parent === document) return flat;
	return flat.filter(function(e){
		e = e.parentElement;
		while (e) {
			if (e===parent) return true;
			e = e.parentElement;
		}
		return false;
	});
}
