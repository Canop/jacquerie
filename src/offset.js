
// Contrary to jQuery's offset function, this one doesn't
// allow setting a position (use css for that)
$.fn.offset = function(){
	if (!this.length) return undefined;
	var rect = this[0].getBoundingClientRect();
	return {
		top: rect.top + document.body.scrollTop,
		left: rect.left + document.body.scrollLeft
	}
}
