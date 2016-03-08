
$.fn.remove = function(){
	for (var i=0; i<this.length; i++) this[i].remove();
	return this;
}
