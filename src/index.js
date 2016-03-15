
$.fn.index = function(){
	var	i = -1,
		e = this[0];
	do {
		i++;
	} while ((e=e.previousElementSibling));
	return i;
}
