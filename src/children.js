
$.fn.children = function(s){
	return $([].concat.apply([], this.map(function(e){
		var arr = e.children();
		if (s) arr = [].filter.call(arr, function(c){
			return c.matches(s);
		});
		return arr;
	})));
}
