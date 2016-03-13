
!["forEach", "reduce", "some", "every"].forEach(key=>{
	$.fn[key] = Array.prototype[key];
});

$.fn.slice = function(){
	return $(Array.prototype.slice.apply(this, arguments));
}
$.fn.sort = function(){
	return $(Array.prototype.sort.apply(this, arguments));
}
