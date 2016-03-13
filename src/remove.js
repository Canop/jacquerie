
// as we use a weak map for data, we don't need to clean anything when removing elements.
// So there's no difference between detach and remove.
$.fn.remove = $.fn.detach = function(){
	for (var i=0; i<this.length; i++) this[i].remove();
	return this;
}
