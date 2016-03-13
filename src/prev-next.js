
$.fn.prev = function(s){
	return $(
		[].map.call(this, function(e){
			return e.previousElementSibling;
		}).filter(function(e){
			return e && (!s || e.matches(s));
		})
	);
}

$.fn.next = function(s){
	return $(
		[].map.call(this, function(e){
			return e.nextElementSibling;
		}).filter(function(e){
			return e && (!s || e.matches(s));
		})
	);
}
