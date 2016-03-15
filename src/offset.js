
$.fn.offset = function(pos){
	if (pos) {
		return this.css({top: pos.top, left: pos.left});
	}
	if (!this.length) return undefined;
	var rect = this[0].getBoundingClientRect();
	return {
		top: rect.top + document.body.scrollTop,
		left: rect.left + document.body.scrollLeft
	}
}
