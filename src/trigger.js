
$.fn.trigger = function(eventType){
	for (var i=0; i<this.length; i++) {
		this[i].dispatchEvent(new CustomEvent(eventType));
	}
	return this;
}
