
// :visible is only supported when it's the whole selector
$.fn.filter = function(f){
	var	i,
		e,
		elements = [];
	if (typeof f === "function") {
		for (i=0; i<this.length; i++) {
			e = this[i];
			if (f.call(e, i, e)) elements.push(e);
		}
	} else {
		for (i=0; i<this.length; i++) {
			e = this[i];
			if (f===":visible") {
				if (e.offsetWidth || e.offsetHeight) elements.push(e);
			} else if (e.matches(f)) elements.push(e);
		}
	}
	return $(elements);
}

