
$.fn.filter = function(f){
	if (typeof f !== "function") {
		var s = f;
		f = function(e){
			return e.matches(s)
		};
	}
	return [].filter.call(this, f);
}

