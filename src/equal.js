
// check if the $ collection contains exactly the passed elements
// (in the same order)
$.fn.equals = function(elements){
	if (elements.length != this.length) return false;
	for (var i=0; i<this.length; i++) {
		if (this[i] !== elements[i]) return false;
	}
	return true;
}
