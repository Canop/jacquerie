
$.fn.empty = function(){
	for (var i=0; i<this.length; i++) this[i].innerHTML = "";
	return this;
}
