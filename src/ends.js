

$.fn.first = function(){
	return $(this[0]);
}

$.fn.last = function(){
	return $(this[this.length-1]);
}
