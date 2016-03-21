
$.fn.index = function(){
	var	i = -1;
	for (var e = this[0]; e; e=e.previousElementSibling) i++;
	return i;
}
