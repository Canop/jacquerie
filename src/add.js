
$.fn.add = function(s){
	return $([].concat.call(this, $.queryAll(document, s)));
}

