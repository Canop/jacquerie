
$.fn.hover = function(cb1, cb2){
	return this.on("mouseenter", cb1).on("mouseleave", cb2||cb1);
}
