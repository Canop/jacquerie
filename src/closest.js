
$.fn.closest = function(s){
	var 	set = new Set,
		arr = [];
	for (var i=0; i<this.length; i++) {
		var	found = false,
			e = this[i];
		while (e) {
			if (e.matches(s)) {
				found = true;
				break;
			}
			e = e.parentElement;
		}
		if (!found || set.has(e)) continue;
		set.add(e);
		arr.push(e);
	}
	return $(arr);
}
