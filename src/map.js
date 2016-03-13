

// The result is a $ collection. This isn't really useful but
//  returning an array would break compatibility with jQuery
$.fn.map = function(fn){
	return $([].map.call(this, function(e, i){
		return fn.call(e, i, e);
	}));
}
